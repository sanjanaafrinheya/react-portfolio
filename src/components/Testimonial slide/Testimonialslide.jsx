import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Headerresuable from '../reusable/headerreusable/Headerresuable'
import Testimonialreusable from '../reusable/testimonialreusable/Testimonialreusable'
import pic1 from "../../assets/pic1.png"
import { FaQuoteLeft } from "react-icons/fa";
import pic2 from "../../assets/pic2.png"
import pic3 from "../../assets/pic3.png"
import pic4 from "../../assets/pic4.png"
import pic5 from "../../assets/pic5.png"
import Slider from "react-slick";
import "./Testimonialslide.css"
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
  

const Testimonialslide = () => {
    var settings = {
        
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              
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
  <section id="testimonial">
    <Container>
      <div data-aos="fade-up">
    <Headerresuable para="Testimonial"/>
    </div>
        <Row>
        <Slider {...settings}>
        <Testimonialreusable image={pic1} icon={<FaQuoteLeft />} para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, suscipit doloremque explicabo reprehenderit ut dolorum odit voluptas earum excepturi dicta impedit iusto, delectus tempora modi!" name="Jason Tata" tata="Web Development"/>
        <Testimonialreusable image={pic2} icon={<FaQuoteLeft />} para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, suscipit doloremque explicabo reprehenderit ut dolorum odit voluptas earum excepturi dicta impedit iusto, delectus tempora modi!" name="Jason Tata" tata="Web Development"/>
        <Testimonialreusable image={pic3} icon={<FaQuoteLeft />} para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, suscipit doloremque explicabo reprehenderit ut dolorum odit voluptas earum excepturi dicta impedit iusto, delectus tempora modi!" name="Jason Tata" tata="Web Development"/>
        <Testimonialreusable image={pic4} icon={<FaQuoteLeft />} para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, suscipit doloremque explicabo reprehenderit ut dolorum odit voluptas earum excepturi dicta impedit iusto, delectus tempora modi!" name="Jason Tata" tata="Web Development"/>
        <Testimonialreusable image={pic5} icon={<FaQuoteLeft />} para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, suscipit doloremque explicabo reprehenderit ut dolorum odit voluptas earum excepturi dicta impedit iusto, delectus tempora modi!" name="Jason Tata" tata="Web Development"/>
        </Slider>
        </Row>
    </Container>
   
  </section>
  )
}

export default Testimonialslide