import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { BiMailSend, BiPhoneCall } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link className='navbar-brand' to="/"><img src="https://www.infilon.com/assets/images/logo/light-logo.png" alt='Logo' /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 navabar_"
                    >
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/blog">Blogs</Link>
                        <Link className="nav-link" to="/faq">Faq</Link>
                    </Nav>
                    <Form className="d-flex header_contact">
                        <a className='blg' href="https://www.infilon.com/">Contact</a>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header