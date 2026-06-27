// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

/* ─── Helper: primary CTA button ─── */
function PrimaryBtn({ children, className = "", to, onClick }) {
  const classes = `inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-[15px] bg-[#006a39] text-white hover:bg-[#0A7A42] hover:-translate-y-[1px] transition-all gap-2 no-underline ${className}`;
  const style = { boxShadow: "0 4px 12px rgba(0,106,57,0.2)" };

  if (to) {
    return <Link to={to} className={classes} style={style}>{children}</Link>;
  }
  return <button onClick={onClick} className={classes} style={style}>{children}</button>;
}

/* ─── Helper: ghost / outlined button ─── */
function GhostBtn({ children, className = "" }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-[15px] bg-white border border-[#D7E2EB] text-slate-900 hover:bg-[#eaeef0] transition-all gap-2 ${className}`}
    >
      {children}
    </button>
  );
}

/* ════════════════════════════════════════
   SECTION 1 – Hero
════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="py-10 md:py-16 bg-[#f6fafc]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left copy */}
        <div>
          <div className="uppercase tracking-[0.18em] text-[#0058bb] font-bold text-xs mb-4 block">
            Smart Diagnostics
          </div>
          <h1
            className="text-5xl font-[Hanken_Grotesk] tracking-tight mb-4 leading-[1.2] bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #006a39, #0058bb)" }}
          >
            Maximize Device Value. Minimize E-Waste.
          </h1>
          <p className="text-slate-500 text-lg mb-8 max-w-[34rem]">
            EcoValuate uses advanced AI to instantly grade device condition, securely wipe data, and find the best trade-in or recycling value.
          </p>
          <div className="flex flex-wrap gap-4">
            <PrimaryBtn to="/register">
              Get Started <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </PrimaryBtn>
            <GhostBtn>Watch Demo</GhostBtn>
          </div>
          <p className="mt-5 text-sm text-slate-500">Join 10,000+ businesses optimizing their IT lifecycle.</p>
        </div>

        {/* Right preview cards */}
        <div className="flex justify-center items-center w-full lg:justify-end">
          {/* Live AI Scan Preview */}
          <div className="w-full max-w-[480px] aspect-square rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/50 scan-overlay">
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2zQ9LqoNNcrDC9t5SgDcHh1Gep4U1Hfv1FVRlbNiv1Tuho4w_p63HILpQlIbflnTDoVlRuqEwp1-fqdPQqG0l5w8qn3wWXgNeGZ4lB7obrZPSlWcwTGK10oitkRy5_EJqTBtWAMk8PXwziI8SoHNrvxhZD6i7cL2Vn8A2yMLCh6OkpVSH0I00ywwIMvM7NWqxi93gp9bWsVksMb2ZVLRACBAW-nREvcXzeV_xRWb3NBjh8NKDPDoQMiJ8u-ReCEdNPMG6d-KzN_o')" }}
            ></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10"></div>

            {/* Floating Data Chips */}
            <div 
              className="absolute top-8 right-8 p-4 rounded-xl shadow-lg z-20 animate-bounce"
              style={{ 
                background: "rgba(255,255,255,0.85)", 
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.6)" 
              }}
            >
              <p className="text-[10px] text-[#006a39] font-bold uppercase tracking-widest mb-1">RECOVERY VALUE</p>
              <p className="text-2xl font-bold text-[#171c1e]" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>$342.15</p>
            </div>

            <div 
              className="absolute bottom-10 left-8 p-4 rounded-xl shadow-lg z-20 animate-pulse" 
              style={{ 
                animationDelay: "1.5s",
                background: "rgba(255,255,255,0.85)", 
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.6)" 
              }}
            >
              <div className="flex items-center gap-2 text-[#006a39]">
                <span className="material-symbols-outlined text-[18px]">eco</span>
                <span className="font-semibold text-[14px]">8.2kg CO2 Offset</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SECTION 2 – Live Impact Tracking
