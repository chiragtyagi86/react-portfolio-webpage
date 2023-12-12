import React from "react";
import SideNav from "../Components/SideNav/SideNav";
import "./css/About.css";
import home from "../Components/Assets/about.png";

const About = () => {
  return (
    <div className="main">
      <SideNav />
      <div className="about">
        <h1>ABout me</h1>
        <p className="hi">
          I'm <b>Chirag Tyagi,</b> Full stack devloper / UI Designer
        </p>
        <p className="ho">Welcome to my digital realm, where creativity meets functionality. As a versatile full-stack developer and UI designer, I craft seamless digital experiences. From robust back-end solutions to pixel-perfect interfaces, I bring your visions to life with a harmonious fusion of code and design. Explore the intersection of innovation and aesthetics on this journey through my portfolio of captivating projects.
        </p>
        <div className="info">
          <div className="left">
            <img src={home} alt="" />
          </div>
          <div className="right">
            <h3>What I Do?</h3>
            <ul>
              <li>
                <h4>Web Design</h4>
                <span>
                Innovative web designs merge form and function, captivating users with seamless navigation and visually stunning aesthetics.
                </span>
              </li>
              <li>
                <h4>Front-End</h4>
                <span>Front-end designs redefine user experiences, blending artistic flair with intuitive interfaces for a visually compelling digital journey.
                </span>
              </li>
              <li>
                <h4>FullStack</h4>
                <span>
                Embrace the synergy of my full-stack expertise, delivering dynamic websites with scalable architecture and intuitive user interactions. Elevate your digital presence with a fusion of innovation and precision.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-o">
      </div>
    </div>
  );
};

export default About;
