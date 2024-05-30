import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.css'
import Scrollspy from 'react-scrollspy'
const Menu = () => {

  return (
    <Navbar expand="xl" sticky="top" className='menubg'>
       
      <Container>
        <Navbar.Brand className='logo' href="#home">SANJANA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Nav className="ms-auto menulink">
          <Scrollspy items={ ['home', 'about', 'service','portfolio','testimonial','blogs','contact'] } currentClassName="is-current">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about"> About</Nav.Link>
            <Nav.Link href="#skill"> Skills</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#testomonials">Testimonials</Nav.Link>
            <Nav.Link href="#blogs">My Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Scrollspy>
          </Nav>
        </Navbar.Collapse>
  
      </Container>
    </Navbar>

  )
}

export default Menu