import { useState } from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((r) => r.data);
const useCourses = () => {
  const [courses, setCourses] = useState(null);

  const { data, error } = useSWR("/api/courses", fetcher);
  if (data && !courses) setCourses(data);

  return [courses, error];
};

export default useCourses;
