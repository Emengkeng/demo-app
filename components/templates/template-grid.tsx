'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EventopTarget } from '@eventop/sdk/react';
import { Card, Button } from '../ui';

const templates = [
  { id: 'social',       emoji: '📱', name: 'Social Post',  size: '1080×1080' },
  { id: 'banner',       emoji: '🏷', name: 'Web Banner',   size: '1200×628'  },
  { id: 'logo',         emoji: '✦',  name: 'Logo Kit',     size: 'Multi'     },
  { id: 'presentation', emoji: '📊', name: 'Presentation', size: '16:9'      },
];

export function TemplateGrid() {
  const router   = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <EventopTarget
        id="template-gallery"
        name="Template Gallery"
        description="Browse and select a design template to start from"
      >
        <div id="template-grid" className="grid">
          {templates.map(t => (
            <Card
              key={t.id}
              thumb={t.emoji}
              title={t.name}
              subtitle={t.size}
              selected={selected === t.id}
              onClick={() => setSelected(t.id)}
            />
          ))}
        </div>
      </EventopTarget>

      {selected && (
        <EventopTarget
          id="apply-template"
          name="Apply Template"
          description="Confirm and open the selected template in the canvas"
          advanceOn={{ event: 'click', delay: 300 }}
        >
          <Button id="btn-apply-template" onClick={() => router.push('/canvas')}>
            Apply template →
          </Button>
        </EventopTarget>
      )}
    </>
  );
}
