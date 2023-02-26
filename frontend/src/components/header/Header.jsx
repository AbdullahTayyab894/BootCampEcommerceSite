import React from 'react'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
  return (

    <header>
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <LinkContainer to="/" style={{
            textDecoration: "none"
          }}>
            <Navbar.Brand href="/">ProShop</Navbar.Brand>
          </LinkContainer>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <LinkContainer to="/cart" style={{
                textDecoration: "none"
              }}>
                <Nav.Link >
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/signin" style={{
                textDecoration: "none"
              }}>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header