import React from 'react'
import { Col } from 'react-bootstrap'
import './Qualireusable.css'
const Qualireusable = (props) => {
  return (
   <>
     <Col lg={6} >
                <div className="quali-left " data-aos="fade-right">
                    <div className="cap">
                     {props.icon}
                    </div>
                    <div className="quali-text">
                      <h6>{props.year}</h6>
                      <h4>{props.title}</h4>
                      <p>{props.para}</p>
                      </div>
                </div>
            </Col>
   </>
  )
}

export default Qualireusable