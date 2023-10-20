import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to='/cart'>
                <Nav.Link >
                  <i class="fa-solid fa-cart-shopping"></i>
                  &nbsp; Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/user'>
                <Nav.Link>
                <i class="fa-solid fa-user"></i>
                &nbsp; SignIn</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header