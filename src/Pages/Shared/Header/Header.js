import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='sticky-top'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/resorts">Resorts</Nav.Link>
                        <Nav.Link as={Link} to="/checkout">CheckOut</Nav.Link>
                        <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
                        <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;