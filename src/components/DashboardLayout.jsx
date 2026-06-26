// src/components/DashboardLayout.jsx
// Shared layout for all authenticated dashboard pages.
// Renders the desktop sidebar + mobile top-header + mobile bottom-nav
// wrapping whatever children you pass in.
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { icon: "dashboard",        label: "Overview",     to: "/dashboard" },
  { icon: "document_scanner", label: "AI Scanner",   to: "/scanner" },
  { icon: "trending_up",      label: "Market Rates", to: "/market-rates" },
  { icon: "history",          label: "History",      to: "/history" },
  { icon: "settings",         label: "Settings",     to: "/settings" },
];

const BOTTOM_NAV = [
  { icon: "dashboard",        label: "Overview", to: "/dashboard" },
  { icon: "document_scanner", label: "Scan",     to: "/scanner" },
  { icon: "history",          label: "History",  to: "/history" },
  { icon: "settings",         label: "Settings", to: "/settings" },
];

export default function DashboardLayout({ children, pageTitle = "Dashboard", pageSubtitle = "Track your environmental impact and manage your assets." }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#f6fafc] antialiased">

      {/* ── Desktop Sidebar ── */}
      <nav className="bg-[#f0f4f6] hidden lg:flex flex-col py-6 h-screen w-64 fixed left-0 top-0 border-r border-[#D7E2EB] shadow-md z-40">
        {/* Logo */}
        <div className="px-6 mb-8">
          <h1
            className="text-2xl font-bold text-[#006a39]"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            EcoValuate
          </h1>
        </div>

        {/* User profile */}
        <div className="px-6 mb-8 flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D7E2EB] bg-white flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-[#EAF4F4] to-[#006a39]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#006a39]">person</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#171c1e]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Welcome, Rahul
            </p>
            <p className="text-xs text-[#3e4a3f] mt-1" style={{ fontFamily: "'Hanken Grotesk', sans-serif", letterSpacing: "0.1em" }}>
              Wallet: ₹1,250
            </p>
          </div>
        </div>

        {/* Start New Scan */}
        <div className="px-6 mb-6">
          <Link
            to="/scanner"
            className="btn-primary-glow w-full text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 no-underline"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            <span className="material-symbols-outlined icon-fill">add_circle</span>
            <span>Start New Scan</span>
          </Link>
        </div>

        {/* Nav items */}
        <div className="flex-1 flex flex-col space-y-1 overflow-y-auto w-full px-2">
          {NAV_ITEMS.map(({ icon, label, to }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`rounded-lg px-4 py-3 flex items-center space-x-3 transition-all no-underline ${
                  active
                    ? "bg-[#008649] text-[#f6fff4]"
                    : "text-[#3e4a3f] hover:bg-[#dfe3e5]/50 hover:translate-x-1"
                }`}
                style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em" }}
              >
                <span className={`material-symbols-outlined ${active ? "icon-fill" : ""}`}>{icon}</span>
                <span>{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom nav (Help + Sign Out) */}
        <div className="px-2 mt-4 space-y-1">
          <a
            href="#"
            className="text-[#3e4a3f] hover:bg-[#dfe3e5]/50 rounded-lg px-4 py-3 flex items-center space-x-3 transition-all no-underline hover:translate-x-1"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em" }}
          >
            <span className="material-symbols-outlined">help</span>
            <span>Help Center</span>
          </a>
          <button
            onClick={handleSignOut}
            className="w-full text-[#3e4a3f] hover:bg-[#dfe3e5]/50 rounded-lg px-4 py-3 flex items-center space-x-3 transition-all hover:translate-x-1"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em" }}
          >
            <span className="material-symbols-outlined">logout</span>
            <span>Sign Out</span>
          </button>
        </div>
      </nav>

      {/* ── Mobile Top Header ── */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-[#f6fafc]/80 backdrop-blur-md border-b border-[#D7E2EB] shadow-sm lg:hidden">
        <div
          className="text-xl font-bold text-[#006a39]"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
        >
          EcoValuate
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-[#006a39] hover:bg-[#EAF4F4] transition-colors p-2 rounded-full">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-[#006a39] hover:bg-[#EAF4F4] transition-colors p-2 rounded-full">
            <span className="material-symbols-outlined">account_balance_wallet</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D7E2EB] bg-white flex items-center justify-center">
            <span className="material-symbols-outlined text-[#006a39] text-sm">person</span>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1 lg:ml-64 w-full pt-20 lg:pt-8 pb-24 lg:pb-12 px-4 sm:px-8 lg:px-10">
        <div className="max-w-[1120px] mx-auto">
          {/* Page header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
            <div>
              <h2
                className="text-3xl lg:text-5xl font-bold text-[#171c1e]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                {pageTitle}
              </h2>
              <p className="text-[15px] text-[#3e4a3f] mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                {pageSubtitle}
              </p>
            </div>
            <div className="flex space-x-3">
              <Link
                to="/market-rates"
                className="bg-white border border-[#D7E2EB] text-[#0058bb] font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-[#EAF4F4] transition-colors shadow-sm no-underline text-sm"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                <span>Market Rates</span>
              </Link>
            </div>
          </div>

          {/* Page content */}
          {children}
        </div>
      </main>

      {/* ── Mobile Bottom Nav ── */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#D7E2EB] z-50 px-4 py-2 flex justify-between items-center"
        style={{ boxShadow: "0 -4px 12px rgba(0,0,0,0.05)" }}
      >
        {BOTTOM_NAV.map(({ icon, label, to }, i) => {
          const active = location.pathname === to;
          // Insert FAB in the middle
          const items = [];
          if (i === 2) {
            items.push(
              <div key="fab" className="relative -top-5">
                <Link
                  to="/scanner"
                  className="btn-primary-glow w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white"
                >
                  <span className="material-symbols-outlined text-2xl icon-fill">add</span>
                </Link>
              </div>
            );
          }
          items.push(
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center p-2 no-underline ${active ? "text-[#006a39]" : "text-[#3e4a3f] hover:text-[#006a39]"}`}
            >
              <span className={`material-symbols-outlined ${active ? "icon-fill" : ""}`}>{icon}</span>
              <span className="text-[10px] font-semibold mt-1" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {label}
              </span>
            </Link>
          );
          return items;
        })}
      </nav>
    </div>
  );
}
