import React from 'react'
import './Hero.css'
import home from '../Assets/home.jpeg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-section">
      <span>HI THERE!</span>
        <h1>I'M 
        <span className='ip' >CHIRAG</span></h1>
        <p className='pl'>full-stack devloper, ui-designer</p>
        <p className='ol'>Welcome to my digital realm, where creativity meets functionality. As a versatile full-stack developer and UI designer, I craft seamless digital experiences. From robust back-end solutions to pixel-perfect interfaces, I bring your visions to life with a harmonious fusion of code and design. Explore the intersection of innovation and aesthetics on this journey through my portfolio of captivating projects. </p>
      <Link to="/about"><button> More About me</button></Link>
      </div>
      <div className="right-section">
        <img src={home} alt="" />
       
      </div>
    </div>
  )
}

export default Hero
