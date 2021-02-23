import { Container, Button } from "react-bootstrap";

const CourseNav = () => {
  return (
    <>
      <Container
        fluid
        className="vh-100 m-0 px-0 bg-secondary d-flex flex-column align-items-center"
        style={{ width: 80 + "px", paddingTop: 50 + "px" }}
      >
        <Button
        className="rounded-circle my-2 bg-info"
        style={{ width: "60px", height: "60px" }}
      >
          120
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "60px", height: "60px" }}
        >
          220
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "60px", height: "60px" }}
        >
          310
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "60px", height: "60px" }}
        >
          320
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "60px", height: "60px" }}
        >
          399
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "60px", height: "60px" }}
        >
          492
        </Button>
        <Button
          className="rounded-circle my-2 bg-info"
          style={{ width: "60px", height: "60px" }}
        >
          360
        </Button>
      </Container>
    </>
  );
};

export default CourseNav;
