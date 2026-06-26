import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-[#D7E2EB]">
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="no-underline">
          <div className="flex items-center gap-3 font-bold text-xl text-slate-900">
            <div className="w-9 h-9 bg-gradient-to-br from-[#006a39] to-[#0A7A42] rounded-xl grid place-items-center text-white text-xl">
              <span className="material-symbols-outlined">eco</span>
            </div>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #006a39, #0058bb)" }}
            >
              EcoValuate
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-8">
          <a
            className="text-[#3e4a3f] font-medium text-[15px] hover:text-[#006a39] transition-colors no-underline"
            href="#how-it-works"
          >
            How It Works
          </a>
          <a
            className="text-[#3e4a3f] font-medium text-[15px] hover:text-[#006a39] transition-colors no-underline"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-[#3e4a3f] font-medium text-[15px] hover:text-[#006a39] transition-colors no-underline"
            href="#analyzer"
          >
            AI Analyzer
          </a>
          <a
            className="text-[#3e4a3f] font-medium text-[15px] hover:text-[#006a39] transition-colors no-underline"
            href="#pricing"
          >
            Pricing
          </a>
        </nav>

        {/* Actions */}
        <div className="inline-flex items-center gap-2.5">
          <NavLink
            to="/login"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-[15px] bg-white border border-[#D7E2EB] text-slate-900 hover:bg-[#eaeef0] transition-all gap-2 no-underline"
          >
            Log In
          </NavLink>
          <NavLink
            to="/register"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-[15px] bg-[#006a39] text-white hover:bg-[#0A7A42] hover:-translate-y-[1px] transition-all gap-2 no-underline"
            style={{ boxShadow: "0 4px 12px rgba(0,106,57,0.2)" }}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
}
