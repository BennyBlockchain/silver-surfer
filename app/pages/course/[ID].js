import { useRouter } from "next/router";
import useCourses from "../../hooks/useCourses.jsx";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Main from "../../layouts/Main/Main";
import CourseInfo from "../../components/CourseInfo";

const CoursePage = () => {
  const router = useRouter();
  const { ID } = router.query;
  const [course, setCourse] = useState();
  const [courses, error] = useCourses();

  if (courses && !course) {
    let course = courses.filter((course) => course.course_id === ID);
    setCourse(course[0]);
  } else if (course.course_id !== ID) {
    let course = courses.filter((course) => course.course_id === ID);
    setCourse(course[0]);
  }
  return (
    <Main>
      <Container className="my-3 w-75">
        {course && (
          <>
            <CourseInfo
              course_id={course.course_id}
              title={course.course}
              about={course.about}
            />
            <div className="d-flex flex-wrap">
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
          </>
        )}
      </Container>
    </Main>
  );
};

export default CoursePage;
