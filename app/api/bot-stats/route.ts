import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../config/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Aggregates the crawler log written by /api/bot-hit.
 *
 * This is the "check your server logs" view: which crawlers came, what they
 * asked for, and whether they took the HTML or the markdown. Vercel Analytics
 * cannot answer any of that — it is a client-side beacon and crawlers never
 * execute it.
 *
 * GET /api/bot-stats?token=...&days=30
 */
export async function GET(request: NextRequest) {
  const token = process.env.BOT_STATS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "stats not configured" },
      { status: 503 },
    );
  }

  if (request.nextUrl.searchParams.get("token") !== token) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const days = Math.min(
    Math.max(Number(request.nextUrl.searchParams.get("days") ?? 30), 1),
    365,
  );
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("bot_hits");
    const match = { ts: { $gte: since } };

    const [byBot, byPath, byFormat, total] = await Promise.all([
      collection
        .aggregate([
          { $match: match },
          {
            $group: {
              _id: "$bot",
              hits: { $sum: 1 },
              isAi: { $first: "$isAi" },
              lastSeen: { $max: "$ts" },
            },
          },
          { $sort: { hits: -1 } },
        ])
        .toArray(),
      collection
        .aggregate([
          { $match: match },
          { $group: { _id: "$path", hits: { $sum: 1 } } },
          { $sort: { hits: -1 } },
          { $limit: 25 },
        ])
        .toArray(),
      collection
        .aggregate([
          { $match: match },
          { $group: { _id: "$format", hits: { $sum: 1 } } },
          { $sort: { hits: -1 } },
        ])
        .toArray(),
      collection.countDocuments(match),
    ]);

    return NextResponse.json({
      since: since.toISOString(),
      days,
      total,
      byBot: byBot.map((row) => ({
        bot: row._id,
        hits: row.hits,
        isAi: row.isAi,
        lastSeen: row.lastSeen,
      })),
      byPath: byPath.map((row) => ({ path: row._id, hits: row.hits })),
      byFormat: byFormat.map((row) => ({ format: row._id, hits: row.hits })),
    });
  } catch (error) {
    console.error("[bot-stats] query failed", error);

    return NextResponse.json({ error: "query failed" }, { status: 500 });
  }
}
