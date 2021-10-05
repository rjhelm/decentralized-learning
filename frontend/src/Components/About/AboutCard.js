import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
    return (
        <Card className="about-card">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        <span className="gold">Decentralized Learning Tokens</span> <br />
                        Developers will have the ability to create personal or public tokens with our blockchain
                        <br />
                        There are currently 3 token standards, BLCKMNY-32, BLCKDP-1137, AND BLCKNFT-443.
                        <br />
                        With these tokens users will be able deploy their project and create a source of income.
                        <br />
                        When a user creates a new token, a new block added to the Main-Chain. 
                        <br />
                        Tokens then branch off creating their own Side-Chain.
                    </p>

                    <ul style={{ paddingTop: "25px" }}>
                    <h1>Token Standards</h1> 
                        <li className="about-hobby">
                            <ImPointRight /> BLCKMNY-32 
                            <br />
                            <p style={{ color: "white" }}>
                            The BLCKMNY-32 token will be for creating cryptocurrency as a way for aspiring developers to crowd source funding to scale their projects. The creator will be able to build value from the ground up. As well the ability to back the value of the token with cross-chain tokens, or pegged to follow a real-world assets price such as stocks, metals, gems, fiat currency’s, ext.
                            </p>
                        </li>
                        <li className="about-hobby">
                            <ImPointRight /> <strong className="gold">BLCKDP-1137</strong><br />
                            <p style={{ color: "white" }}>
                            Before creating a new BLCKDP-1137 token, users must create a BLCKMNY-32 to back their project. Users can create this token to start a new project on the blockchain. A new block is created for every calculation needed to be preformed. In order for the blocks to get mined, a user must contribute a small amount of their BLCKMNY-32 token to pay miners for their contribution. BLCKDP-1137 tokens are not tradable, but when a developer completes their project you're able sell or except offers to buy ownership to that project.
                            </p>
                        </li>
                        <li className="about-hobby">
                            <ImPointRight /> <strong className="gold">BLCKNFT-443</strong><br />
                            <p style={{ color: "white" }}>
                            The BLCKNFT-443 token standard gives all our users a simple way to create non-fungible tokens based around their project. After a user has created & signed their NFT it will get deployed into the network for a miner to validate the signature to the blockchain. Theirs no fee for creating, and deploying new NFTs, but the miner that validates the signature will get one copy of the NFT as their payment.
                            </p>
                        </li>

                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default AboutCard;