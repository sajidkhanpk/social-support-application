import axiosInstance from "./axios";

export const openAIAPI = axiosInstance.create({
  baseURL: "https://api.openai.com/v1",
  timeout: 20000,
});

// OpenAI interceptor
openAIAPI.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (apiKey && config.headers) {
      config.headers.Authorization = `Bearer ${apiKey}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

openAIAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          console.error("OpenAI API: Unauthorized - check your API key");
          throw new Error("Invalid API key. Please check your OpenAI API key.");
        case 429:
          console.error("OpenAI API: Rate limit exceeded");
          throw new Error("Rate limit exceeded. Please try again later.");
        case 504:
          console.error("OpenAI API: Gateway timeout");
          throw new Error("The request took too long. Please try again with a shorter prompt.");
        case 500:
          console.error("OpenAI API: Internal server error");
          throw new Error("OpenAI server error. Please try again later.");
        case 503:
          console.error("OpenAI API: Service unavailable");
          throw new Error("OpenAI service is temporarily unavailable. Please try again later.");
        default:
          console.error("OpenAI API error:", error.message);
          throw new Error("Failed to generate content. Please try again.");
      }
    } else if (error.code === "ECONNABORTED") {
      throw new Error("Request timeout. Please try again with a shorter prompt.");
    } else if (error.request) {
      throw new Error("Network error. Please check your connection and try again.");
    } else {
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
);
// Server API API instance
export const serverAPI = axiosInstance.create({
  baseURL: "https://api.example.com/v1",
});

serverAPI.interceptors.request.use((config) => {
  // Add authentication if user is logged in
  const authToken = localStorage.getItem("authToken");
  if (authToken && config.headers) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

serverAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized error for your API
      console.error("Unauthorized access");
    }
    return Promise.reject(error);
  }
);

export const apiInstances = {
  openAI: openAIAPI,
  custom: serverAPI,
};

export default apiInstances;
