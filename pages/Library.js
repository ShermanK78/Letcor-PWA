import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Header from "../src/app/components/Header.js";

const image4 =
    "/static/property-management-advice.jpg"
const image5 =
    "/static/library.jpg"
const logo =
    "/static/letcor logo.png";


const Library = ({ }) => {
    const canonicalUrl = `https://letcor.co.za/Library`; 
    useEffect(() => {
        document.title = 'Property Management Library';
    }, []);

    return (
        <div>
            <Header />
            <Head>
                {/* Add the canonical link tag to the <head> section */}
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <Parallax bgImage={image4} strength={200}>
                <div className="col-md-6 align-self-center text-left" style={{ height: '100%', marginLeft: "30px", marginBottom: '50px' }}>
                    <Container style={{ paddingTop: "200px" }}>
                        <div style={{ backgroundColor: "darkblue", borderColor: "darkblue", color: "white", alignContent: "space-between", padding: "30px", opacity: 0.75 }}>
                            <h1>Information for Property Owners and Investors</h1>
                            <div>
                                <Container style={{ marginBottom: '20px' }} >
                                    <div ><Link href="/property-management-information/Understanding the Role of Property Managing Agents	">	Understanding the Role of Property Managing Agents	</Link></div>
                                    <div ><Link href="/property-management-information/Benefits of Working with Property Managing Agents	">	Benefits of Working with Property Managing Agents	</Link></div>
                                    <div ><Link href="/property-management-information/Choosing the Right Property Managing Agent for Your Needs	">	Choosing the Right Property Managing Agent for Your Needs	</Link></div>
                                    <div ><Link href="/property-management-information/Responsibilities of Property Managing Agents for Single-Family Homes	">	Responsibilities of Property Managing Agents for Single-Family Homes	</Link></div>
                                    <div ><Link href="/property-management-information/Tenant Screening and Placement	">	Tenant Screening and Placement	</Link></div>
                                    <div ><Link href="/property-management-information/Lease Agreement and Rent Collection	">	Lease Agreement and Rent Collection	</Link></div>
                                    <div ><Link href="/property-management-information/Property Maintenance and Repairs	">	Property Maintenance and Repairs	</Link></div>
                                    <div ><Link href="/property-management-information/Dealing with Tenant Issues and Evictions	">	Dealing with Tenant Issues and Evictions	</Link></div>
                                    <div ><Link href="/property-management-information/Managing Lease Agreements and Negotiations	">	Managing Lease Agreements and Negotiations	</Link></div>
                                    <div ><Link href="/property-management-information/Maintenance and Upkeep of Office Buildings	">	Maintenance and Upkeep of Office Buildings	</Link></div>
                                    <div ><Link href="/property-management-information/Tenant Satisfaction and Retention	">	Tenant Satisfaction and Retention	</Link></div>
                                    <div ><Link href="/property-management-information/Financial Management and Budgeting for Commercial Properties	">	Financial Management and Budgeting for Commercial Properties	</Link></div>
                                    <div ><Link href="/property-management-information/Marketing and Advertising for Office Space	">	Marketing and Advertising for Office Space	</Link></div>
                                    <div ><Link href="/property-management-information/Marketing and Attracting Guests for Holiday Rentals	">	Marketing and Attracting Guests for Holiday Rentals	</Link></div>
                                    <div ><Link href="/property-management-information/Booking Management and Reservation Systems	">	Booking Management and Reservation Systems	</Link></div>
                                    <div ><Link href="/property-management-information/Cleaning and Maintenance Services for Short-Term Rentals	">	Cleaning and Maintenance Services for Short-Term Rentals	</Link></div>
                                    <div ><Link href="/property-management-information/Guest Communication and Support	">	Guest Communication and Support	</Link></div>
                                    <div ><Link href="/property-management-information/Maximizing Occupancy and Rental Income	">	Maximizing Occupancy and Rental Income	</Link></div>
                                    <div ><Link href="/property-management-information/Lease Administration and Rent Collection for Apartment Complexes	">	Lease Administration and Rent Collection for Apartment Complexes	</Link></div>
                                    <div ><Link href="/property-management-information/Tenant Screening and Selection Process	">	Tenant Screening and Selection Process	</Link></div>
                                    <div ><Link href="/property-management-information/Property Maintenance and Repairs for Multi-Family Units	">	Property Maintenance and Repairs for Multi-Family Units	</Link></div>
                                    <div ><Link href="/property-management-information/Handling Tenant Complaints and Disputes	">	Handling Tenant Complaints and Disputes	</Link></div>
                                    <div ><Link href="/property-management-information/Tenant Retention Strategies for Apartment Complexes	">	Tenant Retention Strategies for Apartment Complexes	</Link></div>
                                    <div ><Link href="/property-management-information/Lease Negotiations and Tenant Relations for Industrial Properties	">	Lease Negotiations and Tenant Relations for Industrial Properties	</Link></div>
                                    <div ><Link href="/property-management-information/Maintenance and Safety Compliance for Warehouses	">	Maintenance and Safety Compliance for Warehouses	</Link></div>
                                    <div ><Link href="/property-management-information/Managing Inventory and Supply Chain Operations	">	Managing Inventory and Supply Chain Operations	</Link></div>
                                    <div ><Link href="/property-management-information/Energy Efficiency and Sustainability in Industrial Properties	">	Energy Efficiency and Sustainability in Industrial Properties	</Link></div>
                                    <div ><Link href="/property-management-information/Security and Risk Management for Manufacturing Facilities	">	Security and Risk Management for Manufacturing Facilities	</Link></div>
                                    <div ><Link href="/property-management-information/Tenant Mix and Lease Agreements for Retail Properties	">	Tenant Mix and Lease Agreements for Retail Properties	</Link></div>
                                    <div ><Link href="/property-management-information/Property Marketing and Tenant Recruitment	">	Property Marketing and Tenant Recruitment	</Link></div>
                                    <div ><Link href="/property-management-information/Common Area Maintenance and Upkeep	">	Common Area Maintenance and Upkeep	</Link></div>
                                    <div ><Link href="/property-management-information/Tenant Sales Analysis and Performance Monitoring	">	Tenant Sales Analysis and Performance Monitoring	</Link></div>
                                    <div ><Link href="/property-management-information/Lease Renewals and Tenant Improvements for Retail Spaces	">	Lease Renewals and Tenant Improvements for Retail Spaces	</Link></div>
                                    <div ><Link href="/property-management-information/Understanding the Role of HOA Property Managing Agents	">	Understanding the Role of HOA Property Managing Agents	</Link></div>
                                    <div ><Link href="/property-management-information/Financial Management and Budgeting for HOAs	">	Financial Management and Budgeting for HOAs	</Link></div>
                                    <div ><Link href="/property-management-information/Enforcement of Rules and Regulations	">	Enforcement of Rules and Regulations	</Link></div>
                                    <div ><Link href="/property-management-information/Maintenance and Repairs of Common Areas	">	Maintenance and Repairs of Common Areas	</Link></div>
                                    <div ><Link href="/property-management-information/Community Engagement and Conflict Resolution	">	Community Engagement and Conflict Resolution	</Link></div>
                                    <div ><Link href="/property-management-information/Securing and Maintaining Vacant Properties	">	Securing and Maintaining Vacant Properties	</Link></div>
                                    <div ><Link href="/property-management-information/Property Preservation and Inspection Services	">	Property Preservation and Inspection Services	</Link></div>
                                    <div ><Link href="/property-management-information/Marketing Strategies for Selling or Renting Vacant Properties	">	Marketing Strategies for Selling or Renting Vacant Properties	</Link></div>
                                    <div ><Link href="/property-management-information/Managing Real Estate Investments and Return on Investment	">	Managing Real Estate Investments and Return on Investment	</Link></div>
                                    <div ><Link href="/property-management-information/Risk Mitigation and Insurance for Vacant Properties	">	Risk Mitigation and Insurance for Vacant Properties	</Link></div>
                                    <div ><Link href="/property-management-information/Understanding the Unique Challenges of Student Housing	">	Understanding the Unique Challenges of Student Housing	</Link></div>
                                    <div ><Link href="/property-management-information/Marketing and Attracting Student Tenants	">	Marketing and Attracting Student Tenants	</Link></div>
                                    <div ><Link href="/property-management-information/Lease Administration and Roommate Matching	">	Lease Administration and Roommate Matching	</Link></div>
                                    <div ><Link href="/property-management-information/Student Safety and Security Measures	">	Student Safety and Security Measures	</Link></div>
                                    <div ><Link href="/property-management-information/Academic Calendar Management and Turnover Processes	">	Academic Calendar Management and Turnover Processes	</Link></div>
                                    <div ><Link href="/property-management-information/Catering to the Needs of Senior Residents	">	Catering to the Needs of Senior Residents	</Link></div>
                                    <div ><Link href="/property-management-information/Health and Safety Regulations for Senior Living Communities	">	Health and Safety Regulations for Senior Living Communities	</Link></div>
                                    <div ><Link href="/property-management-information/Activities and Social Programs for Senior Residents	">	Activities and Social Programs for Senior Residents	</Link></div>
                                    <div ><Link href="/property-management-information/Staffing and Hiring for Senior Living Facilities	">	Staffing and Hiring for Senior Living Facilities	</Link></div>
                                    <div ><Link href="/property-management-information/Financial Management and Budgeting for Senior Communities	">	Financial Management and Budgeting for Senior Communities	</Link></div>
                                    <div ><Link href="/property-management-information/Recap of Key Concepts and Takeaways	">	Recap of Key Concepts and Takeaways	</Link></div>
                                    <div ><Link href="/property-management-information/Emerging Technologies and Their Impact on Property Management	">	Emerging Technologies and Their Impact on Property Management	</Link></div>
                                    <div ><Link href="/property-management-information/Anticipated Challenges and Opportunities in the Industry	">	Anticipated Challenges and Opportunities in the Industry	</Link></div>
                                    <div ><Link href="/property-management-information/Continuing Education and Professional Development for Property Owners and Investors	">	Continuing Education and Professional Development for Property Owners and Investors	</Link></div>


                                </Container>
                            </div>
                        </div>
                        <div>
                        </div>
                    </Container>
                </div>
            </Parallax>


            <Parallax
                bgImage={image5}
                strength={200}
                renderLayer={(percentage) => (
                    <div id="parallelogram">
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
                                <div>
                                    <h2 style={{ color: "white" }}>THANKS FOR VISITING OUR LIBRARY</h2>
                                    <p style={{ color: "white" }}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            >
                <div style={{ height: 750 }}></div>
            </Parallax >

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
        </div >
    );
}

export default Library;