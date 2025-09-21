export interface OpenAIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface OpenAIRequest {
  model: string;
  messages: OpenAIMessage[];
  max_tokens?: number;
  temperature?: number;
}

export interface OpenAIError {
  error: {
    message: string;
    type: string;
    param: string | null;
    code: string | null;
  };
}

interface OpenAIResponseMessage {
  role: "assistant" | "user" | "system";
  content: string;
  refusal: string | null;
  annotations: any[];
}

interface OpenAIChoice {
  index: number;
  message: OpenAIResponseMessage;
  logprobs: any | null;
  finish_reason: string;
}

interface CompletionTokenDetails {
  reasoning_tokens: number;
  audio_tokens: number;
  accepted_prediction_tokens: number;
  rejected_prediction_tokens: number;
}

interface PromptTokenDetails {
  cached_tokens: number;
  audio_tokens: number;
}

interface OpenAIUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  prompt_tokens_details: PromptTokenDetails;
  completion_tokens_details: CompletionTokenDetails;
}

export interface OpenAIResponse {
  id: string;
  object: "chat.completion";
  created: number;
  model: string;
  choices: Array<OpenAIChoice>;
  usage: OpenAIUsage;
  service_tier: string;
  system_fingerprint: string | null;
}
