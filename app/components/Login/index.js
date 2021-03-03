import { signIn } from "next-auth/client"; // Signin function for next-auth
import Head from "next/head";
import { Button } from "react-bootstrap";

// Nothing special here. Boilerplate for Login flow.
// Eventually will be login page
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
