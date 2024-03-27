import React from 'react'
import "./Services.css";
import ServiceCards from '../../utils/ServiceCards/ServiceCards';
const Services = () => {
  return (
    <div className="services-container">
        <h1 className="services-title"><h1>Services</h1></h1>
        <div className="services-box">
          <ServiceCards title="Image Captioning" content="This company specializes in offering various applications, including image captioning services, leveraging advanced AI technology to generate accurate and descriptive captions for images, enhancing accessibility and user experience across digital platforms."></ServiceCards>
          <ServiceCards title="Image Generation" content="This company provides diverse applications, with one notable offering being image generation services. Leveraging cutting-edge AI technology, they create high-quality and customizable images to meet the needs of businesses across various industries, facilitating effective visual communication and content creation.
"></ServiceCards>
          <ServiceCards title="Text Summarizer" content="This company provides diverse applications, with one notable offering being image generation services. Leveraging cutting-edge AI technology, they create high-quality and customizable images to meet the needs of businesses across various industries, facilitating effective visual communication and content creation.
"></ServiceCards>
        </div>
    </div>
  )
}

export default Services
