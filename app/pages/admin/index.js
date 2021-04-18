import { useSession } from "next-auth/client"; // Get session from provider (ref /pages/_app.js)
import Head from "next/head";
import Login from "../../components/Login";
import LoginForm from "../../components/LoginForm";

/**
 * * If user is not signed in, return the login page.
 * * If user IS signed in, return the admin page.
 */

export default function admin() {
  // Hook for getting session info
  const [session, loading] = useSession();
  // SSR check for session
  if (typeof window !== "undefined" && loading) return null;

  return (
    <>
      <Head>
        <title>Admin | Silver Surfer</title>
      </Head>

      TODO: Put login react component here.

      <br />

      {!session && (
        <>
          <Login />
        </>
      )}
      {loading && <h1>Loading...</h1>}
      {session && (
        <>
          <h1>{`Session token: ${JSON.stringify(session.user)}`}</h1>
        </>
      )}
    </>
  );
}
