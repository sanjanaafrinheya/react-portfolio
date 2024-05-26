import React from 'react'
import { Col } from 'react-bootstrap'
import "./Blogreusable.css"

const Blogreusable = (props) => {

   
  return (
    <>
        
          <div className="blog-main">
            <div className="blog-img">
            <img src={props.image} alt="" />
            </div>
            <div className="blog-text">
              <div className="blog-left"> {props.icon} {props.date}</div>
              <div className="blog-right"> {props.icon2} {props.admin}</div>
            </div>
            <div className="line"></div>
            <div className="last">
            <h4>{props.title}</h4>
            <p>{props.para} </p>
            <button className='blog-btn'>
             <a href="#"> {props.btn}  {props.icon3}</a>
            </button>
            </div>
            
    
    </div>

    </>
  )
}

export default Blogreusable