import "./HeroImg2Styles.css";

import React, { Component } from "react";
import IntroImg from "../assets/intro-bg2.jpg";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img" >
        <img className='into-img' src={IntroImg} alt="IntroImg" />
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
};

export default HeroImg2;
