'use client';

import { useState } from 'react';
import { EventopTarget } from '@eventop/sdk/react';
import { Button, Card } from '../ui';

interface TemplatesScreenProps {
  onApply: () => void;
}

export function TemplatesScreen({ onApply }: TemplatesScreenProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const templates = [
    { id: 'social',       emoji: '📱', name: 'Social Post',  size: '1080×1080' },
    { id: 'banner',       emoji: '🏷', name: 'Web Banner',   size: '1200×628'  },
    { id: 'logo',         emoji: '✦',  name: 'Logo Kit',     size: 'Multi'     },
    { id: 'presentation', emoji: '📊', name: 'Presentation', size: '16:9'      },
  ];

  return (
    <div className="screen templates-screen">
      <div className="templates-body">
        <h2 className="section-title">Choose a template</h2>

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
            <Button id="btn-apply-template" onClick={onApply}>
              Apply template →
            </Button>
          </EventopTarget>
        )}
      </div>
    </div>
  );
}