import Head from "next/head";
import Main from "../layouts/Main/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Silver Surfer</title>
      </Head>
      <Main> 
      <br/> 
      <center>
      <h2>Mount Union Department of Computer Science</h2> 
      </center>
      <br /> 
      <br /> 
      <br />
      <h3>Announcements</h3>
      <br /> 
      <h5>Department looking for new faculty member</h5>
      
      Our department is looking for a new faculty member for the 2021-2022 academic school year. All students in the department are 
      welcome to sit in on 3 presentations and provide their feedback. If you would like to participate in the virutal presentations
      please email Dr. Cindric. 
      <br /> 
      <br /> 
      <h5>Department Tutoring</h5>

      Dr. Weber and some other students have created a virtual tutoring opportunity for anyone in the department
      who needs assistance. All of this will be done over discord to encourage social distancing 
      measures. If you would like to participate please contact Dr. Weber. 


      </Main>


    </>
  );
}
