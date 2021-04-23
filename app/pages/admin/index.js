import { useSession } from "next-auth/client"; // Get session from provider (ref /pages/_app.js)
import Head from "next/head";
import Login from "../../components/Login";
import MainNav from "../../layouts/page/MainNav/MainNav";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import React, { useState } from "react";
import AssignmentCard from "../../components/AssignmentCard";
/**
 * * If user is not signed in, return the login page.
 * * If user IS signed in, return the admin page.
 */
export default function admin() {
  // Hook for getting session info
  const [session, loading] = useSession();
  const [active, setActive] = useState();
  const [labPreview, setLabPreview] = useState([]);
  const [resPreview, setResPreview] = useState([]);
  const [hwPreview, setHwPreview] = useState([]);
  const [schedPreview, setSchedPreview] = useState([]);

  // SSR check for session
  if (typeof window !== "undefined" && loading) return null;

  const showAdminForms = (active) => {
    switch (active) {
      case "syllabus":
        const submitSyllabus = (e) => {
          console.log(e.target.syllabus.value);
        };
        let jsxSyl = (
          <>
            <h1>Syllabus</h1>
            <Form onSubmit={submitSyllabus}>
              <Form.Group>
                <Form.File id="syllabus" label="Upload Syllabus" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        );
        return jsxSyl;
      case "homework":
        const submitHw = (e) => {
          e.preventDefault();
          const addHw = {
            title: e.target.homework.value,
            imageUrl: e.target.imageUrl.value,
            description: e.target.description.value,
            resourceUrl: e.target.resourceUrl.value,
          };
          setHwPreview([...hwPreview, addHw]);
        };
        let jsxHw = (
          <>
            <h1>Homework</h1>
            <Form onSubmit={submitHw}>
              <Form.Group controlId="homework">
                <Form.Label>Homework Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
              </Form.Group>
              <Form.Group controlId="imageUrl">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="Image URL" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Homework Description" />
              </Form.Group>
              <Form.Group controlId="resourceUrl">
                <Form.Label>Resource URL</Form.Label>
                <Form.Control type="text" placeholder="resourceUrl" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        );
        return jsxHw;
      case "resources":
        const submitRes = (e) => {
          e.preventDefault();
          const addRes = {
            title: e.target.title.value,
            descritpion: e.target.description.value,
            url: e.target.resourceUrl.value,
          };
          setResPreview([...resPreview, addRes]);
        };
        let jsxRes = (
          <>
            <h1>Resources</h1>
            <Form onSubmit={submitRes}>
              <Form.Group controlId="title">
                <Form.Label>Resource Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Homework Description" />
              </Form.Group>
              <Form.Group controlId="resourceUrl">
                <Form.Label>Resource URL</Form.Label>
                <Form.Control type="text" placeholder="resourceUrl" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        );
        return jsxRes;
      case "labs":
        const submitLab = (e) => {
          e.preventDefault();
          const addLab = {
            title: e.target.title.value,
            description: e.target.description.value,
            url: e.target.url.value,
          };
          setLabPreview([...labPreview, addLab]);
        };
        let jsxLabs = (
          <>
            <h1>Labs</h1>
            <Form onSubmit={submitLab}>
              <Form.Group controlId="title">
                <Form.Label>Lab Title</Form.Label>
                <Form.Control type="text" placeholder="Lab" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Lab Description" />
              </Form.Group>
              <Form.Group controlId="url">
                <Form.Label>Lab URL</Form.Label>
                <Form.Control type="text" placeholder="labUrl" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        );
        return jsxLabs;
      case "schedule":
        const submitSched = (e) => {
          e.preventDefault();
          const addEvent = {
            title: e.target.scheduleTitle.value,
            description: e.target.scheduleDescription.value,
            date: e.target.scheduleDate.value,
          };
          setSchedPreview([...schedPreview, addEvent]);
        };
        let jsxSched = (
          <>
            <h1>Schedule</h1>
            <Form onSubmit={submitSched}>
              <Form.Group controlId="scheduleTitle">
                <Form.Label>Schedule Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
              </Form.Group>
              <Form.Group controlId="scheduleDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Schedule Description" />
              </Form.Group>
              <Form.Group controlId="scheduleDate">
                <Form.Label>Schedule Date</Form.Label>
                <Form.Control type="text" placeholder="fix this" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        );
        return jsxSched;
      default:
        return <h3 className="mt-4">Select a page category to edit.</h3>;
    }
  };
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

      <h1 className="text-center mt-3">Administrative Page</h1>

      <Container fluid>
        <Row className="border-top">
          <Col className="vh-100 bg-secondary text-light">
            <div className="d-flex flex-row justify-content-between pt-2">
              <span className="pt-1" style={{ fontSize: "1.2rem" }}>
                Select page to edit:
              </span>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  Pages
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      setActive("syllabus");
                    }}
                  >
                    Syllabus
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setActive("homework");
                    }}
                  >
                    Homework
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setActive("resources");
                    }}
                  >
                    Resources
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setActive("labs");
                    }}
                  >
                    Labs
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setActive("schedule");
                    }}
                  >
                    Schedule
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {showAdminForms(active)}
          </Col>
          <Col>
            <h1>Added Components</h1>
            {labPreview.length > 0 && (
              <>
                <h3>Labs</h3>
                {labPreview.map((lab, index) => {
                  return (
                    <AssignmentCard
                      key={index}
                      title={lab.title}
                      desc={lab.description}
                      link={lab.link}
                    />
                  );
                })}
              </>
            )}
            {hwPreview.length > 0 && (
              <>
                <h3>Homework</h3>
                {hwPreview.map((hw, index) => {
                  return (
                    <AssignmentCard
                      key={index}
                      title={hw.title}
                      desc={hw.description}
                      link={hw.link}
                    />
                  );
                })}
              </>
            )}
            {resPreview.length > 0 && (
              <>
                <h3>Resources</h3>
                {resPreview.map((res, index) => {
                  return (
                    <AssignmentCard
                      key={index}
                      title={res.title}
                      desc={res.description}
                      link={res.link}
                    />
                  );
                })}
              </>
            )}
            {schedPreview.length > 0 && (
              <>
                <h3>Schedule</h3>
                {schedPreview.map((sched, index) => {
                  return (
                    <AssignmentCard
                      key={index}
                      title={sched.title}
                      desc={sched.description}
                      link={sched.link}
                    />
                  );
                })}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
