import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particle from "../../Helpers/Particle";
import ProjectCard from './ProjectCard';

// import images if needed for description //

const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    Decentralized <strong className="gold">Learning</strong>
                </h1>
                <p style={{ color: "white" }}>What we are working on: </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={" "}
                            title="Example"
                            description="Decentalized Learning AI"
                            link=" "
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={" "}
                            title="Example"
                            description="Decentalized Learning AI"
                            link=" "
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={" "}
                            title="Example"
                            description="Decentalized Learning AI"
                            link=" "
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={" "}
                            title="Example"
                            description="Decentalized Learning AI"
                            link=" "
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}