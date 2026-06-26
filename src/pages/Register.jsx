import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/auth";
import "../styles/Auth.css";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.password || !form.confirm) {
      return "All fields are required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      return "Invalid email format";
    }
    if (form.password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    if (form.password !== form.confirm) {
      return "Passwords do not match";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      return setError(validationError);
    }

    setIsLoading(true);
    try {
      const res = await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (res.success) {
        navigate("/verify-otp", { state: { email: form.email } });
      } else {
        setError(res.message || "Registration failed");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          disabled={isLoading}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          disabled={isLoading}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          disabled={isLoading}
        />
        <input
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
          disabled={isLoading}
        />

        {error && <p>{error}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>

      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}