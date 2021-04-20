import { Card } from "react-bootstrap";

const CourseInfo = ({ title, about, course_id }) => {
  return (
    <Card className="bg-light">
      <Card.Header>
        <Card.Title style={{ fontSize: "2rem" }}>
          {title}
          <p className="mt-2 text-muted m-0" style={{ fontSize: "1rem" }}>
            {course_id}
          </p>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <p>{about}</p>
      </Card.Body>
    </Card>
  );
};

export default CourseInfo;
