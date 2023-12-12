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
        <p className="ho">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          voluptas et omnis! Doloremque nobis animi magnam, expedita
          exercitationem facilis qui, deleniti maxime aperiam vero minima quidem
          iure eius necessitatibus praesentium cumque? Similique, veritatis
          repudiandae fugiat quis odio ipsam dolorem saepe accusantium quidem
          tempore aliquid est ex quae consectetur error, corrupti aspernatur ea
          pariatur explicabo molestiae sint quaerat eius voluptatem. Ullam
          accusamus, libero reprehenderit cumque perspiciatis corrupti.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt magnam id nobis harum deleniti libero tenetur earum!
                  Cupiditate
                </span>
              </li>
              <li>
                <h4>Front-End</h4>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus dolores magnam explicabo placeat reprehenderit
                  doloremque. Enim repellendus esse expedita quas!
                </span>
              </li>
              <li>
                <h4>FullStack</h4>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  eum labore facilis voluptatum repellat ipsam laboriosam
                  expedita commodi impedit tempora?
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
