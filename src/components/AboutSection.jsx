import React from "react";

const team = [
  { name: "Akash", role: "ML Engineer", blurb: "Designs the model that turns messy circuit photos into clean component detections." },
  { name: "Yash", role: "Product Designer", blurb: "Shapes the EcoValuate experience, from first scan to final payout." },
  { name: "Dipto", role: "Backend Engineer", blurb: "Builds the pricing engine and data pipeline that keeps rates live." },
  { name: "Dharmendra", role: "Research & Data", blurb: "Finds new e‑waste sources and refines how the model values them." },
];

export function AboutSection() {
  return (
    <section id="about" className="section-dark">
      <div className="container about-layout">
        <div className="about-copy">
          <p className="section-kicker">// ABOUT</p>
          <h2 className="section-title-dark">
            Turning <span className="accent-green">e‑waste</span> into evidence.
          </h2>
          <p className="section-subtitle-dark">
            EcoValuate was born from a simple observation: valuable electronics
            are often undersold because neither the buyer nor the seller can
            see what&apos;s really on the board. Our AI‑powered scanner exposes
            every chip and pin so pricing becomes fair, transparent, and fast.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="card-dark team-card">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-blurb">{member.blurb}</p>
            </article>
          ))}
        </div>

        <div className="system-grid">
          <article className="card-dark">
            <h3>// System architecture</h3>
            <p className="section-subtitle-dark small">
              Modular, API‑first design. The vision model, pricing engine, and
              dashboard are all decoupled so new devices and price feeds can be
              added without downtime.
            </p>
          </article>
          <article className="card-dark">
            <h3>// Built with</h3>
            <ul className="stack-list">
              <li>React + Vite frontend</li>
              <li>Computer‑vision model for component detection</li>
              <li>Live metal &amp; e‑waste pricing feeds</li>
              <li>Wallet payouts &amp; recycling partners</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

