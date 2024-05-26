import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import './Headerreusable.css';
const Headerresuable = (props) => {
  return (
   <>
   <Row className='skill-head'>
            <Col lg={6}>
                <div className="header">
         <h2><span>{props.main} </span>{props.para}</h2>
         <div className="under"></div>
         </div>
            </Col>
            </Row>
   </>
  )
}

export default Headerresuable