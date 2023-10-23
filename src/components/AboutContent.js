import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";

const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h1>Who Am I?</h1>
      <p>Im a React front-end Developer Create Responsive Secure Websites for My Clients</p>
      <Link className="btn" to="/contact">CONTACT</Link>
    </div>
    <div className="right">
      <div className="react-img">
        <img className="react-img-left" src={react2} alt="ReactImg" />
        <img className="react-img-right" src={react1} alt="ReactImg" />
      </div>
    </div>
  </div>;
};

export default AboutContent;
