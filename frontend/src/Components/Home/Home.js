import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Particle from "../../Helpers/Particle";
import Hero from "./Hero";
// import Typing from "./Typing";
import ai from '../../assets/machine-learning.jpg';

const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={6} className="home-header">
                            {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                                Decentralized Learning
                            </h1> */}
                            <h1 className="heading-name">
                                <strong className="main-name">Decentralized Network meets Neural Network</strong>
                            </h1>
                            <div style={{ padding: 50,  }}>
                                {/* <Typing /> */}
                                <h1 className="heading-name" md={6}><strong className="main-name">Introduction</strong></h1>
                                <p style={{ color: "white", fontSize: "1.5em" }}>
                                    The current technology in use for efficient data processing today is very expensive and utilizes a lot of power. With that playing a huge factor in the advancement of this industry, our blockchain plans to fix that. We plan to deploy a decentralized network of certified miners built out of optimized Single-board computers, made specifically for data processing and low power consumption. These miners will be come in a range of affordable prices for all developers. Miners will come preprogrammed with 2 built in environments. The first is a cross-chain exchange, wallet, and charting application, to preform all your trades. The second environment will give developers all the tools needed to create anything from neural networks to Data Visualization. Our blockchain will not only push advancements for many industry our blockchain will give aspiring developers the ability to create their own cryptocurrency and NFT's to provide developers a income while working on their projects.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} style={{ paddingBottom: 20 }}>
                            <img src={ai} alt="home pic" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
                <Hero />
            </Container>
        </section>
    )
}

export default Home;