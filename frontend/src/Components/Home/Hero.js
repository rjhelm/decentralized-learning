import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
// import code from '../../assets/code.jpg';

const Hero = () => {
    return (
        <Container fluid className="hero-section" id="about">
            <Row>
                <Col md={6} className="hero-about">
                    <h1 style={{ fontSize: "2.6em" }}>
                        This is <span className="gold"> Decentralized Learning </span>
                        <br />
                        Eco-Friendly blockchain for developers to profit
                        <br />
                        while scaling machine learning projects with efficency.
                    </h1>
                    <p className="hero-body">

                        <strong className="gold">Developer Funding</strong> <br />
                        Through our platform developers can create cryptocurrency's and NFT's

                        to fund the growth of their machine learning project.
                        <br />
                        <strong className="gold">User Productivity</strong> <br />
                        Users can distribute the computation processes to the network to speed up the time it take to process data, or train neural networks
                        <br />
                        <b className="gold">Eco Friendly</b><br />
                        Our Miners are quite, Produce minimal heat, and power with 10w. Our network will consume 83% less then ethereum, with an average miner powered with about 1200W
                        <br />
                        <strong className="gold">User Equality</strong>
                        <br />
                        We strive to be a network that any developer can get started with machine learning inexpensively as well Provide many opportunities to profit from the blockchain.
                        <br />

                    </p>
                </Col>
                <Col md={6} className="hero-about">
                    <h1 className="heading-name"><strong className="gold">Our Blockchain Government</strong></h1>
                    {/* <Tilt>
                        <img src={code} className="img-fluid" alt="code" />
                    </Tilt> */}
                    <p className="hero-body">

                        Our blockchain will be governed by 2 Coins. The first coin is backed by all the tokens in the blockchain combined. These coin can only be obtained by loyal miners. Our second governing coin will be a stable coin pegged at the U.S. dollar's price. A machine learning algorithm watches over the entire blockchain. The algorithm will insure that mine-able blocks are distributed with optimal speed while making sure of miner equality. Miners do not get to choose what token they mine. instead miners will be payed with the token backing that project. Miners will be able to exchange those tokens into our stable coins, but are strongly encouraged to hold those tokens for when the project blows up.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="hero-social">
                    <h1>Our Social Media</h1>
                    <p>
                        <span className="gold">Reach out with any questions</span>
                    </p>
                    <ul className="hero-links">
                        <li className="social-icons">
                            <a
                                href="https://github.com/Decentralizedlearningblockchain"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/DLRN_blockchain"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/company/decentralized-learning"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-color  hero-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/decentralizedlearning/"
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