import { useRouter } from "next/router";

const CoursePage = () => {
  const router = useRouter();
  const { ID } = router.query
  return <div> Course { ID } </div>;
  
}

export default CoursePage 
