import React, { useEffect } from "react";
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { articlesData } from "../../src/app/components/data.js";
import Header from "../src/app/components/Header.js";

const image1 =
  "/static/property-management-advice.jpg"
const logo =
  "/static/letcor logo.png";

const styles = {
  parallaxContent: {
    backgroundColor: "darkblue",
    borderColor: "darkblue",
    color: "white",
    alignContent: "space-between",
    padding: "30px",
    opacity: 0.75,
  },
  buttonStyle: {
    backgroundColor: "green",
    borderColor: "green",
    marginTop: 20,
  },
};



function ArticleData({ articleData }) {

  return (
    <div>
      <Header />

      <title>{articleData.title}</title>

     
      <Parallax bgImage={image1} strength={200}>

        <div className="col-md-6 align-self-center text-left" style={{ height: '100%', width: '100%', paddingTop: '150px' }}>
          <Container xs={6} sm={6} md={6} className="flex-wrap">
            <div className="flex-wrap" style={styles.parallaxContent}>
              <div key={articleData.id} className="mx-auto mt-8">
                <h1 className="text-4xl text-bold">{articleData.title}</h1>

                <p>Title : {articleData.title}</p>

                Content : {articleData.content}
                <div className="flex-wrap" style={styles.parallaxContent}>
                  <h2>PROPERTY MANAGEMENT SPECIALISTS</h2>
                  Letcor is a leading property management company based in Johannesburg, South Africa.
                  Our commitment revolves around ensuring the safety, security, and satisfaction of clients.
                  We specialize in Residential Property, such as Simplexes, Duplexes, and Student Accommodation.
                </div>
                <Button style={styles.buttonStyle} href="/Listings">View Listings</Button>

              </div>

            </div>
          </Container>
        </div>

        <div className="align-self-center text-left" style={{ height: '300px', width: '100%' }}>
          <Container xs={6} sm={6} md={6} className="flex-wrap" style={{ paddingTop: "150px" }}>


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
};



export async function getStaticPaths() {
  let paths = articlesData.map((x) => {
    return { params: { index: x.title } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: { articleData: articlesData.find((e) => e.title == context.params.index) },
  };
}

export default ArticleData;
