import { createOpenAI } from "@ai-sdk/openai";

export const openai = createOpenAI({
  // compatibility: 'strict',
  baseURL: "https://ark.cn-beijing.volces.com/api/v3",
  apiKey: "c296dd20-e658-46aa-85b1-310f12a1ba28",
});
