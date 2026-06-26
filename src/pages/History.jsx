// src/pages/History.jsx – Scan History & Transactions page
import React, { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

/* ── Mock data ── */
const ALL_HISTORY = [
  { id: "EV-0041", name: "Motherboard (Intel Z490)",   date: "Today, 10:32 AM",    status: "Verified",  value: "₹450",  icon: "developer_board", iconBg: "bg-[#EAF4F4]",  iconColor: "text-[#006a39]",  co2: "1.2kg" },
  { id: "EV-0040", name: "RAM – 8GB DDR4",             date: "Yesterday, 4:18 PM", status: "Pending",   value: "₹120",  icon: "memory",          iconBg: "bg-blue-50",    iconColor: "text-[#0058bb]",  co2: "0.4kg" },
  { id: "EV-0039", name: "Hard Drive – 1TB HDD",       date: "24 Jun, 11:05 AM",  status: "Processed", value: "₹300",  icon: "storage",         iconBg: "bg-[#EAF4F4]",  iconColor: "text-[#006a39]",  co2: "0.9kg" },
  { id: "EV-0038", name: "iPhone 12 Pro (Cracked)",    date: "22 Jun, 9:47 AM",   status: "Verified",  value: "₹8,200",icon: "smartphone",      iconBg: "bg-[#EAF4F4]",  iconColor: "text-[#006a39]",  co2: "3.1kg" },
  { id: "EV-0037", name: "Server PSU – 750W",          date: "20 Jun, 2:15 PM",   status: "Processed", value: "₹980",  icon: "power",           iconBg: "bg-[#eaeef0]",  iconColor: "text-[#535d68]",  co2: "2.6kg" },
  { id: "EV-0036", name: "GPU – NVIDIA GTX 1060",      date: "18 Jun, 5:50 PM",   status: "Verified",  value: "₹2,100",icon: "tv",              iconBg: "bg-[#EAF4F4]",  iconColor: "text-[#006a39]",  co2: "4.8kg" },
  { id: "EV-0035", name: "Dell Laptop – Core i5",      date: "15 Jun, 11:20 AM",  status: "Processed", value: "₹3,500",icon: "laptop_mac",      iconBg: "bg-[#EAF4F4]",  iconColor: "text-[#006a39]",  co2: "5.3kg" },
  { id: "EV-0034", name: "Cisco Router – 3900 Series", date: "12 Jun, 3:00 PM",   status: "Pending",   value: "₹4,750",icon: "router",          iconBg: "bg-blue-50",    iconColor: "text-[#0058bb]",  co2: "2.0kg" },
];

const STATUS_META = {
  Verified:  { bg: "bg-[#f0fdf4]", text: "text-[#4ADE80]",  icon: "check_circle"  },
  Pending:   { bg: "bg-amber-50",  text: "text-amber-500",  icon: "pending"       },
  Processed: { bg: "bg-[#f0f4f6]", text: "text-[#6B7280]",  icon: "inventory_2"   },
};

const FILTER_TABS = ["All", "Verified", "Pending", "Processed"];

export default function History() {
  const [activeTab, setActiveTab]   = useState("All");
  const [search, setSearch]         = useState("");
  const [sortBy, setSortBy]         = useState("newest");

  /* ── Filtered + sorted list ── */
  const visible = ALL_HISTORY
    .filter((r) => (activeTab === "All" || r.status === activeTab))
    .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()) || r.id.toLowerCase().includes(search.toLowerCase()));

  /* ── Summary KPIs ── */
  const totalValue  = "₹19,400";
  const totalCO2    = "20.3kg";
  const totalScans  = ALL_HISTORY.length;
  const verified    = ALL_HISTORY.filter((r) => r.status === "Verified").length;

  return (
    <DashboardLayout pageTitle="Scan History" pageSubtitle="A complete record of all your scanned and processed devices.">
      {/* ── KPI Strip ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: "qr_code_scanner", label: "Total Scans",    value: totalScans,  color: "text-[#006a39]",  bg: "bg-[#EAF4F4]"  },
          { icon: "payments",        label: "Total Earned",   value: totalValue,  color: "text-[#0058bb]",  bg: "bg-blue-50"    },
          { icon: "co2",             label: "CO2 Offset",     value: totalCO2,    color: "text-[#4ADE80]",  bg: "bg-[#f0fdf4]"  },
          { icon: "check_circle",    label: "Verified Scans", value: verified,    color: "text-[#006a39]",  bg: "bg-[#EAF4F4]"  },
        ].map(({ icon, label, value, color, bg }) => (
          <div
            key={label}
            className="bg-white border border-[#D7E2EB] rounded-xl p-4 flex items-center gap-4 ambient-shadow-sm hover-card-rise"
          >
            <div className={`w-11 h-11 ${bg} rounded-lg flex items-center justify-center ${color} flex-shrink-0`}>
              <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#6B7280]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {label}
              </p>
              <p className="text-xl font-bold text-[#171c1e]" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Filters & Search ── */}
      <div className="bg-white border border-[#D7E2EB] rounded-xl p-5 mb-6 ambient-shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Status tabs */}
          <div className="flex gap-2 flex-wrap">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-[0.18em] border transition-colors ${
                  activeTab === tab
                    ? "bg-[#006a39] text-white border-[#006a39]"
                    : "bg-[#f6fafc] text-[#3e4a3f] border-[#D7E2EB] hover:border-[#006a39]"
                }`}
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#6B7280] text-[18px]">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or ID..."
              className="w-full pl-9 pr-4 py-2 bg-[#f6fafc] border border-[#D7E2EB] rounded-lg text-[14px] text-[#171c1e] focus:outline-none focus:ring-2 focus:ring-[#0058bb] placeholder:text-[#6B7280]"
            />
          </div>
        </div>
      </div>

      {/* ── History Table / Cards ── */}
      <div className="bg-white border border-[#D7E2EB] rounded-xl overflow-hidden ambient-shadow-sm">
        {/* Table header (desktop) */}
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 py-3 bg-[#f0f4f6] border-b border-[#D7E2EB] text-[12px] font-bold uppercase tracking-[0.18em] text-[#6B7280]"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
          <span>Device</span>
          <span>Date</span>
          <span>Status</span>
          <span>Value</span>
          <span>CO2</span>
        </div>

        {visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-[#6B7280]">
            <span className="material-symbols-outlined text-4xl mb-3">search_off</span>
            <p className="font-semibold">No results found</p>
          </div>
        ) : (
          <div className="divide-y divide-[#D7E2EB]">
            {visible.map((row) => {
              const s = STATUS_META[row.status];
              return (
                <div
                  key={row.id}
                  className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 md:gap-4 px-6 py-4 hover:bg-[#f6fafc] transition-colors cursor-pointer items-center"
                >
                  {/* Device */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${row.iconBg} rounded-lg flex items-center justify-center ${row.iconColor} flex-shrink-0`}>
                      <span className="material-symbols-outlined icon-fill text-[20px]">{row.icon}</span>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#171c1e]" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {row.name}
                      </p>
                      <p className="text-[11px] text-[#6B7280] font-mono">{row.id}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <span className="text-[14px] text-[#3e4a3f] md:block flex items-center gap-1">
                    <span className="md:hidden material-symbols-outlined text-[14px] text-[#6B7280]">calendar_today</span>
                    {row.date}
                  </span>

                  {/* Status */}
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-bold ${s.bg} ${s.text} w-fit`}
                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    <span className="material-symbols-outlined text-[14px]">{s.icon}</span>
                    {row.status}
                  </span>

                  {/* Value */}
                  <span className="text-[16px] font-bold text-[#171c1e]" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    {row.value}
                  </span>

                  {/* CO2 */}
                  <span className="flex items-center gap-1 text-[#006a39] text-[13px] font-semibold">
                    <span className="material-symbols-outlined text-[16px]">eco</span>
                    {row.co2}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#D7E2EB] bg-[#f6fafc]">
          <p className="text-[13px] text-[#6B7280]">
            Showing {visible.length} of {ALL_HISTORY.length} records
          </p>
          <button
            className="flex items-center gap-1 text-[#0058bb] font-semibold text-[13px] hover:underline"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            Export CSV
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
