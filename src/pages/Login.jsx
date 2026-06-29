import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, signInWithGoogle } from "../api/auth";

/* ─────────────────────────────────────────
   Inline styles for classes that need
   Tailwind-plugin values or CSS-in-JS
───────────────────────────────────────── */
const glassPanel = {
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.1)",
};

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.email || !form.password) return "All fields are required";
    return null;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.email || !form.password) {
      return setError("Email and password are required");
    }

    setIsLoading(true);
    try {
      const res = await loginUser({
        email: form.email,
        password: form.password,
      });

      if (res.success) {
        setSuccess(true);
        setTimeout(() => navigate("/dashboard"), 800);
      } else {
        setError(res.message || "Invalid credentials");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-stretch overflow-hidden">
      {/* ── LEFT PANEL: Brand visual ── */}
      <section
        className="hidden lg:flex w-1/2 relative items-center justify-center p-20 overflow-hidden"
        style={{ backgroundColor: "#0A7A42" }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrq7WnObQK0lm6GP-etXA3Gc-0YKZdOXd3i_UM8ynjfgBa99k5rNAJLUblNk2oCFTHG9NBSFoxNoT4c_E-MxMuuInDYcnvz-wQDsEXGmSaDc0FyrAguW17DXmyJtkri7EUHekAmbB_NmDT9V6OwvYpO1vC1W8ft5oW_YEytKejzaoGcvO4U0MwkA51Um_LRHb1iexVDaLbIVJvVEdXGMia2fBk8RIh5F-dtusb2u7vZlj9XqpYTZRVBi4l-E00BeKK1z7ZXZTwf4Y')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Circuit board texture */}
        <div
          className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/circuit-board.png')",
          }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10 opacity-80"
          style={{
            background:
              "linear-gradient(to top right, #0A7A42, #006a39, rgba(0,88,187,0.3))",
          }}
        />

        {/* Main content */}
        <div className="relative z-20 max-w-lg text-white">
          <div className="mb-12">
            <span className="text-2xl font-bold tracking-tight text-[#82faab]"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
              EcoValuate
            </span>
          </div>

          <h1
            className="text-[52px] leading-[1.1] font-bold mb-6"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            Welcome Back to a Greener Future
          </h1>

          <p className="text-[18px] leading-[1.6] opacity-90 mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Access your AI-powered dashboard to continue transforming e-waste
            into sustainable value. Monitor market rates, track your carbon
            offset, and manage your environmental impact in real-time.
          </p>

          {/* Feature badges */}
          <div className="flex flex-col gap-4">
            {[
              { icon: "bolt", label: "Real-time AI hardware valuation" },
              { icon: "eco", label: "Transparent ESG impact reporting" },
              { icon: "security", label: "Enterprise-grade data security" },
            ].map(({ icon, label }) => (
              <div key={icon} className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={glassPanel}>
                  <span className="material-symbols-outlined text-white">{icon}</span>
                </div>
                <span className="text-[15px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted-by bar */}
        <div className="absolute bottom-12 left-20 right-20 z-20 border-t border-white/10 pt-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/60 mb-6"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
            Trusted by Industry Leaders
          </p>
          <div className="flex justify-between items-center opacity-50 grayscale brightness-200">
            {["TechCorp", "GreenLogistics", "GlobalRetail", "EcoSystems", "FutureLogic"].map((n) => (
              <span key={n} className="font-bold text-[18px] text-white">{n}</span>
            ))}
          </div>
        </div>

        {/* Glow orb */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "rgba(173,199,255,0.2)",
            filter: "blur(120px)",
          }}
        />
      </section>

      {/* ── RIGHT PANEL: Login form ── */}
      <main className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 relative">
        {/* Mobile logo */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
          <span
            className="text-2xl font-bold text-[#006a39]"
            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
          >
            EcoValuate
          </span>
        </div>

        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF4F4] rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#006a39]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                1.2M+ Devices Recycled
              </span>
            </div>
            <h2
              className="text-[32px] leading-[1.2] font-semibold mb-2 text-[#171c1e]"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Sign In
            </h2>
            <p className="text-[15px] text-[#3e4a3f]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Enter your credentials to manage your assets.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[12px] font-bold uppercase tracking-[0.18em] mb-3 text-[#3e4a3f]"
                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
              >
                Email Address
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#3e4a3f] group-focus-within:text-[#0058bb] transition-colors">
                  alternate_email
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-4 bg-[#EAF4F4] border-none rounded-xl text-[15px] text-[#171c1e] placeholder:text-[#6B7280] transition-all"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = "0 0 0 4px rgba(0,88,187,0.1)";
                    e.target.style.border = "1px solid #0058bb";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "none";
                    e.target.style.border = "none";
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label
                  htmlFor="password"
                  className="block text-[12px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f]"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0058bb] hover:text-[#004493] transition-colors no-underline"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#3e4a3f] group-focus-within:text-[#0058bb] transition-colors">
                  lock
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full pl-12 pr-12 py-4 bg-[#EAF4F4] border-none rounded-xl text-[15px] text-[#171c1e] placeholder:text-[#6B7280] transition-all"
                  style={{ fontFamily: "'Inter', sans-serif", outline: "none" }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = "0 0 0 4px rgba(0,88,187,0.1)";
                    e.target.style.border = "1px solid #0058bb";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "none";
                    e.target.style.border = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3e4a3f] hover:text-[#171c1e] transition-colors"
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-[#ffdad6] rounded-xl text-[#93000a] text-[14px]">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white font-semibold text-[15px] py-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                background: success
                  ? "#4ADE80"
                  : "linear-gradient(to right, #0A7A42, #006a39)",
                boxShadow: "0 10px 30px rgba(0,106,57,0.25)",
              }}
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Processing...
                </>
              ) : success ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  Success!
                </>
              ) : (
                <>
                  Sign In
                  <span className="material-symbols-outlined text-[20px]">login</span>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-10 flex items-center">
            <div className="flex-grow border-t border-[#D7E2EB]" />
            <span
              className="mx-4 text-[12px] font-bold uppercase tracking-[0.18em] text-[#6B7280] bg-white px-2"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              OR
            </span>
            <div className="flex-grow border-t border-[#D7E2EB]" />
          </div>

          {/* Google Sign In Button */}
          <div className="mb-6">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-[#D7E2EB] rounded-lg text-[15px] font-semibold text-[#171c1e] hover:bg-[#f6fafc] transition-colors"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign in with Google
            </button>
          </div>

          {/* Security badges */}
          <div className="mt-12 p-6 bg-[#f0f4f6] rounded-xl border border-[#D7E2EB]">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3e4a3f] mb-4 text-center"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              Security &amp; Compliance
            </p>
            <div className="flex justify-around items-center opacity-60">
              {[
                { icon: "verified_user", label: "GDPR" },
                { icon: "gpp_good", label: "ISO 27001" },
                { icon: "security", label: "SOC2" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-[#006a39]">{icon}</span>
                  <span className="text-[10px] font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sign up link */}
          <div className="mt-12 text-center">
            <p className="text-[15px] text-[#3e4a3f]" style={{ fontFamily: "'Inter', sans-serif" }}>
              New to EcoValuate?{" "}
              <Link
                to="/register"
                className="font-bold text-[#006a39] hover:text-[#0A7A42] transition-colors no-underline ml-1"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Footer links */}
        <div className="absolute bottom-8 text-center w-full">
          <div className="flex flex-col gap-4 items-center">
            <a
              href="#"
              className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#6B7280] hover:text-[#171c1e] transition-colors flex items-center justify-center gap-1 no-underline"
              style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
            >
              <span className="material-symbols-outlined text-[16px]">help</span>
              Need assistance? Contact Support
            </a>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((t) => (
                <a
                  key={t}
                  href="#"
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6B7280] hover:text-[#171c1e] transition-colors no-underline"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}