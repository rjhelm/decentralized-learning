import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {
    RiCodeBoxFill,
    RiHomeSmile2Line,
    RiAliensFill,
    RiVipDiamondLine,
    RiMailSendFill,
} from "react-icons/ri";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavbar] = useState(false);
    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    };

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar expanded={expand} fixed="top" expand="md" className={navColor ? false : "expanded"}>
             <Container>
                <Navbar.Brand href="/ryan-port-react">
                    <img src={logo} className="logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Text>
                    <h1 style={{ justifyContent: "center", color: "cyan" }}>Decentralized Learning || DLNR</h1>
                </Navbar.Text>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                ></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <RiHomeSmile2Line /> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <RiAliensFill/> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/projects" 
                                onClick={() => updateExpanded(false)}
                            >
                                <RiCodeBoxFill /> Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/token"
                                onClick={() => updateExpanded(false)}
                            >
                                <RiVipDiamondLine /> Token
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="fork-btn">
                            <Button
                                href=""
                                target="_blank"
                                className="fork-btn-inner"
                            >
                                <RiMailSendFill style={{ fontSize: "1.5em" }} />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;