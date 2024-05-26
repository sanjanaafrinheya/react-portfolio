import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Headerresuable from '../reusable/headerreusable/Headerresuable'
import { FaPhoneAlt , FaGithub ,FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Contact.css'

const Contact = () => {
  return (
 <section id="contact">
    <Container>
      <div  data-aos="fade-up-left">
      <Headerresuable main="My" para="Contact"/>
      </div>
   
        <Row>
            <Col lg={5} >
              <div className="contact-left">
           <h2>Get In Touch</h2>
           <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.</p>
        <h4>Phone:</h4>
        <p><span>  <FaPhoneAlt /></span> +123-456-789 </p>
        <p><span><FaPhoneAlt /></span> +111-222-333 </p>
        <h4>E-mail:</h4>
        <p><span><MdEmail /></span> abc@gmail.com</p>
        <p><span><MdEmail /></span>  xyz@gmail.com</p>
        <h4>Linkedin:</h4>
        <p><span> <FaLinkedin /></span>  https://www.linkedin.com/</p>
        <h4>Github:</h4>
        <p> <span> <FaGithub /></span> https://github.com/</p>
        </div>
            </Col>
            
            <Col lg={7}>
              <div className="input-contact">
                <input  className="input-me"type="text" placeholder='name'/>
                <input  className="input-me" type="email" placeholder='email'/>
                <input className="input-me" type="text" placeholder='subject'/>
                <textarea className="massage"id="w3review" name="w3review" rows="4" cols="62" placeholder='massages'></textarea>
              <button className='contact-us'>
                <a href="#">Send Massage</a>
              </button>
              </div>
            </Col> 
        </Row>
    </Container>
 </section>
  )
}

export default Contact