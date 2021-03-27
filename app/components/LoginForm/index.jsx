import {Form} from "react-bootstrap";

const LoginForm = (title) => { 
    return(
        <Form>
            <Form.Group as={title} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                {title}
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={title} controlId="formHorizontalPassword">
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
export default LoginForm