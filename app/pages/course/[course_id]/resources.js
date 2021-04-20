import Main from "../../../layouts/Main/Main";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";

const resources = () => {
  const fetcher = (url) => axios.get(url).then((r) => r.data);
  const router = useRouter();
  const courseId = router.query.course_id;
  const [resources, setResources] = useState();
  const { data, error } = useSWR("/api/courses", fetcher);
  if (data && !resources) {
    data.map((courseCall) => {
      if (courseCall.course_id === courseId) {
        setResources(courseCall.resources);
      }
    });
  }
  return <Main>{resources && <h1>{JSON.stringify(resources[0])}</h1>}</Main>;
};

export default resources;
