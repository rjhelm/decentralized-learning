import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {
    RiCodeBoxFill,
    RiHomeSmile2Line,
    RiSkull2Fill,
    RiVipDiamondLine,
    RiGithubFill,
} from "react-icons/ri";
import { Link } from 'react-router-dom';

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
                <Navbar.Brand href="/home">
                    <img src={" "} className="logo" alt="brand" />
                </Navbar.Brand>
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}