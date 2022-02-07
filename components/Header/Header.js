import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Starwars</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://www.denniscodes.com/" target="_blank">About</Nav.Link>
            <Nav.Link href="https://resume.creddle.io/resume/it3l2sf6wbv" target="_blank">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
