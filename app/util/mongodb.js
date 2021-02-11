import { MongoClient } from "mongodb";
import { MONGO_URI, DB_NAME } from "../config/mongo.config";
if (!MONGO_URI) {
  console.log(MONGO_URI);
  throw new Error("No MongoDB connection link provided.");
}

if (!DB_NAME) {
  throw new Error("No database name provided.");
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(DB_NAME);
  const database = DB_NAME;

  cachedClient = client;
  cachedDb = db;

  return { client, db, database };
}
