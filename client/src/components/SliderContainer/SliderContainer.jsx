import React from 'react';
import './SliderContainer.css'; // Import the CSS file with styles

const SliderContainer = () => {
  return (
    <div className='slider-container'>
        <div className="slider-image"></div> {/* Use a <div> for the background image */}
        <div className="slider-content">
            <h3>Welcome To</h3>
            <h1>AiFusion</h1>
            {/* <div className="btns">
            <button className='loginbtn'  type="button"><h1>LOGIN</h1></button>
            </div> */}
        </div>
    </div>
  )
}

export default SliderContainer;
