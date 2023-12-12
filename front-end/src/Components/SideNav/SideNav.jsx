import React from 'react'

import './SideNAv.css'
import home from '../Assets/home.jpeg'
import { NavLink } from 'react-router-dom'

const SideNav = () => {

 const navLinkstyles = ({isActive}) =>{
    return {
      color: isActive ? 'white' : 'black',
      padding: isActive ? '50px' : '0px',
    }
 }
  return (
    <div className='sidenav'>
      <img src={home} alt="" />
      <ul>
        <li className='dot'></li>
            <hr />
        <NavLink to='/' style={{textDecoration: "none", color: "black" ,navLinkstyles}} isActive >
           <li>HOME</li>
          </NavLink>
        <hr />
        <NavLink to='/about' style={{textDecoration: "none", color: "black" ,navLinkstyles}} isActive >
           <li className={({ isActive }) => "underline" + isActive ? " active" : ""} >ABOUT ME</li>
          </NavLink>
        <hr />
        <NavLink to='/resume' style={{textDecoration: "none", color: "black", navLinkstyles }}>
           <li className={({ isActive }) => "underline" + isActive ? " active" : ""} >RESUME</li>
          </NavLink>
        <hr />
        <NavLink style={{textDecoration: "none", color: "black"}}>
           <li className='dis'>PORTFOLIO</li>
          </NavLink>
        <hr />
        <NavLink style={{textDecoration: "none", color: "black"}}>
           <li className='dis'>TESTIMONIALS</li>
          </NavLink>
        <hr />
        <NavLink to='/contact'style={{textDecoration: "none", color: "black", navLinkstyles}}>
           <li className={({ isActive }) => "underline" + isActive ? " active" : ""}> CONTACT</li>
          </NavLink>
    <hr />
    <li className="dot"></li>
      </ul>
    </div>
  )
}

export default SideNav
