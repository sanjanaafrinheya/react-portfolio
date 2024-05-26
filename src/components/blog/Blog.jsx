import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Slider from "react-slick";
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"
import blog4 from "../../assets/blog4.png"
import blog5 from "../../assets/blog5.png"
import Headerresuable from '../reusable/headerreusable/Headerresuable';
import Blogreusable from '../reusable/blogreusable/Blogreusable';
import "./Blog.css"
import { CgCalendarDates } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const Blog = () => {
  var settings = {
   dots:true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint:767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };  
  return (
    
  <section id="blogs">
    <div  data-aos="fade-up-left">
    <Headerresuable main="My" para="Blog"/>
    </div>
  
    <Container>
        <Row>
        <Slider {...settings}>
<Blogreusable image={blog1}  icon={ <CgCalendarDates />} icon2={<FaUserAlt /> } icon3={ <FaArrowRight />} date="1st jan 2022" admin="By Admin" title="How To Make Your Website Responsive" para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
btn="Read More" />
<Blogreusable image={blog2}  icon={ <CgCalendarDates />} icon2={<FaUserAlt /> } icon3={ <FaArrowRight />} date="1st jan 2022" admin="By Admin" title="Learn Web Development As a Begainner" para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
btn="Read More" />
<Blogreusable image={blog3}  icon={ <CgCalendarDates />} icon2={<FaUserAlt /> } icon3={ <FaArrowRight />} date="1st jan 2022" admin="By Admin" title="Complete Roadmap for Web Development" para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
btn="Read More" />
<Blogreusable image={blog4}  icon={ <CgCalendarDates />} icon2={<FaUserAlt /> } icon3={ <FaArrowRight />} date="1st jan 2022" admin="By Admin" title="Websites and Tools For Every Web Developer" para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
btn="Read More" />
<Blogreusable image={blog5}  icon={ <CgCalendarDates />} icon2={<FaUserAlt /> } icon3={ <FaArrowRight />} date="1st jan 2022" admin="By Admin" title="Top Ten Website Tricks for Every Web Developer" para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
btn="Read More" />
   
   </Slider>
        </Row>
    </Container>

  </section>
  )
}

export default Blog