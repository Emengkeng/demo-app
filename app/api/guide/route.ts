const MODEL   = 'gemini-2.5-flash';
const API_KEY = process.env.GEMINI_API_KEY!;

export async function POST(request: Request) {
  try {
    const { systemPrompt, messages } = await request.json();

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

    const res = await fetch(url, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: messages.map((m: { role: string; content: string }) => ({
          role:  m.role === 'assistant' ? 'model' : 'user',
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