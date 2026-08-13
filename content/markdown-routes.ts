/**
 * Which pages have a markdown twin.
 *
 * Deliberately dependency-free and separate from content/markdown.ts: the
 * middleware needs this list, and it runs on the edge runtime. Importing the
 * renderer instead would drag the MongoDB driver (via the projects/articles
 * loaders) into the edge bundle, which cannot run there.
 *
 * Legal pages are absent on purpose — they are static HTML in public/, and
 * machine-converting legal copy is worse than not offering it.
 */
export const MARKDOWN_ROUTES = [
  "/",
  "/about",
  "/uses",
  "/olympic-games-paris-2024",
] as const;

export type MarkdownRoute = (typeof MARKDOWN_ROUTES)[number];

export function hasMarkdown(path: string): path is MarkdownRoute {
  return (MARKDOWN_ROUTES as readonly string[]).includes(path);
}

/** Path of the markdown twin for a page path — "/about" becomes "/about.md". */
export function markdownPathFor(path: string) {
  return path === "/" ? "/index.md" : `${path}.md`;
}
