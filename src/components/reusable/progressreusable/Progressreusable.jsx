import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import "./Progressreusable.css"
import { Row,Col } from 'react-bootstrap'
const Progressreusable = (props) => {
  return (
    
  <Row>  
<Col lg={6}>
<div className="black">
      <div className="star d-flex ">
        <div className="one">
        <h4>{props.name}</h4>
        </div>
        <div className="two">
          <span>{props.parcent}</span>
        </div>
      </div>
<ProgressBar completed={props.num}
             animateOnRender={true} 
             transitionDuration="6s"
              isLabelVisible={false}
              bgColor="#bc8cf2"
              baseBgColor="#222"
              height="10px"  />   
    </div>
</Col>
    </Row>
  
  )
}

export default Progressreusable