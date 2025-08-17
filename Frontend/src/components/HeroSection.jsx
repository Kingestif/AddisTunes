import "./HeroSection.css";
import React from "react";


export function HeroSection() {
  return (
    <section className="hero">
      {/* Left side */}
      <div className="hero-text">
        <h2 className="hero-title">
          Listen and <br /> Stream <br /> Everywhere
        </h2>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At possimus
          assumenda debitis modi, in ipsa reiciendis, nemo perspiciatis corporis.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Get Started</button>
          <a href="#" className="learn-more">Learn More</a>
        </div>
      </div>

      {/* Right side */}
      <div className="hero-image">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <img src="/assets/bg7.png" alt="Smiling Person" />
      </div>
    </section>
  );
}
