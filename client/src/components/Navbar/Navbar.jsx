import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo"><h3>AiFusion</h3></div>
        <div className="navbar-list">
          <ul className='list-items'>
            <li className='list-item'><a>Home</a></li>
            <li className='list-item'><a>About Us</a></li>
            <li className='list-item'><a>Contact Us</a></li>
          </ul>
        </div>
      </div>


    </>

  )
}

export default Navbar
