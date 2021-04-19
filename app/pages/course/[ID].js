import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Main from "../../layouts/Main/Main";
import CourseInfo from "../../components/CourseInfo";

const CoursePage = () => {
  const router = useRouter();
  const { ID } = router.query;
  const title = "Title of class";
  const about = "This is a description.";
  return (
    <Main>
      <Container className="my-3 w-75">
        <CourseInfo course_id={ID} title={title} about={about} />
        <div className="d-flex flex-wrap ">
          <Button
            size="lg"
            variant="outline-primary"
            className="border-outline p-4 my-2"
            style={{ width: "50%" }}
          >
            Syllabus
          </Button>
          <Button
            size="lg"
            variant="outline-primary"
            className="border-outline p-4 my-2"
            style={{ width: "50%" }}
          >
            Schedule
          </Button>
          <Button
            size="lg"
            variant="outline-primary"
            className="border-outline p-4 my-2"
            style={{ width: "50%" }}
          >
            Homework
          </Button>
          <Button
            size="lg"
            variant="outline-primary"
            className="border-outline p-4 my-2"
            style={{ width: "50%" }}
          >
            Labs
          </Button>
          <Button
            size="lg"
            variant="outline-primary"
            className="border-outline p-4 my-2"
            style={{ width: "50%" }}
          >
            Resources
          </Button>
        </div>
      </Container>
    </Main>
  );
};

export default CoursePage;
