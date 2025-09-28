import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LogoutAction } from "../Redux/authactions/authaction";

const UserDashboardPage = () => {
  const userInfo = useSelector((state) => state.authReducer.user);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(LogoutAction());
    navigate("/");
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "#d1e7ff",
    backgroundColor: isActive ? "#0d6efd" : "transparent",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    marginRight: "10px",
    fontWeight: "500",
    transition: "all 0.2s ease-in-out",
  });

  return (
    <div>
      {/* Navbar */}
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#1f2937" }}
        variant="dark"
        className="shadow-sm py-3"
      >
        <Container>
          <Navbar.Brand
            style={{ fontWeight: "700", fontSize: "1.5rem", color: "#0dcaf0" }}
          >
            Toppify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-between">
            <Nav className="me-auto">
              <NavLink to="/user/products" style={linkStyle}>
                Home
              </NavLink>
              {isLoggedIn?<NavLink to="/user/cart" style={linkStyle}>
                Cart
              </NavLink>:null}
            </Nav>
            <div className="d-flex align-items-center gap-3">
              {isLoggedIn ? (
                <>
                  <Navbar.Text style={{ color: "#f1f5f9", fontWeight: "500" }}>
                    Signed in as: {userInfo.email}
                  </Navbar.Text>
                  <Button
                    variant="danger"
                    style={{
                      fontWeight: "500",
                      borderRadius: "6px",
                      padding: "6px 18px",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavLink to="/login" style={linkStyle}>
                    Login
                  </NavLink>
                  <NavLink to="/signup" style={linkStyle}>
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <Container
        style={{
          padding: "20px",
          backgroundColor: "#f1f5f9",
          minHeight: "90vh",
        }}
      >
        <Outlet />
      </Container>
    </div>
  );
};

export default UserDashboardPage;
