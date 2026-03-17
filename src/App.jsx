import React from "react";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { WhyEcoValuate } from "./components/WhyEcoValuate.jsx";
import { DashboardPreview } from "./components/DashboardPreview.jsx";
import { AIIdentifier } from "./components/AIIdentifier.jsx";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <AIIdentifier />
        <AnalyticsDashboard />
        <HowItWorks />
        <WhyEcoValuate />
        <DashboardPreview />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

