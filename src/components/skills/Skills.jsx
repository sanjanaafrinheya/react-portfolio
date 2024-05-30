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
<div data-aos="fade-up">
      <Headerresuable main="My" para="Skills"/>
      </div>
        <Row>
              <Col lg={6}>
              <Progressreusable num="95" name="HTML 5" parcent="95%"/>
              </Col>
              <Col lg={6}>
              <Progressreusable num="75" name="JQuery" parcent="75%" />
              </Col>
              <Col lg={6}>
              <Progressreusable num="90" name="CSS3" parcent="90%" />
              </Col>
              <Col lg={6}>
              <Progressreusable num="65" name="Bootstrap" parcent="65%" />
              </Col>
              <Col lg={6}>
              <Progressreusable num="85" name="Javascript" parcent="85%" />
              </Col>
              <Col lg={6}>
              <Progressreusable num="60" name="React" parcent="60%" />
              </Col>
            </Row>
     
    </Container>
   </section>
  )
}

export default Skills