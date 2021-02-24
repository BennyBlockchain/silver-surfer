import { Container, Button } from "react-bootstrap";

const CourseNav = () => {
  return (
    <>
      <Container
        fluid
        className="vh-100 m-0 px-0 bg-secondary d-flex flex-column align-items-center"
        style={{ width: 110 + "px", paddingTop: 50 + "px" }}
      >
        <Button
        className="rounded-circle my-2 bg-info"
        style={{ width: "100px", height: "80px" }}
        >
          CSC 120
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "100px", height: "80px" }}
        >
          CSC 220
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "100px", height: "80px" }}
        >
          CSC 310
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "100px", height: "80px" }}
        >
          CSC 320
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "100px", height: "80px" }}
        >
          CSC 399
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "100px", height: "80px" }}
        >
          CSC 492
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "100px", height: "80px" }}
        >
          CSC 360
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "100px", height: "80px" }}
        >
          CSW 103
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "100px", height: "80px" }}
        >
          CSW 113
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "100px", height: "80px" }}
        >
          CSW 423
        </Button>
      </Container>
    </>
  );
};

export default CourseNav;
