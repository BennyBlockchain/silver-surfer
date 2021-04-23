import Main from "../../../layouts/Main/Main";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

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
  return <Main>{labs && <h1>{JSON.stringify(labs[0])}</h1>}</Main>;
};

export default labs;
