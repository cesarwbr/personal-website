const baseURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cesarwilliam";

export async function getAllArticles(): Promise<Article[]> {
  const response = await fetch(baseURL);

  const payload = await response.json();

  const items = payload.items;

  return items
    .filter((item) => item.thumbnail.includes("cdn-images"))
    .map((item) => ({
      categories: item.categories,
      title: item.title,
      description: item.description,
      thumbnail: item.thumbnail,
      pubDate: item.pubDate,
      link: item.link,
    }));
}

export interface Article {
  categories: string[];
  title: string;
  description: string;
  thumbnail: string;
  pubDate: string;
  link: string;
}
