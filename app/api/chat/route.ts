import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const SYSTEM_PROMPT = `You are the AI assistant embedded on the Design World Studio website (designworldstudio.com), an AI & software development agency offering website development, mobile app development, web app development, custom software, MVP development, AI automation, AI agents, AI chatbots, AI-powered software development, SEO, real estate custom software, and learning management systems.

Answer visitor questions about these services, pricing approach (scoped per project after a consultation, not fixed packages), typical timelines (a focused MVP ships in weeks, a full website or software platform is usually measured in months), and how to get started (the Contact page, or hello@designworldstudio.com). Keep answers concise and conversational — a few sentences, not an essay, unless the visitor asks for depth. If asked something unrelated to the business or outside your knowledge, say so honestly rather than guessing. Never invent case studies, client names, or numbers you don't have. If a visitor wants a quote or to start a project, direct them to the Contact page.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Chat is not configured yet. Set ANTHROPIC_API_KEY in your environment.' },
      { status: 500 }
    );
  }

  let body: { messages?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0) {
    return NextResponse.json({ error: 'No messages provided.' }, { status: 400 });
  }
  if (messages.length > 40) {
    return NextResponse.json({ error: 'Conversation too long.' }, { status: 400 });
  }

  const safeMessages = messages
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: safeMessages,
      }),
    });

    if (!anthropicRes.ok) {
      const errText = await anthropicRes.text();
      console.error('Anthropic API error:', anthropicRes.status, errText);
      return NextResponse.json(
        { error: 'The assistant is temporarily unavailable. Please try again in a moment.' },
        { status: 502 }
      );
    }

    const data = await anthropicRes.json();
    const text =
      data?.content?.find((block: { type: string; text?: string }) => block.type === 'text')?.text ??
      "Sorry, I couldn't generate a response just now.";

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error('Chat route error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
