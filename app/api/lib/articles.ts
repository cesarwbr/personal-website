import { connectToDatabase } from "../../../config/mongodb";

export async function getAllArticles(): Promise<Article[]> {
  const { db } = await connectToDatabase();
  let articlesDb = await db
    .collection("articles")
    .find({})
    .sort({ pubDate: -1 })
    .limit(8)
    .toArray();

  if (!articlesDb) {
    return [];
  }

  const articles = articlesDb.map((articleDb) => {
    return {
      ...articleDb,
      _id: articleDb._id.toString(),
      pubDate: articleDb.pubDate.toDateString(),
    } as Article;
  });

  return articles;
}

export async function fetchLatestArticles(): Promise<Omit<Article, "_id">[]> {
  const baseURL = process.env.MEDIUM_RSS;

  const response = await fetch(baseURL);
  const payload = await response.json();
  const items = payload.items as unknown as Omit<Article, "_id">[];

  if (!payload?.items) {
    return [];
  }

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
      claps: item.claps,
      comments: item.comments,
    }));
}

export async function fetchAllDBArticles(): Promise<Article[]> {
  const { db } = await connectToDatabase();
  let articlesDb = (await db
    .collection("articles")
    .find({})
    .toArray()) as unknown as Article[];

  if (!articlesDb) {
    return [];
  }

  return articlesDb.map((articleDb) => {
    return {
      ...articleDb,
      _id: articleDb._id.toString(),
    } as Article;
  });
}

export async function insertDBArticles(articles: Omit<Article, "_id">[]) {
  const { db } = await connectToDatabase();

  try {
    const result = await db.collection("articles").insertMany(articles);

    return result;
  } catch (e) {
    throw new Error("Cannot insert articles");
  }
}

export interface Article {
  _id: string;
  title: string;
  thumbnail: string;
  pubDate: string | Date;
  link: string;
  description: string;
  guid: string;
  categories: string[];
  comments: number;
  claps: number;
}
