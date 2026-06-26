// src/pages/Dashboard.jsx – Overview page
import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

/* ── Static device data ── */
const DEVICES = [
  {
    name: "Motherboard",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_gCYspkmuyyyvbDOxzRP7oSjHw-68rJpoPqJvFpNgAIMht0Z8V0V-sb11uCwrjXMCQE8YuYtTDjG2b27Eq9QTW1T-qNG1ZsmFWn1nb4E7TF54jM7pwe3Wvn5158qGkTJ16fpVAaeEarlHu3Svshc7fPlSLgIHrEhOsaDN51rQ6C5n9IeQx-jXMR8AeS3PObgA9l3w8vhTwukPxoO4ru2FqqT2EbQWyuBM6ePzo67tstzXEtSt7YDXDrzSowDSTz3MH01l1iA5X8w",
    alt: "Motherboard",
    date: "Today",
    status: "Verified",
    statusColor: "text-[#4ADE80]",
    statusIcon: "check_circle",
    value: "₹450",
    imgBg: "bg-[#EAF4F4]",
    hoverBorder: "hover:border-[#006a39]",
    rowBg: "bg-[#f6fafc]",
  },
  {
    name: "RAM (8GB DDR4)",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo0trjbCBJM2tZqtseKb38I0BiF9lUGXbkYqLdaDq7tqf-FeX-4m497pkJtofnU3uHt_uQHc-DeIe4x_xzeUPvyzFt8HgQxESQrhI72QI35BFyTQdn2D9JvFgFPx_5lV8wV-5U0oVwVp3QbskI1EIa-jddD2n-FHtDNajmEzfKosdIu516ttXD2FJTrbDB6hEK4riAtCkjuXuU9v-7Ky0EIX6aoh_wZE8iR_X2-a19IZ4JhGuQUnTr36g1zeSjrTGC6PW1Bkkh8_A",
    alt: "RAM stick",
    date: "Yesterday",
    status: "Pending",
    statusColor: "text-amber-500",
    statusIcon: "pending",
    value: "₹120",
    imgBg: "bg-[#eaeef0]",
    hoverBorder: "hover:border-[#0058bb]",
    rowBg: "bg-white",
  },
  {
    name: "Hard Drive (1TB HDD)",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcfUg34xRJlNJAq3dSGSLsoq1gkheMvI6e6pMDHsuq-nsWG6y859QzuVHAzpZAa16PAVacXVnTtHi2ztN3bpBT4soCevDQ_RDbR5Ef4j5X5nk1h_TwLfr8Rh9hdsfEZOCTIzOyC-v1sZ2ww-g95t-azeGIrMAXc_dx3fyyRUrEfvIYZaD9w2OwGNpmjgblsvcz_P5OOr-iD4msgtjUTI7tM4l6_k80cKYgGYTrPHwukwwtS7GmxvMlMMEd2hct2SIeAcOei0tG2kE",
    alt: "Hard drive",
    date: "2 Days Ago",
    status: "Processed",
    statusColor: "text-[#6B7280]",
    statusIcon: "inventory_2",
    value: "₹300",
    imgBg: "bg-[#eaeef0]",
    hoverBorder: "hover:border-[#006a39]",
    rowBg: "bg-white",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout
      pageTitle="Dashboard"
      pageSubtitle="Track your environmental impact and manage your assets."
    >
      {/* ── Bento Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* ── LEFT: Impact + Stats ── */}
        <div className="md:col-span-5 flex flex-col space-y-6">

          {/* Primary impact card */}
          <div
            className="rounded-xl p-6 relative overflow-hidden hover-card-rise"
            style={{
              background: "#006a39",
              boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
            }}
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{ background: "linear-gradient(135deg, #0A7A42, #006a39)" }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 py-4 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-2">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Impact Card
              </h3>
              <p className="text-[18px] leading-[1.6] text-white/90 mt-2">
                You have saved{" "}
                <span className="font-bold text-white text-2xl">5.2kg</span>
                <br />
                of e-waste from landfills.
              </p>
            </div>
          </div>

          {/* CO2 + Earnings stat cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-[#D7E2EB] rounded-xl p-4 ambient-shadow-sm hover-card-rise flex flex-col justify-between">
              <div className="flex items-center space-x-2 text-[#006a39] mb-2">
                <span className="material-symbols-outlined">co2</span>
                <span
                  className="text-[12px] font-bold uppercase tracking-[0.18em]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  CO2 Offset
                </span>
              </div>
              <div
                className="text-[32px] font-semibold text-[#171c1e]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                12.4
                <span className="text-[15px] text-[#3e4a3f] font-normal">kg</span>
              </div>
            </div>
            <div className="bg-white border border-[#D7E2EB] rounded-xl p-4 ambient-shadow-sm hover-card-rise flex flex-col justify-between">
              <div className="flex items-center space-x-2 text-[#0058bb] mb-2">
                <span className="material-symbols-outlined">payments</span>
                <span
                  className="text-[12px] font-bold uppercase tracking-[0.18em]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Total Earned
                </span>
              </div>
              <div
                className="text-[32px] font-semibold text-[#171c1e]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                ₹4,250
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Recent Devices ── */}
        <div className="md:col-span-7 flex flex-col space-y-6">
          <div className="bg-white border border-[#D7E2EB] rounded-xl p-6 ambient-shadow-sm flex-1">
            <div className="flex justify-between items-center mb-6">
              <h3
                className="text-2xl font-semibold text-[#171c1e]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Recent Devices
              </h3>
              <Link
                to="/history"
                className="text-[#0058bb] font-semibold hover:underline text-sm no-underline"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {DEVICES.map((d) => (
                <div
                  key={d.name}
                  className={`flex items-center justify-between p-4 border border-[#D7E2EB] rounded-lg ${d.rowBg} ${d.hoverBorder} transition-colors cursor-pointer`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${d.imgBg} rounded-lg flex items-center justify-center overflow-hidden border border-[#D7E2EB] shrink-0`}>
                      <img src={d.img} alt={d.alt} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4
                        className="text-[15px] font-semibold text-[#171c1e]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {d.name}
                      </h4>
                      <div className="flex items-center text-xs text-[#3e4a3f] mt-1 space-x-2">
                        <span>{d.date}</span>
                        <span>•</span>
                        <span className={`flex items-center ${d.statusColor}`}>
                          <span className="material-symbols-outlined text-[14px] mr-1">{d.statusIcon}</span>
                          {d.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-2xl font-semibold text-[#171c1e]"
                      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                    >
                      {d.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scan another CTA */}
            <Link
              to="/scanner"
              className="w-full mt-6 border-2 border-dashed border-[#D7E2EB] rounded-lg py-4 flex flex-col items-center justify-center text-[#3e4a3f] hover:bg-[#f6fafc] hover:border-[#006a39] transition-colors group no-underline"
            >
              <span className="material-symbols-outlined text-[#006a39] mb-2 group-hover:scale-110 transition-transform">
                qr_code_scanner
              </span>
              <span
                className="font-semibold text-[15px]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Scan Another Item
              </span>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
