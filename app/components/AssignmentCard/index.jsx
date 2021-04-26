import { Card } from "react-bootstrap";
import {CardColumns} from "react-bootstrap";
import Link from "next/link";

const AssignmentCard = ({ title, desc, link, imageUrl }) => {
  return (

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>Description: {desc}</Card.Text>

        <a href={link}>Homework Resource</a>

        <Card.Link href={link}></Card.Link>
      </Card.Body>
    </Card>
    
  );
};

export default AssignmentCard;
