import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax, Background } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "C:/Users/Camilla/Desktop/MERN/Projects/Letcor/property-manager-next/src/app/components/Header.js";

<link rel="manifest" href="C:/Users/Camilla/Desktop/MERN/Projects/Letcor/property-manager-next/public/manifest.json"/>


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
  paddingRight: 20,
  position: "right",
  top: "50%",
  left: "50%",
  transform: "translate(50%,0%)"

};



const image1 =
  "/static/student-accomodation-courtyard_b.jpg";
const image2 =
  "/static/letcor complexes.jpg";
const image3 =
  "/static/student-accomodation-university.png";
const image4 =
  "/static/student-accomodation-residence.jpg";
const image5 =
  "/static/happy family residents.jpg";
const logo =
  "/static/letcor logo.png";



  const Main = ({props}) => {

    const canonicalUrl = `https://letcor.co.za`;

    
    useEffect(() => {
      document.title = 'Property Management Library';
    }, []);
  
  return (
  <div style={styles}>
    <Header />
    <Head>
        {/* Add the canonical link tag to the <head> section */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>
    <Parallax bgImage={image1}
      strength={200}>
      <div className="col-md-6 align-self-center text-left" style={{ height: 600, marginLeft: "30px" }}>

        <Container style={{ paddingTop: "200px" }}>


          <div className='flex-wrap' style={{ backgroundColor: "darkblue", borderColor: "darkblue", color: "white", alignContent: "space-between", padding: "30px", opacity: 0.75 }}>
            <h1>PROPERTY MANAGEMENT SPECIALISTS</h1>
            Letcor is a leading property management company based in Johannesburg, South Africa.
            Our commitment revolves around ensuring the safety, security, and satisfaction of clients.
            We specialize in Residential Property, such as Simplexes, Duplexes and Student Accomodation.</div>

          <div>
            <Button style={{ backgroundColor: "green", borderColor: "green", marginTop: 20 }} href="./Listings" >VIEW LISTINGS</Button>{' '}
          </div>

        </Container>
      </div>
    </Parallax>


    <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: '100%', width: '100%', zIndex: 1, display: 'grid' }}>
        <div style={insideStyles1}>

          <Row className="flex-wrap">
            <Col xs={6} sm={6} md={6} className="flex-wrap">
              <h2 style={{ color: "white" }}>RESIDENTIAL PROPERTY MANAGEMENT</h2>
              <p className="text-white">
                Our proficient teams excel in the seamless transition of properties into our portfolio, effectively managing day-to-day property operations. This includes meticulous financial and expense control, strategic capital improvements, proactive maintenance, optimal leasing and tenant retention strategies, comprehensive reporting mechanisms, and robust security measures. 
              </p>
              <p className='text-white'>
                Our optimal leasing and tenant retention strategies are designed to create stable, long-term tenancies that benefit both property owners and residents. We provide comprehensive reporting mechanisms that offer our clients transparent insights into their investments, empowering them to make informed decisions.
              </p>
              <p className="text-white"> 
              Our commitment to excellence ensures properties are not only managed but optimized for superior performance, guaranteeing long-term value for our clients.
              </p>
            </Col>
            <Col xs={6} sm={6} md={6}>
              {/* Add any additional content or images here */}
            </Col>
          </Row>


        </div>
      </div>
    </Parallax>



    <Parallax strength={500} xs={12} sm={6} md={4}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundColor: "white",
          }}
        />
      </Background>
      <div className="text-center">
        <br />

        <h3 style={{ color: "blue" }}>WHY LETCOR?</h3>
        <br />
        <Container style={{ color: "grey" }}>Letcor Property Management strives to create safe, secure and nurturing environments for professionals, students and families. We take pride in having being in existnce for more than 40 years, an integral part of the South African property market, and an innovator in ensuring satisfaction for all of our valued clients.</Container>
        <br />
        <br />

      </div>
    </Parallax>

    <Parallax
      bgImage={image5}
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
              height: '75%',
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
                <h2 style={{ color: "white" }}>WE VALUE YOUR SAFETY & SECURITY</h2>
                <p style={{ color: "white" }}>We prioritize safety measures, employ cutting-edge security systems, and offer unrivaled services to create an environment where residents can truly feel at home. At Letcor, we truly value our clients and the need for comfort, security and service.</p>
              </div>



            </div>
          </div>
        </div>
      )}
    >
      <div style={{ height: 750 }}>

      </div>
    </Parallax>



    <Parallax bgImage={image3} strength={-100}>
      <div style={{ height: '100%', width: '100%', zIndex: 1, display: 'grid' }}>
        <div style={insideStyles1}>

          <Row className="flex-wrap">
            <Col xs={6} sm={6} md={6} className="flex-wrap">
              <h2 style={{ color: "white" }}>STUDENT ACCOMODATION</h2>
              <p className="text-white">
                We want every student to look back on their years in Letcor accommodation with a sense of satisfaction and fulfillment. To achieve this, we offer a range of amenities and services that enhance the overall student experience.
              </p>
              <p className="text-white">
                To that end, we have meticulously designed our amenities and services to cater to the holistic needs of our residents. From well-appointed study lounges and high-speed internet access to foster a conducive learning environment, to vibrant common spaces and recreational facilities to foster social connections, Letcor ensures that students can thrive academically and personally.
              </p>
              <p className="text-white">
              At Letcor, we believe that a nurturing and comfortable living environment can significantly impact a students overall educational journey.
              </p>
            </Col>
            <Col xs={6} sm={6} md={6}>
              {/* Add any additional content or images here */}
            </Col>
          </Row>


        </div>
      </div>
    </Parallax>

    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundColor: "white",
          }}
        />
      </Background>
      <div className="text-center">
        <br />

        <h3 style={{ color: "blue" }}>STUDENT ACCOMODATION</h3>
        <br />
        <p style={{ color: "grey" }}>We ensure that our properties are more than just places to live; they are nurturing environments that empower students to make the most of their academic journey. Letcor is more than just accommodation; its a trusted partner in every students educational voyage.</p>
        <br />
        <br />

      </div>
    </Parallax>

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
              height: '75%',
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
                <h2 style={{ color: "white" }}>FROM YOUR FIRST TO YOUR FINAL YEAR</h2>
                <p style={{ color: "white" }}>From your first to your final year, we make your safety our top priority. Our state-of-the-art security systems and superior services create an environment where residents can truly call their home away from home, ensuring our residents satisfaction.</p>
              </div>



            </div>
          </div>
        </div>
      )}
    >
      <div style={{ height: 750 }}>

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
        <Col xs={12} sm={6} md={4} className="d-inline-block align-center">
          <h5>CONTACT US</h5>
          <p>100 Forest Rd, Johannesburg, 2000</p>
          <p>+27 11 403 0701</p>
        </Col>
        <Col xs={12} sm={6} md={4} className="d-inline-block align-center">
          <h5>LINKS</h5>
          <p>Privacy Policy</p>
          <p>Accessibility Policy</p>
        </Col>
      </Row>
    </Container>



  </div>


);

          }

export default Main;