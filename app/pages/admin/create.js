import { useSession } from "next-auth/client"; // Get session from provider (ref /pages/_app.js)
import Head from "next/head";
import Login from "../../components/Login";
import MainNav from "../../layouts/page/MainNav/MainNav";
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  Button,
  Modal,
} from "react-bootstrap";
import React, { useState } from "react";
import AssignmentCard from "../../components/AssignmentCard";
import axios from "axios";
/**
 * * If user is not signed in, return the login page.
 * * If user IS signed in, return the admin page.
 */
export default function create() {
  // Hook for getting session info
  const [session, loading] = useSession();
  const [confirm, setConfirm] = useState();
  const [active, setActive] = useState();
  const [labs, setlabs] = useState([]);
  const [resources, setresources] = useState([]);
  const [homework, sethomework] = useState([]);
  const [schedule, setschedule] = useState([]);
  const [create, setCreate] = useState({});
  // Syllabus
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
          sethomework([...homework, addHw]);
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
          setresources([...resources, addRes]);
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
          setlabs([...labs, addLab]);
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
          setschedule([...schedule, addEvent]);
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
        const submitCreate = (e) => {
          e.preventDefault();
          const createPage = {
            courseName: e.target.name.value,
            courseNumber: e.target.number.value,
            courseAbout: e.target.about.value,
          };
          alert("Creating course: " + createPage.courseNumber);
          setCreate(createPage);
        };
        let jsxCreate = (
          <>
            <h1>Create Course</h1>
            <Form onSubmit={submitCreate}>
              <Form.Group controlId="name">
                <Form.Label>Course Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="number">
                <Form.Label>Course Number</Form.Label>
                <Form.Control type="text" placeholder="Number" />
              </Form.Group>
              <Form.Group controlId="about">
                <Form.Label>Course Description</Form.Label>
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        );
        return jsxCreate;
    }
  };
  return (
    <>
      <MainNav />
      <Head>
        <title>Create a Course</title>
      </Head>
      {/* {!session && (
        <>
          <Login />
        </>
      )} */}
      {/* {loading && <h1>Loading...</h1>} */}
      {session && (
        <>
          <h1>{`Session token: ${JSON.stringify(session.user)}`}</h1>
        </>
      )}

      <Container className="pt-5" fluid>
        <h1 className="py-2 m-0 text-center">Administrative Page</h1>
        <Row className="border-top">
          <Col className="py-4 vh-100 bg-secondary text-light">
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
                      setActive("");
                    }}
                  >
                    Course Info
                  </Dropdown.Item>
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
          <Col className="py-4 vh-100">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h3 className="m-0">Added Components</h3>
              <Button
                className="rounded-pill py-1 px-2"
                variant="primary"
                onClick={() => setConfirm(true)}
              >
                Save
              </Button>
            </div>
            <div className="d-flex flex-column align-items-center">
              {labs.length > 0 && (
                <>
                  <h3>Labs</h3>
                  {labs.map((lab, index) => {
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
              {homework.length > 0 && (
                <>
                  <h3 className="mt-4">Homework</h3>
                  {homework.map((hw, index) => {
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
              {resources.length > 0 && (
                <>
                  <h3 className="mt-4">Resources</h3>
                  {resources.map((res, index) => {
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
              {schedule.length > 0 && (
                <>
                  <h3 className="mt-4">Schedule</h3>
                  {schedule.map((sched, index) => {
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
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={confirm} onHide={() => setConfirm(!confirm)} centered>
        <h2 className="px-3 pt-3 d-block">
          Create Course: {create.courseName}
        </h2>
        <p className="m-0 px-3 pb-3 d-block border-bottom">
          {create.courseAbout}
        </p>

        <Modal.Body>
          <h5>Number of elements to be added</h5>
          {homework && <p className="m-0">Homework: {homework.length}</p>}
          {labs && <p className="m-0">Labs: {labs.length}</p>}
          {resources && <p className="m-0">Resources: {resources.length}</p>}
          {schedule && <p className="m-0">Schedule: {schedule.length}</p>}
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              createCourse(
                { homework, labs, resources, create, schedule },
                "Cindric"
              ).then((response) => {
                if (response === true) {
                  setConfirm(false);
                  alert(`Course ${create.courseName} has been created.`);
                } else {
                  alert("There was an error in sending. Please try again.");
                }
              });
            }}
          >
            Save New Course
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const createCourse = async (data, professor) => {
  if (data.create === undefined) {
    return alert("Please provide course information before adding.");
  }
  const { courseName, courseNumber, courseAbout } = data.create;
  const saveCourse = {
    newCourse: {
      course_name: courseName,
      course_number: courseNumber,
      about: courseAbout,
      professor: professor,
      syllabus: "google.com",
      schedule: data.schedule,
      homework: data.homework,
      labs: data.labs,
      resources: data.resources,
    },
  };
  return new Promise((resolve, reject) => {
    axios.post("/api/courses/create", saveCourse).then((resp) => {
      console.log(resp.status);
      if (resp.status === 200) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  });
};
