import {Card} from "react-bootstrap";


const LabCard = ({title, dueMonth, dueDate, dueTime, dayOrNight, desc, link, linkTitle}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Due Date: {dueMonth} {dueDate} at {dueTime} {dayOrNight}</Card.Text>
        <Card.Text>Description: {desc}</Card.Text>
        <Card.Link href={link}>{linkTitle}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default LabCard;
