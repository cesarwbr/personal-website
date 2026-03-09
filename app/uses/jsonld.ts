const BASE_URL = "https://cesarwilliam.com";

const jsonldJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/uses`,
      url: `${BASE_URL}/uses`,
      name: "Uses - Cesar Alvarenga's Tools & Tech Stack",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      datePublished: "2026-03-09T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      description:
        "The tools, technologies, and setup Cesar Alvarenga uses for AI product development, coding, and daily work.",
      breadcrumb: {
        "@id": `${BASE_URL}/uses/#breadcrumb`,
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [`${BASE_URL}/uses`],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/uses/#breadcrumb`,
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
          name: "Uses",
          item: `${BASE_URL}/uses`,
        },
      ],
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
