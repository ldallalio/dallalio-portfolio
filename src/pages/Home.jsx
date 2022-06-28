/* eslint-disable react/no-unescaped-entities */
import React from "react";
import heroImage from "../assets/images/logan.jpg";

function Home() {
  return (
    <div className="heroSection">
      <div className="heroImage">
        <img src={heroImage} alt="Logan" />
      </div>
      <div className="heroText">
        <h1 className="hereTitle">Front-End Developer</h1>
        <h2 className="hereSub">
          I'm a Front-End Developer who is Passionate about building beautiful,
          responsive websites.
        </h2>
      </div>
      <div className="heroButton">
        <a href="#projects" className="menuBtn">
          Projects
        </a>
        <a href="#contact" className="menuBtn">
          Contact
        </a>
        <a href="#about" className="menuBtn">
          About
        </a>
      </div>
    </div>
  );
}

export default Home;
