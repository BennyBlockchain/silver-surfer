import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
const PageNav = () => {
  return (
    <>
      <Container
        className="p-0 m-0 w-25 vh-100 position-fixed"
        style={{ left: "80px" }}
      >
        <a
          className="btn btn-primary p-0 text-dark bg-transparent border-0 position-fixed"
          data-bs-toggle="collapse"
          data-bs-target="#class"
          aria-expanded="false"
          aria-controls="class"
          style={{
            marginTop: "50px",
            marginLeft: "10px",
            borderRadius: "0px",
            height: "20px",
            fontSize: "1.75rem",
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </a>
        <div
          id="class"
          className="collapse in text-secondary bg-info border-left"
          style={{ width: "250px" }}
        >
          <div
            className="container vh-100 m-0 px-0"
            style={{ paddingTop: "100px" }}
          >
            <Button
              vertical="true"
              className="w-100"
              variant="info"
              style={{ borderRadius: "0px" }}
            >
              Syllabus
            </Button>
            <Button
              vertical="true"
              className="w-100"
              variant="info"
              style={{ borderRadius: "0px" }}
            >
              Schedule
            </Button>
            <Button
              vertical="true"
              className="w-100"
              variant="info"
              style={{ borderRadius: "0px" }}
            >
              Homework
            </Button>
            <Button
              vertical="true"
              className="w-100"
              variant="info"
              style={{ borderRadius: "0px" }}
            >
              Labs
            </Button>
            <Button
              vertical="true"
              className="w-100"
              variant="info"
              style={{ borderRadius: "0px" }}
            >
              Resources
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PageNav;
