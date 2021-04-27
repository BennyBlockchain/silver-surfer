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
      <Container>
        <br /> 
        <center> 
        <h2>Resources</h2>
        </center> 
        <br /> 

        <div className="row row-cols-1 row-cols-sm-3">
        {resources &&
          resources.map((res, index) => {
            return (
              <AssignmentCard
                key={index}
                title={res.title}
                desc={res.descritpion}
                link={res.url}
              />
            );
          })}
          </div>
      </Container>
    </Main>
  );
};

export default resources;
