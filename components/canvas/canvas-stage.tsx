'use client';

import { EventopStep } from '@eventop/sdk/react';

interface CanvasStageProps {
  selectedEl:  string | null;
  onSelect:    (id: string | null) => void;
}

const elements = [
  {
    id:    'el-rect',
    style: {
      top: 120, left: 160, width: 160, height: 90,
      background:   'linear-gradient(135deg,#6366f1,#8b5cf6)',
      borderRadius: 8,
    },
  },
  {
    id:    'el-circle',
    style: {
      top: 70, left: 380, width: 90, height: 90,
      background:   'linear-gradient(135deg,#10b981,#06b6d4)',
      borderRadius: '50%',
    },
  },
];

export function CanvasStage({ selectedEl, onSelect }: CanvasStageProps) {
  return (
    // Step 0: click any canvas element to select it
    <EventopStep
      feature="drop-shadow"
      index={0}
      advanceOn={{ selector: '.canvas-el', event: 'click', delay: 300 }}
    >
      <div
        id="canvas-stage"
        className="canvas-stage"
        onClick={e => { if (e.target === e.currentTarget) onSelect(null); }}
      >
        {elements.map(el => (
          <div
            key={el.id}
            id={el.id}
            className={`canvas-el ${selectedEl === el.id ? 'selected' : ''}`}
            style={{
              position:   'absolute',
              cursor:     'pointer',
              border:     '2px solid transparent',
              transition: 'border-color .15s',
              ...(selectedEl === el.id ? { borderColor: '#6366f1' } : {}),
              ...el.style,
            }}
            onClick={() => onSelect(el.id)}
          />
        ))}
      </div>
    </EventopStep>
  );
}
