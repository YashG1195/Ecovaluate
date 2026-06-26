import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { verifyOtp } from "../api/auth";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "user@example.com";

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!otp) {
      return setError("OTP is required");
    }

    setIsLoading(true);
    try {
      const res = await verifyOtp({ email, otp });

      if (res.success) {
        navigate("/login");
      } else {
        setError(res.message || "OTP verification failed");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="bg-[#f6fafc] min-h-screen flex flex-col text-slate-800"
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      {/* BEGIN: Navigation Header */}
      <header className="w-full bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          {/* Brand Logo Placeholder (Using Emerald Green) */}
          <Link to="/" className="flex items-center space-x-2 no-underline">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-[#0f9d58] rounded-[8px] flex items-center justify-center shadow-sm">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8.5C18.5 17.5 15.5 20 11 20z" />
                <path d="M7 20c-3-1-4-4-3-7 0-3 4-4.5 5-4.5" />
                <path d="M7 20l4-4" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              EcoValuate
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            className="text-sm font-medium text-slate-600 hover:text-[#0f9d58] transition-colors no-underline"
            to="/"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-[#0f9d58] transition-colors no-underline"
            to="/"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-[#0f9d58] transition-colors no-underline"
            to="/"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 no-underline"
            to="/login"
          >
            Log In
          </Link>
          <Link
            className="px-5 py-2 text-sm font-semibold text-white bg-[#0f9d58] rounded-full hover:bg-[#047857] transition-all no-underline"
            to="/register"
          >
            Sign Up
          </Link>
        </div>
      </header>
      {/* END: Navigation Header */}

      {/* BEGIN: Main Verification Section */}
      <main className="flex-grow flex items-center justify-center p-6">
        <section className="max-w-md w-full" data-purpose="otp-verification-container">
          {/* Card Container */}
          <div
            className="bg-white rounded-[8px] p-10 border border-slate-200/50"
            style={{
              boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 8px -2px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Header Text */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900 mb-2">Verify OTP</h1>
              <p className="text-sm font-medium text-slate-600">
                We sent a verification code to
                <br />
                <span className="font-bold">{email}</span>
              </p>
            </div>
            {/* Form Elements */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Input Field */}
              <div data-purpose="input-group">
                <label className="sr-only" htmlFor="otp">
                  Enter OTP
                </label>
                <input
                  className="w-full px-4 py-3 rounded-[8px] border border-slate-200 focus:ring-2 focus:ring-[#0f9d58]/20 focus:border-[#0f9d58] outline-none transition-all text-center text-lg tracking-widest text-slate-900 placeholder:tracking-normal placeholder:text-slate-400"
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP (e.g. 123456)"
                  required
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  autoComplete="one-time-code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm font-medium text-center bg-red-50 py-2 rounded-md">
                  {error}
                </div>
              )}

              {/* Verify Button */}
              <button
                className="w-full bg-[#0f9d58] hover:bg-[#059669] text-white font-bold py-3.5 rounded-full transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify"}
              </button>
            </form>
            {/* Back Link */}
            <div className="mt-8 text-center">
              <Link
                className="text-sm font-semibold text-slate-500 hover:text-[#0f9d58] transition-colors no-underline"
                to="/login"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </section>
      </main>
      {/* END: Main Verification Section */}

      {/* BEGIN: Footer */}
      <footer className="w-full bg-white border-t border-slate-100 py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-[#0f9d58] rounded-full flex items-center justify-center">
                <svg
                  className="h-3.5 w-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-bold text-slate-900">EcoValuate</span>
            </div>
            <p className="text-xs text-slate-500 max-w-xs text-center md:text-left leading-relaxed">
              Empowering sustainable tech lifecycles through smart diagnostics and secure data wiping.
            </p>
          </div>
          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-slate-900 mb-1">Product</span>
              <Link className="text-slate-500 hover:text-[#0f9d58] transition-colors no-underline" to="/">
                Features
              </Link>
              <Link className="text-slate-500 hover:text-[#0f9d58] transition-colors no-underline" to="/">
                Pricing
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-slate-900 mb-1">Company</span>
              <Link className="text-slate-500 hover:text-[#0f9d58] transition-colors no-underline" to="/">
                About Us
              </Link>
              <Link className="text-slate-500 hover:text-[#0f9d58] transition-colors no-underline" to="/">
                Contact
              </Link>
            </div>
            <div className="flex flex-col space-y-2 col-span-2 sm:col-span-1">
              <span className="font-bold text-slate-900 mb-1">Legal</span>
              <Link className="text-slate-500 hover:text-[#0f9d58] transition-colors no-underline" to="/">
                Privacy Policy
              </Link>
              <Link className="text-slate-500 hover:text-[#0f9d58] transition-colors no-underline" to="/">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        {/* Copyright Bar */}
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-50 text-center">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            © {new Date().getFullYear()} EcoValuate. All rights reserved. Built for a Greener Earth.
          </p>
        </div>
      </footer>
      {/* END: Footer */}
    </div>
  );
}