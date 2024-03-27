import React from 'react'
import './ServiceCards.css'
const ServiceCards = (props) => {
  return (
    <div className="serviceCard-container">
        {/* <div className="card-icon"><img src={props.icon} alt="" /></div> */}
        <div className="card-title"><h1>{props.title}</h1></div>
        <div className="card-content"><p>{props.content}</p></div>
    </div>
  )
}

export default ServiceCards
