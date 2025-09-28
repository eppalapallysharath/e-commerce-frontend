import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LogoutAction } from '../Redux/authactions/authaction';
import { useDispatch } from 'react-redux';

const AdminDashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(LogoutAction());
    navigate('/');
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#fff' : '#d1e7ff',
    backgroundColor: isActive ? '#0d6efd' : 'transparent',
    padding: '8px 16px',
    borderRadius: '5px',
    textDecoration: 'none',
    marginRight: '10px',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
  });

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: '#1f2937' }} variant="dark" className="py-3 shadow-sm">
        <Container>
          <Navbar.Brand style={{ fontWeight: '700', fontSize: '1.5rem', color: '#0dcaf0' }}>
            Toppify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <NavLink to="/admin/products" style={linkStyle}>
                Dashboard
              </NavLink>
              <NavLink to="/admin/addProducts" style={linkStyle}>
                Add Products
              </NavLink>
            </Nav>
            <Button
              variant="danger"
              onClick={handleLogout}
              style={{ fontWeight: '500', padding: '6px 18px' }}
            >
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ padding: '20px', backgroundColor: '#f1f5f9', minHeight: '90vh' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
