import { Modal, Button, Row } from "react-bootstrap";
import styles from "../styles/Home.module.scss";


export default function Home(props) { 
    return (
    <>
    <head>
        <title>Silver Surfer</title>
    </head>

    <Row className="mx-0">
    <p className={`${styles.text}`}>  This is the course[ID] page.</p>
    </Row>
   
    </> 
    );
}