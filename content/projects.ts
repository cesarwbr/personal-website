export type FeaturedProject = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  /** Optional custom icon (local /public path). Falls back to the URL favicon. */
  image?: string;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: "World Cup 2026",
    description:
      "Companion site for the World Cup 2026 — live scores, AI predictions, match schedules and standings, localized across 5 languages. Built with Next.js, next-intl, and Tailwind, integrated into this site via Next.js Multi-Zones.",
    url: "/worldcup",
    tags: ["Next.js", "next-intl", "Tailwind", "i18n", "Vercel"],
    image: "/images/world-cup-2026.png",
  },
  {
    name: "My Avatar",
    description:
      "AI-powered platform to create your digital avatar. Engage your audience with text, voice, and video conversations that reflect your personality. Built with LangChain, LangGraph, and MCP.",
    url: "https://myavatar.ai",
    tags: ["LangChain", "LangGraph", "MCP", "Python", "GPT"],
  },
];
