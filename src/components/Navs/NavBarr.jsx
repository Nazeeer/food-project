import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import { Link } from 'react-router-dom';

import logo from '../../assets/image/logo.png'
const NavBarr = () => {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand >
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
            </Nav>

            <Nav >
                <Link className='link' to="#home">Home</Link>
                <Link className='link' to="#link">About</Link>
                <Link className='link' to="#home">Explore Foods</Link>
                <Link className='link' to="#home">Reviews</Link>
                <Link className='link' to="#link">FAQ</Link>
                <Link  id='last-link'>010000000</Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarr