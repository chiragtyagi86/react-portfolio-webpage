import React from 'react'
import './Navbar.css'
import home from '../Assets/home-png.png'
import breif from '../Assets/breif-icon.png'
import user from '../Assets/user-icon.png'
import speaker from '../Assets/speaker-icon.png'
import tv from '../Assets/tv-icon.png'
import contact from '../Assets/contact-icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar fixed'>
      <ul>
        <Link to="/"> <li><img src={home} alt="" /></li></Link>
        <hr />
        <Link to="/about"> <li><img src={user} alt="" /></li></Link>
        <hr />
        <li><img src={breif} alt="" /></li>
        <hr />
        <li><img src={tv} alt="" /></li>
        <hr />
        <li><img src={speaker} alt="" /></li>
        <hr />
        <li><img src={contact} alt="" /></li>
      </ul>
    </div>
  )
}

export default Navbar
