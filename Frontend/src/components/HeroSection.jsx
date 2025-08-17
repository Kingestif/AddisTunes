import "./HeroSection.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Left side */}
      <div className="hero-text">
        <h2 className="hero-title">
          Listen and <br /> Stream <br /> Everywhere
        </h2>
        <p className="hero-description">
          Discover your favorite tunes anytime, anywhere with Addis Tunes. Stream seamlessly, create playlists, and let the rhythm move you.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={()=>navigate("/songs")}>Get Started</button>
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
