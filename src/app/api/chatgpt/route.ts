import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface RequestBody {
  question: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RequestBody = await req.json();

    if (!body.question || body.question.trim() === "") {
      return NextResponse.json(
        { error: "Question is required." },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: body.question }],
    });

    const answer =
      completion.choices[0].message?.content || "Sorry, I couldn't find an answer.";

    return NextResponse.json({ answer });
  } catch (error: any) {
    console.error("ChatGPT API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from ChatGPT." },
      { status: 500 }
    );
  }
}
