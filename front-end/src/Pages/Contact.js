import React from "react";
import SideNav from "../Components/SideNav/SideNav";
import dex from "../Components/Assets/screen.png";
import phone from "../Components/Assets/phone.png";
import insta from "../Components/Assets/icons8-instagram-24.png";
import facebook from "../Components/Assets/icons8-facebook-24.png";
import linkdin from "../Components/Assets/icons8-linkedin-24.png";
import "./css/Contact.css";

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
          Let's stay connected! Feel free to reach out through the provided
          contact form or directly via email. I'm eager to hear your thoughts,
          answer queries, or explore potential collaborations. Let's embark on
          this journey together!
        </p>

        <div className="icon">
          <div className="item">
            <img src={dex} alt="" />
            <a
              href="https://chiragtyagi86.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              chiragtyagi86.netlify.com
            </a>
            <a
              href="http://www.ijebr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ijebr.com
            </a>
       
          </div>
          <div className="item">
            <img src={phone} alt="" />
            <p>Call at +911396796806</p>
            <p>Messeage at +918192968687</p>
          </div>
        </div>
        <div id="social">
          <div>
          <a href="https://www.instagram.com/CHIRAGTYAGI86/">
            <img src={insta} alt="" />
          </a>
          </div>
          <div>

         
          <a href="https://www.facebook.com/chiragtyagi86/">
            <img src={facebook} alt="" />
          </a>
          </div>
          <div>

          <a href="https://www.linkedin.com/in/chiragtyagi86/">
            <img src={linkdin} alt="" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
