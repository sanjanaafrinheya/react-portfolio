import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import port1 from '../../assets/portfolio1.png'
import Headerresuable from '../reusable/headerreusable/Headerresuable';
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import port2 from '../../assets/portfolio2.png'
import port3 from '../../assets/portfolio3.png'
import port4 from '../../assets/portfolio4.png'
import port5 from '../../assets/portfolio5.png'
import port6 from '../../assets/portfolio6.png'

import './Portfolio.css'
import Portreusable from '../reusable/portreusable/New folder/Portreusable';
const Portfolio = () => {
  return (
    <section id="portfolio">
        <Container>
        <div  data-aos="fade-up-left">
        <Headerresuable main="My" para="Portfolio"/>
        </div>
            <Row>
                <Col lg={12}>
                <Tabs
      defaultActiveKey="all"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="all" title="All" className='menuu'>
        <Row>
            <Portreusable image={port1} icon={<FaMagnifyingGlassPlus />} title="Web Development" para="Category"/>
            <Portreusable image={port2} icon={<FaMagnifyingGlassPlus />} title="Web Development" para="Category"/>
            <Portreusable image={port3} icon={<FaMagnifyingGlassPlus />} title="Graphic Designing" para="Category"/>
            <Portreusable image={port4} icon={<FaMagnifyingGlassPlus />} title="Graphic Designing" para="Category"/>
            <Portreusable image={port5} icon={<FaMagnifyingGlassPlus />} title="Photography" para="Category"/>
            <Portreusable image={port6} icon={<FaMagnifyingGlassPlus />} title="Photography" para="Category"/>
        </Row>
      
      </Tab>
      <Tab eventKey="Web Development" title="Web Development">
        <Row>
      <Portreusable image={port1} icon={<FaMagnifyingGlassPlus />} title="Web Development" para="Category"/>
            <Portreusable image={port2} icon={<FaMagnifyingGlassPlus />} title="Web Development" para="Category"/>
            </Row>
      </Tab>
      <Tab eventKey="graphic design" title="Graphic Design">
        <Row>
      <Portreusable image={port3} icon={<FaMagnifyingGlassPlus />} title="Graphic Designing" para="Category"/>
            <Portreusable image={port4} icon={<FaMagnifyingGlassPlus />} title="Graphic Designing" para="Category"/>
            </Row>
      </Tab>
      <Tab eventKey="photography" title="Photography" >
        <Row>
      <Portreusable image={port5} icon={<FaMagnifyingGlassPlus />} title="Photography" para="Category"/>
            <Portreusable image={port6} icon={<FaMagnifyingGlassPlus />} title="Photography" para="Category"/>
            </Row>
      </Tab>
    </Tabs>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Portfolio