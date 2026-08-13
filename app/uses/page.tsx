import { Metadata } from "next";
import Script from "next/script";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MotionWrapper from "../components/motion-wrapper/motion-wrapper";
import { jsonld } from "./jsonld";
import styles from "../../styles/uses.module.css";
import { alternateTypesFor } from "../../content/pages";
import InlineMarkdown from "../components/inline-markdown/inline-markdown";
import {
  aiAndMl,
  design,
  editorAndTerminal,
  hardware,
  infrastructure,
  intro,
  languagesAndFrameworks,
} from "../../content/uses";

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
    types: alternateTypesFor("/uses.md"),
  },
};

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
              Tools &{" "}
              <span className={styles["page-title-accent"]}>tech stack</span>
            </h1>
            <p className={styles["page-description"]}>
              <InlineMarkdown
                text={intro}
                linkClassName={styles["intro-link"]}
              />
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
              <span className={styles["section-label"]}>
                AI & Machine Learning
              </span>
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
