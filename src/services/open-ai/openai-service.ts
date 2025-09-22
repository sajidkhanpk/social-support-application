import { openAIAPI } from "@/lib/axios/api-instances";
import type { OpenAIError, OpenAIRequest, OpenAIResponse } from "./openai-service.types";

export const generateContent = async (prompt: string, locale = "en"): Promise<string> => {
  try {
    const requestData: OpenAIRequest = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    };

    const response = await openAIAPI.post<OpenAIResponse>("/chat/completions", requestData);

    return response.data.choices[0]?.message?.content || "";
  } catch (error: any) {
    if (error.response?.data) {
      const errorData = error.response.data as OpenAIError;
      throw new Error(errorData.error.message || "Failed to generate content");
    }
    throw error;
  }
};
