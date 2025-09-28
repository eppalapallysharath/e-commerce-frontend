import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // <-- correct NavLink

const NavBar = () => {
    const linkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "#0c4a6e",
    backgroundColor: isActive ? "#0d6efd" : "transparent",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    margin: "0 8px",
    fontWeight: "500",
    transition: "all 0.2s ease-in-out",
  });
  return (
     <Navbar expand="lg" style={{ backgroundColor: "#e0f2fe" }} className="shadow-sm py-3">
        <Container>
          <Navbar.Brand
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              color: "#0d6efd",
            }}
          >
            Toppify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink to="/" style={linkStyle}>
                Shop
              </NavLink>
              <NavLink to="/login" style={linkStyle}>
                Login
              </NavLink>
              <NavLink to="/signup" style={linkStyle}>
                Sign Up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  )
}

export default NavBar