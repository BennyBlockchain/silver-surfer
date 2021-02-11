import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { connectToDatabase } from "../util/mongodb";

import { Modal, Button, Row } from "react-bootstrap";

export default function Home(...props) {
  const isConnected = props[0].isConnected;
  const queryString = props[0].query;
  const queryArr = JSON.parse(queryString);
  const database = props[0].database;

  const [show, setShow] = useState(false);
  const handleModal = () => setShow(!show);

  return (
    <>
      <Head>
        <title>Silver Surfer</title>
      </Head>
      <Row className="mx-0">
        <p className={`${styles.text}`}>Database status: </p>
        {isConnected ? (
          <p
            className={`${styles.conn} ${styles.text}`}
          >{`Good | DB: ${database}`}</p>
        ) : (
          <p className={`${styles.noConn} ${styles.text}`}>Failed</p>
        )}
      </Row>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.container}`}
      >
        <Button
          variant="primary"
          size="lg"
          className={`${styles.qButton}`}
          onClick={handleModal}
        >
          Click to query Courses DB
        </Button>
        <Modal show={show} onHide={handleModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Collection: CoursePage</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {queryArr.map((query) => {
              return (
                <>
                  <h6>Course</h6>
                  <p>{query.courseID}</p>
                  <h6>Professor</h6>
                  <p>{query.professor}</p>
                  <h6>Team</h6>
                  <p>{query.team}</p>
                  <h6>Project Name</h6>
                  <p>{query.project}</p>
                </>
              );
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { client, db, database } = await connectToDatabase();
  const isConnected = await client.isConnected();
  const mongoCourse = await db
    .collection("CoursePage")
    .find({ courseID: "CS492" })
    .toArray();
  const query = JSON.stringify(mongoCourse);

  return {
    props: { isConnected, query, database },
  };
}
