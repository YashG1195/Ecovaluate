import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

// Full-screen auth routes
import Login     from "./pages/Login.jsx";
import Register  from "./pages/Register.jsx";

// Landing page
import Home from "./pages/Home.jsx";

// Authenticated dashboard pages (each uses DashboardLayout internally)
import Dashboard   from "./pages/Dashboard.jsx";
import MarketRates from "./pages/MarketRates.jsx";
import Enterprise  from "./pages/Enterprise.jsx";
import History     from "./pages/History.jsx";
import Scanner     from "./pages/Scanner.jsx";

/* ── Wrapper that adds shared Header + Footer ── */
function PublicLayout({ children }) {
  return (
    <div className="app min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Full-screen auth routes ── */}
        <Route path="/login"      element={<Login />}     />
        <Route path="/register"   element={<Register />}  />

        {/* ── Dashboard routes (own DashboardLayout sidebar) ── */}
        <Route path="/dashboard"    element={<Dashboard />}   />
        <Route path="/market-rates" element={<MarketRates />} />
        <Route path="/enterprise"   element={<Enterprise />}  />
        <Route path="/history"      element={<History />}     />
        <Route path="/scanner"      element={<Scanner />}     />

        {/* ── Public landing page (Header + Footer wrapper) ── */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}