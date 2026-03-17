import React from "react";

const recentRows = [
  { device: "Samsung Galaxy S21", condition: "Damaged", value: "+₹860", status: "RECYCLED" },
  { device: "Dell Laptop Motherboard", condition: "Broken", value: "+₹1,080", status: "PENDING" },
  { device: "iPhone 12", condition: "Working", value: "+₹4,050", status: "RECYCLED" },
  { device: "RTX 3060 GPU", condition: "Parts Only", value: "+₹2,320", status: "RECOVERED" },
];

export function AnalyticsDashboard() {
  return (
    <section id="analytics-dashboard" className="section-dark">
      <div className="container">
        <p className="section-kicker">// ANALYTICS</p>
        <h2 className="section-title-dark">Dashboard</h2>
        <p className="section-subtitle-dark">
          Track every analysis, see total value recovered, and understand how
          much e‑waste you&apos;ve diverted from landfills.
        </p>

        <div className="metrics-grid">
          <div className="metric-card card-dark">
            <span className="metric-label">Devices analyzed</span>
            <span className="metric-value">24</span>
            <span className="metric-foot">+8 this month</span>
          </div>
          <div className="metric-card card-dark">
            <span className="metric-label">Total value unlocked</span>
            <span className="metric-value">₹18,420</span>
            <span className="metric-foot">+₹4,350 this month</span>
          </div>
          <div className="metric-card card-dark">
            <span className="metric-label">E‑waste diverted</span>
            <span className="metric-value">34.6 kg</span>
            <span className="metric-foot">0.8 kg this month</span>
          </div>
          <div className="metric-card card-dark">
            <span className="metric-label">CO₂ avoided</span>
            <span className="metric-value">52 kg</span>
            <span className="metric-foot">≈ 4 trees planted</span>
          </div>
        </div>

        <div className="dashboard-lower">
          <div className="chart-card card-dark">
            <h3>Monthly analyses &amp; value</h3>
            <div className="chart-placeholder">
              <span>// Chart placeholder</span>
            </div>
          </div>
          <div className="chart-card card-dark">
            <h3>Device categories</h3>
            <div className="donut-placeholder">
              <span>// Donut chart placeholder</span>
            </div>
          </div>
        </div>

        <div className="recent-card card-dark">
          <div className="recent-header">
            <h3>Recent analyses</h3>
            <span className="recent-caption">Last 10 devices</span>
          </div>
          <div className="recent-table">
            <div className="recent-row head">
              <span>Device</span>
              <span>Condition</span>
              <span>Value</span>
              <span>Status</span>
            </div>
            {recentRows.map((row) => (
              <div key={row.device} className="recent-row">
                <span>{row.device}</span>
                <span>{row.condition}</span>
                <span className="value-positive">{row.value}</span>
                <span>
                  <span className="status-pill">{row.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

