import React from 'react'
import SideNav from '../Components/SideNav/SideNav'
import './css/Resume.css'
const Resume = () => {
  return (
    <div>
<SideNav/>
    <div className='resume'>
        <h1>Resume</h1>
        <h2>education</h2>
        <div className="grid">
            <div className="grid-item"><h3>lorem</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam blanditiis a nihil illo. Quod non veritatis accusantium suscipit ex.</p> </div>
            <div className="grid-item"><h3>lorem</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam blanditiis a nihil illo. Quod non veritatis accusantium suscipit ex.</p></div>
            <div className="grid-item"><h3>lorem</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam blanditiis a nihil illo. Quod non veritatis accusantium suscipit ex.</p></div>
        </div>
        <h2>Experiance</h2>
        <div className="grid">
        <div className="grid-item"><h3>lorem</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam blanditiis a nihil illo. Quod non veritatis accusantium suscipit ex.</p></div>
            <div className="grid-item"><h3>lorem</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam blanditiis a nihil illo. Quod non veritatis accusantium suscipit ex.</p></div>
            <div className="grid-item"><h3>lorem</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam blanditiis a nihil illo. Quod non veritatis accusantium suscipit ex.</p></div>
        </div>
    </div>
    </div>
  )
}

export default Resume
