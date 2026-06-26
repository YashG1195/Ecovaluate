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
      if (payload.otp === "123456") {
        resolve({ success: true, message: "OTP Verified" });
      } else {
        resolve({ success: false, message: "Invalid OTP. Use 123456 for testing." });
      }
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