'use client';

import { EventopTarget, EventopStep } from '@eventop/sdk/react';
import { Button, IconButton } from '../ui';

interface CanvasToolbarProps {
  effectsOpen: boolean;
  onEffectsClick: () => void;
}

export function CanvasToolbar({ effectsOpen, onEffectsClick }: CanvasToolbarProps) {
  return (
    <div className="canvas-toolbar" id="canvas-toolbar">
      <EventopTarget
        id="add-text"
        name="Add Text"
        description="Insert a text element onto the canvas"
        advanceOn={{ event: 'click', delay: 200 }}
      >
        <IconButton icon="T" label="Add text" id="btn-add-text" />
      </EventopTarget>

      <EventopTarget
        id="insert-image"
        name="Insert Image"
        description="Upload an image onto the canvas"
      >
        <IconButton icon="🖼" label="Insert image" id="btn-insert-image" />
      </EventopTarget>

      {/* Dual registration: standalone feature + step in drop-shadow flow */}
      <EventopTarget
        id="effects-panel-btn"
        name="Effects Panel"
        description="Open the effects panel to apply shadows and blur"
        advanceOn={{ event: 'click', delay: 200 }}
      >
        <EventopStep
          feature="drop-shadow"
          index={1}
          waitFor=".canvas-el.selected"
          advanceOn={{ event: 'click', delay: 200 }}
        >
          <IconButton
            icon="✨"
            label="Effects"
            id="btn-effects"
            active={effectsOpen}
            onClick={onEffectsClick}
          />
        </EventopStep>
      </EventopTarget>

      <div className="toolbar-sep" />

      <EventopTarget
        id="export"
        name="Export Design"
        description="Download the canvas as PNG, SVG or PDF"
      >
        <Button id="btn-export">Export</Button>
      </EventopTarget>

      <EventopTarget
        id="share"
        name="Share Design"
        description="Share a link to this design with others"
      >
        <Button id="btn-share" variant="ghost">
          Share
        </Button>
      </EventopTarget>
    </div>
  );
}