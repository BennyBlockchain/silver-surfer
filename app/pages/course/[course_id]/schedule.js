import Main from "../../../layouts/Main/Main";
import axios from "axios";
import useSWR from "swr";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

const schedule = () => {
  const [schedule, setSchedule] = useState();
  const parsedEvent = [{ text: "Lab", start: "2021-4-28", end: "2021-4-29" }];
  const router = useRouter();
  const courseId = router.query.course_id;

  const fetcher = (url) => axios.get(url).then((r) => r.data);
  const { data, error } = useSWR("/api/courses", fetcher);

  if (data && !schedule) {
    data.map((courseCall) => {
      if (courseCall.course_id === courseId) {
        setSchedule(courseCall.scheudle);
      }
    });
  }
  if (error) {
    alert("Error! W/ data " + error);
  }
  if (schedule) console.log(schedule);
  return (
    <Main>
      <Container fluid>{schedule && <h1>hey</h1>}</Container>
    </Main>
  );
};

export default schedule;
// /Volumes/Mount Union/CS492/silver-surfer/calendar
