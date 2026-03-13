import React from "react";

export function Footer() {
  return (
    <footer id="about" className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            <div className="logo-icon">⏚</div>
            <span className="logo-text">EcoValuate</span>
          </div>
          <p className="footer-text">
            EcoValuate helps you turn old electronics into fair cash offers
            while ensuring responsible recycling.
          </p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#market-rates">Market Rates</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>support@ecovaluate.com</li>
            <li>+91‑555‑123‑4567</li>
          </ul>
        </div>
        <div className="footer-cta">
          <h4>Ready to get started?</h4>
          <button className="btn btn-primary">Scan Your First Item</button>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} EcoValuate. All rights reserved.</span>
      </div>
    </footer>
  );
}

