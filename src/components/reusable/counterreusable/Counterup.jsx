import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import "./Counterup.css"
const Counterup = (props) => {
  return (
    <>
                            
                            <Col lg={6}>
                                    <div className="counterup">
                                    <CountUp end={props.numl}>
  {({countUpRef, end }) => (
    <div>
      <span ref={countUpRef} /><span>+</span>
      <h4>{props.para}</h4>
    </div>
  )}
</CountUp>

       </div>
       </Col>
                        
    </>
  )
}

export default Counterup