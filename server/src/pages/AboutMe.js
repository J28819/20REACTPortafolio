import React from 'react'
import Card from 'react-bootstrap/Card';
import logo2 from '../img/iot2.png';
import avatar from '../img/avatar.png';
import Figure from 'react-bootstrap/Figure';

function ImageAndTextExample() {
    return (
      <>
        <Card>

        <Card.Title>About Me</Card.Title>

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
            
        
          
         
          <Card.Body>
            <Card.Text>
            Hello, My name is Ismael Leal and I like to do coding and do electronics, I have a Bachelors degree in Electronics and Automation and Recently complete the Software Engineering program.
            my actual hobby is build electronics systems for IOT (Internet of Things) and create robots and controls for machinery.
        
            </Card.Text>
          </Card.Body>
          <Card.Img variant="top" src={logo2} />
        </Card>
      
       
      </>
    );
  }
  
  export default ImageAndTextExample;