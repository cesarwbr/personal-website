import dayjs from "dayjs";
import { Article } from "../lib/articles";

export function getArticlesJSONLD(articles: Article[]): {
  organizationJSONLD: string;
  articlesJSONLD: string;
} {
  const personImageURL =
    "https://cdn-images-1.medium.com/fit/c/150/150/1*Asz3If7oQLXgt4cEM7UnFA.jpeg";

  const person = {
    "@type": "Person",
    email: "cesarwbr@gmail.com",
    name: "Cesar William Alvarenga",
    familyName: "Alvarenga",
    gender: "male",
    givenName: "Cesar",
    jobTitle: "Software Engineer",
    image: personImageURL,
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

  const organization: SchemaPerson = {
    "@context": "http://schema.org",
    ...person,
    url: "https://www.cesarwilliam.com",
    sameAs: [
      "https://twitter.com/cesarwbr",
      "https://github.com/cesarwbr",
      "https://dev.to/cesarwbr",
      "www.linkedin.com/in/cesarwalvarenga",
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
  familyName: string;
  gender: string;
  givenName: string;
  jobTitle: string;
  image: string;
  url?: string;
  sameAs?: string[];
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
