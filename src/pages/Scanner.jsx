// src/pages/Scanner.jsx – AI Analysis Results page
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

/* ── Component breakdown data ── */
const COMPONENTS = [
  { icon: "developer_board", name: "1x Intel CPU",         sub: "High Yield",      value: "₹200" },
  { icon: "memory_alt",      name: "2x Gold Fingers",      sub: "Trace Minerals",  value: "₹150" },
  { icon: "heat_pump",       name: "1x Copper Heatsink",   sub: "Base Metal",      value: "₹210" },
];

/* ── Interactive hotspot definitions (position as % of container) ── */
const HOTSPOTS = [
  {
    id: "cpu",
    label: "CPU (Intel i7)",
    color: "secondary",
    style: {
      top: "35%", left: "45%",
      width: 128, height: 128,
      borderColor: "#0058bb",
      bg: "rgba(0,88,187,0.10)",
      shadow: "0 0 15px rgba(0,88,187,0.30)",
      labelBg: "#0058bb",
    },
    labelPos: "top",
  },
  {
    id: "ram",
    label: "RAM Slot (DDR4)",
    style: {
      top: "20%", left: "65%",
      width: 48, height: 160,
      borderColor: "#0058bb",
      bg: "rgba(0,88,187,0.10)",
      shadow: "0 0 15px rgba(0,88,187,0.30)",
      labelBg: "#0058bb",
    },
    labelPos: "top",
  },
  {
    id: "cap",
    label: "Capacitor Array",
    style: {
      bottom: "25%", left: "30%",
      width: 96, height: 64,
      borderColor: "#0A7A42",
      bg: "rgba(10,122,66,0.10)",
      shadow: "0 0 15px rgba(10,122,66,0.30)",
      labelBg: "#0A7A42",
    },
    labelPos: "bottom",
  },
];

