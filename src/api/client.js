const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const apiClient = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "An error occurred");
    }

    return data;
  } catch (error) {
    throw error;
  }
};
