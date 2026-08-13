export type UsesItem = {
  name: string;
  badge?: string;
  description: string;
};

/**
 * Sections of the /uses page, shared with /uses.md so the two cannot drift.
 * `sections` drives the markdown; the page renders each array directly so its
 * per-section layout stays explicit.
 */
export const editorAndTerminal: UsesItem[] = [
  {
    name: "VS Code",
    badge: "Editor",
    description:
      "My primary code editor for everything — TypeScript, Python, React, and infrastructure. I use the GitHub Dark theme and a minimal set of extensions to keep it fast.",
  },
  {
    name: "Claude Code",
    badge: "AI Assistant",
    description:
      "CLI-based AI coding assistant from Anthropic. I use it extensively for code generation, refactoring, and exploring unfamiliar codebases.",
  },
  {
    name: "Cursor",
    badge: "AI Editor",
    description:
      "AI-native code editor built on VS Code. I use it alongside VS Code for AI-heavy workflows where inline code generation and chat are valuable.",
  },
  {
    name: "iTerm2",
    badge: "Terminal",
    description:
      "Terminal emulator for macOS. Split panes, search, and profiles make it essential for juggling multiple projects and SSH sessions.",
  },
  {
    name: "Oh My Zsh",
    badge: "Shell",
    description:
      "Zsh framework with custom plugins and aliases. Autocompletions and git shortcuts save hours every week.",
  },
];

export const aiAndMl: UsesItem[] = [
  {
    name: "LangChain",
    description:
      "Framework for building LLM applications. I use it daily for chaining prompts, tool calling, and building AI agents at Arena.",
  },
  {
    name: "LangGraph",
    description:
      "Graph-based orchestration for multi-step AI agent workflows. Powers the complex conversation flows in My Avatar.",
  },
  {
    name: "MCP (Model Context Protocol)",
    description:
      "Anthropic's protocol for connecting AI models to external tools and data sources. I build and integrate MCP servers for our AI products.",
  },
  {
    name: "OpenAI API",
    description:
      "GPT-4 and related models for text generation, embeddings, and function calling in production AI products.",
  },
  {
    name: "LangSmith",
    description:
      "Observability and debugging platform for LLM applications. Essential for tracing, evaluating, and monitoring AI agent behavior in production.",
  },
];

export const languagesAndFrameworks: UsesItem[] = [
  {
    name: "Python",
    description:
      "Primary language for AI/ML work. FastAPI for APIs, LangChain/LangGraph for AI orchestration, and general scripting.",
  },
  {
    name: "TypeScript",
    description:
      "Primary language for front-end and full-stack development. Type safety is non-negotiable for production applications.",
  },
  {
    name: "React",
    description:
      "UI library for all front-end work. Combined with Next.js for server-rendered and static sites.",
  },
  {
    name: "Next.js",
    description:
      "Full-stack React framework. This site is built with Next.js 15 using the App Router, server components, and static generation.",
  },
  {
    name: "Node.js",
    description:
      "JavaScript runtime for back-end services, API routes, and build tooling.",
  },
];

export const infrastructure: UsesItem[] = [
  {
    name: "Vercel",
    description:
      "Deployment platform for Next.js applications. Zero-config deploys, edge functions, and analytics.",
  },
  {
    name: "MongoDB",
    description:
      "Document database for flexible, schema-less data storage. Used for articles, projects, and dynamic content on this site.",
  },
  {
    name: "Docker",
    description:
      "Containerization for consistent development and production environments.",
  },
  {
    name: "GitHub",
    description:
      "Version control, code review, CI/CD with GitHub Actions, and open-source project hosting.",
  },
  {
    name: "AWS",
    description:
      "Cloud infrastructure for production services — S3, Lambda, EC2, and related services.",
  },
];

export const design: UsesItem[] = [
  {
    name: "Figma",
    description:
      "Design tool for UI mockups, prototyping, and design system management.",
  },
  {
    name: "Framer Motion",
    description:
      "Animation library for React. Powers the scroll-triggered animations and transitions across this site.",
  },
];

export const hardware: UsesItem[] = [
  {
    name: 'MacBook Pro 16"',
    badge: "M-series",
    description:
      "Primary development machine. The Apple Silicon performance makes AI model inference and Docker builds noticeably faster.",
  },
  {
    name: "Apple Studio Display",
    badge: '27"',
    description:
      "External display for focused coding sessions. The 5K resolution is excellent for reading code and documentation side by side.",
  },
  {
    name: "Sony WH-1000XM5",
    badge: "Headphones",
    description:
      "Noise-canceling headphones for deep focus. Essential for open offices and remote calls.",
  },
];

export const intro =
  "A living document of the tools, technologies, and hardware I use for AI product development and daily work. Inspired by [uses.tech](https://uses.tech).";

export const sections: { title: string; items: UsesItem[] }[] = [
  { title: "Editor & terminal", items: editorAndTerminal },
  { title: "LLMs, agents & orchestration", items: aiAndMl },
  { title: "Languages & frameworks", items: languagesAndFrameworks },
  { title: "Hosting, databases & DevOps", items: infrastructure },
  { title: "UI & animation", items: design },
  { title: "Desk setup", items: hardware },
];
