import React from 'react'
import './SideNAv.css'
import home from '../Assets/home.jpeg'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='sidenav'>
      <img src={home} alt="" />
      <ul>
        <li className='dot'></li>
            <hr />
        <Link to='/' style={{textDecoration: "none", color: "black"}}>
           <li>HOME</li>
          </Link>
        <hr />
        <Link to='/about' style={{textDecoration: "none", color: "black"}}>
           <li>ABOUT ME</li>
          </Link>
        <hr />
        <Link to='/resume' style={{textDecoration: "none", color: "black"}}>
           <li>RESUME</li>
          </Link>
        <hr />
        <Link style={{textDecoration: "none", color: "black"}}>
           <li className='dis'>PORTFOLIO</li>
          </Link>
        <hr />
        <Link style={{textDecoration: "none", color: "black"}}>
           <li className='dis'>TESTIMONIALS</li>
          </Link>
        <hr />
        <Link to='/contact'style={{textDecoration: "none", color: "black"}}>
           <li>CONTACT</li>
          </Link>
    <hr />
    <li className="dot"></li>
      </ul>
    </div>
  )
}

export default SideNav
