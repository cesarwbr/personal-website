import { Metadata } from "next";
import { ReactNode } from "react";
import Image from "next/image";
import Script from "next/script";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MotionWrapper from "../components/motion-wrapper/motion-wrapper";
import { jsonld } from "./jsonld";
import styles from "../../styles/about.module.css";
import { alternateTypesFor } from "../../content/pages";
import InlineMarkdown from "../components/inline-markdown/inline-markdown";
import {
  connectLinks,
  education,
  experience,
  heroBio,
  heroTags,
  skills,
  story,
  storyTitle,
} from "../../content/about";

const title = "About Cesar Alvarenga - Technical Lead, AI";
const description =
  "Learn about Cesar Alvarenga, a Technical Lead specializing in AI products built with LLMs, agents, and real-time experiences. 18+ years of software engineering experience.";

export const metadata: Metadata = {
  title,
  description,
  creator: "Cesar Alvarenga",
  publisher: "Cesar Alvarenga",
  keywords: [
    "Cesar Alvarenga",
    "Technical Lead AI",
    "software engineer",
    "LLMs",
    "AI agents",
    "LangChain",
    "LangGraph",
    "MCP",
    "Python",
    "TypeScript",
    "React",
    "Arena",
    "My Avatar",
  ],
  openGraph: {
    type: "profile",
    url: "https://cesarwilliam.com/about",
    siteName: "Cesar Alvarenga",
    title,
    description,
    images: "/images/og-image.png",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@cesarwbr",
    images: ["/images/og-image.png"],
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
    canonical: "https://cesarwilliam.com/about",
    types: alternateTypesFor("/about.md"),
  },
};

/** Icons for the connect list, keyed by the labels in content/about.ts. */
const connectIcons: Record<string, ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Medium: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  ),
  "Dev.to": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47H11.9v2.36h1.05v1.36H11.9v2.36h1.75v1.36H10.6V8.47h3.05v1.36zm4.74 5.66c-.2.55-.44.95-.78 1.25-.42.36-.87.46-1.34.42-.67-.05-.98-.27-1.37-.78l-.27-.36v1.22h-1.3V8.47h1.3v4.53l.32-.49c.32-.5.78-.84 1.26-.93.47-.09.9.03 1.4.42.44.33.79.96.94 1.7.12.57.12 2.79 0 3.35l-.16.5zm0 0" />
      <path d="M19.56 12.75c-.12-.62-.37-.94-.75-.94-.38 0-.66.34-.77.95-.04.2-.05.71-.05 1.64 0 1.27.04 1.66.23 2.04.13.26.37.42.61.42.37 0 .62-.34.75-.94.04-.19.06-.72.06-1.57 0-1.04-.02-1.38-.08-1.6z" />
    </svg>
  ),
  Email: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Script
        id="aboutJSONLD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonld }}
      />
      <Header />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <MotionWrapper delay={0.1}>
            <div className={styles["hero-photo-wrapper"]}>
              <div className={styles["hero-photo-glow"]} />
              <div className={styles["hero-photo-container"]}>
                <Image
                  width="240"
                  height="300"
                  src="/images/no-bg-shadow.png"
                  alt="Cesar Alvarenga, Technical Lead AI"
                  className={styles["hero-photo"]}
                  quality="100"
                  priority
                />
              </div>
            </div>
          </MotionWrapper>
          <div className={styles["hero-text"]}>
            <MotionWrapper delay={0.2}>
              <span className={styles["hero-label"]}>About me</span>
            </MotionWrapper>
            <MotionWrapper delay={0.3}>
              <h1 className={styles["hero-title"]}>
                <span className={styles["hero-title-accent"]}>
                  Cesar Alvarenga
                </span>
              </h1>
            </MotionWrapper>
            <MotionWrapper delay={0.4}>
              <p className={styles["hero-bio"]}>{heroBio}</p>
            </MotionWrapper>
            <MotionWrapper delay={0.5}>
              <div className={styles["hero-tags"]}>
                {heroTags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Story */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>My Story</span>
              <h2 className={styles["section-title"]}>{storyTitle}</h2>
            </div>
            <div className={styles["story-content"]}>
              {story.map((paragraph, index) => (
                <p key={index} className={styles["story-paragraph"]}>
                  <InlineMarkdown
                    text={paragraph}
                    linkClassName={styles["story-link"]}
                  />
                </p>
              ))}
            </div>
          </section>
        </MotionWrapper>

        {/* Experience Timeline */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>Experience</span>
              <h2 className={styles["section-title"]}>Career timeline</h2>
            </div>
            <div className={styles.timeline}>
              {experience.map((job, index) => (
                <div key={index} className={styles["timeline-item"]}>
                  <div
                    className={
                      job.current
                        ? styles["timeline-dot"]
                        : styles["timeline-dot--inactive"]
                    }
                  />
                  <div className={styles["timeline-content"]}>
                    <h3 className={styles["timeline-role"]}>{job.role}</h3>
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles["timeline-company"]}
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span className={styles["timeline-company"]}>
                        {job.company}
                      </span>
                    )}
                    <span className={styles["timeline-meta"]}>
                      {job.period} &middot; {job.location}
                    </span>
                    {job.current && (
                      <span className={styles["timeline-badge"]}>Current</span>
                    )}
                    <p className={styles["timeline-description"]}>
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </MotionWrapper>

        {/* Skills */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>Skills</span>
              <h2 className={styles["section-title"]}>What I work with</h2>
            </div>
            <div className={styles["skills-grid"]}>
              {skills.map((category) => (
                <div key={category.category} className={styles["skill-card"]}>
                  <h3 className={styles["skill-card-title"]}>
                    {category.category}
                  </h3>
                  <div className={styles["skill-card-items"]}>
                    {category.items.map((item) => (
                      <span key={item} className={styles["skill-item"]}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </MotionWrapper>

        {/* Education */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>Education</span>
              <h2 className={styles["section-title"]}>Academic background</h2>
            </div>
            <div className={styles["education-card"]}>
              <h3 className={styles["education-degree"]}>{education.degree}</h3>
              <span className={styles["education-school"]}>
                {education.school}
              </span>
              <span className={styles["education-meta"]}>
                {education.location}
              </span>
              <p className={styles["education-note"]}>{education.note}</p>
            </div>
          </section>
        </MotionWrapper>

        {/* Connect */}
        <MotionWrapper delay={0.1}>
          <section className={styles.section}>
            <div className={styles["section-header"]}>
              <span className={styles["section-label"]}>Connect</span>
              <h2 className={styles["section-title"]}>Find me online</h2>
            </div>
            <div className={styles["connect-links"]}>
              {connectLinks.map((item) => {
                const external = item.url.startsWith("http");

                return (
                  <a
                    key={item.label}
                    href={item.url}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={styles["connect-link"]}
                  >
                    {connectIcons[item.label]}
                    {item.label}
                  </a>
                );
              })}
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
