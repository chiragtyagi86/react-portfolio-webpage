import React from "react";
import SideNav from "../Components/SideNav/SideNav";
import dex from "../Components/Assets/screen.png";
import phone from "../Components/Assets/phone.png";
import './css/Contact.css'


const Contact = () => {
  return (
    <div>
      <SideNav />
      <div className="contact">
        <h1>Contact</h1>
        <h2>
          Feel <b>free</b> to contact me!
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          neque, dignissimos nostrum quod quas atque fuga officia ullam sapiente
          mollitia in veritatis iure assumenda nihil!
        </p>

        <div className="icon">
          <div className="item">
            <img src={dex} alt="" />
            <a
              href="http://www.ijebr.com/chirag"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ijebr.com
            </a>
            <a
              href="http://www.ijebr.com/chirag"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.chirag.ijebr.com
            </a>
          </div>
          <div className="item">
            <img src={phone} alt="" />
            <p>Call at +911396796806</p>
            <p>Messeage at +918192968687</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
