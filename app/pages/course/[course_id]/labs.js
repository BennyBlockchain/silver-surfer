import Main from "../../../layouts/Main/Main";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import AssignmentCard from "../../../components/AssignmentCard";
const labs = () => {
  const fetcher = (url) => axios.get(url).then((r) => r.data);
  const router = useRouter();
  const courseId = router.query.course_id;
  const [labs, setLabs] = useState();
  const { data, error } = useSWR("/api/courses", fetcher);
  if (data && !labs) {
    data.map((courseCall) => {
      if (courseCall.course_number === courseId) {
        setLabs(courseCall.labs);
      }
    });
  }
  if (labs) console.log(labs);
  return (
    <Main>
      <Container>
        <br /> 
        <center> 
        <h2>Labs</h2>
        </center>
        <br /> 

        <div className="row row-cols-1 row-cols-sm-3">
        {labs &&
          labs.map((lab, index) => {
            return (
              <AssignmentCard
                key={index}
                title={lab.title}
                desc={lab.description}
                link={lab.link}
              />
            );
          })}
          </div>
      </Container>
    </Main>
  );
};

export default labs;
