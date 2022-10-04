
import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../img/iot.png';
import logo2 from '../img/iot2.png';
import passgen from '../img/Passgen.png';

import CardGroup from 'react-bootstrap/CardGroup';

function Portafolio() {
  return (
    <Col   xs={12} md={10}>
    <br></br>
    <CardGroup >
      <Card style={{ padding: '1rem', width: '68rem' }}>
        <Card.Img variant="top" src={passgen} />
        <Card.Body>
          <Card.Title>Password Generator quiz</Card.Title>
          <Card.Text>
          This Password Generator has a catalog of what type of diferent data they could add in the way the system can be expanded in the future for more charachters or lenguages.

The user have to press the button "Generate Password" then select the number of characters desired between 8 and 128, after tnat they will receive different confirms to add different types of data such as Numbers, LowerCase Letters, Upper Case Leters or Symbols that are in the actual catalog stored in the variable ##confirmsMsg.

          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href="https://github.com/J28819/03PassGenIML">
          <small className="text-muted">click here for more info...</small>
          </a>
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