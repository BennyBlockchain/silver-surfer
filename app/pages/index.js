import Head from "next/head";
import styles from "../styles/Home.module.css";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ isConnected, query }) {
  console.log(query);
  return (
    <>
      <Head>
        <title>Silver Surfer</title>
      </Head>
      <h1>{`Connected to mongo: ${isConnected}`}</h1>
      <p>{query}</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();
  const isConnected = await client.isConnected();
  const mongoCourse = await db
    .collection("CoursePage")
    .find({ courseID: "CS492" })
    .toArray();
  const query = JSON.stringify(mongoCourse);
  console.log(JSON.stringify(mongoCourse));

  return {
    props: { isConnected, query },
  };
}
