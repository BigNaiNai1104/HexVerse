import { FORTUNE_PROMPT } from "@/lib/prompts";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.V3_VOLCE_API_KEY as string;
const apiUrl = process.env.V3_VOLCE_API_URL as string;
const model = process.env.V3_VOLCE_MODEL as string;

// 最大响应时长 (秒)
export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const prompt = body?.prompt;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'prompt'" },
        { status: 400 }
      );
    }

    const openai = createOpenAI({
      baseURL: apiUrl,
      apiKey: apiKey,
    });

    const result = streamText({
      model: openai(model),
      system: FORTUNE_PROMPT,
      prompt,
      onError({ error }) {
        console.error(error);
      },
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
