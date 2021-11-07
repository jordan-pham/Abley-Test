import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const navBarStyles = {
  backgroundColor: "#ffffff",
  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)",
};

const Header: React.FC = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        sticky="top"
        style={navBarStyles}
      >
        <Container>
          <Navbar.Brand>Abley Programming Test</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Map</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
