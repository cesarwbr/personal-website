import {
  SITE_URL,
  absoluteUrl,
  externalLinks,
  pages,
  worldCupPages,
} from "../../content/pages";
import {
  MARKDOWN_ROUTES,
  markdownPathFor,
} from "../../content/markdown-routes";

export const dynamic = "force-static";

function link(title: string, url: string, description: string) {
  return `- [${title}](${url}): ${description}`;
}

function section(heading: string, lines: string[]) {
  return [`## ${heading}`, "", ...lines].join("\n");
}

/**
 * /llms.txt — a URL index in the llms.txt format: title, summary, then link
 * lists. The point is that a crawler never has to guess a URL, so every
 * canonical page on the domain is listed here, including the World Cup zone
 * that lives in a separate app.
 *
 * The prose version lives at /llms-full.txt.
 */
export function GET() {
  const inSection = (name: (typeof pages)[number]["section"]) =>
    pages
      .filter((page) => page.section === name)
      .map((page) =>
        link(page.title, absoluteUrl(page.path), page.description),
      );

  const body = [
    "# Cesar William Alvarenga",
    "",
    "> Technical Lead, AI at Arena — building intelligent products with LLMs, AI agents, and real-time experiences. Based in San Jose, California, with 18+ years of software engineering experience.",
    "",
    "Personal site of Cesar William Alvarenga. The pages below are the complete set of canonical URLs on this domain.",
    "",
    "Every content page is also served as markdown: append `.md` to the URL (the home page is at /index.md), or request the page URL with `Accept: text/markdown`. Those URLs are listed under Markdown below.",
    "",
    section("Pages", inSection("main")),
    "",
    section("Projects", [
      ...inSection("projects"),
      link(
        "World Cup 2026",
        `${SITE_URL}/worldcup`,
        "Companion site for the World Cup 2026, served from this domain via Next.js Multi-Zones. Listed in full below.",
      ),
    ]),
    "",
    section("World Cup 2026", [
      ...worldCupPages.map((page) =>
        link(page.title, absoluteUrl(page.path), page.description),
      ),
      "",
      `Localized under /worldcup/{es,pt,fr,ar}/… — the complete set of URLs, including every locale, is at ${SITE_URL}/worldcup/sitemap.xml.`,
    ]),
    "",
    section(
      "Markdown",
      MARKDOWN_ROUTES.map((path) => {
        const page = pages.find((entry) => entry.path === path);

        return link(
          `${page?.title ?? path} (markdown)`,
          `${SITE_URL}${markdownPathFor(path)}`,
          page?.description ?? "Markdown representation of this page.",
        );
      }),
    ),
    "",
    section("Elsewhere", [
      ...externalLinks.map((item) =>
        link(item.title, item.url, item.description),
      ),
    ]),
    "",
    section("Optional", [
      link(
        "Full site brief",
        `${SITE_URL}/llms-full.txt`,
        "Longer prose version of this file: bio, current work, expertise, career timeline, and FAQ.",
      ),
      link(
        "Sitemap",
        `${SITE_URL}/sitemap.xml`,
        "XML sitemap for the main site.",
      ),
      ...inSection("legal"),
    ]),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, must-revalidate",
    },
  });
}
