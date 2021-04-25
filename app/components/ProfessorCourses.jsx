import { ListGroup, Row, Container, Col, Button } from "react-bootstrap";

const ProfessorCourses = (props) => {
  const { courses } = props;
  return (
    <ListGroup>
      {courses.map((course) => {
        return (
          <ListGroup.Item>
            <Container>
              <div className="d-inline">{course.course_number}</div>
              <div className="d-inline mx-5 ">{course.course_name}</div>
              <div className="d-inline mx-5">ben</div>
              <Button className="d-inline" variant="primary">
                Update
              </Button>
              <Button className="d-inline" variant="warning">
                Delete
              </Button>
            </Container>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default ProfessorCourses;
