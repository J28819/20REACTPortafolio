
import React from 'react'
import Card from 'react-bootstrap/Card';
import logo2 from '../img/iot2.png';
import avatar from '../img/avatar.png';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';

function ImageAndTextExample() {
    return (
      <>
        <Card>

        <Card.Title>Resume</Card.Title>

        <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={avatar}
      />
      <Figure.Caption>
        J28819
      </Figure.Caption>
    </Figure>
    <a href='https://www.linkedin.com/in/ismael-leal-45062429'>click here to access my resume</a>
            
        
          
         
          <Card.Body>


          <Card.Header> Front End Proficiencies</Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>HTML</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>Responsive Design</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>Bootstrap</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <br>
          </br>

          <Card.Header> Back End Proficiencies</Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>C</ListGroup.Item>
            <ListGroup.Item>Python</ListGroup.Item>
            <ListGroup.Item>API's</ListGroup.Item>
            <ListGroup.Item>Node</ListGroup.Item>
            <ListGroup.Item>Express</ListGroup.Item>
            <ListGroup.Item>MySQL, Sequelize</ListGroup.Item>
            <ListGroup.Item>MongoDB, Mongoose</ListGroup.Item>
            <ListGroup.Item>REST</ListGroup.Item>
            <ListGroup.Item>GraphQL</ListGroup.Item>
            
            </ListGroup>

            <br>
          </br>

          <Card.Header> Mobile Proficiencies </Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>Xcode- IOS</ListGroup.Item>
            <ListGroup.Item>Kotlin - Android</ListGroup.Item>
            
            </ListGroup>

            <br>
          </br>

          <Card.Header> Industrial Controls and HMI </Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>Rockwell Studio Logix 5000</ListGroup.Item>
            <ListGroup.Item>Factory Talk View Studio</ListGroup.Item>
            <ListGroup.Item>Facotry Talk Analytics for Devices</ListGroup.Item>
            <ListGroup.Item>Siemens - S7</ListGroup.Item>
            <ListGroup.Item>Multisim WorkBench</ListGroup.Item>
            <ListGroup.Item>Proteus</ListGroup.Item>
            <ListGroup.Item>Ares</ListGroup.Item>
            <ListGroup.Item>PCB Development Eagle</ListGroup.Item>
            
            </ListGroup>
         
         
        </Card>
      
       
      </>
    );
  }
  
  export default ImageAndTextExample;