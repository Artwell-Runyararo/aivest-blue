import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>;

const NavigationBar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm col-md col-lg">
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
              <Container variant="dark">
                <Navbar.Brand><strong className="text-3xl">AiVest</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto mx-5">
                    <Link className="text-light p-2" style={{ textDecoration: "none" }} to="/">Home</Link>
                    <Link className="text-light p-2" style={{ textDecoration: "none", color: "gray !important", }} to="/Contact" > Contact </Link>
                    <Link className="text-light p-2" style={{ textDecoration: "none", color: "gray !important", }} to="/About"> About </Link>
                  </Nav>
                  <Nav className="">
                    <Link className="text-light p-2" style={{ textDecoration: "none" }} to="/Account">My Account</Link>
                    <Link className="text-light p-2" style={{ textDecoration: "none" }} to="/Login"> Log in </Link>
                    <Nav.Link>or</Nav.Link>
                    <Link className="text-light p-2" style={{ textDecoration: "none" }} to="/InvestorsRegistration">Sign up</Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
