import Main from "../../../layouts/Main/Main";
import axios from "axios";
import useSWR from "swr";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

const schedule = () => {
  const [schedule, setSchedule] = useState();
  const router = useRouter();
  const courseId = router.query.course_id;

  const fetcher = (url) => axios.get(url).then((r) => r.data);
  const { data, error } = useSWR("/api/courses", fetcher);

  if (data && !schedule) {
    data.map((courseCall) => {
      if (courseCall.course_number === courseId) {
        setSchedule(courseCall.schedule);
      }
    });
  }
  if (error) {
    alert("Error! W/ data " + error);
  }
  return (
    <Main>
      <Container fluid>
        <center> 
        <h1>Schedule</h1>
        {schedule &&
          schedule.map((sched, index) => {
            return (
              <div className="d-flex justify-content-between" key={index}>
                <h4 className="d-inline">{sched.title}</h4>
                <h4 className="d-inline">{sched.description}</h4>
                <h4 className="d-inline">{sched.date}</h4>
              <br />
              </div>
               
            );
          })}
          
          </center>
      </Container>
    </Main>
  );
};

export default schedule;
