import { Container } from "react-bootstrap";
import MainNav from "../../components/page/MainNav/MainNav";
import CourseNav from "../../components/page/CourseNav/CourseNav";
import PageNav from "../../components/page/PageNave/PageNav";
const Main = ({children}) => {
  return (
    <>
      <Container fluid className="d-flex bg-light vw-100 vh-200 m-0 p-0">
        <CourseNav />
        <PageNav />
        <MainNav />
        <Container className = "mt-5 mx-5 p-0">{children}</Container>
      </Container>
    </>
  );
};

export default Main;
