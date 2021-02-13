import Head from "next/head"; // Add custom tags in header on page
import { Modal, Button, Row } from "react-bootstrap"; // react-boostrap components
import styles from "../styles/Home.module.scss"; // CSS for page
import { useState } from "react"; // set/get state in props and page
import { connectToDatabase } from "../util/mongodb"; // connect to silver-mongo db

/**
 * Home Page "/"
 * * [0] | Connects to cloud MongoDB, silver-mongo.
 * * [1] | Queries the CoursePage table and returns the table as JSON.
 * * [2] | Text is displayed with connection status
 * * [3] | Button displays the modal with the silver-mongo data when clicked.
 * * [4] | Button & modal are made using https://react-bootstrap.github.io/
 *
 * ? Will the database connection persist on different pages?
 *
 * ! Issues
 *
 * TODO Create MongoDB schemas and models to properly configure database.
 * TODO Return JSON object from server side props query.
 *
 * @param props { conn, query }
 * @param conn:boolean | Check for connection to database
 * @param query:array | Database query from server response
 */

export default function Home(props) {
  const { conn, query } = props; // props from getServerSideProps()
  const queryArr = JSON.parse(query); // query: Array -> JSON

  const [show, setShow] = useState(false); // change open/close state of modal
  const handleModal = () => setShow(!show); // open/close modal logic

  return (
    <>
      <Head>
        <title>Silver Surfer</title>
      </Head>

      {/* [2] */}
      <Row className="mx-0">
        <p className={`${styles.text}`}>Database status: </p>
        {conn ? (
          <p className={`${styles.conn} ${styles.text}`}>Good</p>
        ) : (
          <p className={`${styles.noConn} ${styles.text}`}>Failed</p>
        )}
      </Row>

      {/* [3] & [4] */}
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
  // [0]
  const { client, db } = await connectToDatabase();

  // @param: conn
  const conn = await client.isConnected();

  // [1]
  const mongoCourse = await db
    .collection("CoursePage")
    .find({ courseID: "CS492" })
    .toArray();

  const query = JSON.stringify(mongoCourse); // converts array to string for returning

  return {
    props: { conn, query },
  };
}
