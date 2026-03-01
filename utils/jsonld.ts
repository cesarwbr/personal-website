import dayjs from "dayjs";
import { Article } from "../app/api/lib/articles";

const BASE_URL = "https://cesarwilliam.com";
const PERSON_IMAGE = `${BASE_URL}/images/no-bg-shadow.png`;

export function getArticlesJSONLD(articles: Article[]): {
  organizationJSONLD: string;
  articlesJSONLD: string;
  faqJSONLD: string;
} {
  const person = {
    "@type": "Person",
    email: "cesarwbr@gmail.com",
    name: "Cesar Alvarenga",
    jobTitle: "Technical Lead, AI",
    image: PERSON_IMAGE,
    url: BASE_URL,
    sameAs: [
      "https://x.com/cesarwbr",
      "https://www.linkedin.com/in/cesarwalvarenga",
      "https://github.com/cesarwbr",
      "https://medium.com/@cesarwilliam",
      "https://dev.to/cesarwbr",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Arena",
      url: "https://myavatar.ai",
    },
  };

  // Articles ItemList
  const articlesFormatted = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      "@type": "TechArticle",
      author: {
        "@type": "Person",
        name: "Cesar Alvarenga",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Cesar William Alvarenga",
        logo: {
          "@type": "ImageObject",
          url: PERSON_IMAGE,
          width: 320,
          height: 400,
        },
      },
      thumbnailUrl: article.thumbnail,
      description: article.description,
      url: article.guid,
      name: article.title,
      datePublished: dayjs(article.pubDate).toISOString(),
      dateModified: dayjs(article.pubDate).toISOString(),
      keywords: article.categories.join(","),
      headline: article.title,
      articleSection: article.categories.join(","),
      image: article.thumbnail,
      interactionStatistic: [
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/LikeAction",
          userInteractionCount: article.claps,
        },
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/CommentAction",
          userInteractionCount: article.comments,
        },
      ],
      mainEntityOfPage: article.guid,
      position: index + 1,
    })),
  };

  // Main @graph: ProfilePage + Person + WebSite + WebPage + BreadcrumbList
  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      // ProfilePage (GEO: strong signal for AI engines)
      {
        "@type": "ProfilePage",
        "@id": `${BASE_URL}/#profilepage`,
        url: BASE_URL,
        name: "Cesar Alvarenga - Technical Lead, AI",
        dateCreated: "2017-06-20T03:02:35+00:00",
        dateModified: new Date().toISOString(),
        mainEntity: {
          "@id": `${BASE_URL}/#person`,
        },
        inLanguage: "en-US",
      },
      // Person (enhanced with knowsAbout, skills, knowsLanguage)
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Cesar William Alvarenga",
        givenName: "Cesar",
        familyName: "Alvarenga",
        alternateName: "cesarwbr",
        jobTitle: "Technical Lead, AI",
        url: BASE_URL,
        image: {
          "@type": "ImageObject",
          url: PERSON_IMAGE,
          width: 320,
          height: 400,
        },
        email: "cesarwbr@gmail.com",
        description:
          "Technical Lead, AI at Arena, building My Avatar (myavatar.ai) — an AI-powered platform for generating video avatars with chat, voice, and video call capabilities. Specializes in LLMs, AI agents, LangChain, LangGraph, MCP servers, Python, TypeScript, and React. Formerly focused on front-end architecture and real-time web applications. Competitive programmer (ICPC) and computer science graduate from Universidade Federal de Uberlandia.",
        knowsAbout: [
          "Large Language Models (LLMs)",
          "AI Agents",
          "LangChain",
          "LangGraph",
          "Model Context Protocol (MCP)",
          "Python",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Real-time Communication",
          "Video AI",
          "Voice AI",
          "Full-stack Development",
          "Software Architecture",
        ],
        knowsLanguage: ["en", "pt-BR"],
        sameAs: [
          "https://www.linkedin.com/in/cesarwalvarenga",
          "https://github.com/cesarwbr",
          "https://x.com/cesarwbr",
          "https://medium.com/@cesarwilliam",
          "https://dev.to/cesarwbr",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Arena",
          url: "https://myavatar.ai",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Universidade Federal de Uberlandia - UFU",
        },
        memberOf: [
          {
            "@type": "Organization",
            name: "International Collegiate Programming Contest (ICPC)",
          },
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Technical Lead, AI",
          occupationalCategory: "15-1252.00",
        },
        mainEntityOfPage: `${BASE_URL}/#profilepage`,
      },
      // WebSite
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: `${BASE_URL}/`,
        name: "Cesar Alvarenga",
        alternateName: "Cesar William Alvarenga",
        description:
          "Portfolio and insights of Cesar William Alvarenga, a Technical Lead specializing in AI, LLMs, and intelligent product development.",
        publisher: {
          "@id": `${BASE_URL}/#person`,
        },
        inLanguage: "en-US",
      },
      // WebPage
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#webpage`,
        url: `${BASE_URL}/`,
        name: "Cesar Alvarenga - Technical Lead, AI | Building Intelligent Products",
        description:
          "Technical Lead, AI specializing in LLMs, AI agents, and real-time experiences. Building products with LangChain, LangGraph, MCP, Python, and TypeScript.",
        isPartOf: {
          "@id": `${BASE_URL}/#website`,
        },
        about: {
          "@id": `${BASE_URL}/#person`,
        },
        datePublished: "2017-06-20T03:02:35+00:00",
        dateModified: new Date().toISOString(),
        breadcrumb: {
          "@id": `${BASE_URL}/#breadcrumb`,
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [`${BASE_URL}/`],
          },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: PERSON_IMAGE,
          width: 320,
          height: 400,
          caption: "Cesar William Alvarenga - Technical Lead, AI",
        },
        speakable: {
          "@type": "SpeakableSpecification",
          xpath: [
            "/html/head/title",
            "/html/head/meta[@name='description']/@content",
          ],
        },
      },
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
        ],
      },
    ],
  };

  // FAQ Schema (GEO: highly extractable by AI engines)
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Cesar Alvarenga specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cesar specializes in AI product development as a Technical Lead. He works with Large Language Models (LLMs), AI agents, LangChain, LangGraph, and MCP (Model Context Protocol) servers. He builds intelligent products using Python, TypeScript, and React, with a focus on real-time AI experiences including video, voice, and chat.",
        },
      },
      {
        "@type": "Question",
        name: "What is My Avatar (myavatar.ai)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "My Avatar is an AI-powered platform built at Arena that lets you create a digital version of yourself. It enables your audience to engage with your avatar through text chat, voice calls, and video calls — all reflecting your unique personality. It is built with LangChain, LangGraph, MCP, and powered by GPT.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Cesar work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cesar works with Python, LangChain, LangGraph, MCP servers, TypeScript, React, Next.js, and Node.js. His current focus is on AI infrastructure including LLM orchestration, AI agent design, video AI generation, and real-time communication systems.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Cesar Alvarenga currently work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cesar works as a Technical Lead, AI at Arena, where he is building My Avatar (myavatar.ai) — a platform for AI-powered digital avatars with text, voice, and video capabilities.",
        },
      },
      {
        "@type": "Question",
        name: "What is Cesar Alvarenga's educational background?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cesar graduated from Universidade Federal de Uberlandia (UFU) in Brazil with a degree in Computer Science. He was also a member of the International Collegiate Programming Contest (ICPC).",
        },
      },
    ],
  };

  return {
    organizationJSONLD: JSON.stringify(organization),
    articlesJSONLD: JSON.stringify(articlesFormatted),
    faqJSONLD: JSON.stringify(faq),
  };
}
