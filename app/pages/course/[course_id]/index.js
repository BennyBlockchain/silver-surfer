import { useRouter } from "next/router";
import Link from "next/link";
import useCourses from "../../../hooks/useCourses.jsx";
import { useState } from "react";
import { Container, Button, Row, Col  } from "react-bootstrap";
import Main from "../../../layouts/Main/Main";
import CourseInfo from "../../../components/CourseInfo";


const CoursePage = () => {
  const router = useRouter();
  const { course_id } = router.query;
  const [course, setCourse] = useState();
  const [courses, error] = useCourses();

  if (courses && !course) {
    let course = courses.filter((course) => course.course_number === course_id);
    setCourse(course[0]);
  }
  if (course && course_id !== course.course_number) {
    let course = courses.filter((course) => course.course_number === course_id);
    setCourse(course[0]);
  }
  return (
    <Main>
      <Container className="my-3 w-75">
        {course && (
          <>
            <CourseInfo
              course_id={course.course_number}
              title={course.course_name}
              about={course.about}
            />
            <div className="d-flex flex-wrap">
            <Container> 
              <Row> 
                <Col>
                <Link
                  href={`https://stluciadance.com/prospectus_file/sample.pdf`}
                  passHref
                >
                <Button
                  size="lg"
                  target="_blank"
                  variant="primary"
                  className="border-outline p-4 my-2"
                  style={{ width: "100%" }}
                  block
                >
                  Syllabus
                </Button>
        
                </Link>
              </Col>
              </Row>

              <Row>
                <Col>
                <Link href={`${course_id}/schedule`} passHref>
                  <Button
                    size="lg"
                    variant="primary"
                    className="border-outline p-4 my-2"
                    style={{ width: "100%" }}
                  >
                    Schedule
                  </Button>
                </Link>
                </Col>

                <Col>
                <Link href={`${course_id}/homework`} passHref>
                  <Button
                    size="lg"
                    variant="primary"
                    className="border-outline p-4 my-2"
                    style={{ width: "100%" }}
                  >
                    Homework
                  </Button>
                </Link>
                </Col>
              </Row>

              <Row>
                <Col>
                <Link href={`${course_id}/labs`} passHref>
                  <Button
                    size="block"
                    variant="primary"
                    hover=""
                    className="border-outline p-4 my-2"
                    style={{ width: "100%" }}
                  >
                    Labs
                  </Button>
                </Link>
                </Col>

                <Col>
                <Link href={`${course_id}/resources`} passHref>
                  <Button
                    size="lg"
                    variant="primary"
                    className="border-outline p-4 my-2"
                    style={{ width: "100%" }}
                  >
                    Resources
                  </Button>
                </Link>
                </Col>
              </Row>
              </Container>
            </div>
          </>
        )}
      </Container>
    </Main>
  );
};

export default CoursePage;
