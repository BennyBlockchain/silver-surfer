import { useRouter } from "next/router";
import Link from "next/link";
import useCourses from "../../../hooks/useCourses.jsx";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Main from "../../../layouts/Main/Main";
import CourseInfo from "../../../components/CourseInfo";

const CoursePage = () => {
  const router = useRouter();
  const { course_id } = router.query;
  const [course, setCourse] = useState();
  const [courses, error] = useCourses();

  if (courses && !course) {
    let course = courses.filter((course) => course.course_id === course_id);
    setCourse(course[0]);
  }
  if (course && course_id !== course.course_id) {
    let course = courses.filter((course) => course.course_id === course_id);
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
              <Link
                href={`https://stluciadance.com/prospectus_file/sample.pdf`}
                passHref
              >
                <Button
                  size="lg"
                  target="_blank"
                  variant="outline-primary"
                  className="border-outline p-4 my-2"
                  style={{ width: "50%" }}
                >
                  Syllabus
                </Button>
              </Link>
              <Link href={`${course_id}/schedule`} passHref>
                <Button
                  size="lg"
                  variant="outline-primary"
                  className="border-outline p-4 my-2"
                  style={{ width: "50%" }}
                >
                  Schedule
                </Button>
              </Link>
              <Link href={`${course_id}/homework`} passHref>
                <Button
                  size="lg"
                  variant="outline-primary"
                  className="border-outline p-4 my-2"
                  style={{ width: "50%" }}
                >
                  Homework
                </Button>
              </Link>
              <Link href={`${course_id}/labs`} passHref>
                <Button
                  size="lg"
                  variant="outline-primary"
                  className="border-outline p-4 my-2"
                  style={{ width: "50%" }}
                >
                  Labs
                </Button>
              </Link>
              <Link href={`${course_id}/resources`} passHref>
                <Button
                  size="lg"
                  variant="outline-primary"
                  className="border-outline p-4 my-2"
                  style={{ width: "50%" }}
                >
                  Resources
                </Button>
              </Link>
            </div>
          </>
        )}
      </Container>
    </Main>
  );
};

export default CoursePage;
