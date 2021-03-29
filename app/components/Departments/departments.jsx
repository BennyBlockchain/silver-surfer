import {Card, Table} from "react-bootstrap";


const Departments = ({name, type, courses, about}) => {
  return (
    <Card style={{ width: '60rem' }}>
      <Card.Body>
        <Card.Title>{name} {type}</Card.Title>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th><Card.Subtitle>Courses Required for the {type} in {name}</Card.Subtitle></th>
                    <th><Card.Subtitle>About the {name} {type}</Card.Subtitle></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Card.Text>{courses}</Card.Text></td>
                    <td><Card.Text>{about}</Card.Text></td>
                </tr>
            </tbody>
        </Table>

      </Card.Body>
    </Card>
  );
};

export default Departments;