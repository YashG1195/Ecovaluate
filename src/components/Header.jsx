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
          <a href="#how-it-works">How It Works</a>
          <a href="#market-rates">Market Rates</a>
          <a href="#about">About Us</a>
        </nav>
        <button className="btn btn-primary">Start Scanning</button>
      </div>
    </header>
  );
}

