
import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../img/iot.png';
import logo2 from '../img/iot2.png';

import CardGroup from 'react-bootstrap/CardGroup';

function Portafolio() {
  return (
    <Col   xs={12} md={10}>
    <br></br>
    <CardGroup >
      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={logo2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
    
     
    </CardGroup>
    <br></br>

    <CardGroup >
      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={logo2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br></br>
    </Col>
    
  );
}

export default Portafolio;