import React from "react";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI-powered e‑waste valuation</p>
          <h1>
            Turn Your Old Gadgets into{" "}
            <span className="accent">Cash &amp; Green Earth.</span>
          </h1>
          <p className="hero-subtitle">
            Instantly value your e‑waste with our AI-powered scanner. Find
            hidden treasure in broken electronics and keep them out of
            landfills.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Scan My Item Now</button>
            <button className="btn btn-ghost">See Today&apos;s Rates</button>
          </div>
          <div className="hero-highlight">
            <strong>Transparent &amp; Fair Pricing</strong>
            <span> • Powered by real-time market data</span>
          </div>
        </div>
        <div className="hero-visual card-split">
          <div className="card phone-card">
            <div className="phone-header">
              <span className="logo-text small">EcoValuate</span>
            </div>
            <div className="phone-body">
              <div className="device-placeholder" />
              <div className="chip-tag">CPU</div>
              <div className="chip-tag secondary">RAM Stick</div>
              <div className="price-pill">₹450 Estimated Value</div>
            </div>
          </div>
          <div className="card motherboard-card">
            <div className="card-label">Estimated Value</div>
            <div className="card-price">₹560</div>
            <p className="card-meta">Sample value for desktop motherboard</p>
          </div>
        </div>
      </div>
    </section>
  );
}

