import { useAuth } from "@clerk/clerk-react";

// Ensure the backend URL is explicitly set via environment variable
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

if (!API_BASE_URL) {
  throw new Error("VITE_BACKEND_URL is not defined in your environment.");
}

export const useApi = () => {
  const { getToken } = useAuth();

  const makeRequest = async (endpoint, options = {}) => {
    const token = await getToken();
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      if (response.status === 429) {
        throw new Error("Daily quota exceeded");
      }
      throw new Error(errorData?.detail || "An error occurred");
    }

    return response.json();
  };

  return { makeRequest };
};