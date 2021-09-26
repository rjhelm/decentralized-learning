import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';


const Hero = () => {
    return (
        <Container fluid className="hero-section" id="about">
            <Row>
                <Col md={6} className="hero-about">
                    <h1 style={{ fontSize: "2.6em" }}>
                        This is <span className="gold"> Decentralized Learning </span>
                        <br />
                        Full-Stack Web Developer
                    </h1>
                    <p className="hero-body">
                        
                        <br />
                        <br />
                        <i>
                            <b className="gold"> </b>
                        </i>
                        <br />
                        <br />
                        
                        <br />
                        
                        <br />
                        
                        <br />
                        
                    </p>
                </Col>
                <Col md={4} className="avatar">
                    <Tilt>
                        <img src={" "} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="hero-social">
                    <h1>Soical Media </h1>
                    <p>
                        <span className="gold"></span>
                    </p>
                    <ul className="hero-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/rjhelm"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/ryanj_dev"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/ryjhelm/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/ryan_j_dev/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;