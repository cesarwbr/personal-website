const baseURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cesarwilliam";

export async function getAllArticles(): Promise<Article[]> {
  const response = await fetch(baseURL);

  const payload = await response.json();

  const items = payload.items;

  return items
    .filter((item) => item.thumbnail.includes("cdn-images"))
    .map((item) => ({
      title: item.title,
      thumbnail: item.thumbnail,
      pubDate: item.pubDate,
      link: item.link,
      description: item.description,
      guid: item.guid,
      categories: item.categories,
    }));
}

export interface Article {
  title: string;
  thumbnail: string;
  pubDate: string;
  link: string;
  description: string;
  guid: string;
  categories: string[];
}
