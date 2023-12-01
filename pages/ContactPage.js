import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax, Background } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "C:/Users/Camilla/Desktop/MERN/Projects/Letcor/property-manager-next/src/app/components/Header.js";
import Contact from "./Contact";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",
  justifyContent: "center"
};

const insideStyles1 = {
  background: `linear-gradient(to bottom, #0000b1, #00004e)`,
  width: "100%",
  height: "100%",
  padding: 20,
  position: "right",
  top: "50%",
  left: "50%",
  transform: "translate(50%,0%)"
};

const image1 = "/static/contact center.jpg";
const logo = "/static/letcor logo.png";

const Listings = (props) => {

  const canonicalUrl = `https://letcor.co.za/ContactPage`;

  
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    document.title = 'Property Management Library';
  }, []);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = image1;
    imageLoader.onload = () => {
      // When the first image is loaded, set the imagesLoaded to true.
      setImagesLoaded(true);
    };
  }, []);

  return (
    <div style={styles}>
      <Header />
      <Head>
        {/* Add the canonical link tag to the <head> section */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Parallax bgImage={image1} strength={200}>
        <div className="col-md-6 align-self-center text-left" style={{ height: '100%', marginLeft: "30px" }}>
          <Container style={{ paddingTop: "200px" }}>
            <div className='flex-wrap' style={{ backgroundColor: "darkblue", borderColor: "darkblue", color: "white", alignContent: "space-between", padding: "30px", marginBottom: 20, opacity: 0.75 }}>
              <h1>Contact Us</h1>
              {/* The Contact Form */}
              <Contact />
              <br></br>
            </div>

          </Container>
        </div>
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

export default Listings;
