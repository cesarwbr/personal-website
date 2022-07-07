import dayjs from "dayjs";
import { Article } from "../lib/articles";

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
    jobTitle: "Software Engineer",
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
    "@context": "http://schema.org",
    "@type": "ItemList",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index): SchemaArticle => {
      return {
        "@type": "TechArticle",
        accountablePerson: person,
        author: person,
        editor: person,
        publisher: {
          "@type": "Organization",
          email: "cesarwbr@gmail.com",
          name: "Cesar William Alvarenga",
          image: personImageURL,
          logo: {
            "@type": "ImageObject",
            url: personImageURL,
            width: 150,
            height: 150,
          },
        },
        thumbnailUrl: article.thumbnail,
        articleBody: article.description,
        url: article.guid,
        identifier: article.guid,
        name: article.title,
        datePublished: dayjs(article.pubDate).format("MMMM DD, YYYY"),
        keywords: article.categories.join(","),
        headline: article.title,
        image: article.thumbnail,
        dateModified: dayjs(article.pubDate).format("MMMM DD, YYYY"),
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
        "@type": "WebSite",
        "@id": "https://cesarwilliam.com/#website",
        url: "https://cesarwilliam.com/",
        name: "Cesar William Alvarenga",
        description:
          "Software Engineer passionate about Performance and Innovative Ideas. Mainly focused on front-end development and fluent in HTML, CSS, and JavaScript and I have knowledge of server-side languages",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://cesarwilliam.com/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://cesarwilliam.com/#webpage",
        url: "https://cesarwilliam.com/",
        name: "home - Cesar William Alvarenga",
        isPartOf: {
          "@id": "https://cesarwilliam.com/#website",
        },
        datePublished: "2017-06-20T03:02:35+00:00",
        dateModified: "2022-07-06T19:02:48+00:00",
        breadcrumb: {
          "@id": "https://cesarwilliam.com/#breadcrumb",
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://cesarwilliam.com/"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://cesarwilliam.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
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
  datePublished: string;
  keywords: string;
  headline: string;
  image: string;
  dateModified: string;
  discussionUrl: string;
  mainEntityOfPage: string;
  position: number;
}
