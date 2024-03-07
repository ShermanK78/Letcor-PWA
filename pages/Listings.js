import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax, Background } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from "../src/app/components/Header.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",
  justifyContent: "center"
};

const insideStyles1 = {
  background: `linear-gradient(to bottom, #FF0000, #a70000)`,
  width: "100%",
  height: "100%",
  padding: 20,
  position: "right",
  top: "50%",
  left: "50%",
  transform: "translate(50%,0%)"
};

const image1 = "/static/car showroom 2.jpg";
const image2 = "/static/supercar showroom.jpg";
const image4 = "/static/car dealer bg.jpg";
const image5 = "/static/CarDealer PWA Art/Bugatti Cento.jpg";
const image6 = "/static/CarDealer PWA Art/Ferrari Xeno.jpg";
const image7 = "/static/CarDealer PWA Art/Ford Mustang.jpg";
const image8 = "/static/CarDealer PWA Art/Lamborghini Aventador.jpg";
const image9 = "/static/CarDealer PWA Art/Porsche 911.jpg";
const image10 = "/static/CarDealer PWA Art/Bugatti Divo.jpg";
const image11 = "/static/CarDealer PWA Art/Bugatti S.jpg";
const image12 = "/static/CarDealer PWA Art/Bentley Continental.jpg";
const logo = "/static/GTE Auto Logo.png";

const Listings = (props) => {

  const canonicalUrl = `https://thecsrnexus.com/Listings`;


  useEffect(() => {
    document.title = 'Property Listings';
  }, []);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
      <Parallax bgImage={image1} strength={50}>
        <div className="col-md-6 align-self-center text-left" style={{ height: '600px', marginLeft: "30px" }}>
          <Container style={{ paddingTop: "200px" }}>
            <div className='flex-wrap' style={{ backgroundColor: "red", borderColor: "red", color: "white", alignContent: "space-between", padding: "30px", opacity: 0.75 }}>
              <h1>OUR EXCLUSIVE SHOWROOM</h1>
              Explore our vast inventory featuring a wide array of vehicles, including sedans, SUVs, trucks, and luxury cars.
              Tailored to your needs, our vehicles are strategically located near major roads, shopping centers, schools, and recreational areas.
              Rest assured, each vehicle undergoes rigorous safety inspections to ensure optimal performance and reliability before you drive off the lot.
            </div>
            <div>
              <Button style={{ backgroundColor: "darkblue", borderColor: "darkblue", marginTop: 20 }} href="/ContactPage">SPEAK TO AN SALESMAN</Button>
            </div>
          </Container>
        </div>
      </Parallax>


      <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: '100%', width: '100%', zIndex: 1, display: 'grid' }}>
        <div style={insideStyles1}>

          <Row className="flex-wrap">
            <Col xs={6} sm={6} md={6} className="flex-wrap">
                <h2 style={{ color: "white" }}>WELCOME TO THE FAMILY</h2>
                <p className='flex-wrap' style={{ color: "white", alignContent: "top", marginTop: "0px" }}>We pride ourselves on our dedicated team of professionals who facilitate a seamless transition to your chosen vehicle. From initial inquiries to test drives and beyond, we are here for you every step of the way. Plus, as a valued customer, gain access to our exclusive Executive Client Suite for vehicle software updates, servicing and repairs, vehicle tracking, and more.
                </p>
                <p className="text-white">
                With our Dealer Management Suite, you can easily report any vehicle maintenance concerns, including emergency repairs, ensuring your comfort and safety. Stay updated on important vehicle security information and other aspects that contribute to your satisfaction within our dealership.
                </p>
                <p className="text-white">
                We are here to provide you with the tools and assistance you need to make your purcahse with us as convenient and enjoyable as possible. Feel free to reach out and enquire about your next vehicle; we are here to assist you every step of the way.
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
        <div className="text-center" style={{ color: "blue", backgroundColor: "black" }}>
          <br />
          <h3 style={{ color: "blue", backgroundColor: "black" }}>EXECUTIVE SHOWROOM</h3>
          <br />
          <p style={{ color: "white", backgroundColor: "black", marginLeft: 10, marginRight: 10 }}>GTE Automotive strives for excellence, offering exclusive vehicles that redefine luxury. With a heritage of over 40 years, we stand as a cornerstone in the elite automotive sector. Our dedication to curating sophisticated, secure, and indulgent driving experiences is unparalleled. We dont just showcase vehicles; we pioneer, guaranteeing unparalleled satisfaction for our esteemed clientele.</p>
          <br />
          <br />
        </div>
      </Parallax>

      {/* The Listing Grid */}
      {imagesLoaded && (
        <Row className="g-4">
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
                <Card.Img variant="top" src={image5} style={{ width: '200px', height: '100px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
                <Card.Title>Bugatti Cento</Card.Title>
                <Card.Text>
                  R5,000,000
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green" }}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
                <Card.Img variant="top" src={image6} style={{ width: '200px', height: '100px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
                <Card.Title>Ferrari Xeno</Card.Title>
                <Card.Text>
                  R6,500,000
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green" }}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
                <Card.Img variant="top" src={image7} style={{ width: '200px', height: '100px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
                <Card.Title>Ford Mustang</Card.Title>
                <Card.Text>
                  R1,950,000
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
                <Card.Img variant="top" src={image8} style={{ width: '200px', height: '100px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
                <Card.Title>Lamborghini Aventador</Card.Title>
                <Card.Text>
                 R4,950,000
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <br></br>
      <Row className="g-4">
        <Col>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
              <Card.Img variant="top" src={image9} style={{ width: '200px', height: '100px' }} />
            </div>
            <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
              <Card.Title>Porsche 911</Card.Title>
              <Card.Text>
               R2,750,000
              </Card.Text>
              <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
              <Card.Img variant="top" src={image10} style={{ width: '200px', height: '100px' }} />
            </div>
            <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
              <Card.Title>Bugatti Divo</Card.Title>
              <Card.Text>
               R3,750,000
              </Card.Text>
              <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
              <Card.Img variant="top" src={image11} style={{ width: '200px', height: '100px' }} />
            </div>
            <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
              <Card.Title>Bugatti S</Card.Title>
              <Card.Text>
                R3,250,000
              </Card.Text>
              <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'red' }}>
              <Card.Img variant="top" src={image12} style={{ width: '200px', height: '100px' }} />
            </div>
            <Card.Body style={{ color: 'white', backgroundColor: 'red' }}>
              <Card.Title>Bentley Continental</Card.Title>
              <Card.Text>
                R3,550,000
              </Card.Text>
              <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>

      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percentage) => (
          <div id="parallelogram" >
            <div
              style={{
                position: "absolute",
                background: `linear-gradient(to bottom, #FF0000, #a70000)`,
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
                  <h2 style={{ color: "white" }}>BOOK A TEST DRIVE TODAY</h2>
                  <p style={{ color: "white" }}>Our professional staff are on standby and ready to arrange a test drive at your earliest convenience. We will guide you through the entire process and ensure an amazing experience.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      >
        <div style={{ height: 750 }}></div>
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
          <Col xs={12} sm={6} md={4}>
            <h5>CONTACT US</h5>
            <p>100 Main Rd, Johannesburg, 2000</p>
            <p>+27 11 400 0000</p>
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
