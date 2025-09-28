// LoginPage.js
import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAction } from "../Redux/authactions/authaction";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(form, navigate));
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          background: "linear-gradient(to right, #0d6efd, #0dcaf0)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Card
            className="p-4 shadow-lg"
            style={{
              maxWidth: "400px",
              margin: "0 auto",
              borderRadius: "12px",
            }}
          >
            <h3
              className="mb-4 text-center"
              style={{ color: "#0d6efd", fontWeight: "700" }}
            >
              Login
            </h3>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "8px", padding: "10px" }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "8px", padding: "10px" }}
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100"
                style={{
                  backgroundColor: "#0d6efd",
                  border: "none",
                  padding: "10px",
                  fontWeight: "500",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#0b5ed7")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#0d6efd")}
              >
                Login
              </Button>
            </Form>

            <p className="mt-3 text-center" style={{ fontSize: "0.9rem" }}>
              Don’t have an account?{" "}
              <Link
                to="/signup"
                style={{ color: "#0d6efd", fontWeight: "500" }}
              >
                Sign Up
              </Link>
            </p>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
