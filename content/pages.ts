import type { Metadata, MetadataRoute } from "next";

export const SITE_URL = "https://cesarwilliam.com";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

export type SitePage = {
  /** Path relative to the site root, with a leading slash. */
  path: string;
  /** Short human label — the link text in llms.txt. */
  title: string;
  /** One line describing the page, for llms.txt. */
  description: string;
  /**
   * ISO date for pages whose content is fixed. Omitted for pages assembled
   * from data fetched at request time, which fall back to "now".
   */
  lastModified?: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  /** Which llms.txt section the page is listed under. */
  section: "main" | "projects" | "legal";
};

/**
 * Every canonical page served from this domain, in one place.
 *
 * This is the single source for app/sitemap.ts and app/llms.txt/route.ts —
 * add a page here and both pick it up. Pages that only exist as redirects
 * (e.g. /nfl-live-hub, which 301s to nfllivehub.com) deliberately stay out:
 * listing a redirect in a sitemap or URL index sends crawlers to a dead end.
 */
export const pages: SitePage[] = [
  {
    path: "/",
    title: "Home",
    description:
      "Cesar Alvarenga — Technical Lead, AI at Arena. Current projects, recent writing, and what he is building with LLMs and agents.",
    changeFrequency: "weekly",
    priority: 1.0,
    section: "main",
  },
  {
    path: "/about",
    title: "About",
    description:
      "Full background: 18+ years of engineering, the move from front-end architecture into AI leadership, career timeline, skills, and education.",
    changeFrequency: "monthly",
    priority: 0.9,
    section: "main",
  },
  {
    path: "/uses",
    title: "Uses",
    description:
      "The hardware, editor setup, and tools Cesar uses day to day for AI product development.",
    changeFrequency: "monthly",
    priority: 0.5,
    section: "main",
  },
  {
    path: "/olympic-games-paris-2024",
    title: "Olympic Games Paris 2024 (Chrome extension)",
    description:
      "Landing page for the Olympic Games Paris 2024 Chrome extension — real-time medals, videos, highlights, and fan chat.",
    lastModified: "2024-07-26",
    changeFrequency: "monthly",
    priority: 0.6,
    section: "projects",
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description: "Privacy policy for cesarwilliam.com and its extensions.",
    lastModified: "2024-02-29",
    changeFrequency: "yearly",
    priority: 0.3,
    section: "legal",
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service",
    description: "Terms of service for cesarwilliam.com and its extensions.",
    lastModified: "2024-02-29",
    changeFrequency: "yearly",
    priority: 0.3,
    section: "legal",
  },
  {
    path: "/legal-ai-privacy-policy",
    title: "Legal AI Privacy Policy",
    description: "Privacy policy covering the Legal AI project.",
    lastModified: "2024-02-29",
    changeFrequency: "yearly",
    priority: 0.3,
    section: "legal",
  },
];

/**
 * The World Cup 2026 site is a separate Next.js app proxied in through
 * Multi-Zones (see next.config.js), so it owns its own sitemap and its own
 * localized routes. Only the English entry points are listed here — the
 * zone's sitemap at /worldcup/sitemap.xml carries all five locales.
 */
export const worldCupPages = [
  {
    path: "/worldcup",
    title: "World Cup 2026",
    description:
      "Companion site for the World Cup 2026 — live scores, AI predictions, schedule, and standings across 5 languages.",
  },
  {
    path: "/worldcup/live-scores",
    title: "Live Scores",
    description: "Real-time World Cup 2026 match scores.",
  },
  {
    path: "/worldcup/schedule",
    title: "Schedule",
    description: "Full World Cup 2026 match schedule.",
  },
  {
    path: "/worldcup/predictions",
    title: "Predictions",
    description: "AI-generated match predictions.",
  },
  {
    path: "/worldcup/standings",
    title: "Standings",
    description: "Group and tournament standings.",
  },
  {
    path: "/worldcup/stats",
    title: "Stats",
    description: "Player and team statistics.",
  },
  {
    path: "/worldcup/news",
    title: "News",
    description: "World Cup 2026 news coverage.",
  },
  {
    path: "/worldcup/blog",
    title: "Blog",
    description: "Long-form World Cup 2026 articles.",
  },
  {
    path: "/worldcup/tickets",
    title: "Tickets",
    description: "World Cup 2026 ticket information.",
  },
];

/** External destinations worth pointing a crawler at rather than letting it guess. */
export const externalLinks = [
  {
    title: "My Avatar",
    url: "https://myavatar.ai",
    description:
      "AI platform built at Arena for creating digital avatars with text, voice, and video conversations.",
  },
  {
    title: "AI Concierge",
    url: "https://arenachat.com",
    description: "AI-powered customer engagement assistant for Arena.",
  },
  {
    title: "NFL Live Hub",
    url: "https://nfllivehub.com",
    description:
      "Chrome extension for real-time NFL scores, stats, and fan chat.",
  },
  {
    title: "react-input-emoji",
    url: "https://www.npmjs.com/package/react-input-emoji",
    description:
      "Open-source React input component with an emoji picker; millions of npm downloads.",
  },
  {
    title: "GitHub",
    url: "https://github.com/cesarwbr",
    description: "Open-source repositories.",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/cesarwalvarenga",
    description: "Professional profile and work history.",
  },
  {
    title: "X",
    url: "https://x.com/cesarwbr",
    description: "Short-form posts.",
  },
  {
    title: "Medium",
    url: "https://medium.com/@cesarwilliam",
    description:
      "Long-form articles — the source of the posts listed on the home page.",
  },
  {
    title: "Dev.to",
    url: "https://dev.to/cesarwbr",
    description: "Developer-focused articles.",
  },
];

export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/**
 * Advertises /llms.txt as an alternate representation of the site.
 *
 * Every page sets its own `alternates.canonical`, and Next replaces the whole
 * `alternates` object rather than merging it, so this has to be spread into
 * each page's metadata instead of living only in the root layout.
 */
export const llmsAlternateTypes: NonNullable<Metadata["alternates"]>["types"] =
  {
    "text/plain": [
      { url: "/llms.txt", title: "llms.txt — site index for LLMs" },
    ],
  };

/**
 * Per-page alternates: the llms.txt index plus this page's markdown twin.
 * Spread into each page's `alternates`, for the same reason as above.
 */
export function alternateTypesFor(markdownPath: string) {
  return {
    ...llmsAlternateTypes,
    "text/markdown": [{ url: markdownPath, title: "Markdown version" }],
  };
}
