import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import VerifyOtp from "./pages/VerifyOtp.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes — full-screen, no shared header/footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        {/* App routes — with shared header/footer */}
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