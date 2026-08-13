import { NextRequest } from "next/server";
import { hasMarkdown, renderMarkdown } from "../../../../content/markdown";

/**
 * Serves the markdown representation of a page.
 *
 * Reached two ways, both set up in middleware.ts: a request for "/about.md",
 * or a request for "/about" with `Accept: text/markdown`. Nothing links here
 * directly — the .md URL is the public interface.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> },
) {
  const { slug } = await params;
  const path = slug?.length ? `/${slug.join("/")}` : "/";

  if (!hasMarkdown(path)) {
    return new Response("Not found\n", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const body = await renderMarkdown(path);

  return new Response(body, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, must-revalidate",
      // Both entry points can produce this body, so caches must key on Accept.
      vary: "Accept",
    },
  });
}
