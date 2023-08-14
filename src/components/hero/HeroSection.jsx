import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="main">
      <div className="hero-image">
        <img src="Images/heroimage.png" />
      </div>
      <div className="hero-text">
        <h1 className="hero-heading">
        A few words about this blog platform, Ghost, and how this site was made
        </h1>
        <p className="hero-para
        ">Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
      </div>
    </div>
  );
}

export default HeroSection;