/* ── Reusable hotspot component ── */
function Hotspot({ label, style, labelPos }) {
  const [hovered, setHovered] = useState(false);

  const posStyle = {
    position: "absolute",
    width: style.width,
    height: style.height,
    top:    style.top,
    left:   style.left,
    bottom: style.bottom,
    border: `2px dashed ${style.borderColor}`,
    background: hovered ? style.bg.replace("0.10", "0.20") : style.bg,
    boxShadow: style.shadow,
    borderRadius: 6,
    cursor: "pointer",
    backdropFilter: "blur(2px)",
    transition: "background 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const labelStyle = {
    position: "absolute",
    [labelPos === "top" ? "top" : "bottom"]: -32,
    left: "50%",
    transform: "translateX(-50%)",
    background: style.labelBg,
    color: "#fff",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.15em",
    padding: "3px 8px",
    borderRadius: 4,
    whiteSpace: "nowrap",
    opacity: hovered ? 1 : 0.9,
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    zIndex: 20,
    fontFamily: "'Hanken Grotesk', sans-serif",
    transition: "opacity 0.2s ease",
  };

  return (
    <div
      style={posStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={labelStyle}>{label}</div>
    </div>
  );
}

export default function Scanner() {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleAccept = () => { setAccepted(true); setRejected(false); };
  const handleReject = () => { setRejected(true); setAccepted(false); };

  return (
    <DashboardLayout
      pageTitle="Results Page"
      pageSubtitle="Review the AI-detected components and their estimated market value."
    >
      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2 text-[#3e4a3f] mb-6 -mt-2">
        <Link
          to="/scanner"
          className="hover:text-[#006a39] transition-colors text-sm no-underline"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          AI Scanner
        </Link>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-sm font-medium text-[#171c1e]" style={{ fontFamily: "'Inter', sans-serif" }}>
          Analysis Results
        </span>
      </div>

      {/* ── Results Bento Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ── LEFT (8 cols): Image + metadata ── */}
        <div className="lg:col-span-8 flex flex-col gap-4">

          {/* Scan image with animated hotspots */}
          <div
            className="scan-overlay bg-white rounded-xl border border-[#D7E2EB] overflow-hidden h-[500px] flex items-center justify-center"
            style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.08)" }}
          >
            <div className="relative w-full h-full p-4 flex items-center justify-center bg-[#edf1f3]/50">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUG6HOLLEuMGf5G_qxV85psUS8_HNh1IYA50QceEbgEvACSRXEyn4ZLa3Y-cHabKX_7EtThEDFyKWkqazfT8D0v6Eb-HHBxREj0EhPlpSH_26Aypsbu95W0Zgo0qHa-1GIzLVL0avTPWpN-g3ERZe6Ku6mONc2d297AI1vJzCQEKyxZ7aXbOOJDwq9aHu29IcXMB7kIsXAJ2rFNcHBt7ZV1-7WCYu0cZHlkYF2kfyQpKol2lgaC-z4J7HEIOZJ6lpY7jBpsSlYA3M"
                alt="Scanned Motherboard"
                className="max-w-full max-h-full object-contain drop-shadow-lg"
              />
              {/* Render hotspots */}
              {HOTSPOTS.map((h) => (
                <Hotspot key={h.id} {...h} />
              ))}
            </div>
          </div>

          {/* Component metadata bar */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-[#D7E2EB] shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#1471e6]/20 flex items-center justify-center text-[#0058bb] flex-shrink-0">
              <span className="material-symbols-outlined">memory</span>
            </div>
            <div className="flex-1">
              <h3
                className="text-[18px] font-semibold text-[#171c1e]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                ASUS Prime Z390-A
              </h3>
              <p className="text-sm text-[#3e4a3f]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Analyzed on Oct 24, 2024 • Confidence:{" "}
                <span className="font-semibold text-[#4ADE80]">98%</span>
              </p>
            </div>
            <div className="flex gap-2">
              <span className="bg-[#008649] text-[#f6fff4] text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-1 rounded-full flex items-center gap-1"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                <span className="material-symbols-outlined text-[14px]">verified</span>
                Verified
              </span>
              <span className="bg-[#dfe3e5] text-[#3e4a3f] text-[10px] font-bold tracking-[0.15em] uppercase px-2 py-1 rounded-full"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                Grade B
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT (4 cols): Value + breakdown ── */}
        <div className="lg:col-span-4 flex flex-col gap-6">

          {/* Total value card */}
          <div
            className="bg-[#0058bb] text-white p-6 rounded-xl relative overflow-hidden"
            style={{ boxShadow: "0 8px 30px rgba(0,88,187,0.30)" }}
          >
            {/* Decorative blobs */}
            <div
              className="absolute -right-10 -top-10 w-40 h-40 rounded-full"
              style={{ background: "rgba(173,199,255,0.3)", filter: "blur(40px)" }}
            />
            <div
              className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full"
              style={{ background: "rgba(255,255,255,0.1)", filter: "blur(30px)" }}
            />
            <div className="relative z-10">
              <p
                className="text-[14px] font-bold tracking-[0.18em] uppercase text-white/80 mb-2"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Estimated Value
              </p>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-[32px] font-semibold"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  ₹
                </span>
                <span
                  className="font-bold leading-none tracking-tight"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 64 }}
                >
                  560
                </span>
              </div>
            </div>
          </div>

          {/* Component breakdown card */}
          <div className="bg-white rounded-xl border border-[#D7E2EB] shadow-sm p-6 flex-1 flex flex-col">
            <h3
              className="text-[18px] font-semibold text-[#171c1e] border-b border-[#D7E2EB] pb-4 mb-4"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Component Breakdown
            </h3>

            <div className="space-y-4 flex-1">
              {COMPONENTS.map(({ icon, name, sub, value }) => (
                <div key={name} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#eaeef0] flex items-center justify-center text-[#3e4a3f] group-hover:bg-[#0058bb]/10 group-hover:text-[#0058bb] transition-colors">
                      <span className="material-symbols-outlined text-[18px]">{icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#171c1e]" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {name}
                      </p>
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#3e4a3f]"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                      >
                        {sub}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-[#171c1e]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-6 pt-4 border-t border-[#D7E2EB] flex flex-col gap-3">
              {accepted ? (
                <div className="w-full bg-[#f0fdf4] border border-[#4ADE80] text-[#006a39] font-semibold py-4 rounded-lg flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  <span className="material-symbols-outlined icon-fill">check_circle</span>
                  Accepted! Redirecting…
                </div>
              ) : (
                <button
                  onClick={handleAccept}
                  className="w-full text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                  style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    background: "linear-gradient(to right, #0A7A42, #006a39)",
                    boxShadow: "0 4px 14px rgba(10,122,66,0.39)",
                  }}
                >
                  <span className="material-symbols-outlined icon-fill">check_circle</span>
                  Accept &amp; Sell
                </button>
              )}

              {rejected ? (
                <div className="w-full bg-[#ffdad6] border border-[#ba1a1a]/30 text-[#93000a] font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                  <span className="material-symbols-outlined">close</span>
                  Rejected
                </div>
              ) : (
                <button
                  onClick={handleReject}
                  className="w-full bg-[#eaeef0] hover:bg-[#dfe3e5] text-[#3e4a3f] font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 border border-[#D7E2EB]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  <span className="material-symbols-outlined">close</span>
                  Reject
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom context cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Environmental impact */}
        <div className="bg-white p-6 rounded-xl border border-[#D7E2EB] shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#EAF4F4] flex items-center justify-center text-[#006a39] flex-shrink-0">
            <span className="material-symbols-outlined">recycling</span>
          </div>
          <div>
            <h4
              className="text-[16px] font-semibold text-[#171c1e] mb-1"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Environmental Impact
            </h4>
            <p className="text-sm text-[#3e4a3f]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Recycling this component saves approximately{" "}
              <span className="font-semibold text-[#006a39]">4.2kg</span> of CO₂ equivalent emissions
              compared to manufacturing a new one.
            </p>
          </div>
        </div>

        {/* Market trend */}
        <div className="bg-white p-6 rounded-xl border border-[#D7E2EB] shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#0058bb]/10 flex items-center justify-center text-[#0058bb] flex-shrink-0">
            <span className="material-symbols-outlined">query_stats</span>
          </div>
          <div>
            <h4
              className="text-[16px] font-semibold text-[#171c1e] mb-1"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Market Trend
            </h4>
            <p className="text-sm text-[#3e4a3f]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Current value is slightly{" "}
              <span className="font-semibold text-[#4ADE80]">above</span> the 30-day average. Demand for
              DDR4 slots and gold trace components remains steady.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
