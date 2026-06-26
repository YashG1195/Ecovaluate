// src/pages/MarketRates.jsx – Market Rates Directory page
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

/* ── Data ── */
const CATEGORIES = [
  { icon: "smartphone",  label: "Mobile Devices",      sub: "Smartphones, Tablets, Wearables",          count: "1,204 Models" },
  { icon: "laptop_mac",  label: "Computing",           sub: "Laptops, Desktops, Monitors",              count: "856 Models" },
  { icon: "dns",         label: "Enterprise / Servers", sub: "Racks, Switches, Enterprise Storage",     count: "432 Models" },
  { icon: "memory",      label: "Internal Components", sub: "CPUs, RAM, GPUs, Motherboards",            count: "3,190 Parts" },
];

const FILTERS = ["All Categories", "Phones & Tablets", "Laptops & PCs", "Servers", "Raw Components"];

const TOP_VALUED = [
  { icon: "developer_board", iconBg: "bg-[#EAF4F4]",  iconColor: "text-[#006a39]",  name: "Server RAM (DDR4 64GB)",  cat: "Component", price: "₹1,850", change: "+12%", changeColor: "text-[#4ADE80]",  changeIcon: "arrow_upward"  },
  { icon: "smartphone",      iconBg: "bg-blue-50",    iconColor: "text-[#0058bb]",  name: "iPhone 13 Pro (Broken)",  cat: "Mobile",    price: "₹12,400",change: "+5%",  changeColor: "text-[#4ADE80]",  changeIcon: "arrow_upward"  },
  { icon: "memory",          iconBg: "bg-[#EAF4F4]",  iconColor: "text-[#006a39]",  name: "Intel Core i9-10900K",   cat: "CPU",       price: "₹8,200", change: "0%",   changeColor: "text-[#535d68]",  changeIcon: "horizontal_rule"},
  { icon: "router",          iconBg: "bg-[#EAF4F4]",  iconColor: "text-[#006a39]",  name: "Cisco Catalyst Switch",  cat: "Networking",price: "₹4,500", change: "-2%",  changeColor: "text-[#ba1a1a]",  changeIcon: "arrow_downward" },
];

