import React from 'react'
import './Skills.css'
import { Col, Container, Row } from 'react-bootstrap'
import ProgressBar from "@ramonak/react-progress-bar";
import Progressreusable from '../reusable/progressreusable/Progressreusable';
import Headerresuable from '../reusable/headerreusable/Headerresuable';

const Skills = () => {
  return (
   <section id="skill">
    <Container>
{/* <div data-aos="fade-up-left">
      <Headerresuable main="My" para="Skills"/>
      </div> */}
        <Row>
              <Col lg={6}>
              <Progressreusable/>
              </Col>
            </Row>
     
    </Container>
   </section>
  )
}

export default Skills