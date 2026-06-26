import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";


import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import VerifyOtp from "./pages/VerifyOtp.jsx";
import  Home  from "./pages/Home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}