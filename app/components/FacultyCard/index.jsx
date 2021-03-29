import {Card} from "react-bootstrap";


const FacultyCard = ({imageName, name, title, department, office, phone, email}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageName} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{title}</Card.Text>
        <Card.Text>Office: {office}</Card.Text>
        <Card.Text>Phone: {phone}</Card.Text>
        <Card.Text>Email: {email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FacultyCard;