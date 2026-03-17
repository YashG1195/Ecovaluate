import React from "react";

export function AIIdentifier() {
  return (
    <section id="ai-identifier" className="section-dark">
      <div className="container ai-grid">
        <div className="ai-left">
          <p className="section-kicker">// AI IDENTIFIER</p>
          <h2 className="section-title-dark">Upload. Analyze. Identify.</h2>
          <p className="section-subtitle-dark">
            Upload an image of any e‑waste device or circuit board and let the
            AI break it down into components with an estimated price for each.
          </p>

          <div className="ai-panel card-dark">
            <h3>// Upload Device Image</h3>
            <div className="upload-area">
              <div className="upload-inner">
                <span className="upload-arrow">↑</span>
                <p>
                  <span className="link-like">Click to upload</span> or drag &amp;
                  drop
                </p>
                <p className="upload-meta">PNG · JPG · WEBP · max 10 MB</p>
              </div>
            </div>

            <div className="ai-field card-dark-sub">
              <label>// Device Category</label>
              <select defaultValue="auto">
                <option value="auto">Auto‑detect</option>
                <option value="phone">Smartphone</option>
                <option value="laptop">Laptop / Motherboard</option>
                <option value="gpu">GPU / Add‑on Card</option>
                <option value="other">Other Electronics</option>
              </select>
            </div>

            <div className="ai-field">
              <label>// Device Condition</label>
              <div className="pill-toggle-row">
                <button className="pill-toggle active">Working</button>
                <button className="pill-toggle">Damaged</button>
                <button className="pill-toggle">Broken</button>
                <button className="pill-toggle">Parts Only</button>
              </div>
            </div>

            <button className="btn btn-accent-full analyze-btn">
              Analyze Device
            </button>
          </div>
        </div>

        <div className="ai-right card-dark">
          <div className="ai-preview">
            <div className="scan-orb" />
            <p>
              Upload an image of any e‑waste device or circuit board and click{" "}
              <span className="accent-green">Analyze Device</span> to get an
              AI‑powered component identification and price breakdown.
            </p>
            <ul className="ai-bullets">
              <li>Detect visible chips, connectors, memory modules and more.</li>
              <li>Score each component based on scrap value and demand.</li>
              <li>Export the breakdown directly to your dashboard.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

