import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "C:/Users/Camilla/Desktop/MERN/Projects/Letcor/property-manager-next/src/app/components/Header.js";

const image4 =
    "/static/property-management-advice.jpg"
const logo =
    "/static/letcor logo.png";

const ThankYou = ({ }) => {

    const canonicalUrl = `https://lector.co.za/ThankYou`;

    useEffect(() => {
        document.title = 'Thank You Page';
    }, []);
    return (
        <div>
            <Header />
            <Head>
                {/* Add the canonical link tag to the <head> section */}
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <Parallax
                bgImage={image4}
                strength={200}
                renderLayer={(percentage) => (

                    <div id="parallelogram" >

                        <div
                            style={{
                                position: "absolute",
                                background: `linear-gradient(to bottom, #0000b1, #00004e)`,
                                left: `${percentage * 25}%`,
                                bottom: `${percentage * 15}%`,
                                transform: `skewY(-5deg)`,
                                width: '50%',
                                height: '50%',
                                opacity: 0.75,
                                display: 'grid',
                                flexDirection: "column",
                                justifyContent: "center", // Vertically center content
                                alignItems: "center", // Horizontally center content


                            }}
                        >
                            <div style={{ transform: `skewY(5deg)`, height: '80%', marginLeft: "10px", paddingRight: "10px", marginTop: "30px", marginBottom: '30px', paddingBottom: '10px', display: 'grid' }}>
                                <br></br>
                                <div >
                                    <h1 style={{ color: "white" }}>THANKS FOR YOUR ENQUIRY</h1>
                                    <p style={{ color: "white" }}>We will be in touch shortly to assist with your enquiry. For urgent queries please call 011 403 0701</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            >
                <div style={{ height: 750 }}></div>
            </Parallax>

            <Container fluid style={{ height: 'auto', color: "white", backgroundColor: "darkblue", paddingTop: 50, paddingLeft: 100, paddingRight: 100 }}>
                <Row className="justify-content-center text-center">
                    <Col xs={12} sm={6} md={4}>
                        <img
                            alt=""
                            src={logo}
                            width="200"
                            height="100"
                            className="d-inline-block align-center"
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h5>CONTACT US</h5>
                        <p>100 Forest Rd, Johannesburg, 2000</p>
                        <p>+27 11 403 0701</p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h5>LINKS</h5>
                        <p>Privacy Policy</p>
                        <p>Accessibility Policy</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ThankYou;
