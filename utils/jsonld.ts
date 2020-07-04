import { Article } from "../lib/articles";

export function getArticlesJSONLD(articles: Article[]): string {
  const articlesFormatted = {
    "@context": "http://schema.org",
    "@type": "Blog",
    publisher: {
      "@type": "Person",
      email: "cesarwbr@gmail.com",
      name: "Cesar William Alvarenga",
      familyName: "Alvarenga",
      gender: "male",
      givenName: "Cesar",
      jobTitle: "Software Engineer",
      image: "https://cesarwilliam.com/images/photo.png",
    },
    blogPosts: articles.map((article) => {
      return {
        "@type": "BlogPosting",
        author: "Cesar William Alvarenga",
        publisher: {
          "@type": "Organization",
          email: "cesarwbr@gmail.com",
          name: "Cesar William Alvarenga",
          image: "https://cesarwilliam.com/images/photo.png",
          logo: {
            "@type": "ImageObject",
            url: `https://cesarwilliam.com/images/photo.png`,
            width: 150,
            height: 150,
          },
        },
        thumbnailUrl: article.thumbnail,
        description: article.description,
        url: article.link,
        identifier: article.guid,
        name: article.title,
        datePublished: article.pubDate,
        keywords: article.categories.join(","),
        headline: article.title,
        image: article.thumbnail,
        dateModified: article.pubDate,
        mainEntityOfPage: "https://medium.com",
      };
    }),
  };

  return JSON.stringify(articlesFormatted);
}
