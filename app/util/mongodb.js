import { MongoClient } from "mongodb"; // MongoDB Node.js Driver
import { MONGO_URI, DB_NAME } from "../config/mongo.config"; // Hidden uri link for cloud MongoDB instance

/**
 * connectToDatabase() | Connect to silver-mongo utility
 * *  [0] | if no uri or db name is given, return an error.
 * *  [1] | saves the connection after first connection. Returns cached connection on following visits.
 * *  [2] | connect to the silver-mongo db cluster using the MongoDB driver library.
 * *  [3] | select the MongoDB silver-mongo
 * *  [4] | return client instance and silver-mongo database.
 *
 * @param MONGO_URI The link given by Mongo Atlas to connect to Silver Surfer databases
 * @param DB_NAME   Name of database used by Silver Surfer
 */

// [0]
if (!MONGO_URI || !DB_NAME) {
  throw new Error(
    `No MongoDB connection link (${MONGO_URI}) or db name (${DB_NAME}) provided.`
  );
}

// [1]
let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // [1]
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  // [2]

    const client = await MongoClient.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  
  
  

  // [3]
  const db = await client.db(DB_NAME);

  // [1]
  cachedClient = client;
  cachedDb = db;

  // [4]
  return { client, db };
}
