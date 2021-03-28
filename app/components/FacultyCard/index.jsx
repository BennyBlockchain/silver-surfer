import {Card} from "react-bootstrap";


const FacultyCard = ({title, text, imageName}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageName} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FacultyCard;