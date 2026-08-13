import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../config/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Keep 90 days of hits; the TTL index does the pruning. */
const RETENTION_SECONDS = 60 * 60 * 24 * 90;

let indexesReady = false;

async function ensureIndexes(
  collection: Awaited<ReturnType<typeof getCollection>>,
) {
  if (indexesReady) return;

  await collection.createIndex(
    { ts: 1 },
    { expireAfterSeconds: RETENTION_SECONDS },
  );
  await collection.createIndex({ bot: 1, ts: -1 });
  indexesReady = true;
}

async function getCollection() {
  const { db } = await connectToDatabase();

  return db.collection("bot_hits");
}

export type BotHit = {
  ts: Date;
  bot: string;
  isAi: boolean;
  path: string;
  /** "html" | "markdown" — which representation the crawler actually got. */
  format: string;
  userAgent: string;
  referer?: string;
  country?: string;
};

/**
 * Records one crawler request.
 *
 * Called by middleware in the background rather than written there directly:
 * middleware runs on the edge runtime, where the MongoDB driver cannot run.
 * The shared secret keeps this from being a public write endpoint — without
 * it, anyone could forge traffic into the dataset.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.BOT_LOG_SECRET;

  if (!secret) {
    return NextResponse.json(
      { error: "logging not configured" },
      { status: 503 },
    );
  }

  if (request.headers.get("x-bot-log-secret") !== secret) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let hit: Partial<BotHit>;

  try {
    hit = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  if (!hit.bot || !hit.path) {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  try {
    const collection = await getCollection();
    await ensureIndexes(collection);

    await collection.insertOne({
      ts: new Date(),
      bot: hit.bot,
      isAi: Boolean(hit.isAi),
      path: hit.path,
      format: hit.format ?? "html",
      userAgent: hit.userAgent ?? "",
      referer: hit.referer,
      country: hit.country,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Never let instrumentation break a page request.
    console.error("[bot-hit] insert failed", error);

    return NextResponse.json({ error: "insert failed" }, { status: 500 });
  }
}
