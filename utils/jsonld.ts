import { Article } from "../lib/articles";

export function getArticlesJSONLD(articles: Article[]): string {
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

  const articlesFormatted = {
    "@context": "http://schema.org",
    "@type": "ItemList",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => {
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
        datePublished: article.pubDate,
        keywords: article.categories.join(","),
        headline: article.title,
        image: article.thumbnail,
        dateModified: article.pubDate,
        discussionUrl: article.guid,
        mainEntityOfPage: "https://medium.com",
        position: index + 1,
      };
    }),
  };

  return JSON.stringify(articlesFormatted);
}
