import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <Navbar bg="info" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Toppfiy</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-around">
            <NavLink to="user/products">Shop</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  );
};

export default LandingPage;
