import {Form} from "react-bootstrap";

export default () => { 
    return(
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
    
}