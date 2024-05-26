import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <section id="footer">
      <Container >
        <Row className='footer-middle'>
            <Col lg={6}>
                <div className="footer-icon">
                <FaFacebook />
                <AiFillTwitterCircle />
                <FaInstagramSquare />
                <FaLinkedin />
                <p>Created By <span>Sanjana Afrin</span> All Rights Reserved</p>
                </div>

            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer