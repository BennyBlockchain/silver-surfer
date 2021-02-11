import { Modal, Button } from "react-bootstrap";
import styles from "./StoryExample.module.css";

const StoryExample = ({ courseID, professor, team, project }) => {
  return (
    <>
      <Modal show={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Collection: CoursePage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className={styles.header}>Course</h6>
          <p className={styles.paragraph}>{courseID}</p>
          <h6 className={styles.header}>Professor</h6>
          <p className={styles.paragraph}>{professor}</p>
          <h6 className={styles.header}>Team</h6>
          <p className={styles.paragraph}>{team}</p>
          <h6 className={styles.header}>Project Name</h6>
          <p className={styles.paragraph}>{project}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StoryExample;
