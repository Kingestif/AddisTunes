import React from "react";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1 className="logo">AddisTunes</h1>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Discover</a>
        <a href="#">About</a>
      </nav>

      <button className="start-btn">Get Started</button>
    </header>
  );
}