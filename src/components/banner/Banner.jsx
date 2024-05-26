import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import { ReactTyped } from "react-typed";
import { FaUserAlt } from "react-icons/fa";
import './Banner.css';
import { BiColor } from 'react-icons/bi';
import ami from '../../assets/amiii.jpg';
const Banner = () => {
  return (
  <section id="home">
  <Container>
    <Row>

        <Col lg={6}>
        <div className="bann-left">
            <h2 >Hi There!<br/> I am a
             
            <ReactTyped
          
      strings={[
         "Web Developer",
         "Web Designer",
      ]}
      typeSpeed={40}
      backSpeed={50}
   
      loop
    >
    </ReactTyped>
            </h2>
          
    
    <p>Creative Web Developer Offering 4+ Years Of Experience Providing High-Impact Web Solutions For Many Different Organizations.</p>
    <button className='btn-me'>
              <a href="#">About Me <FaUserAlt /></a>  
    </button>
    </div>
        </Col>
     
        <Col lg={6}>
          <div className="bann-image">
            <img src={ami} alt="" />
          </div>
        </Col>
    </Row>
  </Container>
  </section>
  )
}

export default Banner