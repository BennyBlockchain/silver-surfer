import { Card } from "react-bootstrap";
import styles from "./SilverCard.module.css";

const SilverCard = ({ name }) => {
  return (
    <>
      <Card style={styles.cardContainer}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{name}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SilverCard;
