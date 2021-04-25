import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((r) => r.data);
const CourseNav = () => {
  const { data, error } = useSWR("/api/courses", fetcher);

  return (
    <>
      <Container
        fluid
        className="m-0 px-0 vh-100 bg-secondary d-flex flex-column align-items-center position-fixed"
        style={{
          width: 110 + "px",
          paddingTop: 50 + "px",
        }}
      >
        {data &&
          data.map((course, index) => {
            return (
              <Link href={`/course/${course.course_number}`} key={index}>
                <Button
                  className="rounded-circle bg-info mt-2"
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  {"CS" + course.course_number}
                </Button>
              </Link>
            );
          })}
      </Container>
    </>
  );
};

export default CourseNav;
