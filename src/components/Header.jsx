import React from "react";

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <div className="logo-icon">⏚</div>
          <span className="logo-text">EcoValuate</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#ai-identifier">AI Identifier</a>
          <a href="#analytics-dashboard">Dashboard</a>
          <a href="#about">About</a>
        </nav>
        <button className="btn btn-primary header-live-pill">Live Prices</button>
      </div>
    </header>
  );
}

