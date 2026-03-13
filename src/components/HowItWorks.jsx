import React from "react";

const steps = [
  {
    number: "1.",
    title: "Snap & Upload",
    description:
      "Take clear photos of your old electronic devices or components. Our app guides you to capture the best angles for analysis.",
    icon: "📷",
  },
  {
    number: "2.",
    title: "AI‑Powered Valuation",
    description:
      "Computer vision AI identifies valuable components like CPUs, RAM, and gold fingers and estimates scrap value from live market prices.",
    icon: "🤖",
  },
  {
    number: "3.",
    title: "Get Paid & Recycle",
    description:
      "Receive an instant price offer. Accept it, schedule a free pickup, and get paid directly to your wallet or bank while your e‑waste is responsibly recycled.",
    icon: "💰",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section muted">
      <div className="container">
        <h2 className="section-title">How EcoValuate Works</h2>
        <p className="section-subtitle">
          A simple, three‑step process to turn your e‑waste into cash and
          protect the planet.
        </p>
        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <div className="step-badge">
                <span className="step-icon">{step.icon}</span>
                <span className="step-number">{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

