import { Metadata } from "next";
import Script from "next/script";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MotionWrapper from "../components/motion-wrapper/motion-wrapper";
import { jsonld } from "./jsonld";
import styles from "../../styles/uses.module.css";

const title = "Uses - Cesar Alvarenga's Tools & Tech Stack";
const description =
  "The tools, technologies, and setup Cesar Alvarenga uses for AI product development, coding, and daily work.";

export const metadata: Metadata = {
  title,
  description,
  creator: "Cesar Alvarenga",
  publisher: "Cesar Alvarenga",
  keywords: [
    "uses",
    "tech stack",
    "developer tools",
    "Cesar Alvarenga",
    "VS Code",
    "Python",
    "TypeScript",
    "LangChain",
    "development setup",
  ],
  openGraph: {
    type: "website",
    url: "https://cesarwilliam.com/uses",
    siteName: "Cesar Alvarenga",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@cesarwbr",
    siteId: "@cesarwbr",
    creatorId: "@cesarwbr",
  },
  verification: {
    google: "mcFqnSQfhKdWTQcZXzvRaGngL-vBw4w9HBAphsVeBPo",
  },
  appleWebApp: {
    title,
    statusBarStyle: "black-translucent",
    startupImage: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://cesarwilliam.com/uses",
  },
};

const editorAndTerminal = [
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

const aiAndMl = [
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

const languagesAndFrameworks = [
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

const infrastructure = [
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

const design = [
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

const hardware = [
  {
    name: "MacBook Pro 16\"",
    badge: "M-series",
    description:
      "Primary development machine. The Apple Silicon performance makes AI model inference and Docker builds noticeably faster.",
  },
  {
    name: "Apple Studio Display",
    badge: "27\"",
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

export default function UsesPage() {
  return (
    <div className={styles.container}>
      <Script
        id="usesJSONLD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonld }}
      />
      <Header />
      <main className={styles.main}>
        {/* Page header */}
        <MotionWrapper delay={0.1}>
          <div className={styles["page-header"]}>
            <span className={styles["page-label"]}>Colophon</span>
            <h1 className={styles["page-title"]}>
              Tools & <span className={styles["page-title-accent"]}>tech stack</span>
            </h1>
            <p className={styles["page-description"]}>
              A living document of the tools, technologies, and hardware I use
              for AI product development and daily work. Inspired by{" "}
              <a
                href="https://uses.tech"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-primary)", textDecoration: "none" }}
              >
                uses.tech
              </a>
              .
            </p>
          </div>
        </MotionWrapper>

        {/* Editor & Terminal */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>Development</span>
              <h2 className={styles["section-title"]}>Editor & terminal</h2>
            </div>
            <div className={styles.items}>
              {editorAndTerminal.map((item) => (
                <div key={item.name} className={styles.item}>
                  <div className={styles["item-header"]}>
                    <h3 className={styles["item-name"]}>{item.name}</h3>
                    {item.badge && (
                      <span className={styles["item-badge"]}>{item.badge}</span>
                    )}
                  </div>
                  <p className={styles["item-description"]}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </MotionWrapper>

        {/* AI & ML */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>AI & Machine Learning</span>
              <h2 className={styles["section-title"]}>
                LLMs, agents & orchestration
              </h2>
            </div>
            <div className={styles.items}>
              {aiAndMl.map((item) => (
                <div key={item.name} className={styles.item}>
                  <h3 className={styles["item-name"]}>{item.name}</h3>
                  <p className={styles["item-description"]}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </MotionWrapper>

        {/* Languages & Frameworks */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>Stack</span>
              <h2 className={styles["section-title"]}>
                Languages & frameworks
              </h2>
            </div>
            <div className={styles["items-grid"]}>
              {languagesAndFrameworks.map((item) => (
                <div key={item.name} className={styles.item}>
                  <h3 className={styles["item-name"]}>{item.name}</h3>
                  <p className={styles["item-description"]}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </MotionWrapper>

        {/* Infrastructure */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>Infrastructure</span>
              <h2 className={styles["section-title"]}>
                Hosting, databases & DevOps
              </h2>
            </div>
            <div className={styles["items-grid"]}>
              {infrastructure.map((item) => (
                <div key={item.name} className={styles.item}>
                  <h3 className={styles["item-name"]}>{item.name}</h3>
                  <p className={styles["item-description"]}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </MotionWrapper>

        {/* Design */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>Design</span>
              <h2 className={styles["section-title"]}>UI & animation</h2>
            </div>
            <div className={styles["items-grid"]}>
              {design.map((item) => (
                <div key={item.name} className={styles.item}>
                  <h3 className={styles["item-name"]}>{item.name}</h3>
                  <p className={styles["item-description"]}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </MotionWrapper>

        {/* Hardware */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>Hardware</span>
              <h2 className={styles["section-title"]}>Desk setup</h2>
            </div>
            <div className={styles.items}>
              {hardware.map((item) => (
                <div key={item.name} className={styles.item}>
                  <div className={styles["item-header"]}>
                    <h3 className={styles["item-name"]}>{item.name}</h3>
                    {item.badge && (
                      <span className={styles["item-badge"]}>{item.badge}</span>
                    )}
                  </div>
                  <p className={styles["item-description"]}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </MotionWrapper>
      </main>
      <MotionWrapper>
        <Footer />
      </MotionWrapper>
    </div>
  );
}
