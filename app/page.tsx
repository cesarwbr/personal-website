import { Metadata } from "next";
import Script from "next/script";
import { getAllArticles } from "./api/lib/articles";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Profile from "./components/profile/profile";
import Articles from "./components/articles/articles";
import CurrentlyPlayingSong from "./components/currently-playing/currently-playing";
import { getArticlesJSONLD } from "../utils/jsonld";
import Projects from "./components/projects/projects";
import { getAllProjects } from "./api/lib/projects";
import MotionWrapper from "./components/motion-wrapper/motion-wrapper";
import styles from "../styles/home.module.css";

async function getData() {
  const allArticles = await getAllArticles();
  const allProjects = await getAllProjects();

  return {
    allArticles,
    allProjects,
  };
}

const title = "Cesar Alvarenga - Technical Lead, AI | Building Intelligent Products";
const description =
  "Technical Lead, AI specializing in LLMs, AI agents, and real-time experiences. Building products with LangChain, LangGraph, MCP, Python, and TypeScript.";
const image = "https://cesarwilliam.com/images/no-bg-shadow.png";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Cesar Alvarenga",
  creator: "Cesar Alvarenga",
  publisher: "Cesar Alvarenga",
  keywords: [
    "technical lead",
    "AI",
    "LLM",
    "LangChain",
    "LangGraph",
    "MCP",
    "AI agents",
    "Python",
    "TypeScript",
    "React",
  ],

  openGraph: {
    images: image,
    type: "profile",
    url: "https://cesarwilliam.com/",
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
    images: [image],
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
    canonical: "https://cesarwilliam.com/",
  },
};

export default async function Home() {
  const { allArticles, allProjects } = await getData();

  const { articlesJSONLD, organizationJSONLD, faqJSONLD } =
    getArticlesJSONLD(allArticles);

  return (
    <div className={styles["container"]}>
      <Script
        id="organizationJSONLD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationJSONLD }}
      />
      <Script
        id="articlesJSONLD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articlesJSONLD }}
      />
      <Script
        id="faqJSONLD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJSONLD }}
      />

      <Header />

      <main className={styles["main"]}>
        <Profile />

        <Projects projects={allProjects} />
        <Articles allArticles={allArticles} />
      </main>

      <MotionWrapper>
        <CurrentlyPlayingSong />
      </MotionWrapper>

      <MotionWrapper>
        <Footer />
      </MotionWrapper>
    </div>
  );
}
