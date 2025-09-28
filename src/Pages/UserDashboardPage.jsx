import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LogoutAction } from "../Redux/authactions/authaction";

const UserDashboardPage = () => {
  const userInfo = useSelector(state=>state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Toppify</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-around">
            <NavLink to="/user/products">Home</NavLink>
            <NavLink to="/user/cart">Cart</NavLink>
            <Navbar.Text>
            Signed in as: {userInfo.email}
          </Navbar.Text>
          <Button variant="danger" onClick={()=>{dispatch(LogoutAction()) ; navigate("/")}}> Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default UserDashboardPage;
