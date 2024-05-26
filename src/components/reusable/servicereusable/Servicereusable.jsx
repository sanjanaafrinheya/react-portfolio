import React from 'react'
import { Col } from 'react-bootstrap'
import './Servicereusable.css'
const Servicereusable = (props) => {
  return (
   <>
    <Col lg={4}>
                <div className="service-main">
                    <div className="icon">
                    {props.icon}
                    </div>
                
                  <div className="service-text">
                    <h2>{props.title}</h2>
                    <p>{props.para}</p>
                  </div>
                </div>
            </Col>
   </>
  )
}

export default Servicereusable