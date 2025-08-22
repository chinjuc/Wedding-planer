import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { asset } from '../../assets/asset';
import { Link } from 'react-router-dom';
const Navs = () => {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Navbar.Brand href="#home" style={{color:'white',}} className='nav-topic'> 
                        <img src={asset.logo2} width={40} height={40} style={{marginBottom:'5px', marginRight:'0px', borderRadius:'10px'}} alt="" />
                    DreamDay Planners</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='nav-topic'>
                            <Nav.Link as={Link} to="/" href=""  style={{color:'white'}}> Home</Nav.Link>
                           <Nav.Link href="#events" style={{color:'white'}} >Events</Nav.Link>
                            <Nav.Link href="#about" style={{color:'white'}}>About Us </Nav.Link>
                            <Nav.Link href="#contact" style={{color:'white'}}>Contact </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        {/* <div className='nav-bar'>
            <div>
                <h1>Wedding planner</h1>
            </div>
            <div className='nav-seb'>
                <span>Home</span>
                <span>About Us</span>
                <span>Contact</span>
            </div>
        </div> */}
    </div>
  )
}

export default Navs