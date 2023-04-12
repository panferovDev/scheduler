import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function AppBar(): JSX.Element {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Scheduler
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink to='/' className='nav-link'>Main</NavLink>
                <NavLink to='/dashboard' className='nav-link'>Dashboard</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
