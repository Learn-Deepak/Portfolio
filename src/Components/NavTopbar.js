import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FaBattleNet } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NavTopbar({addBg}) {
    //debugger;
    return (
        <Navbar collapseOnSelect expand="md" bg={addBg} variant="dark">
                <Container>
                <Navbar.Brand href="/Portfolio"><FaBattleNet /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="justify-content-end mr-auto" style={{ width: "100%" }} >
                        <Link className="navtopbar" to="/Portfolio">Home</Link>
                        <Link className="navtopbar" to="/about">About Me</Link>
                        <Link className="navtopbar" to="/skills">Skills</Link>
                        <Link className="navtopbar" to="/education">Education</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            
        </Navbar>
    )
}

export default NavTopbar

/*

     <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        <Nav.Link href="/education">Education</Nav.Link>

*/

