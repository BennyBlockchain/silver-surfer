import { Container } from "react-bootstrap";
import MainNav from "../page/MainNav/MainNav";
import CourseNav from "../page/CourseNav/CourseNav";
import PageNav from "../page/PageNave/PageNav";
const Main = ({ children }) => {
  return (
    <>
      <Container fluid className="d-flex bg-light vw-100 vh-100 m-0 p-0">
        <CourseNav />
        {/* <PageNav /> */}
        <MainNav />
        <Container
          className="mt-5 p-0"
          style={{ marginLeft: "110px", marginRight: "0px" }}
          fluid
        >
          {children}
        </Container>
      </Container>
    </>
  );
};

export default Main;
