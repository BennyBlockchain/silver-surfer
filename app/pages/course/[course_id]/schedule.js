import Main from "../../../layouts/Main/Main";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";

const schedule = () => {
  const fetcher = (url) => axios.get(url).then((r) => r.data);
  const router = useRouter();
  const courseId = router.query.course_id;
  const [schedule, setSchedule] = useState();
  const { data, error } = useSWR("/api/courses", fetcher);
  if (data && !schedule) {
    data.map((courseCall) => {
      if (courseCall.course_id === courseId) {
        console.log("in here", courseCall);
        setSchedule(courseCall.scheudle);
      }
    });
  }
  return <Main>{schedule && <h1>{JSON.stringify(schedule[0])}</h1>}</Main>;
};

export default schedule;
