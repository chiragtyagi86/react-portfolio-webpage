import React from 'react'
import './Hero.css'
import home from '../Assets/home.jpeg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-section">
      <span>HI THERE!</span>
        <h1>I'M CHIRAG</h1>
        <p className='pl'>full-stack devloper, ui-desianer</p>
        <p className='ol'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto expedita perferendis neque dolor. At cum voluptatum, reprehenderit corporis ducimus eveniet provident? Dolores voluptatibus similique numquam, voluptate nemo quo a dicta excepturi facere inventore quisquam corporis obcaecati vero. Provident, dolorum cumque nostrum nisi veritatis magnam. </p>
      <Link to="/about">  <button> More About me</button></Link>
      </div>
      <div className="right-section">
        <img src={home} alt="" />
       
      </div>
    </div>
  )
}

export default Hero
