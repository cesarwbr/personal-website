import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { identifyBot } from "./app/api/lib/bots";
import { MARKDOWN_ROUTES } from "./content/markdown-routes";

const MARKDOWN_PATHS = new Set<string>(MARKDOWN_ROUTES);

/**
 * Turns "/about.md" into "/about", and "/index.md" into "/".
 * Returns null when the path is not a markdown request.
 */
function pageForMarkdownPath(pathname: string): string | null {
  if (!pathname.endsWith(".md")) return null;

  const withoutSuffix = pathname.slice(0, -".md".length);

  if (withoutSuffix === "" || withoutSuffix === "/index") return "/";

  return withoutSuffix;
}

/**
 * True when the client explicitly prefers markdown over HTML.
 *
 * Browsers send "text/html,...,*\/*;q=0.8" and never name text/markdown, so a
 * plain substring test cannot produce a false positive here. The q-values are
 * still compared, because a client that lists both should get what it ranked
 * higher.
 */
function prefersMarkdown(accept: string | null): boolean {
  if (!accept) return false;

  let markdownQ = -1;
  let htmlQ = -1;

  for (const part of accept.split(",")) {
    const [type, ...params] = part.trim().split(";");
    const qParam = params.find((param) => param.trim().startsWith("q="));
    const q = qParam ? Number(qParam.trim().slice(2)) : 1;

    if (Number.isNaN(q)) continue;

    const normalized = type.trim().toLowerCase();

    if (normalized === "text/markdown" || normalized === "text/x-markdown") {
      markdownQ = Math.max(markdownQ, q);
    } else if (normalized === "text/html") {
      htmlQ = Math.max(htmlQ, q);
    }
  }

  return markdownQ > 0 && markdownQ >= htmlQ;
}

function markdownUrl(request: NextRequest, page: string) {
  const suffix = page === "/" ? "" : page;

  return new URL(`/api/md${suffix}`, request.url);
}

/**
 * Records a crawler hit without delaying the response.
 *
 * The write itself lives in /api/bot-hit because the MongoDB driver cannot run
 * on the edge runtime. The console.log is the zero-configuration fallback: it
 * shows up in Vercel's runtime logs even when BOT_LOG_SECRET is unset.
 */
function logBotHit(
  request: NextRequest,
  event: NextFetchEvent,
  format: "html" | "markdown",
) {
  const userAgent = request.headers.get("user-agent");
  const bot = identifyBot(userAgent);

  if (!bot) return;

  const path = request.nextUrl.pathname;

  console.log(
    `[bot] ${bot.name} ${format} ${path} ai=${bot.isAi} ua=${JSON.stringify(
      userAgent,
    )}`,
  );

  const secret = process.env.BOT_LOG_SECRET;

  if (!secret) return;

  const write = fetch(new URL("/api/bot-hit", request.url), {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-bot-log-secret": secret,
    },
    body: JSON.stringify({
      bot: bot.name,
      isAi: bot.isAi,
      path,
      format,
      userAgent,
      referer: request.headers.get("referer") ?? undefined,
      country: request.headers.get("x-vercel-ip-country") ?? undefined,
    }),
  }).catch((error) => {
    console.error("[bot] failed to record hit", error);
  });

  // Let the response go out immediately; the write finishes in the background.
  event.waitUntil(write);
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;

  // 1. Explicit markdown URLs: /about.md
  const markdownPage = pageForMarkdownPath(pathname);

  if (markdownPage) {
    if (!MARKDOWN_PATHS.has(markdownPage)) {
      return NextResponse.next();
    }

    logBotHit(request, event, "markdown");

    return NextResponse.rewrite(markdownUrl(request, markdownPage));
  }

  // 2. Content negotiation on the HTML URL: Accept: text/markdown
  if (
    MARKDOWN_PATHS.has(pathname) &&
    prefersMarkdown(request.headers.get("accept"))
  ) {
    logBotHit(request, event, "markdown");

    const response = NextResponse.rewrite(markdownUrl(request, pathname));
    response.headers.set("Vary", "Accept");

    return response;
  }

  logBotHit(request, event, "html");

  // Note: `Vary: Accept` cannot be added to page responses. Next owns that
  // header for its RSC routing and overwrites anything set here or in
  // next.config's headers(). The markdown responses do carry it, and this
  // middleware runs ahead of Vercel's CDN so the two representations resolve
  // to different cache keys there; only third-party caches downstream could
  // reuse an HTML body for a markdown request.
  return NextResponse.next();
}

export const config = {
  /**
   * Page routes only. Static assets, image optimization, and the API surface
   * are excluded so this does not add an invocation to every request — and
   * /worldcup is left alone because that zone is a separate app that should
   * instrument itself.
   */
  matcher: [
    "/((?!_next/|api/|worldcup|favicon|images/|olympic-games/|nfl-live-hub/|robots\\.txt|sitemap\\.xml|llms\\.txt|llms-full\\.txt|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?|xml|json|webmanifest)$).*)",
  ],
};
