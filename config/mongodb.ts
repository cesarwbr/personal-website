import { Db, MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

let cachedClient: MongoClient = null;
let cachedDb: Db = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!uri) {
    throw new Error(
      "MONGODB_URI is not defined. Please check your .env.local file."
    );
  }

  if (!dbName) {
    throw new Error(
      "MONGODB_DB is not defined. Please check your .env.local file."
    );
  }

  const client = await MongoClient.connect(uri);

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