════════════════════════════════════════ */
function LiveImpactSection() {
  return (
    <section className="py-12 border-t border-[#D7E2EB] bg-[#f6fafc]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-[Hanken_Grotesk] font-bold mb-2">Live Impact Tracking</h2>
          <p className="text-[#3e4a3f]">See the real-time environmental and financial impact of our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Impact – green card */}
          <div
            className="rounded-xl p-6 relative overflow-hidden md:col-span-1"
            style={{
              background: "linear-gradient(135deg, #006a39, #0A7A42)",
              boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
            }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{ background: "linear-gradient(135deg, #0A7A42, #006a39)" }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full space-y-4 py-4 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-2">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
              </div>
              <h3 className="font-[Hanken_Grotesk] text-2xl font-bold">Total Impact</h3>
              <p className="text-lg text-white/90 mt-2">
                We have saved <span className="font-bold text-white text-2xl">1.2M kg</span>
                <br />of e-waste from landfills.
              </p>
            </div>
          </div>

          {/* CO2 Offset */}
          <div
            className="bg-white border border-[#D7E2EB] rounded-xl p-6 flex flex-col justify-center text-center impact-hover"
            style={{ boxShadow: "0 4px 12px rgba(15,23,42,0.04)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
          >
            <div className="flex items-center justify-center space-x-2 text-[#006a39] mb-4">
              <span className="material-symbols-outlined text-3xl">co2</span>
              <span className="font-[Hanken_Grotesk] text-lg font-bold uppercase tracking-widest">CO2 Offset</span>
            </div>
            <div className="text-5xl text-[#171c1e] font-bold font-[Hanken_Grotesk]">
              2.4M<span className="text-xl text-[#3e4a3f] font-normal">kg</span>
            </div>
          </div>

          {/* Value Returned */}
          <div
            className="bg-white border border-[#D7E2EB] rounded-xl p-6 flex flex-col justify-center text-center"
            style={{ boxShadow: "0 4px 12px rgba(15,23,42,0.04)", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
          >
            <div className="flex items-center justify-center space-x-2 text-[#0058bb] mb-4">
              <span className="material-symbols-outlined text-3xl">payments</span>
              <span className="font-[Hanken_Grotesk] text-lg font-bold uppercase tracking-widest">Value Returned</span>
            </div>
            <div className="text-5xl text-[#171c1e] font-bold font-[Hanken_Grotesk]">₹84M+</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SECTION 3 – How It Works
════════════════════════════════════════ */
function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      title: "Scan & Analyze",
      desc: "Connect the device. Our software runs comprehensive hardware and software diagnostics.",
    },
    {
      num: "2",
      title: "Secure Wipe",
      desc: "All data is securely erased following DoD standards, providing a certified audit trail.",
    },
    {
      num: "3",
      title: "Instant Pricing",
      desc: "Get real-time market valuations based on the exact condition and specs detected.",
    },
  ];

  return (
    <section className="py-16 bg-[#f0f4f6]" id="how-it-works">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-[Hanken_Grotesk] font-bold mb-2">How EcoValuate Works</h2>
        <p className="text-slate-500 max-w-[36rem] text-lg mb-12">A seamless, secure process from analysis to payout.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-2xl p-10 px-6 border border-[#D7E2EB] shadow-sm hover:shadow-md text-center transition-shadow"
            >
              <div className="w-12 h-12 bg-[#EAF4F4] text-[#0A7A42] rounded-full grid place-items-center font-extrabold text-xl mx-auto mb-6">
                {s.num}
              </div>
              <h3 className="text-2xl font-[Hanken_Grotesk] font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-500 text-base m-0">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SECTION 4 – Why Choose EcoValuate?
════════════════════════════════════════ */
function FeaturesSection() {
  const features = [
    {
      title: "Automated Grading",
      desc: "Remove human error with objective AI-driven cosmetic and functional grading.",
    },
    {
      title: "Compliance First",
      desc: "Ensure full data compliance with certified erasure logs for every device processed.",
    },
    {
      title: "Maximized Returns",
      desc: "Connect directly to a network of buyers to ensure you get top dollar for fleet trade-ins.",
    },
    {
      title: "Sustainability Impact",
      desc: "Track the carbon offset and environmental impact of your recycling and refurbishment efforts.",
    },
  ];

  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-[Hanken_Grotesk] font-bold mb-2">Why Choose EcoValuate?</h2>
        <p className="text-slate-500 max-w-[36rem] text-lg mb-12">Built for transparency and efficiency.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 px-6 border border-[#D7E2EB] hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-[Hanken_Grotesk] font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-500 text-base m-0">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SECTION 5 – Enterprise Solutions
════════════════════════════════════════ */
function EnterpriseSection() {
  return (
    <section className="py-16 bg-[#f6fafc] border-y border-[#D7E2EB]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <span className="uppercase tracking-[0.18em] text-[#0058bb] font-bold text-xs mb-4 block">
              Enterprise Solutions
            </span>
            <h2 className="text-4xl font-[Hanken_Grotesk] font-bold mb-4">Hardware Inventory Upload</h2>
            <p className="text-slate-500 text-lg mb-6">
              Upload your asset list for AI-driven valuation. We support bulk processing for thousands of devices simultaneously.
            </p>

            {/* Security callout */}
            <div className="bg-[#EAF4F4] rounded-xl p-6 border border-[#006a39]/20 mb-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006a39] mt-1">security</span>
                <div>
                  <h4 className="font-[Hanken_Grotesk] font-semibold text-[#006a39] mb-1">Enterprise Grade Security</h4>
                  <p className="text-[13px] text-[#3e4a3f]">
                    All uploads are encrypted via TLS 1.3. Data wiping protocols (NIST 800-88) will be configured in the next step.
                  </p>
                </div>
              </div>
            </div>

            <PrimaryBtn to="/register">
              Explore Enterprise <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </PrimaryBtn>
          </div>

          {/* Right glass card */}
          <div
            className="rounded-xl p-8 relative"
            style={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.5)",
              boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
            }}
          >
            <h3 className="font-[Hanken_Grotesk] text-xl text-[#171c1e] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0058bb]">cloud_upload</span>
              Asset Manifest
            </h3>
            <div className="border-2 border-dashed border-[#D7E2EB] rounded-xl p-8 flex flex-col items-center justify-center text-center bg-white">
              <div className="w-12 h-12 bg-[#EAF4F4] rounded-full flex items-center justify-center mb-4 text-[#006a39]">
                <span className="material-symbols-outlined text-2xl">upload_file</span>
              </div>
              <h4 className="font-[Hanken_Grotesk] text-lg font-bold text-[#171c1e] mb-2">
                Drag &amp; Drop your manifest
              </h4>
              <p className="text-sm text-[#6B7280] mb-4">Supports .csv, .xlsx up to 50MB</p>
              <div className="bg-white border border-[#D7E2EB] text-[#0058bb] font-semibold text-sm py-2 px-6 rounded-full shadow-sm inline-flex items-center gap-2 cursor-pointer hover:bg-[#eaeef0] transition-colors">
                <span className="material-symbols-outlined text-sm">folder_open</span>
                Browse Files
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SECTION 6 – Live Market Trends
════════════════════════════════════════ */
function MarketTrendsSection() {
  const items = [
    {
      icon: "developer_board",
      iconBg: "bg-[#EAF4F4]",
      iconColor: "text-[#006a39]",
      name: "Server RAM (DDR4 64GB)",
      category: "Component",
      price: "₹1,850",
      change: "+12%",
      changeColor: "text-[#4ADE80]",
      changeIcon: "arrow_upward",
    },
    {
      icon: "smartphone",
      iconBg: "bg-blue-50",
      iconColor: "text-[#0058bb]",
      name: "iPhone 13 Pro (Broken)",
      category: "Mobile",
      price: "₹12,400",
      change: "+5%",
      changeColor: "text-[#4ADE80]",
      changeIcon: "arrow_upward",
    },
    {
      icon: "memory",
      iconBg: "bg-[#EAF4F4]",
      iconColor: "text-[#006a39]",
      name: "Intel Core i9-10900K",
      category: "CPU",
      price: "₹8,200",
      change: "0%",
      changeColor: "text-[#535d68]",
      changeIcon: "horizontal_rule",
    },
    {
      icon: "router",
      iconBg: "bg-[#EAF4F4]",
      iconColor: "text-[#006a39]",
      name: "Cisco Catalyst Switch",
      category: "Networking",
      price: "₹4,500",
      change: "-2%",
      changeColor: "text-[#ba1a1a]",
      changeIcon: "arrow_downward",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-[Hanken_Grotesk] font-bold mb-2">Live Market Trends</h2>
          <p className="text-slate-500 text-lg">Real-time valuation data powered by our AI analysis engine.</p>
        </div>

        <div
          className="max-w-4xl mx-auto bg-white rounded-xl border border-[#D7E2EB] p-6"
          style={{ boxShadow: "0 4px 20px -4px rgba(15,23,42,0.08)" }}
        >
          <div className="flex justify-between items-center mb-6 border-b border-[#D7E2EB] pb-4">
            <h3 className="font-[Hanken_Grotesk] text-[20px] font-semibold text-[#171c1e]">Top Valued This Week</h3>
            <span className="material-symbols-outlined text-[#0058bb]">local_fire_department</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-3 rounded-lg border border-[#D7E2EB] hover:bg-[#f6fafc] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded ${item.iconBg} flex items-center justify-center ${item.iconColor}`}>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#171c1e] leading-tight">{item.name}</h4>
                    <span className="text-[10px] text-[#535d68] uppercase tracking-widest font-bold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-[#171c1e]">{item.price}</div>
                  <div className={`flex items-center justify-end ${item.changeColor} text-[12px] font-semibold`}>
                    <span className="material-symbols-outlined text-[14px]">{item.changeIcon}</span>
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SECTION 7 – AI Analyzer (dark section)
════════════════════════════════════════ */
function AIAnalyzerSection() {
  return (
    <section
      className="py-20 text-slate-50"
      id="analyzer"
      style={{ background: "radial-gradient(circle at 0 0, #10271a 0, #020805 42%, #020503)" }}
    >
      <div className="container mx-auto px-6">
        <span className="uppercase tracking-[0.18em] text-[0.875rem] text-[#006a39] font-semibold mb-2 block">
          Diagnostic AI
        </span>
        <h2 className="text-[2.5rem] font-[Hanken_Grotesk] font-bold mb-4">Instant Device Analysis</h2>
        <p className="text-slate-400 max-w-[36rem] text-lg mb-12">
          Upload diagnostic logs or photos to let our AI instantly assess condition and determine market value.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left – upload + controls */}
          <div>
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Run Diagnostics</h3>

              {/* Drop zone */}
              <div className="border-2 border-dashed border-[#006a39] rounded-xl p-8 text-center bg-[#006a39]/5 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#006a39]/10 text-[#006a39] inline-flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">upload_file</span>
                </div>
                <div>Drag &amp; drop logs or images here</div>
                <div className="text-sm mt-2 opacity-70">
                  or <span className="text-[#006a39] underline cursor-pointer">browse files</span>
                </div>
              </div>

              {/* Category pills */}
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">Device Category</label>
                <div className="flex gap-2 flex-wrap">
                  {["Component", "Smartphone", "Laptop", "Server"].map((cat, i) => (
                    <button
                      key={cat}
                      className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-colors border ${
                        i === 0
                          ? "bg-[#006a39] text-white border-[#006a39]"
                          : "bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-700"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="w-full inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-[15px] bg-[#006a39] text-white hover:bg-[#0A7A42] hover:-translate-y-[1px] transition-all gap-2 mt-4"
                style={{ boxShadow: "0 4px 12px rgba(0,106,57,0.2)" }}
              >
                <span className="material-symbols-outlined text-[18px]">troubleshoot</span>
                Analyze Device
              </button>
            </div>
          </div>

          {/* Right – results */}
          <div className="flex flex-col gap-6">
            {/* Component breakdown */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 flex flex-col">
              <h3 className="font-[Hanken_Grotesk] text-[18px] text-white border-b border-slate-700 pb-4 mb-4">
                Component Breakdown
              </h3>

              <div className="space-y-4">
                {[
                  { icon: "developer_board", name: "1x Intel CPU", sub: "High Yield", price: "₹200" },
                  { icon: "memory_alt", name: "2x Gold Fingers", sub: "Trace Minerals", price: "₹150" },
                  { icon: "heat_pump", name: "1x Copper Heatsink", sub: "Base Metal", price: "₹210" },
                ].map((row) => (
                  <div key={row.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-slate-300">
                        <span className="material-symbols-outlined text-[18px]">{row.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white m-0">{row.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest m-0">{row.sub}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-white m-0">{row.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
                <span className="text-slate-400 text-sm">Estimated Total Value</span>
                <span className="text-3xl font-bold text-[#006a39]">₹560</span>
              </div>
            </div>

            {/* Environmental impact */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#006a39]/20 flex items-center justify-center text-[#006a39] flex-shrink-0">
                <span className="material-symbols-outlined">recycling</span>
              </div>
              <div>
                <h4 className="font-[Hanken_Grotesk] text-[16px] text-white mb-1">Environmental Impact</h4>
                <p className="text-sm text-slate-400 m-0">
                  Recycling this component saves approximately 4.2kg of CO₂ equivalent emissions compared to manufacturing a new one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   HOME PAGE – composed from all sections
════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <HeroSection />
      <LiveImpactSection />
      <HowItWorksSection />
      <FeaturesSection />
      <EnterpriseSection />
      <MarketTrendsSection />
      <AIAnalyzerSection />
    </main>
  );
}