import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import Login from "../../components/Login";
import MainNav from "../../components/page/MainNav/MainNav";

export default function admin() {
  const [session, loading] = useSession();
  if (typeof window !== "undefined" && loading) return null;

  return (
    <>
      <Head>
        <title>Admin | Silver Surfer</title>
      </Head>
      {!session && (
        <>
          {/* <MainNav /> */}
          <Login />
        </>
      )}
      {loading && <h1>Loading...</h1>}
      {session && (
        <>
          {/* <MainNav /> */}
          <h1>{`Session token: ${JSON.stringify(session.user)}`}</h1>
        </>
      )}
    </>
  );
}
