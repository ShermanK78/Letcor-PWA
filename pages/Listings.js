import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax, Background } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from "C:/Users/Camilla/Desktop/MERN/Projects/Letcor/property-manager-next/src/app/components/Header.js";

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

const image1 = "/static/for rent cover image.jpg";
const image2 = "/static/staff.jpg";
const image4 = "/static/viewing.jpg";
const image5 = "/static/simplex.jpg";
const image6 = "/static/cluster.jpg";
const image7 = "/static/duplex.jpg";
const image8 = "/static/flat.jpg";
const image9 = "/static/student-accom-1.jpg";
const image10 = "/static/student-accom-2.jpg";
const image11 = "/static/student-accom-3.jpg";
const image12 = "/static/student-accom-4.jpg";
const logo = "/static/letcor logo.png";

const Listings = (props) => {

  const canonicalUrl = `https://letcor.co.za/Listings`;


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
      <Parallax bgImage={image1} strength={200}>
        <div className="col-md-6 align-self-center text-left" style={{ height: '100vh', marginLeft: "30px" }}>
          <Container style={{ paddingTop: "200px" }}>
            <div className='flex-wrap' style={{ backgroundColor: "darkblue", borderColor: "darkblue", color: "white", alignContent: "space-between", padding: "30px", opacity: 0.75 }}>
              <h1>OUR PROPERTY LISTINGS</h1>
              Choose from a large selection of townhouses, simplexes, duplexes, and student accommodation.
              Based on their use case, our properties are close to amenities, schools, universities, or entertainment.
              Each unit is safe, secured and properly inspected for defaults and damage prior to you taking occupation.
            </div>
            <div>
              <Button style={{ backgroundColor: "green", borderColor: "green", marginTop: 20 }} href="/ContactPage">SPEAK TO AN AGENT</Button>
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
                <p className='flex-wrap' style={{ color: "white", alignContent: "top", marginTop: "0px" }}>We have a dedicated team of professional staff that ensure a smooth transition to the property of your choice. From the initial vetting process, to viewing, and finally settling in, we are with you all the way. And dont forget our dedicated Residential Management Suite, which you willll gain access to, once you are a tenant. This suite will allow you to report and be updated on all aspects from emergency repairs, security and more.
                </p>
                <p className="text-white">
                With the Residential Management Suite, you can conveniently report any maintenance concerns, including emergency repairs, ensuring your comfort and safety. You can also stay updated on important security information and other aspects that contribute to your well-being within our properties. 
                </p>
                <p className="text-white">
                We are here to provide you with the tools and assistance you need to make your stay with us as convenient and enjoyable as possible. Feel free to reach out and enquire about your next home; we are here to assist you every step of the way.
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
          <h3 style={{ color: "blue" }}>LECTOR PROPERTY LISTINGS</h3>
          <br />
          <p style={{ color: "grey", marginLeft: 10, marginRight: 10 }}>Letcor Property Management is dedicated to providing impeccable property listings that go beyond the ordinary. With a legacy spanning over 40 years, we have become an integral pillar of the South African property market. Our commitment to crafting safe, secure, and nurturing environments is unwavering. We dont just list properties; we innovate, ensuring utmost satisfaction for all our cherished clients.</p>
          <br />
          <br />
        </div>
      </Parallax>

      {/* The Listing Grid */}
      {imagesLoaded && (
        <Row className="g-4">
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'darkblue' }}>
                <Card.Img variant="top" src={image5} style={{ width: '200px', height: '100px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'darkblue' }}>
                <Card.Title>Simplexes</Card.Title>
                <Card.Text>
                  Ideal for singles or couples, offering affordable and easy-to-maintain living.
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green" }}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'darkblue' }}>
                <Card.Img variant="top" src={image6} style={{ width: '200px', height: '100px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'darkblue' }}>
                <Card.Title>Cluster</Card.Title>
                <Card.Text>
                  Gated community for added security and single-family living with shared amenities.
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green" }}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'darkblue' }}>
                <Card.Img variant="top" src={image7} style={{ width: '200px', height: '100px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'darkblue' }}>
                <Card.Title>Duplexes</Card.Title>
                <Card.Text>
                  Secure and suitable for small or growing families, providing separate living spaces.
                </Card.Text>
                <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'darkblue' }}>
                <Card.Img variant="top" src={image8} style={{ width: '200px', height: '100px' }} />
              </div>
              <Card.Body style={{ color: 'white', backgroundColor: 'darkblue' }}>
                <Card.Title>Townhouses</Card.Title>
                <Card.Text>
                  Multi-level living for families within a residential complex with diverse housing options.
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'darkblue' }}>
              <Card.Img variant="top" src={image9} style={{ width: '200px', height: '100px' }} />
            </div>
            <Card.Body style={{ color: 'white', backgroundColor: 'darkblue' }}>
              <Card.Title>Johannesburg North</Card.Title>
              <Card.Text>
                An affordable single-bedroom unit for students in a modern, dorm-style building.
              </Card.Text>
              <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'darkblue' }}>
              <Card.Img variant="top" src={image10} style={{ width: '200px', height: '100px' }} />
            </div>
            <Card.Body style={{ color: 'white', backgroundColor: 'darkblue' }}>
              <Card.Title>Johannesburg West</Card.Title>
              <Card.Text>
                A twin-sharing apartment with separate bedrooms for a pair of students.
              </Card.Text>
              <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'darkblue' }}>
              <Card.Img variant="top" src={image11} style={{ width: '200px', height: '100px' }} />
            </div>
            <Card.Body style={{ color: 'white', backgroundColor: 'darkblue' }}>
              <Card.Title>Johannesburg East</Card.Title>
              <Card.Text>
                A housing complex with townhouse-style units for students and communal gardens.
              </Card.Text>
              <Button href="/ContactPage" style={{ backgroundColor: "green", borderColor: "green"}}>Enquire</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'white', backgroundColor: 'darkblue' }}>
              <Card.Img variant="top" src={image12} style={{ width: '200px', height: '100px' }} />
            </div>
            <Card.Body style={{ color: 'white', backgroundColor: 'darkblue' }}>
              <Card.Title>Johannesburg South</Card.Title>
              <Card.Text>
                A student housing complex featuring townhouses with various room configurations.
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
                  <h2 style={{ color: "white" }}>MAKE THE MOVE</h2>
                  <p style={{ color: "white" }}>Our professional staff are on standby and ready to arrange a viewing at your earliest convenience. We will guide you through the entire process and ensure a smooth transition to your new home.</p>
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

export default Listings;
