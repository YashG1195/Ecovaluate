import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { verifyOtp } from "../api/auth";
import "../styles/Auth.css";

export default function VerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

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
    <div className="auth-container">
      <h2>Verify OTP</h2>
      <p>We sent a verification code to <strong>{email}</strong></p>

      <form onSubmit={handleSubmit}>
        <input
          name="otp"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          disabled={isLoading}
        />

        {error && <p>{error}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify"}
        </button>
      </form>

      <Link to="/login">Back to Login</Link>
    </div>
  );
}