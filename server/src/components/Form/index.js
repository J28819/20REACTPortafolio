import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
var variablevalid = ''

const message = ""
const handleClick = event => {
  event.preventDefault();


};

const handleChange = event => {
 
  if(event.target.value.trim().length !== 0){
    variablevalid = event.target.value.trim().length
    console.log(variablevalid)
    return
  }
};



function BasicExample() {

  

  return (

    <Form>


<Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row >
        <Col   xs={12} md={8}>

        <Form.Group s="mb-3 " controlId="formBasicName">
        <Form.Label className="form" >Name</Form.Label>
        <Form.Control onChange={handleChange}  type="text" placeholder="Enter Name" />
        <Form.Text>
        
        </Form.Text>
        </Form.Group>
          
        <Form.Group  className="mb-3 " controlId="formBasicEmail">
        <Form.Label className="form" >Email address</Form.Label>
        <Form.Control   type="email" placeholder="Enter email" />
       
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="form" >Message</Form.Label>
        <Form.Control  as="textarea" rows={3} />
      </Form.Group>
      <Button onClick={handleClick} variant="primary" type="submit">
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