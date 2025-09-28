// SignupPage.js
import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { singUpAction } from "../Redux/authactions/authaction";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(singUpAction(form, navigate)); // ✅ fixed typo
  };

  return (
    <>
      <NavBar />
      <div>
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <Card className="p-4 shadow-lg border-0">
                <h3 className="mb-3 text-center text-primary fw-bold">
                  Sign Up
                </h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="signupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="signupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="signupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Sign Up
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignupPage;
