import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/auth";
import "../styles/Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.email || !form.password) {
      return "All fields are required";
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
      const res = await loginUser(form);

      if (res.success && res.data && res.data.accessToken) {
        localStorage.setItem("token", res.data.accessToken);
        navigate("/");
      } else {
        setError(res.message || "Login failed");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
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

        {error && <p>{error}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      <Link to="/register">Register</Link>
    </div>
  );
}