import { serverAPI } from "@/lib/axios/api-instances";

// Example service function for your custom API
export const submitFormAPI = async (formData: Record<string, any>) => {
  try {
    const response = await serverAPI.post("/forms/submit", formData);
    return response.data;
  } catch (_error) {
    // Error messages will be handled from interceptors
    // Custom error handling
  }
};
