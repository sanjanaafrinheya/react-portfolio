import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import ami from "../../assets/sanjana.jpg"
import './About.css'
import CountUp from 'react-countup';

import { FaDownload } from "react-icons/fa";
import Counterup from '../reusable/counterreusable/Counterup';
import Headerresuable from '../reusable/headerreusable/Headerresuable';

const About = () => {
  return (
    <section id="about">
        <div  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <Headerresuable para="About"/> 
        </div>
    <Container>
        <Row>
            <Col lg={4} >
                <div className="about-img" data-aos="flip-left">
                    <img src={ami} alt="" />
                </div>
            </Col>
            <Col lg={8}>
                <div className="about-text">
                    <h2>My Name Is Sanjana Afrin.</h2>
                    <p>I am a skilled front-end web developer, crafts digital experiences that captivate. With precision and creativity,I try to blends code and design, weaving seamless interfaces that engage users. My passion for innovation drives her to push boundaries, creating dynamic websites that leave a lasting impression.</p>
                </div>
                <Row>
                    <Col lg={4}>
                        <div className="info">
                        <p>Age: 32</p>
                        <p>Gender: Female</p>
                        <p>Language: Bengali, English</p>
                        <p>Work: Front-End Developer</p>
                        <p>Freelance: Available</p>
                        <button className='about-btn'>
                            <a href="#">Download CV  <FaDownload /> </a>
                        </button>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Counterup numl="4"  para="Years of Experience"/>
                            <Counterup numl="100"  para="Projects Completed"/>
                            <Counterup numl="80"  para="Happy Clients"/>
                            <Counterup numl="20"  para="Awards Won"/>
                        </Row>

                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default About