import { useRouter } from "next/router";
import Main from "../../layouts/Main/Main";

const CoursePage = () => {
  const router = useRouter();
  const { ID } = router.query;
  return (
    <Main>
      <div> Course {ID} </div>
    </Main>
  );
};

export default CoursePage;
