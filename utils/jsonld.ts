import dayjs from "dayjs";
import { Article } from "../app/api/lib/articles";

export function getArticlesJSONLD(articles: Article[]): {
  organizationJSONLD: string;
  articlesJSONLD: string;
} {
  const personImageURL =
    "https://cdn-images-1.medium.com/fit/c/150/150/1*Asz3If7oQLXgt4cEM7UnFA.jpeg";

  const person: SchemaPerson = {
    "@type": "Person",
    email: "cesarwbr@gmail.com",
    name: "Cesar Alvarenga",
    jobTitle: "Senior Software Engineer",
    image: personImageURL,
    url: "https://cesarwilliam.com",
    sameAs: [
      "http://twitter.com/cesarwbr",
      "https://www.linkedin.com/in/cesarwalvarenga",
      "https://github.com/cesarwbr",
      "https://cesarwilliam.com",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Arena.im",
    },
  };

  const articlesFormatted: SchemaArticles = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index): SchemaArticle => {
      return {
        "@type": "TechArticle",
        accountablePerson: person,
        "accessMode": ["textual", "visual"],
        author: person,
        editor: person,
        publisher: {
          "@type": "Organization",
          email: "cesarwbr@gmail.com",
          name: "Cesar William Alvarenga",
          image: personImageURL,
          "logo": {
            "@type": "ImageObject",
            "url": personImageURL,
            "width": 150,
            "height": 150,
          },
        },
        thumbnailUrl: article.thumbnail,
        articleBody: article.description,
        description: article.description,
        url: article.guid,
        identifier: article.guid,
        name: article.title,
        datePublished: dayjs(article.pubDate).toISOString(),
        keywords: article.categories.join(","),
        headline: article.title,
        articleSection: article.categories.join(","),
        image: article.thumbnail,
        "interactionStatistic": [
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/CommentAction",
            "userInteractionCount": article.claps,
          },
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/LikeAction",
            "userInteractionCount": article.comments,
          },
        ],
        dateModified: dayjs(article.pubDate).toISOString(),
        discussionUrl: article.guid,
        mainEntityOfPage: "https://medium.com",
        position: index + 1,
      };
    }),
  };

  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://cesarwilliam.com/#person",
        "name": "Cesar William Alvarenga",
        "jobTitle": "Senior Software Engineer",
        "url": "https://cesarwilliam.com",
        "image":
          "https://cesarwilliam.com/_next/image?url=%2Fimages%2Fphoto2.jpg&w=256&q=100",
        "description":
          "Skilled Software Engineer with a strong passion for crafting high-performance and innovative web applications. Proficient in front-end technologies such as HTML, CSS, and JavaScript, with additional expertise in server-side development. Committed to writing clean, maintainable, and efficient code to deliver exceptional user experiences.",
        "sameAs": [
          "https://www.linkedin.com/in/cesarwalvarenga",
          "https://github.com/cesarwbr",
          "https://twitter.com/cesarwbr",
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Universidade Federal de Uberlândia - UFU",
        },
        "memberOf": [
          {
            "@type": "Organization",
            "name": "International Collegiate Programming Contest (ICPC)",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://cesarwilliam.com/#website",
        "url": "https://cesarwilliam.com/",
        "name": "Cesar William Alvarenga - Personal Website",
        "description":
          "Explore the portfolio and insights of Cesar William Alvarenga, a skilled Software Engineer specializing in front-end development and performance optimization. Discover his projects, blog posts, and contact information.",
        "publisher": {
          "@id": "https://cesarwilliam.com/#person",
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://cesarwilliam.com/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        "inLanguage": "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://cesarwilliam.com/#webpage",
        "url": "https://cesarwilliam.com/",
        "name": "Home - Cesar William Alvarenga",
        "description":
          "Welcome to the personal website of Cesar William Alvarenga, a talented Software Engineer. Explore his projects, blog, and learn more about his skills and experience in front-end development and performance optimization.",
        "isPartOf": {
          "@id": "https://cesarwilliam.com/#website",
        },
        "datePublished": "2017-06-20T03:02:35+00:00",
        "dateModified": "2022-07-06T19:02:48+00:00",
        "breadcrumb": {
          "@id": "https://cesarwilliam.com/#breadcrumb",
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [
              "https://cesarwilliam.com/",
            ],
          },
        ],
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url":
            "https://cesarwilliam.com/_next/image?url=%2Fimages%2Fphoto2.jpg&w=256&q=100",
          "width": 256,
          "height": 256,
          "caption": "Cesar William Alvarenga - Skilled Software Engineer",
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "xpath": [
            "/html/head/title",
            "/html/head/meta[@name='description']/@content",
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://cesarwilliam.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cesarwilliam.com/",
          },
        ],
      },
    ],
  };

  return {
    organizationJSONLD: JSON.stringify(organization),
    articlesJSONLD: JSON.stringify(articlesFormatted),
  };
}

interface SchemaPerson {
  "@context"?: string;
  "@type": string;
  email: string;
  name: string;
  jobTitle: string;
  image: string;
  url: string;
  sameAs: string[];
  worksFor: {
    "@type": string;
    name: string;
  };
}

interface SchemaArticles {
  "@context": string;
  "@type": string;
  numberOfItems: number;
  itemListElement: SchemaArticle[];
}

interface SchemaArticle {
  "@type": string;
  accountablePerson: SchemaPerson;
  author: SchemaPerson;
  editor: SchemaPerson;
  accessMode: string[];
  publisher: {
    "@type": string;
    email: string;
    name: string;
    image: string;
    logo: {
      "@type": string;
      url: string;
      width: number;
      height: number;
    };
  };
  thumbnailUrl: string;
  articleBody: string;
  url: string;
  identifier: string;
  name: string;
  interactionStatistic: [
    {
      "@type": "InteractionCounter";
      "interactionType": "https://schema.org/CommentAction";
      "userInteractionCount": number;
    },
    {
      "@type": "InteractionCounter";
      "interactionType": "https://schema.org/LikeAction";
      "userInteractionCount": number;
    },
  ];
  datePublished: string;
  keywords: string;
  headline: string;
  description: string;
  articleSection: string;
  image: string;
  dateModified: string;
  discussionUrl: string;
  mainEntityOfPage: string;
  position: number;
}
