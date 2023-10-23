import "./FooterStyles.css";

import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>Bangladesh.</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>+966-550-309-664</p>
            </div>
          </div>
          <div className="email">
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>aliabdulghani@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="right">
          <h4>About The Company</h4>
          <p>This is me Fahimul kabir. CEO & Founder of Rech2etc. I enjoy Discussing new Projects and design</p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
