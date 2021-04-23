import { Card } from "react-bootstrap";

const ResourceCard = ({
    title,
    content,
    link,
    linkTitle,
    datePosted,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{datePosted}</Card.Subtitle>
        <Card.Text>{content}</Card.Text>
        <Card.Link href={link} target="_blank">{linkTitle}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ResourceCard;
