// Component dependencies
import { Modal, Button } from "react-bootstrap";
import styles from "./Query.module.css";

/**
 * Query
 * * Example of Better Comments extension.
 * ! Warning comment
 * ? Question
 * TODO: Add todo comments
 * @param props Document parama
 */

const Query = ({ courseID, professor, team, project }) => {
  return (
    <>
      <Modal show={true} className={styles.modal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Silver Surfer DB Query</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">
            db: silver-mongo <br />
            collection: CoursePages
          </p>
          <h5>Course</h5>
          <p>{courseID}</p>
          <h5>Professor</h5>
          <p>{professor}</p>
          <h5>Team</h5>
          <p>{team}</p>
          <h5>Project Name</h5>
          <p>{project}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Query;
