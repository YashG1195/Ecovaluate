import { apiClient } from "./client";

// Mock implementations since backend is currently unavailable
export const registerUser = async (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Registration successful" });
    }, 800);
  });
};

export const verifyOtp = async (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "OTP Verified" });
    }, 800);
  });
};

export const loginUser = async (payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        success: true, 
        message: "Login successful", 
        data: { accessToken: "mock-jwt-token-12345" } 
      });
    }, 800);
  });
};