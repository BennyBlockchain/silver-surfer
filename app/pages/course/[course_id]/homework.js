
import Main from "../../../layouts/Main/Main";

import { useRouter } from "next/router";
import { useState } from "react";
import { Container } from "react-bootstrap";
import AssignmentCard from "../../../components/AssignmentCard";
import axios from "axios";
import useSWR from "swr";


const homework = () => {
  // Get data
  // Perform get request function
  const fetcher = (url) => axios.get(url).then((r) => r.data);
  const router = useRouter();
  const courseId = router.query.course_id;
  // Homework info
  const [homework, setHomework] = useState();

  // Gets the courses from DB
  const { data, error } = useSWR("/api/courses", fetcher);

  // Gets the homework data and set to homework state
  if (data && !homework) {
    data.map((courseCall) => {
      if (courseCall.course_number === courseId) {
        setHomework(courseCall.homework);
      }
    });
  }



  return (
    <div>
    <Main>

      <br /> 
      <center>
      <h2>Homework Assignments</h2>
      </center>
      <br /> 
      <br /> 
   
      
      <Container>
      
      <div className="row row-cols-1 row-cols-sm-3">
 
       
      {homework &&
        homework.map((hw) => {
          return (
            
            <AssignmentCard
              title={hw.title}
              dueDate={hw.date}
              link={hw.resourceUrl}
              imageUrl={hw.imageUrl}
              
            />
            
          );
        })}
       
        </div>
        
        </Container>
       
        <br /> 
    </Main>
    </div>
  );
};

export default homework;
