import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Service.css"
import Headerresuable from '../reusable/headerreusable/Headerresuable'
import { FaCode } from "react-icons/fa";
import Servicereusable from '../reusable/servicereusable/Servicereusable';
import { FaPaintBrush } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { HiMiniMegaphone } from "react-icons/hi2";
import { FaFileVideo } from "react-icons/fa";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";


const Service = () => {
  return (
   <section id="service">
    <Container>
    <div  data-aos="fade-up-left">
    <Headerresuable main="My" para="Services"/>
    </div>
        <Row>
           <Servicereusable  icon={<FaCode />} title="Web Design"para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet tenetur vitae!"/>
           <Servicereusable  icon={<FaPaintBrush />} title="Graphic Design"para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet tenetur vitae!"/>  
           <Servicereusable  icon={<FaCamera />} title="Photography"para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet tenetur vitae!"/>  
           <Servicereusable  icon={<HiMiniMegaphone />} title="Digital Marketing"para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet tenetur vitae!"/>  
           <Servicereusable  icon={<FaFileVideo />} title="Video Editing"para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet tenetur vitae!"/>  
           <Servicereusable  icon={<FaMagnifyingGlassDollar />} title="SEO MArketing"para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet tenetur vitae!"/>  
        </Row>
    </Container>
   </section>
  )
}

export default Service