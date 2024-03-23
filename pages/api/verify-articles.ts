import { NextApiRequest, NextApiResponse } from "next";
import {
  Article,
  fetchAllDBArticles,
  fetchLatestArticles,
  insertDBArticles,
} from "../../lib/articles";
import { rebuildWebsite } from "../../lib/vercel";

async function verifyArticlesApi(_: NextApiRequest, res: NextApiResponse) {
  const response = await verifyArticles();

  if (response.status === 204 || response.status > 400) {
    return res.status(500).json({ inserted: false });
  }

  await rebuildWebsite();

  return res.status(200).json({ inserted: true });
}

export default verifyArticlesApi;

async function verifyArticles(): Promise<{ status: number }> {
  const notInDBArticles = await getNotInDB();

  try {
    if (notInDBArticles.length) {
      await insertDBArticles(notInDBArticles);
      return { status: 200 };
    }

    return { status: 204 };
  } catch (e) {
    return { status: 500 };
  }
}

async function getNotInDB(): Promise<Omit<Article, "_id">[]> {
  const latestArticles = await fetchLatestArticles();

  const dbArticles = await fetchAllDBArticles();

  const dbGuidsSet = new Set<string>();

  dbArticles.forEach((article) => {
    dbGuidsSet.add(article.guid);
  });

  return latestArticles
    .filter((article) => !dbGuidsSet.has(article.guid))
    .map((article) => ({
      ...article,
      pubDate: new Date(article.pubDate),
      claps: 0,
      comments: 0,
    }));
}
