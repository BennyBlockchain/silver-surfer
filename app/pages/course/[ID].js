import { useRouter } from "next/router";

export default function CoursePage() {
  const router = useRouter();
  return <div>Course {router.query.id}</div>;
}
