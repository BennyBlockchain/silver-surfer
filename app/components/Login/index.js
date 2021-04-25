import { signIn } from "next-auth/client"; // Signin function for next-auth
import Head from "next/head";
import { Button, Container } from "react-bootstrap";
import MainNav from "../../layouts/page/MainNav/MainNav.jsx";

// Nothing special here. Boilerplate for Login flow.
// Eventually will be login page
export const Login = () => {
  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>
      <MainNav />
      <Container
        className="pt-5 d-flex flex-column justify-content-center"
        fluid
      >
        <h1 className="text-center pt-4">
          Please log in to edit/create courses.
        </h1>
        <br />
        <Button
          variant="primary"
          className="w-25"
          onClick={() => signIn()}
          style={{ marginLeft: "35%" }}
        >
          Login
        </Button>
      </Container>
    </>
  );
};

export default Login;
