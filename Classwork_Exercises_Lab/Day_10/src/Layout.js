import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap'

export const Layout = () => {
  return (
    <div>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Nav className='me-auto'>
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Destination">
                    <Nav.Link>Destination</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/About">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Contact">
                    <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/RegnForm">
                    <Nav.Link>Registraton Form</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/SubForm">
                    <Nav.Link>Submitted Form</Nav.Link>
                  </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
        <Outlet/>
    </div>
  )
}
