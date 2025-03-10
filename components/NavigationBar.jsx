import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">CareFlow</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Hem</Nav.Link>
                    <Nav.Link as={Link} to="/services">Tjänster</Nav.Link>
                    <Nav.Link as={Link} to="/about">Om oss</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;