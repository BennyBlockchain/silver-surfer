import { Container } from "react-bootstrap";
import MainNav from "../../components/page/MainNav/MainNav";
import CourseNav from "../../components/page/CourseNav/CourseNav";
const Main = () => {
  return (
    <>
      <Container fluid className="bg-light vw-100 vh-100 m-0 p-0">
        <CourseNav />
        <MainNav />
      </Container>
    </>
  );
};

export default Main;
