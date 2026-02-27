const MODEL = 'gemini-2.5-flash';
const API_KEY = process.env.GEMINI_API_KEY!;

const requestCounts = new Map<string, number[]>();
const RATE_LIMIT = 50;
const TIME_WINDOW = 60000; // 1 minute

function getClientIP(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of requestCounts.entries()) {
    const recentRequests = times.filter(t => t > now - TIME_WINDOW);
    if (recentRequests.length === 0) {
      requestCounts.delete(ip);
    } else {
      requestCounts.set(ip, recentRequests);
    }
  }
}, 5 * 60000);

export async function POST(request: Request) {
  try {
    const ip = getClientIP(request);
    const now = Date.now();

    // Check rate limit
    const times = requestCounts.get(ip) || [];
    const recentRequests = times.filter(t => t > now - TIME_WINDOW);

    if (recentRequests.length >= RATE_LIMIT) {
      return Response.json(
        { error: 'Too many requests. Please wait a minute.' },
        { status: 429 }
      );
    }

    // Record this request
    recentRequests.push(now);
    requestCounts.set(ip, recentRequests);

    const { systemPrompt, messages } = await request.json();
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: messages.map((m: { role: string; content: string }) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        })),
        generationConfig: { maxOutputTokens: 8192, responseMimeType: 'application/json' },
      }),
    });

    if (!res.ok) {
      const e = await res.json().catch(() => ({}));
      throw new Error(`Gemini: ${(e as any)?.error?.message || res.status}`);
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return Response.json(JSON.parse(text));
  } catch (err) {
    console.error('[/api/guide]', err);
    return Response.json({ error: 'Failed to generate tour' }, { status: 500 });
  }
}