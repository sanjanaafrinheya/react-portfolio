import React from 'react'
import { Col } from 'react-bootstrap'
import './Testimonialreusable.css'
const Testimonialreusable = (props) => {
  return (
    <>
     
<div className="testi-main">
    <div className="testi-img">
        <img src={props.image} alt="" />
    </div>
       <i>{props.icon}</i>
    <p>{props.para}</p>
    <h4>{props.name}</h4>
    <h5>{props.tata}</h5>
</div>

    </>
  )
}

export default Testimonialreusable