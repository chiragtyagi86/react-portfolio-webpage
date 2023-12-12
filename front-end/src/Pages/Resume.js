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
            <div className="grid-item"><h3>Graduation</h3> <p>Pursuing a B.Tech in Computer Science and Engineering with an expected graduation in 2026. Dedicated to embracing technology, fostering innovation, and achieving excellence in the dynamic realm of computer science.</p> </div>
            <div className="grid-item"><h3>INTER</h3> <p>In 12th-grade PCM with Python, I delved into advanced math and science, demonstrating analytical prowess and coding skills.</p></div>
            <div className="grid-item"><h3>HIGH SCHOOL</h3> <p>I excelled in 10th grade, showcasing dedication, critical thinking, and time management skills, laying a robust academic foundation.</p></div>
        </div>
        <h2>Experiance</h2>
        <div className="grid">
        <div className="grid-item"><h3>Professional Experience</h3> <p>Embark on a journey through my professional endeavors, where I've honed my skills and contributed to diverse projects. From problem-solving to project management, discover the depth of my expertise.</p></div>
            <div className="grid-item"><h3>UI/UX Design Expertise</h3> <p>Dive into the realm of UI/UX design, where each pixel is purposefully placed. Explore my innovative approach to crafting intuitive interfaces that seamlessly marry aesthetics and functionality.</p></div>
            <div className="grid-item"><h3>Coding Chronicles</h3> <p>In the realm of coding, every line tells a story. Unravel the chronicles of my coding adventures, from intricate problem-solving to crafting robust solutions. Experience the artistry of my code.</p></div>
        </div>
    </div>
    </div>
  )
}

export default Resume
