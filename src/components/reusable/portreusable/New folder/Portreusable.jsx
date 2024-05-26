import React from 'react'
import { Col } from 'react-bootstrap'

const Portreusable = (props) => {
  return (
   <>
   <Col lg={4}>
                <div className="port-main">
            <div className="port">
                <div className="port-overlay">
                    <h4>{props.title}</h4>
                    <p>{props.para}</p>
                    <i>{props.icon}</i>
                </div>
            <img src={props.image} alt="" />

       </div>
       </div>
            </Col>
   </>
  )
}

export default Portreusable