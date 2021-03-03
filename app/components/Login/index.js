import { signIn } from "next-auth/client";
import Head from "next/head";
import { Button } from "react-bootstrap";
// import Link from "next/link";

export const Login = () => {
  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>

      <Button variant="variant" onClick={() => signIn()}>
        Login
      </Button>
    </>
  );
};

export default Login;
