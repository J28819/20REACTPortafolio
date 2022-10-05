import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/20REACTPortfolio/home">Ismael leal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/20REACTPortfolio/aboutme">About me </Nav.Link>
            <Nav.Link href="/20REACTPortfolio/portafolio">Portofolio</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/20REACTPortfolio/contact">Contact</Nav.Link>
            <Nav.Link  href="/20REACTPortfolio/resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;