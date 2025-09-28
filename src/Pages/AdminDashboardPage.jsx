import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'

const AdminDashboardPage = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Toppify</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-around">
            <NavLink to="/admin/products">Dashboard</NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default AdminDashboardPage