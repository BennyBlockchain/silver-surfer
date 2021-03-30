import {useRouter} from "next/router"; 
import FacultyCard from "../components/FacultyCard/index"
import Main from "../layouts/Main/Main";
import {Container, Row, Col} from "react-bootstrap"; 
import Cindric from "../professor_images/cindricbb.jpg"; 
import Kirchmeyer from "../professor_images/kirchmjf.jpg"; 
import Huibregtse from "../professor_images/huibresa.jpg"; 
import Klayder from "../professor_images/klaydejr.jpg";
import Default from "../professor_images/default.png";
import Weber from "../professor_images/weberk.jpg";


export default function FacultyPage() { 
    
    
    return (
        <div>
        <Main> 
            <br /> 
            <center> 
            <h1>Faculty Page</h1>
            </center>
            <br /> 
            <Container>
                <center> 
                <Row>
                    <Col>
                        <FacultyCard 
                            imageName = {Cindric}
                            name = {"Blase Cindric"}
                            title = {"Associate Professor | Department Chair"}
                            office = {"KHIC 048"}
                            phone = {"(330) 829-6649"}
                            email = {"cindricbb@mountunion.edu"}
                        /> 
                    </Col>
                    <Col> 
                        <FacultyCard 
                            imageName = {Kirchmeyer}
                            name = {"John Kirchmeyer"}
                            title = {"Lecturer | Professor Emeritus"}   
                            office = {"KHIC 049"}
                            phone = {"(330) 823-2855"}  
                            email = {"kirchmjf@mountunion.edu"}                   
                        />
                    </Col>
                </Row>
                <br /> 
                <Row>
                    <Col>
                        <FacultyCard 
                            imageName = {Huibregtse}
                            name = {"Sarah Huibregtse"}
                            title = {"Assistant Professor"}
                            office = {"KHIC 040"}
                            phone = {"(330) 829-6510"}
                            email = {"huibresa@mountunion.edu"}
                        />
                    </Col>
                    <Col> 
                        <FacultyCard 
                            imageName = {Klayder}
                            name = {"James Klayder"}
                            title = {"Professor Emeritus"}
                            office = {"KHIC 039"}
                            phone = {"contact via email"}
                            email = {"klaydejr@mountunion.edu"}
                        /> 
                    </Col>
                </Row>
                <br /> 
                <Row>
                    <Col>
                        <FacultyCard 
                            imageName = {Default}
                            name = {"Ken Smith"}
                            title = {"Lecturer"}
                            office = {"KHIC"}
                            phone = {"contact via email"}
                            email = {"smithken@mountunion.edu"}
                        /> 
                    </Col>
                    <Col> 
                        <FacultyCard 
                            imageName = {Weber}
                            name = {"Ken Weber"}
                            title = {"Professor Emeritus"}
                            office = {"KHIC 041"}
                            phone = {"contact via email"}
                            email = {"weberk@mountunion.edu"}
                        />
                    </Col>
                </Row> 
                <br /> 
                <br /> 
                </center>
            </Container>
        </Main>
        </div>
       
        
    )
}


