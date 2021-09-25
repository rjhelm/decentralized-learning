import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
    return (
        <Card className="about-card">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        <span className="gold">Decentralized Learning</span> <br />
                        
                        <br />
                        
                        <br />
                        
                        <br />
                        
                        <br />
                        
                    </p>

                    <ul>
                        <li className="about-hobby">
                            <ImPointRight /> 
                        </li>
                        <li className="about-hobby">
                            <ImPointRight /> 
                        </li>
                        <li className="about-hobby">
                            <ImPointRight /> 
                        </li>

                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default AboutCard;