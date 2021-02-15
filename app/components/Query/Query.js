import { Card } from "react-bootstrap";
import styles from "./Query.module.css";

/**
 * Query
 * * Same modal component as /pages/index.js. Used for storybook example.
 */

const Query = ({ courseID, professor, team, project }) => {
  return (
    <>
      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Silver Surfer DB Query</Card.Title>
          <Card.Text>
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
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Query;
