import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

// Auth pages (full-screen, no shared header/footer)
import Login     from "./pages/Login.jsx";
import Register  from "./pages/Register.jsx";
import VerifyOtp from "./pages/VerifyOtp.jsx";

// Landing page (with shared header/footer)
import Home from "./pages/Home.jsx";

// Authenticated dashboard pages (each uses DashboardLayout internally)
import Dashboard   from "./pages/Dashboard.jsx";
import MarketRates from "./pages/MarketRates.jsx";
import Enterprise  from "./pages/Enterprise.jsx";
import History     from "./pages/History.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Full-screen auth routes ── */}
        <Route path="/login"      element={<Login />}     />
        <Route path="/register"   element={<Register />}  />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* ── Dashboard routes (own sidebar layout) ── */}
        <Route path="/dashboard"    element={<Dashboard />}   />
        <Route path="/market-rates" element={<MarketRates />} />
        <Route path="/enterprise"   element={<Enterprise />}  />
        <Route path="/history"      element={<History />}     />

        {/* ── Public landing page (shared Header + Footer) ── */}
        <Route
          path="/*"
          element={
            <div className="app min-h-screen flex flex-col">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}