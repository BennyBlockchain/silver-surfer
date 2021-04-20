import { useSession } from "next-auth/client"; // Get session from provider (ref /pages/_app.js)
import Head from "next/head";
import Login from "../../components/Login";
import MainNav from "../../layouts/page/MainNav/MainNav";
import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useState } from "react";

/**
 * * If user is not signed in, return the login page.
 * * If user IS signed in, return the admin page.
 */

export default function admin() {
  // Hook for getting session info
  const [session, loading] = useSession();
  const [fileUploadActive, setFileUploadActive] = useState(false);
  const [scheduleChangeActive, setScheduleChangeActive] = useState(false);
  const [homeworkChangeActive, setHomeworkChangeActive] = useState(false);
  const [labChangeActive, setLabChangeActive] = useState(false);
  const [resourceChangeActive, setResourceChangeActive] = useState(false);

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
            <Button variant="dark" onClick={() => setFileUploadActive(true)}>
              Syllabus
            </Button>
          </Col>
          <Col>
            {fileUploadActive && <input type="file" />}
            <br />
            <br />
            {scheduleChangeActive && (
              <form>
                <label>Title:</label>
                <input type="text"></input>
                <br />
                <label>Date:</label>
                <input type="text"></input>
                <br />
                <label>Description:</label>
                <input type="textarea"></input>
              </form>
            )}
            <br />
            {homeworkChangeActive && (
              <form>
                <label>Title:</label>
                <input type="text"></input>
                <br />
                <label>Date:</label>
                <input type="text"></input>
                <br />
                <label>Description:</label>
                <input type="textarea"></input>
              </form>
            )}
            <br />
            {labChangeActive && (
              <form>
                <label>Title:</label>
                <input type="text"></input>
                <br />
                <label>Date:</label>
                <input type="text"></input>
                <br />
                <label>Description:</label>
                <input type="textarea"></input>
              </form>
            )}
            <br />
            {resourceChangeActive && (
              <form>
                <label>Title:</label>
                <input type="text"></input>
                <br />
                <label>Date:</label>
                <input type="text"></input>
                <br />
                <label>Description:</label>
                <input type="textarea"></input>
                <br />
                <label>Links:</label>
                <input type="text"></input>
              </form>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <Button
              variant="dark"
              onClick={() => setScheduleChangeActive(true)}
            >
              Schedule Updates
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button
              variant="dark"
              onClick={() => setHomeworkChangeActive(true)}
            >
              Homework Assignment
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button variant="dark" onClick={() => setLabChangeActive(true)}>
              Lab Assignments
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Button
              variant="dark"
              onClick={() => setResourceChangeActive(true)}
            >
              Course Resources
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
