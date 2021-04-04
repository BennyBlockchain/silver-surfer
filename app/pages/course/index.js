import Head from "next/head";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((resp) => resp.json());

export default function CoursePage() {
  const { data, error } = useSWR("/api/courses", fetcher);
  return (
    <>
      <Head>
        <title>Course Page</title>
      </Head>
      {data &&
        data.map((course) => (
          <Link
            href={`course/${course.course_number}`}
            key={`key-${course._id}`}
            passHref
          >
            <Button
              key={course._id}
              className="rounded-circle my-2 p-4 bg-info"
            >
              {course.course_number}
            </Button>
          </Link>
        ))}
    </>
  );
}
