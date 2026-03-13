import React from "react";

export function DashboardPreview() {
  return (
    <section className="section muted">
      <div className="container">
        <h2 className="section-title">See Your Impact in Real‑time</h2>
        <p className="section-subtitle">
          Track every item you sell, total earnings, and kilograms of e‑waste
          saved from landfills in your EcoValuate dashboard.
        </p>
        <div className="dashboard-grid">
          <div className="card impact-card">
            <h3>Impact Card</h3>
            <p className="impact-metric">
              You have saved <span>5.2kg</span> of e‑waste from landfills.
            </p>
            <ul className="impact-list">
              <li>
                Motherboard <span>₹450</span>
              </li>
              <li>
                RAM <span>₹120</span>
              </li>
              <li>
                Hard Drive <span>₹300</span>
              </li>
            </ul>
          </div>
          <div className="card results-card">
            <div className="results-header">
              <h3>Results Page</h3>
              <div className="pill">Estimated Value: ₹560</div>
            </div>
            <div className="results-body">
              <div className="device-placeholder large" />
              <div className="results-list">
                <div className="results-row">
                  <span>1x Intel CPU</span>
                  <span>₹200</span>
                </div>
                <div className="results-row">
                  <span>2x Gold Fingers</span>
                  <span>₹150</span>
                </div>
                <div className="results-row">
                  <span>1x Copper Heatsink</span>
                  <span>₹210</span>
                </div>
              </div>
              <div className="results-actions">
                <button className="btn btn-primary wide">Accept &amp; Sell</button>
                <button className="btn btn-ghost wide">Reject</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

