// src/components/SiteNavbar.jsx
import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

export default function SiteNavbar(){
  const { currentUser, logout } = useAuth();
  const nav = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="shadow-sm sticky-top" variant="dark">
        <Container>
          <div className="d-flex align-items-center site-brand">
            {/* Bootstrap icon used as brand mark */}
            <div className="brand-icon-wrap me-2" aria-hidden>
              <i className="bi bi-bulb-fill brand-icon" />
            </div>

            <div className="brand-text">
              <div className="brand-title">Dhiya <span className="brand-dot">Store</span></div>
              <div className="brand-sub">Stylish · Modern · Reliable</div>
            </div>
          </div>

          <Navbar.Toggle aria-controls="main-nav" onClick={handleShow} />

          <Navbar.Collapse id="main-nav" className="justify-content-end d-none d-lg-flex">
            <Nav className="me-2">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/checkout">Cart</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center gap-2">
              {currentUser ? (
                <>
                  <div className="text-white fw-600">{currentUser.name}</div>
                  <Button variant="light" size="sm" onClick={() => { logout(); nav('/'); }}>Logout</Button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
                  <Button as={Link} to="/signup" className="btn-cta">Create account</Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Side Nav for mobile */}
      <Offcanvas show={show} onHide={handleClose} placement="start" className="site-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="d-flex align-items-center site-brand">
              <div className="brand-icon-wrap me-2"><i className="bi bi-bulb-fill brand-icon" /></div>
              <div>
                <div className="brand-title">Dhiya <span className="brand-dot">Store</span></div>
                <div className="brand-sub">Stylish · Modern</div>
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link as={Link} to="/product/p1" onClick={handleClose}>Products</Nav.Link>
            <Nav.Link as={Link} to="/checkout" onClick={handleClose}>Cart</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" onClick={handleClose}>Dashboard</Nav.Link>
            <hr />
            {currentUser ? (
              <>
                <div className="mb-2">Signed in as <strong>{currentUser.name}</strong></div>
                <Button variant="outline-secondary" onClick={() => { logout(); nav('/'); handleClose(); }}>Logout</Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="link" onClick={handleClose}>Login</Button>
                <Button as={Link} to="/signup" className="btn-cta d-block mt-2" onClick={handleClose}>Create account</Button>
              </>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
