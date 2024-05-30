import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CountUp from 'react-countup';
import "./Counterup.css"
const Counterup = (props) => {
  return (
    <>
                            
                            <Col lg={6}>
                                    <div className="counterup">
                                    {/* <CountUp start={props.nums} end={props.numl}>
  {({countUpRef, start }) => (
    <div>
      <span ref={countUpRef} /><span>+</span>
      <h4>{props.para}</h4>
    </div>
  )}
</CountUp> */}

<CountUp start={props.nums} end={props.numl} delay={0}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>

       </div>
       </Col>
                        
    </>
  )
}

export default Counterup