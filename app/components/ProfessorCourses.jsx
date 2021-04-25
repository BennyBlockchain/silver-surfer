import axios from "axios";
import {
  ListGroup,
  Row,
  Container,
  Col,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
import CourseListAdmin from "../components/CourseListAdmin";

const ProfessorCourses = (props) => {
  const { courses } = props;
  const removeCourse = (courseId) => {
    axios
      .post("/api/courses/remove/?id=" + courseId)
      .then((res) => {
        if (res.status < 299) {
          alert("Removed course: " + courseId);
        } else {
          alert("Could not remove course: " + courseId);
        }
      })
      .catch((err) => alert("Could not remove course. Course: " + courseId));
  };

  return (
    <>
      <Accordion defaultActiveKey="">
        {courses.map((course, index) => {
          return (
            <Card key={index}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={index + 1}
                className="d-flex justify-content-between align-items-center"
              >
                <strong style={{ paddingRight: "5px" }}>
                  {course.course_number} {"  " + course.course_name}
                </strong>
                <Button
                  className="d-inline"
                  variant="danger"
                  onClick={() => removeCourse(course.course_number)}
                >
                  Delete Course
                </Button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index + 1}>
                <Card.Body className="p-0">
                  <ListGroup>
                    <CourseListAdmin
                      schedule={course.schedule}
                      homework={course.homework}
                      labs={course.labs}
                      resources={course.resources}
                      syllabus={course.syllabus}
                      id={course.course_number}
                    />
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </>
  );
};

export default ProfessorCourses;
