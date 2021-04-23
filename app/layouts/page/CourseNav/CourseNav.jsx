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
        className="h-100 m-0 px-0 bg-secondary d-flex flex-column align-items-center position-fixed"
        style={{ width: 110 + "px", paddingTop: 50 + "px" }}
      >
        {data &&
          data.map((course) => {
            return (
              <Link href={`/course/${course.course_id}`}>
                <Button
                  className="rounded-circle my-2 bg-info"
                  style={{ width: "100px", height: "100px" }}
                >
                  {"CSC" + course.course_id}
                </Button>
              </Link>
            );
          })}
      </Container>
    </>
  );
};

export default CourseNav;
