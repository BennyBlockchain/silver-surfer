import { useRouter } from "next/router";

const FacultyPage = () => {
  const router = useRouter();
  const { name } = router.query
  return <div> Professor { name } </div>;
  
}

export default FacultyPage 