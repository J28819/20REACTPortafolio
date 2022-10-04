import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';




function BasicExample() {
  return (

    <Form>

<Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row >
        <Col   xs={12} md={8}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label className="form" >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="form">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="form" >Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Col>
      </Row>
    </Container>
    <div>
    <br></br>
    </div>

    </Form>
  );
}

export default BasicExample;