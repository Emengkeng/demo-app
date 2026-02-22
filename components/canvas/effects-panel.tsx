'use client';

import { EventopTarget, EventopStep } from '@eventop/sdk/react';
import { Toggle } from '../ui';
import { ShadowControls } from './shadow-controls';

interface EffectsPanelProps {
  open:           boolean;
  shadowOn:       boolean;
  blurOn:         boolean;
  onShadowToggle: () => void;
  onBlurToggle:   () => void;
}

export function EffectsPanel({
  open,
  shadowOn,
  blurOn,
  onShadowToggle,
  onBlurToggle,
}: EffectsPanelProps) {
  if (!open) return null;

  return (
    <div id="effects-panel" className="effects-panel open">
      <div className="panel-label">Effects</div>

      {/* Step 2: toggle shadow on — also a standalone feature */}
      <div className="effect-row">
        <span className="effect-name">Drop Shadow</span>
        <EventopTarget
          id="shadow-toggle-feature"
          name="Shadow Toggle"
          description="Turn drop shadow on or off"
        >
          <EventopStep
            feature="drop-shadow"
            index={2}
            waitFor="#effects-panel.open"
            advanceOn={{ event: 'click', delay: 300 }}
          >
            <Toggle id="shadow-toggle" on={shadowOn} onToggle={onShadowToggle} />
          </EventopStep>
        </EventopTarget>
      </div>

      {/* Step 3: shadow sliders — only renders when shadow is on */}
      {shadowOn && <ShadowControls />}

      <div className="effect-row" style={{ marginTop: 12 }}>
        <span className="effect-name">Background Blur</span>
        <EventopTarget
          id="blur-toggle-feature"
          name="Background Blur"
          description="Apply a blur to the background behind the element"
        >
          <Toggle id="blur-toggle" on={blurOn} onToggle={onBlurToggle} />
        </EventopTarget>
      </div>
    </div>
  );
}
