import {Card} from "react-bootstrap";


const AssignmentCard = ({imageName, title, dueDate, desc, linkTitle}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageName} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Due Date: {dueDate}</Card.Text>
        <Card.Text>Description: {desc}</Card.Text>
        <Card.Link href="https://youtu.be/XqXckRwf6Ec">{linkTitle}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default AssignmentCard;
