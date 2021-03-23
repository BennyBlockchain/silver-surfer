import Head from "next/head";
import { Modal, Button, Row } from "react-bootstrap";
import Main from "../layouts/Main/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Silver Surfer</title>
        
      </Head>
      <Main> 
        <br /> 
        <center> 
          <h2>Department Minors</h2>
        </center>
        <br /> 
        <br /> 
        <h3>Computer Science</h3>
        <br /> 

        <h5>Courses Required:</h5>

        CSC 120 Programming and Problem Solving I   
        <br /> 
        CSC 220 Programming and Problem Solving II 
        <br /> 
        CSC 270 Computer Organization 
        <br /> 
        and one of these following courses:
        <br /> 
        CSC 320 Algorithms and Data Structures 
        <br /> 
        CSC 370 Operating Systems 
        <br /> 
        <br /> 
        <h5>About the Computer Science minor: </h5>
        
        Computer Science is the study of the representation, storage and transformation of information. Subject areas in the discipline include
        algorithms and data structures, programming languages, computer organization, operating systems and software methodologies. This broad body 
        of knowledge is presented in a manner which encourages Computer Science minors to develop competence with coding and problem solving. 

        <br /> 
        <br /> 
        <br /> 
        <br /> 
        <h3>Database Management</h3> 
        <br /> 

        <h5>Courses Required: </h5>

        CSC 120 Programming and Problem Solving I  
        <br /> 
        CSC 220 Programming and Problem Solving II 
        <br /> 
        CSC 310 Database Theory and Implementation
        <br /> 
        CSC 410 Web Database Programming 
        <br /> 
        <br /> 
        <h5>About the Database Management minor:</h5>

        The required coursework for the Database Management Minor elevates students from a foundational level to advanced knowledge of database
        systems and the database development process. Students learn the basics of data modeling and database access languages, along with skills 
        needed to effectively capture requirements, compose data models that accurately reflect those requirements, and communicate with databases 
        from a web-hosted interface. This minor gives students a skillset that is valuable for anyone who will be involved in collection, analysis,
        and management of data in all areas, from business, to education, to psychology, to the physical sciences... 

        <br /> 
        <br /> 
        <br /> 
        <br /> 
        <h3>Computer and Network Security</h3>
        <br /> 

        <h5>Courses Required: </h5>

        CSC 120 Programming and Problem Solving I   
        <br /> 
        CSC 260 Introduction to Information Security 
        <br /> 
        CSC 360 Computer Networks 
        <br /> 
        and one of the following courses: 
        <br /> 
        CSW 363 Web App Security 
        <br /> 
        CSC 460 Network Security 
        <br /> 
        <br /> 
        <h5>About the Computer and Network Security minor: </h5>

        The Computer and Network Security Minor is designed to give students a broad understanding of information security principles, data 
        communications networks and computing systems. The required courses provide a firm background in information security, network 
        fundamentals and computer system security. 

        <br /> 
        <br /> 
        <br /> 
        <br /> 
        <h3>Web Design</h3>
        <br /> 

        <h5>Courses Required: </h5>

        CSW 150 Web Development Fundamentals 
        <br /> 
        CSW 223 Programming for Interactive Media 
        <br /> 
        CSW 423 Interaction Design 
        <br /> 
        ART 120 Design I    
        <br /> 
        <br /> 
        <h5>About the Web Design Minor: </h5>

        Offering an integrated mix of visual design and computing design, the Web Design minor equips students with proficiency in applied, 
        computer-based, and visual problem solving, enabling them to perform creative work on the web. Upon completion of this minor, students 
        will be prepared to design and develop websites as communication tools for people to use and experience. 

      </Main>

    
      

      
    </>
  );
}