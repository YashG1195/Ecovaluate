import { apiClient } from "./client";

export const registerUser = async (payload) => {
  return apiClient("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const verifyOtp = async (payload) => {
  return apiClient("/auth/verify-otp", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

export const loginUser = async (payload) => {
  return apiClient("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};