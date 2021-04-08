import { useSession } from "next-auth/client"; // Get session from provider (ref /pages/_app.js)
import Head from "next/head";
import Login from "../../components/Login";
import MainNav from "../../components/page/MainNav/MainNav";
import {Container, Row, Col, Button} from "react-bootstrap"; 




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
      <MainNav /> 
      <Head>
        <title>Admin | Silver Surfer</title>
      </Head>
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
      <br /> 
      <br /> 
      <br />
      <center>
      <h1>Administrative Page</h1>
      </center>
      <br /> 
      <br />
      <Container> 
        <Row>
          <Col>
          <Button variant="dark">Syllabus</Button>
          </Col>
        </Row>
        <br /> 
        <Row>
          <Col>
          <Button variant="dark">Schedule Updates</Button>
          </Col>
        </Row>
        <br /> 
        <Row> 
          <Col>
          <Button variant="dark">Homework Assignment</Button>
          </Col>
        </Row>
        <br /> 
        <Row> 
          <Col>
          <Button variant="dark">Lab Assignments</Button>
          </Col>
        </Row>
        <br /> 
        <Row> 
          <Col>
          <Button variant="dark">Course Resources</Button>
          </Col>
        </Row>

      </Container>


    </>
  );
}
