import Main from "../../../layouts/Main/Main";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import AssignmentCard from "../../../components/AssignmentCard";
import axios from "axios";
import useSWR from "swr";
const homework = () => {
  const fetcher = (url) => axios.get(url).then((r) => r.data);
  const router = useRouter();
  const courseId = router.query.course_id;
  const [homework, setHomework] = useState();
  const { data, error } = useSWR("/api/courses", fetcher);
  if (data && !homework) {
    data.map((courseCall) => {
      if (courseCall.course_id === courseId) {
        setHomework(courseCall.homework);
      }
    });
  }
  return (
    <Main>

      <br /> 
      <br /> 
      <Container>
        <Row> 
          <Col> 
      {homework &&
        homework.map((hw) => {
          return (
            <AssignmentCard title={hw.title} dueDate={hw.date} link={hw.link} />
          );
        })}
            </Col>
          </Row>
        </Container> 
        <br /> 
    </Main>
  );
};

export default homework;

// {
//   imageName,
//     title,
//     dueMonth,
//     dueDate,
//     dueTime,
//     dayOrNight,
//     desc,
//     link,
//     linkTitle;
// }
