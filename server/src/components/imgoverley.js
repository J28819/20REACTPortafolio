import React from 'react'
import Card from 'react-bootstrap/Card';
import logo from '../img/iot.png';
import logo2 from '../img/iot2.png';


function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img variant="top" src={logo} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Card.Text>The Internet of things describes physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}


function ImageAndTextExample() {
    return (
      <>
        <Card>
        <Card.Title>About Me</Card.Title>
          <Card.Img variant="top" src={logo2} />
          <Card.Body>
            <Card.Text>
            Hello, My name is Ismael Leal and I like to coding and do electronics, I have a Bachelors degree in Electronics and Automation and Recently complete the Software Engineering program.
          my actual hobby is build electronics systems for IOT (Internet of Things) and create robots and controls for machinary.
        
            </Card.Text>
          </Card.Body>
        </Card>
      
       
      </>
    );
  }
  
  export default ImageAndTextExample;