export default function MarketRates() {
  const [activeFilter, setActiveFilter] = useState("All Categories");
  const [search, setSearch] = useState("");

  return (
    <DashboardLayout
      pageTitle="Market Rates"
      pageSubtitle="Real-time valuation data for electronic components and devices."
    >
      <div className="flex flex-col gap-12">

        {/* ── Search & Filter ── */}
        <section className="flex flex-col gap-6 w-full max-w-3xl mx-auto text-center">
          <div className="space-y-2">
            <h1
              className="text-3xl md:text-[52px] font-bold text-[#171c1e] leading-[1.1]"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Market Rates Directory
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#3e4a3f]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Real-time valuation data for electronic components, devices, and scrap materials powered by our AI analysis engine.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full shadow-sm rounded-full mt-4">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-[#535d68]">search</span>
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for models, parts, or categories (e.g. 'DDR4 RAM', 'iPhone 12')..."
              className="w-full pl-12 pr-32 py-4 bg-white border border-[#D7E2EB] rounded-full text-[15px] text-[#171c1e] focus:outline-none focus:ring-2 focus:ring-[#0058bb] focus:border-transparent transition-shadow placeholder:text-[#535d68]"
            />
            <button
              className="absolute inset-y-1 right-1 px-6 bg-[#0058bb] text-white font-semibold rounded-full hover:bg-[#1471e6] transition-colors shadow-sm text-[15px]"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Search
            </button>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-[0.18em] border transition-colors ${
                  activeFilter === f
                    ? "bg-[#EAF4F4] text-[#006a39] border-[#64dd91]"
                    : "bg-white text-[#3e4a3f] border-[#D7E2EB] hover:bg-[#eaeef0]"
                }`}
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* ── Category Grid ── */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map(({ icon, label, sub, count }) => (
            <a
              key={label}
              href="#"
              className="group bg-white p-6 rounded-xl border border-[#D7E2EB] hover:shadow-md hover:border-[#64dd91] transition-all duration-300 flex flex-col items-start gap-4 no-underline"
              style={{ boxShadow: "0 4px 20px -4px rgba(15,23,42,0.08)" }}
            >
              <div className="p-3 bg-[#EAF4F4] text-[#006a39] rounded-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl icon-fill">{icon}</span>
              </div>
              <div>
                <h3
                  className="text-[20px] leading-tight font-semibold text-[#171c1e]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  {label}
                </h3>
                <p className="text-[13px] text-[#535d68] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {sub}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#D7E2EB] w-full flex justify-between items-center">
                <span
                  className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#6B7280]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  {count}
                </span>
                <span className="material-symbols-outlined text-[#0058bb] text-sm">arrow_forward</span>
              </div>
            </a>
          ))}
        </section>

        {/* ── Trends & Top Valued ── */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Price trend chart */}
          <div
            className="lg:col-span-2 bg-white rounded-xl border border-[#D7E2EB] p-6 flex flex-col"
            style={{ boxShadow: "0 4px 20px -4px rgba(15,23,42,0.08)" }}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2
                  className="text-2xl font-semibold text-[#171c1e]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Global Material Index
                </h2>
                <p className="text-[15px] text-[#535d68] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Aggregated value trends for precious metals in e-waste over 30 days.
                </p>
              </div>
              <div className="flex gap-2">
                {["1W", "1M", "1Y"].map((t) => (
                  <button
                    key={t}
                    className={`px-3 py-1 rounded text-[12px] font-bold uppercase tracking-[0.18em] ${
                      t === "1M"
                        ? "bg-[#0058bb] text-white"
                        : "bg-[#eaeef0] text-[#3e4a3f]"
                    }`}
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart placeholder with image */}
            <div className="relative w-full h-64 bg-[#f6fafc] rounded-lg border border-[#D7E2EB] overflow-hidden flex items-end">
              <div
                className="w-full h-full bg-cover bg-center opacity-80 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9o_ktuyvozA_u0fD-PCdJbe5fEzSSMI9PFhB0eiQad8J6jKfdXXRM0fqwOyUt0GirLZtpL0lLd8YKDU3ckgHt7jAbRi3y5WufY_Kil7cSKHhaQfMmnZKcIdyowhOealNfzAVl2Nk9ke8bFHaDrnWlnE_RHRcdeD3ml3Z8GenPR1atE33UHXFdZ-oo2USl76-8hXnbje6o1VOg0OAKH2r7mDuo4xdnUWiWJSwk2BMSi_ae3LToWRiK4fMa6LCFmszY0OvgeF0vzFo')",
                }}
              />
              {/* Overlay tooltip */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded shadow-sm border border-[#D7E2EB] flex flex-col gap-1">
                <span
                  className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#535d68]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Gold Extract Value
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="text-xl font-bold text-[#171c1e]"
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                  >
                    ₹4,250/g
                  </span>
                  <span className="flex items-center text-[#4ADE80] text-sm font-semibold">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span> +2.4%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top valued list */}
          <div
            className="bg-white rounded-xl border border-[#D7E2EB] p-6 flex flex-col"
            style={{ boxShadow: "0 4px 20px -4px rgba(15,23,42,0.08)" }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2
                className="text-[20px] font-semibold text-[#171c1e]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Top Valued This Week
              </h2>
              <span className="material-symbols-outlined text-[#0058bb]">local_fire_department</span>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {TOP_VALUED.map(({ icon, iconBg, iconColor, name, cat, price, change, changeColor, changeIcon }) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f6fafc] transition-colors cursor-pointer border border-transparent hover:border-[#D7E2EB]"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded ${iconBg} flex items-center justify-center ${iconColor}`}>
                      <span className="material-symbols-outlined icon-fill">{icon}</span>
                    </div>
                    <div>
                      <h4
                        className="text-[15px] font-semibold text-[#171c1e] leading-tight"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {name}
                      </h4>
                      <span
                        className="text-[10px] text-[#535d68] uppercase tracking-[0.1em] font-bold"
                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                      >
                        {cat}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[15px] font-bold text-[#171c1e]">{price}</div>
                    <div className={`flex items-center justify-end ${changeColor} text-[12px] font-semibold`}>
                      <span className="material-symbols-outlined text-[14px]">{changeIcon}</span>
                      {change}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="mt-auto pt-4 w-full text-center font-semibold text-[#0058bb] hover:text-[#1471e6] transition-colors text-sm"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              View Full Leaderboard
            </button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
