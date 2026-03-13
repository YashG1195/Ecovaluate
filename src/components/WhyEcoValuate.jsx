import React from "react";

const reasons = [
  {
    title: "Transparent & Fair Pricing",
    description:
      "No hidden fees. All offers are backed by live market data so you always get a fair rate.",
  },
  {
    title: "Eco‑Friendly Impact",
    description:
      "By recycling with us, you prevent toxic materials from entering landfills and support a circular economy.",
  },
  {
    title: "Discover Hidden Value",
    description:
      "Our AI scanner can find valuable components even in broken or incomplete devices.",
  },
  {
    title: "Accurate & Instant",
    description:
      "Get valuations in seconds with our AI‑powered engine, no haggling or guesswork.",
  },
];

export function WhyEcoValuate() {
  return (
    <section id="market-rates" className="section">
      <div className="container">
        <h2 className="section-title">Why Choose EcoValuate?</h2>
        <p className="section-subtitle">
          The smarter way to turn old gadgets into cash while helping the
          planet.
        </p>
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article key={reason.title} className="reason-card">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

