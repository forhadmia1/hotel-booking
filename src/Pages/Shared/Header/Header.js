import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <header className='sticky-top'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Hotel Booking</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/resorts">Resorts</Nav.Link>
                        <Nav.Link as={Link} to="/checkout">CheckOut</Nav.Link>
                        {
                            user ?
                                <button onClick={() => signOut(auth)} className='btn btn-secondary rounded-pill px-3'>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login">LogIn</Nav.Link>

                        }
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;