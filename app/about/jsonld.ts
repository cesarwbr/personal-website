const BASE_URL = "https://cesarwilliam.com";

const jsonldJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${BASE_URL}/about`,
      url: `${BASE_URL}/about`,
      name: "About Cesar Alvarenga - Technical Lead, AI",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      datePublished: "2026-03-09T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      description:
        "Learn about Cesar Alvarenga, a Technical Lead specializing in AI products built with LLMs, agents, and real-time experiences. 18+ years of software engineering experience.",
      breadcrumb: {
        "@id": `${BASE_URL}/about/#breadcrumb`,
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [`${BASE_URL}/about`],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/about/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${BASE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${BASE_URL}/about`,
        },
      ],
    },
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
        url: `${BASE_URL}/images/no-bg-shadow.png`,
        width: 320,
        height: 400,
      },
      email: "cesarwbr@gmail.com",
      description:
        "Technical Lead, AI at Arena with 18+ years of software engineering experience. Building My Avatar (myavatar.ai) — an AI-powered platform for digital avatars with chat, voice, and video. Specializes in LLMs, AI agents, LangChain, LangGraph, MCP, Python, and TypeScript. Computer Science graduate from Universidade Federal de Uberlandia and ICPC competitor.",
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
        "Chrome Extensions",
        "Full-stack Development",
        "Software Architecture",
        "Team Leadership",
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
        url: "https://www.ufu.br",
      },
      memberOf: [
        {
          "@type": "Organization",
          name: "International Collegiate Programming Contest (ICPC)",
        },
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Technical Lead, AI",
          occupationalCategory: "15-1252.00",
          description:
            "Leading AI product development with LLMs, agents, and real-time experiences at Arena.",
        },
      ],
      mainEntityOfPage: `${BASE_URL}/about`,
    },
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
  ],
};

export const jsonld = JSON.stringify(jsonldJson);
