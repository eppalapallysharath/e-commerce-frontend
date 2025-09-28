import React from "react";
import { Container, Button } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LandingPage = () => {
  return (
    <div>
     <NavBar/>
     
      <div
        style={{
          background: "linear-gradient(to right, #0d6efd, #0dcaf0)",
          color: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontWeight: "700", fontSize: "2.5rem" }}>
          Welcome to <span style={{ color: "#ffe066" }}>Toppify</span>
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "15px" }}>
          Discover the latest products at the best prices. Shop smart with us today!
        </p>
        <Button
          href="/user/products"
          size="lg"
          style={{
            marginTop: "20px",
            backgroundColor: "#ffe066",
            color: "#0d6efd",
            border: "none",
            fontWeight: "600",
            padding: "10px 24px",
            borderRadius: "8px",
          }}
        >
          Start Shopping
        </Button>
      </div>

      {/* Dynamic child routes */}
      <Container className="my-5">
      </Container>
    </div>
  );
};

export default LandingPage;
