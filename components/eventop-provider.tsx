'use client';

import { useRouter } from 'next/navigation';
import { EventopAIProvider } from '@eventop/sdk/react';

const provider = async ({
  systemPrompt,
  messages,
}: {
  systemPrompt: string;
  messages: { role: 'user' | 'assistant'; content: string }[];
}) => {
  const res = await fetch('/api/guide', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ systemPrompt, messages }),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
};

export function EventopProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <EventopAIProvider
      provider={provider}
      router={(path) => router.push(path)}
      appName="Eventop"
      assistantName="Event AI"
      suggestions={[
        'Add a drop shadow',
        'Export my design',
        'Invite a teammate',
        'Apply a template',
      ]}
      theme={{
        mode: 'glass',
        tokens: {
          accent: '#6366f1',
          accentSecondary: '#8b5cf6',
          fontFamily: "'Inter', system-ui, sans-serif",
          radius: '14px',
        },
      }}
      position={{ corner: 'bottom-right', offsetX: 24, offsetY: 24 }}
    >
      {children}
    </EventopAIProvider>
  );
}