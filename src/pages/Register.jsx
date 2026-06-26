import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser, signInWithGoogle } from "../api/auth";

/* ─── Shared helpers ─── */
const HK = "'Hanken Grotesk', sans-serif";
const IN = "'Inter', sans-serif";

const glassPanel = {
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.3)",
};

/* Focus / blur handlers for inputs */
const focusStyle = (e) => {
  e.target.style.borderColor = "#1471e6";
  e.target.style.boxShadow = "0 0 0 4px rgba(20,113,230,0.1)";
  e.target.style.outline = "none";
  // colour the sibling label green
  const label = e.target.closest(".field-group")?.querySelector("label");
  if (label) label.style.color = "#006a39";
};
const blurStyle = (e) => {
  e.target.style.borderColor = "";
  e.target.style.boxShadow = "";
  const label = e.target.closest(".field-group")?.querySelector("label");
  if (label) label.style.color = "";
};

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!form.name || !form.email || !form.password || !form.confirm)
      return "All fields are required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Invalid email format";
    if (form.password.length < 8)
      return "Password must be at least 8 characters long";
    if (form.password !== form.confirm) return "Passwords do not match";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const validationError = validateForm();
    if (validationError) return setError(validationError);

    setIsLoading(true);
    try {
      const res = await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (res.success) {
        setSuccess(true);
        setTimeout(() => navigate("/dashboard"), 700);
      } else {
        setError(res.message || "Registration failed");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const res = await signInWithGoogle();
      if (res.success) {
        navigate("/dashboard");
      } else {
        setError(res.message || "Google Sign-In failed");
      }
    } catch (err) {
      setError("Failed to sign in with Google");
    }
  };

  /* ─── Shared input class ─── */
  const inputCls =
    "w-full py-3 bg-[#EAF4F4] border border-[#D7E2EB] rounded-lg text-[15px] text-[#171c1e] placeholder:text-[#6B7280] transition-all";

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row"
      style={{ fontFamily: IN }}
    >
      {/* ══════════════════════════════
          LEFT PANEL — Brand & Benefits
      ══════════════════════════════ */}
      <section
        className="hidden md:flex md:w-1/2 relative overflow-hidden items-center justify-center px-12 py-20"
        style={{
          background: "linear-gradient(135deg, #006a39 0%, #0A7A42 100%)",
        }}
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/circuit-board.png')",
          }}
        />

        <div className="relative z-10 max-w-lg">
          {/* Logo */}
          <div className="mb-12">
            <span
              className="text-2xl font-bold text-[#82faab]"
              style={{ fontFamily: HK }}
            >
              EcoValuate
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-[52px] leading-[1.1] font-bold text-[#f6fff4] mb-8"
            style={{ fontFamily: HK }}
          >
            Start Your Sustainability Journey.
          </h1>

          {/* Benefit cards */}
          <div className="space-y-6">
            {[
              {
                icon: "assessment",
                title: "Instant Valuations",
                desc: "Get real-time market value for your electronic assets using our proprietary AI engine.",
              },
              {
                icon: "verified_user",
                title: "Secure Data Wiping",
                desc: "Enterprise-grade sanitization protocols ensure your sensitive data is irrecoverable.",
              },
              {
                icon: "eco",
                title: "Environmental Impact Tracking",
                desc: "Visualize your carbon footprint reduction and circular economy contributions.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={icon}
                className="flex items-start gap-4 p-5 rounded-xl transition-transform duration-300 hover:scale-105"
                style={glassPanel}
              >
                <div
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ background: "rgba(100,221,145,0.2)" }}
                >
                  <span
                    className="material-symbols-outlined text-[#82faab]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {icon}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-[18px] font-semibold text-white mb-1"
                    style={{ fontFamily: HK }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#82faab]/80 text-[15px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-6 opacity-70">
            <span
              className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#82faab]"
              style={{ fontFamily: HK }}
            >
              Global Standards
            </span>
            <div className="flex gap-4">
              {["security", "workspace_premium", "public"].map((ic) => (
                <span key={ic} className="material-symbols-outlined text-white text-[20px]">
                  {ic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          RIGHT PANEL — Registration Form
      ══════════════════════════════ */}
      <section className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 py-12 md:px-10">
        {/* Mobile logo */}
        <div className="md:hidden mb-8">
          <span
            className="text-2xl font-bold text-[#006a39]"
            style={{ fontFamily: HK }}
          >
            EcoValuate
          </span>
        </div>

        <div className="max-w-[440px] mx-auto w-full">
          {/* Heading */}
          <div className="mb-10">
            <h2
              className="text-[32px] leading-[1.2] font-semibold text-[#171c1e] mb-2"
              style={{ fontFamily: HK }}
            >
              Create your account
            </h2>
            <p className="text-[15px] text-[#3e4a3f]">
              Join thousands of businesses managing e-waste intelligently.
            </p>
          </div>

          {/* Google Sign In Button */}
          <div className="mb-6">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-[#D7E2EB] rounded-lg text-[15px] font-semibold text-[#171c1e] hover:bg-[#f6fafc] transition-colors"
              style={{ fontFamily: IN }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign up with Google
            </button>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-[#D7E2EB]"></div>
              <span className="px-3 text-[#6B7280] text-[13px] uppercase tracking-wider font-semibold">Or</span>
              <div className="flex-grow border-t border-[#D7E2EB]"></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2 field-group">
              <label
                htmlFor="name"
                className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f] transition-colors"
                style={{ fontFamily: HK }}
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#6B7280] text-[20px]">
                    person
                  </span>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Rahul Sharma"
                  value={form.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={`${inputCls} pl-11 pr-4`}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>
            </div>

            {/* Work Email */}
            <div className="space-y-2 field-group">
              <label
                htmlFor="email"
                className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f] transition-colors"
                style={{ fontFamily: HK }}
              >
                Work Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#6B7280] text-[20px]">
                    mail
                  </span>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="rahul@enterprise.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={`${inputCls} pl-11 pr-4`}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2 field-group">
              <label
                htmlFor="password"
                className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f] transition-colors"
                style={{ fontFamily: HK }}
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#6B7280] text-[20px]">
                    lock
                  </span>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={form.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={`${inputCls} pl-11 pr-12`}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#6B7280] hover:text-[#006a39] transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              <p className="text-[12px] text-[#6B7280] mt-1">
                Must be at least 8 characters with one special symbol.
              </p>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2 field-group">
              <label
                htmlFor="confirm"
                className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f] transition-colors"
                style={{ fontFamily: HK }}
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#6B7280] text-[20px]">
                    lock_reset
                  </span>
                </div>
                <input
                  id="confirm"
                  name="confirm"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  value={form.confirm}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={`${inputCls} pl-11 pr-4`}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-[#ffdad6] rounded-xl text-[#93000a] text-[14px]">
                <span className="material-symbols-outlined text-[18px]">
                  error
                </span>
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white font-semibold text-[15px] py-4 rounded-full flex justify-center items-center gap-2 group transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
              style={{
                fontFamily: HK,
                background: success ? "#4ADE80" : "#006a39",
                boxShadow: "0 10px 30px rgba(0,106,57,0.25)",
              }}
              onMouseEnter={(e) => {
                if (!success) e.currentTarget.style.background = "#0A7A42";
              }}
              onMouseLeave={(e) => {
                if (!success) e.currentTarget.style.background = "#006a39";
              }}
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">
                    refresh
                  </span>
                  Creating Account...
                </>
              ) : success ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Account Created!
                </>
              ) : (
                <>
                  Create Account
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </>
              )}
            </button>
          </form>

          {/* Trust footer */}
          <div className="mt-12 space-y-8">
            <div className="flex items-center justify-center gap-8 border-t border-[#D7E2EB] pt-8 flex-wrap gap-y-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0058bb] text-[18px]">
                  verified
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e4a3f]"
                  style={{ fontFamily: HK }}
                >
                  Enterprise Grade Security
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0058bb] text-[18px]">
                  gavel
                </span>
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#3e4a3f]"
                  style={{ fontFamily: HK }}
                >
                  GDPR Compliance
                </span>
              </div>
            </div>

            {/* Log in link */}
            <div className="text-center">
              <p className="text-[15px] text-[#3e4a3f]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#0058bb] font-semibold hover:underline underline-offset-4 decoration-2 no-underline ml-1"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Mini footer */}
        <footer className="mt-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[#6B7280] text-[12px]">
          <p>© {new Date().getFullYear()} EcoValuate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#006a39] transition-colors no-underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#006a39] transition-colors no-underline">
              Terms of Service
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}