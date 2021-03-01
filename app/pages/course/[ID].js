import { useRouter } from "next/router";

const CoursePage = () => {
  const router = useRouter();
  const { ID } = router.query
  return <div> { ID } </div>;
  
}

export default CoursePage 
