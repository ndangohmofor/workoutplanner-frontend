import { useState } from "react";
import "./NavbarStyles.css";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(clicked ? false : true);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="secondary"
        data-bs-theme="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/images/Logo.png"
              width={"50"}
              height={"20"}
              className="d-inline-block align-center"
            />{" "}
            Workout Planner
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#checkin">Check In/Out</Nav.Link>
                <Nav.Link href="#guides">Machine Guides</Nav.Link>
                <Nav.Link href="#logs">Workout Logs</Nav.Link>
                <Nav.Link href="#classes">Workout Classes</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
        <Container>
          <Container>
            <Nav className="me-auto"></Nav>
          </Container>
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Container>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
