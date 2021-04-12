import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const CourseNav = () => {
  return (
    <>
      <Container
        fluid
        className="vh-100 m-0 px-0 bg-secondary d-flex flex-column align-items-center position-fixed"
        style={{ width: 110 + "px", paddingTop: 50 + "px" }}
      >
        <Link href="/course/CSC120">
          <Button
            className="rounded-circle my-2 bg-info"
            style={{ width: "100px", height: "80px" }}
          >
            CSC 120
          </Button>
        </Link>

        <Link href="/course/CSC220">
          <Button
            className="rounded-circle my-2 bg-info"
            style={{ width: "100px", height: "80px" }}
          >
            CSC 220
          </Button>
        </Link>

        <Link href="/course/CSC310">
          <Button
            className="rounded-circle my-2 bg-info"
            style={{ width: "100px", height: "80px" }}
          >
            CSC 310
          </Button>
        </Link>

        <Link href="/course/CSC320">
          <Button
            className="rounded-circle my-2 bg-info"
            style={{ width: "100px", height: "80px" }}
          >
            CSC 320
          </Button>
        </Link>
        <Link href="/course/CSC399">
          <Button
            className="rounded-circle my-2 bg-info"
            style={{ width: "100px", height: "80px" }}
          >
            CSC 399
          </Button>
        </Link>

        <Link href="/course/CSC492">
          <Button
            className="rounded-circle my-2 bg-info"
            style={{ width: "100px", height: "80px" }}
          >
            CSC 492
          </Button>
        </Link>

        <Link href="/course/CSC360">
          <Button
            className="rounded-circle my-2 bg-info"
            style={{ width: "100px", height: "80px" }}
          >
            CSC 360
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default CourseNav;
