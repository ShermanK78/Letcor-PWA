import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

<link rel="manifest" href="C:/Users/Camilla/Desktop/MERN/Projects/Letcor/property-manager-next/public/manifest.json"/>


const logo =
 "/static/letcor logo.png";

// Header component displays the navigation bar and user login status
function Header() {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarContainerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1000
  };

  const navbarStyle = {
    backgroundColor: navbarBackground ? 'darkblue' : 'transparent',
    opacity: '0.60',
    color: "white",
    width: "100%",
    position: "absolute"
  };
     


  const linkStyle = {
    color: 'white',
    backgroundColor: 'darkblue'
    
  };

  return (
    <div style={navbarContainerStyle}>
{[false, 'lg'].map((expand) => (
<Navbar style={{ ...navbarStyle, paddingLeft: 50 }}  key={expand} expand={expand}>
<Container>

      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="200"
          height="100"
          className="d-inline-block align-center"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                              style={{ backgroundColor: 'darkblue', color: 'white' }}

                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title 
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                                style={{ color: 'white' }}                                
                                >
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Link href="/" style={linkStyle} className='btn'>ABOUT US</Link>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Link href="/Listings" style={linkStyle} className='btn'>LISTINGS</Link>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                   <Link href="/ContactPage" style={linkStyle} className='btn'>CONTACT US</Link>
                                   &nbsp;
                                    &nbsp;
                                    &nbsp;
                                   <Link href="/Library" style={linkStyle} className='btn'>LIBRARY</Link>



                                </Nav>
                              
                              
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>

    </Navbar>
    ))}
    </div>
  );
  }

export default Header;
