import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax, Background } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../src/app/components/Header.js";
import 'react-toastify/dist/ReactToastify.min.css';
import { generateToken } from "C:/Users/Camilla/Desktop/MERN/Projects/Vehicle Dealers PWA/src/firebaseNotification/firebase.js";
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from 'C:/Users/Camilla/Desktop/MERN/Projects/Vehicle Dealers PWA/src/firebaseNotification/firebase.js';
import useFcmToken from "../utils/hooks/useFcmToken.js";






const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",
  justifyContent: "center"
};

const insideStyles1 = {
  background: `linear-gradient(to bottom, #cc0000, #9d2f2f)`,
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
  "/static/supercar showroom.jpg";
const image2 =
  "/static/merc interior.jpg";
const image3 =
  "/static/car dealer bg 3.jpg";
const image4 =
  "/static/car finance options.jpg";
const image5 =
  "/static/car with bow.jpg";
const logo =
  "/static/GTE Auto Logo.png";

    const Main = ({props}) => {

      const { fcmToken, notificationPermissionStatus } = useFcmToken();

        // Log token and permissions when they change
  useEffect(() => {
    console.log('FCM Token:', fcmToken);
    console.log('Notification Permission Status:', notificationPermissionStatus);
  }, [fcmToken, notificationPermissionStatus]);

  // Use fcmToken and notificationPermissionStatus as needed


    const canonicalUrl = `https://thecsrnexus.com`;

    
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
      strength={50}>
      <div className="col-md-6 align-self-center text-left" style={{ height: 600, marginLeft: "30px" }}>

        <Container style={{ paddingTop: "200px" }}>


          <div className='flex-wrap' style={{ backgroundColor: "red", borderColor: "red", color: "white", alignContent: "space-between", padding: "30px", opacity: 0.75 }}>
            <h1>VEHICLE SALES & SERVICE SPECIALISTS</h1>
            GTE Automotive is a premier vehicle sales specialist located in Johannesburg, specializing in a diverse range of vehicles, including Sedans, SUVs, and Performance Cars. Trust us to find the perfect ride to meet your needs.</div>

          <div>
            <Button style={{ backgroundColor: "darkblue", borderColor: "darkblue", marginTop: 20 }} href="./Listings" >VISIT ONLINE SHOWROOM</Button>{' '}
          
          </div>

        </Container>
      </div>
    </Parallax>


    <Parallax bgImage={image2} strength={200}>
      <div style={{ height: '75%', width: '100%', zIndex: 1, display: 'grid' }}>

        <div style={insideStyles1}>

          <Row className="flex-wrap">
            <Col xs={6} sm={6} md={6} className="flex-wrap">
              <h2 style={{ color: "white" }}>ONLY THE BEST FOR OUR DISCERNING CLIENTS</h2>
              <p className="text-white">
              You will discover unparalleled excellence in vehicle quality at our dealership. Trust us for a seamless and reliable process, from inspection to purchase, as we focus on providing you with the finest vehicles available in the market. 
              </p>
              <p className='text-white'>
              We specialize in offering top-tier, thoroughly inspected, and professionally upholstered vehicles with low mileage, minimal wear, and tear. Our commitment to quality extends to meticulous servicing, ensuring every vehicle meets the highest standards. 
              </p>
              <p className="text-white"> 
              Our commitment to excellence ensures our vehicles are not only managed but optimized for superior performance, guaranteeing long-term satisfaction for our clients.
              </p>
              <p className="text-white">
              Your satisfaction is our priority.
              </p>
            </Col>
            <Col xs={6} sm={6} md={6}>
              {/* Add any additional content or images here */}
            </Col>
          </Row>


        </div>
      </div>
    </Parallax>



    <Parallax strength={200} xs={12} sm={6} md={4}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundColor: "black",
          }}
        />
      </Background>
      <div className="text-center">
        <br />

        <h3 style={{ color: "blue" }}>WHY CHOOSE GTE AUTOMOTIVE?</h3>
        <br />
        <Container style={{ color: "white" }}>At our dealership, we take pride in delivering a superior vehicle buying experience. With a commitment to excellence spanning over 40 years, we have become a cornerstone in the automotive market. Our dedication to providing top-quality, thoroughly inspected, and professionally upholstered vehicles sets us apart as innovators in customer satisfaction.</Container>
        <br />
        <br />

      </div>
    </Parallax>

    <Parallax
      bgImage={image3}
      strength={200}
      renderLayer={(percentage) => (
        <div id="parallelogram" >
          <div

            style={{
              position: "absolute",
              background: `linear-gradient(to bottom, #cc0000, #9d2f2f)`,
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
                <h2 style={{ color: "white" }}>WE VALUE YOUR PEACE OF MIND</h2>
                <p style={{ color: "white" }}>Trust us to provide you with a buying experience that prioritizes your satisfaction and peace of mind. At our dealership, its not just about selling vehicles; its about delivering an experience you can trust.</p>
              </div>



            </div>
          </div>
        </div>
      )}
    >
      <div style={{ height: 750 }}>

      </div>
    </Parallax>



    <Parallax bgImage={image4} strength={200}>
      <div style={{ height: '100%', width: '100%', zIndex: 1, display: 'grid' }}>
        <div style={insideStyles1}>

          <Row className="flex-wrap">
            <Col xs={6} sm={6} md={6} className="flex-wrap">
              <h2 style={{ color: "white" }}>ENHANCING THE CAR BUYING EXPERIENCE</h2>
              <p className="text-white">
              Our goal is to create an environment where every customer looks back on their time with a deep sense of satisfaction and fulfillment. To achieve this, we go beyond just offering quality vehicles. Our showroom is meticulously designed to cater to the diverse needs of our customers.
              </p>
              <p className="text-white">
              From well-lit and spacious display areas showcasing our top-quality vehicles to a knowledgeable and friendly sales team, GTE ensures that customers can make informed decisions. Moreover, we provide comprehensive insurance options, extended warranties, and flexible service plans, giving you peace of mind beyond your purchase.
              </p>
              <p className="text-white">
              We understand that a positive and comfortable buying environment, coupled with added benefits like insurance coverage, warranties, and service plans, can significantly impact your overall journey. Visit GTE Automotive for an experience that goes beyond purchasing a car – its about finding the perfect vehicle and driving away with confidence, peace of mind, and satisfaction              </p>
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
            backgroundColor: "black",
          }}
        />
      </Background>
      <div className="text-center">
        <br />

        <h3 style={{ color: "blue" }}>REVIEWS</h3>
        <br />
        <p style={{ color: "white" }}>GTE Automotive exceeded expectations. Their professionalism, vast vehicle selection, and added perks like comprehensive insurance and extended warranties ensured a secure and enjoyable buying experience. Their after-sales service is equally commendable, making them my go-to for quality vehicles and top-notch service. - John Smith</p>
        <br />
        <br />

      </div>
    </Parallax>

    <Parallax
      bgImage={image5}
      strength={50}
      renderLayer={(percentage) => (
        <div id="parallelogram" >
          <div

            style={{
              position: "absolute",
              background: `linear-gradient(to bottom, #cc0000, #9d2f2f)`,
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
                <h2 style={{ color: "white" }}>FROM YOUR FIRST PURCHASE TO TRADE-INS</h2>
                <p style={{ color: "white" }}>From your first purchase to your trade-in, GTE Automotive ensures a seamless and satisfying journey with top-quality vehicles, transparent processes, and unparalleled customer support.</p>
              </div>



            </div>
          </div>
        </div>
      )}
    >
      <div style={{ height: 750 }}>

      </div>
    </Parallax>



    <Container fluid style={{ height: 'auto', color: "white", backgroundColor: "red", paddingTop: 50, paddingLeft: 100, paddingRight: 100 }}>
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
          <p>100 Main Rd, Randburg, 2000</p>
          <p>+27 79 702 2249</p>
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