import Main from "../../../layouts/Main/Main";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container } from "react-bootstrap";
import AssignmentCard from "../../../components/AssignmentCard";
const resources = () => {
  const fetcher = (url) => axios.get(url).then((r) => r.data);
  const router = useRouter();
  const courseId = router.query.course_id;
  const [resources, setResources] = useState();
  const { data, error } = useSWR("/api/courses", fetcher);
  if (data && !resources) {
    data.map((courseCall) => {
      if (courseCall.course_number === courseId) {
        setResources(courseCall.resources);
      }
    });
  }
  return (
    <Main>
      <Container fluid>
        <h1>Resources</h1>
        {resources &&
          resources.map((res, index) => {
            return (
              <AssignmentCard
                key={index}
                title={res.title}
                desc={res.description}
                link={res.link}
              />
            );
          })}
      </Container>
    </Main>
  );
};

export default resources;
