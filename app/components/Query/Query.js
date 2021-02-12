import { Modal, Button } from "react-bootstrap";
import styles from "./Query.module.scss";

const Query = ({ courseID, professor, team, project }) => {
  return (
    <>
      <Modal show={true} centered>
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

          <h5 className={styles.header}>Course</h5>
          <p className={styles.paragraph}>{courseID}</p>
          <h5 className={styles.header}>Professor</h5>
          <p className={styles.paragraph}>{professor}</p>
          <h5 className={styles.header}>Team</h5>
          <p className={styles.paragraph}>{team}</p>
          <h5 className={styles.header}>Project Name</h5>
          <p className={styles.paragraph}>{project}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Query;
