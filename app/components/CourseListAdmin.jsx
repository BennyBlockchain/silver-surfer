import { ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
const CourseListAdmin = (props) => {
  const { schedule, homework, labs, resources, id } = props;
  const removeObject = (title, type) => {
    axios
      .post(`/api/courses/remove${type}?id=${id}&title=${title}`)
      .then((res) => {
        if (res.status < 299) {
          alert("Removed object: " + title);
        } else {
          alert("Could not remove object: " + title);
        }
      })
      .catch((err) => alert("Could not remove course. Course: " + title));
  };
  return (
    <ListGroup.Item>
      <h3 className="text-secondary">Homework</h3>
      {homework.map((hw, index) => {
        return (
          <Container
            className="py-3 d-flex justify-content-between  align-items-center"
            key={index}
            fluid
          >
            <h5 className="m-0">{hw.title}</h5>
            <Button
              className=""
              variant="warning"
              onClick={() => removeObject(hw.title, "Homework")}
            >
              Delete Object
            </Button>
          </Container>
        );
      })}
      <h3 className="border-top pt-3 text-secondary">Schedules</h3>
      {schedule.map((sched, index) => {
        return (
          <Container
            className="py-3 d-flex justify-content-between  align-items-center"
            key={index}
            fluid
          >
            <h5 className="m-0">{sched.title}</h5>
            <Button
              className=""
              variant="warning"
              onClick={() => removeObject(sched.title, "Schedule")}
            >
              Delete Object
            </Button>
          </Container>
        );
      })}

      <h3 className="border-top pt-3 text-secondary">Labs</h3>
      {labs.map((lab, index) => {
        return (
          <Container
            className="py-3 d-flex justify-content-between  align-items-center"
            key={index}
            fluid
          >
            <h5 className="m-0">{lab.title}</h5>
            <Button
              className=""
              variant="warning"
              onClick={() => removeObject(lab.title, "Labs")}
            >
              Delete Object
            </Button>
          </Container>
        );
      })}
      <h3 className="border-top pt-3 text-secondary">Resources</h3>
      {resources.map((res, index) => {
        return (
          <Container
            className="py-3 d-flex justify-content-between  align-items-center"
            key={index}
            fluid
          >
            <h5 className="m-0">{res.title}</h5>
            <Button
              className=""
              variant="warning"
              onClick={() => removeObject(res.title, "Resources")}
            >
              Delete Object
            </Button>
          </Container>
        );
      })}
    </ListGroup.Item>
  );
};

export default CourseListAdmin;
