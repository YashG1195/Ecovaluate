// src/pages/Enterprise.jsx – Enterprise Onboarding page
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";

const STEPS = [
  { num: 1, label: "Company Info",     icon: "business"       },
  { num: 2, label: "Asset Upload",     icon: "upload_file"    },
  { num: 3, label: "Configuration",   icon: "tune"           },
  { num: 4, label: "Confirmation",    icon: "check_circle"   },
];

export default function Enterprise() {
  const [step, setStep] = useState(1);
  const [company, setCompany] = useState({ name: "", industry: "", size: "", contact: "", email: "" });
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [config, setConfig] = useState({ wipeStandard: "nist", valuation: "market", notification: true });

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  /* ── Step Indicator ── */
  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-10">
      {STEPS.map(({ num, label, icon }, i) => (
        <React.Fragment key={num}>
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                step > num
                  ? "bg-[#4ADE80] text-white"
                  : step === num
                  ? "bg-[#006a39] text-white"
                  : "bg-[#eaeef0] text-[#6B7280]"
              }`}
            >
              {step > num ? (
                <span className="material-symbols-outlined text-[18px]">check</span>
              ) : (
                <span className="material-symbols-outlined text-[18px]">{icon}</span>
              )}
            </div>
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
                step >= num ? "text-[#006a39]" : "text-[#6B7280]"
              }`}
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              {label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-3 mb-6 rounded transition-all ${
                step > num ? "bg-[#4ADE80]" : "bg-[#D7E2EB]"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  /* ── Step 1: Company Info ── */
  const Step1 = () => (
    <div className="space-y-5">
      <h3 className="text-2xl font-bold text-[#171c1e] mb-1" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
        Tell us about your organisation
      </h3>
      <p className="text-[15px] text-[#3e4a3f] mb-6">This helps us tailor the valuation and compliance reports to your industry.</p>
      {[
        { id: "name",     label: "Company Name",    ph: "Acme Corp", icon: "business"        },
        { id: "industry", label: "Industry",        ph: "IT / Technology", icon: "category"  },
        { id: "contact",  label: "Contact Person",  ph: "Rahul Sharma", icon: "person"       },
        { id: "email",    label: "Business Email",  ph: "rahul@acmecorp.com", icon: "mail"   },
      ].map(({ id, label, ph, icon }) => (
        <div key={id} className="space-y-1">
          <label
            htmlFor={id}
            className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f]"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            {label}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#6B7280] text-[20px]">
              {icon}
            </span>
            <input
              id={id}
              name={id}
              type={id === "email" ? "email" : "text"}
              placeholder={ph}
              value={company[id] || ""}
              onChange={(e) => setCompany({ ...company, [id]: e.target.value })}
              className="w-full pl-11 pr-4 py-3 bg-[#EAF4F4] border border-[#D7E2EB] rounded-lg text-[15px] text-[#171c1e] focus:outline-none focus:ring-2 focus:ring-[#0058bb] placeholder:text-[#6B7280]"
            />
          </div>
        </div>
      ))}
      {/* Company size */}
      <div className="space-y-1">
        <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f]"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
          Fleet Size
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["< 50", "50–500", "500–5K", "5K+"].map((size) => (
            <button
              key={size}
              onClick={() => setCompany({ ...company, size })}
              className={`py-3 rounded-lg border text-sm font-semibold transition-all ${
                company.size === size
                  ? "bg-[#006a39] text-white border-[#006a39]"
                  : "bg-[#EAF4F4] text-[#3e4a3f] border-[#D7E2EB] hover:border-[#006a39]"
              }`}
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              {size} devices
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  /* ── Step 2: Asset Upload ── */
  const Step2 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#171c1e] mb-1" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
        Upload your asset manifest
      </h3>
      <p className="text-[15px] text-[#3e4a3f]">
        Drag and drop your CSV or Excel file. We support bulk processing for thousands of devices simultaneously.
      </p>

      {/* Security callout */}
      <div className="bg-[#EAF4F4] rounded-xl p-4 border border-[#006a39]/20 flex items-start gap-3">
        <span className="material-symbols-outlined text-[#006a39] mt-0.5">security</span>
        <div>
          <p className="text-[14px] font-semibold text-[#006a39]" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
            Enterprise Grade Security
          </p>
          <p className="text-[13px] text-[#3e4a3f]">
            All uploads are encrypted via TLS 1.3. Data wiping protocols (NIST 800-88) will be configured in the next step.
          </p>
        </div>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          const file = e.dataTransfer.files[0];
          if (file) setUploadedFile(file);
        }}
        className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
          dragOver
            ? "border-[#006a39] bg-[#EAF4F4]"
            : uploadedFile
            ? "border-[#4ADE80] bg-[#f0fdf4]"
            : "border-[#D7E2EB] bg-white hover:border-[#006a39] hover:bg-[#f6fafc]"
        }`}
      >
        {uploadedFile ? (
          <>
            <span className="material-symbols-outlined text-[#4ADE80] text-4xl mb-3">check_circle</span>
            <p className="text-[15px] font-semibold text-[#171c1e]">{uploadedFile.name}</p>
            <p className="text-[13px] text-[#6B7280] mt-1">
              {(uploadedFile.size / 1024).toFixed(1)} KB — ready for processing
            </p>
            <button
              onClick={() => setUploadedFile(null)}
              className="mt-4 text-[#0058bb] text-sm font-semibold hover:underline"
            >
              Remove file
            </button>
          </>
        ) : (
          <>
            <div className="w-14 h-14 bg-[#EAF4F4] rounded-full flex items-center justify-center mb-4 text-[#006a39]">
              <span className="material-symbols-outlined text-3xl">upload_file</span>
            </div>
            <h4 className="text-lg font-bold text-[#171c1e] mb-1" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
              Drag & Drop your manifest
            </h4>
            <p className="text-[14px] text-[#6B7280] mb-4">Supports .csv, .xlsx up to 50MB</p>
            <label className="bg-white border border-[#D7E2EB] text-[#0058bb] font-semibold text-sm py-2 px-6 rounded-full shadow-sm inline-flex items-center gap-2 cursor-pointer hover:bg-[#eaeef0] transition-colors">
              <span className="material-symbols-outlined text-sm">folder_open</span>
              Browse Files
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                className="hidden"
                onChange={(e) => setUploadedFile(e.target.files[0])}
              />
            </label>
          </>
        )}
      </div>

      {/* Template download */}
      <div className="flex items-center justify-between p-4 bg-[#f0f4f6] rounded-xl border border-[#D7E2EB]">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#0058bb]">table_view</span>
          <div>
            <p className="text-[14px] font-semibold text-[#171c1e]">Asset Manifest Template</p>
            <p className="text-[12px] text-[#6B7280]">Download our pre-formatted CSV template</p>
          </div>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-[#0058bb] font-semibold text-sm hover:underline no-underline"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Download
        </a>
      </div>
    </div>
  );

  /* ── Step 3: Configuration ── */
  const Step3 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#171c1e] mb-1" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
        Processing Configuration
      </h3>
      <p className="text-[15px] text-[#3e4a3f]">Configure how your assets will be processed and valued.</p>

      {/* Wipe Standard */}
      <div className="space-y-3">
        <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f]"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
          Data Wipe Standard
        </label>
        {[
          { id: "nist",    label: "NIST 800-88",      desc: "US Federal standard — recommended for enterprise" },
          { id: "dod",     label: "DoD 5220.22-M",    desc: "US Department of Defense 3-pass overwrite"         },
          { id: "gutmann", label: "Gutmann (35-pass)", desc: "Maximum security — slower processing time"         },
        ].map(({ id, label, desc }) => (
          <div
            key={id}
            onClick={() => setConfig({ ...config, wipeStandard: id })}
            className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
              config.wipeStandard === id
                ? "border-[#006a39] bg-[#EAF4F4]"
                : "border-[#D7E2EB] bg-white hover:border-[#006a39]/50"
            }`}
          >
            <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
              config.wipeStandard === id ? "border-[#006a39] bg-[#006a39]" : "border-[#D7E2EB]"
            }`}>
              {config.wipeStandard === id && <span className="material-symbols-outlined text-white text-[14px]">check</span>}
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[#171c1e]">{label}</p>
              <p className="text-[13px] text-[#6B7280]">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Valuation Mode */}
      <div className="space-y-3">
        <label className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f]"
          style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
          Valuation Mode
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { id: "market",  label: "Market Rate",  icon: "trending_up",   desc: "Real-time buyer network pricing" },
            { id: "scrap",   label: "Scrap Value",  icon: "recycling",     desc: "Raw material / metal content"   },
          ].map(({ id, label, icon, desc }) => (
            <div
              key={id}
              onClick={() => setConfig({ ...config, valuation: id })}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                config.valuation === id ? "border-[#006a39] bg-[#EAF4F4]" : "border-[#D7E2EB] bg-white hover:border-[#006a39]/50"
              }`}
            >
              <span className={`material-symbols-outlined text-2xl mb-2 ${config.valuation === id ? "text-[#006a39]" : "text-[#6B7280]"}`}>{icon}</span>
              <p className="text-[15px] font-semibold text-[#171c1e]">{label}</p>
              <p className="text-[13px] text-[#6B7280]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notification toggle */}
      <div className="flex items-center justify-between p-4 bg-[#f6fafc] rounded-xl border border-[#D7E2EB]">
        <div>
          <p className="text-[15px] font-semibold text-[#171c1e]">Email Notifications</p>
          <p className="text-[13px] text-[#6B7280]">Receive updates when processing completes</p>
        </div>
        <button
          onClick={() => setConfig({ ...config, notification: !config.notification })}
          className={`w-12 h-6 rounded-full transition-all flex items-center px-1 ${
            config.notification ? "bg-[#006a39] justify-end" : "bg-[#D7E2EB] justify-start"
          }`}
        >
          <div className="w-4 h-4 bg-white rounded-full shadow" />
        </button>
      </div>
    </div>
  );

  /* ── Step 4: Confirmation ── */
  const Step4 = () => (
    <div className="space-y-6 text-center">
      <div className="w-20 h-20 bg-[#EAF4F4] rounded-full flex items-center justify-center mx-auto">
        <span className="material-symbols-outlined text-[#006a39] text-4xl icon-fill">check_circle</span>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#171c1e]" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
          You're all set!
        </h3>
        <p className="text-[15px] text-[#3e4a3f] mt-2">
          Your enterprise account is being configured. Our team will contact you within 24 hours.
        </p>
      </div>
      {/* Summary */}
      <div className="bg-[#f6fafc] rounded-xl border border-[#D7E2EB] p-6 text-left space-y-4">
        {[
          { label: "Company",       value: company.name || "—"           },
          { label: "Fleet Size",    value: company.size ? `${company.size} devices` : "—" },
          { label: "Wipe Standard", value: config.wipeStandard.toUpperCase() },
          { label: "Valuation",     value: config.valuation === "market" ? "Market Rate" : "Scrap Value" },
          { label: "Manifest",      value: uploadedFile?.name || "Not uploaded" },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#6B7280]"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
              {label}
            </span>
            <span className="text-[15px] font-semibold text-[#171c1e]">{value}</span>
          </div>
        ))}
      </div>
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 btn-primary-glow text-white font-semibold py-3 px-8 rounded-full no-underline"
        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
      >
        Go to Dashboard
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </Link>
    </div>
  );

  const stepContent = { 1: <Step1 />, 2: <Step2 />, 3: <Step3 />, 4: <Step4 /> };

  return (
    <DashboardLayout pageTitle="Enterprise" pageSubtitle="Set up bulk device processing for your organisation.">
      <div className="max-w-2xl mx-auto">
        <StepIndicator />

        {/* Step card */}
        <div
          className="bg-white rounded-2xl border border-[#D7E2EB] p-8"
          style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.08)" }}
        >
          {stepContent[step]}

          {/* Navigation buttons */}
          {step < 4 && (
            <div className="flex justify-between mt-8 pt-6 border-t border-[#D7E2EB]">
              <button
                onClick={prev}
                disabled={step === 1}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#D7E2EB] text-[#3e4a3f] font-semibold hover:bg-[#eaeef0] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Back
              </button>
              <button
                onClick={next}
                className="btn-primary-glow flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                {step === 3 ? "Submit" : "Continue"}
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          )}
        </div>

        {/* Progress */}
        <p className="text-center text-[12px] text-[#6B7280] mt-4" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
          Step {step} of {STEPS.length}
        </p>
      </div>
    </DashboardLayout>
  );
}
