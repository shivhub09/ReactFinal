import React from 'react'
import './FAQCards.css'
const FAQCards = (props) => {
  return (
    <div className="FAQ-card-container">
        
        <h1 className="FAQ-card-title">{props.title}</h1>
        <p className="FAQ-card-content">{props.content}</p>
    </div>
  )
}

export default FAQCards
