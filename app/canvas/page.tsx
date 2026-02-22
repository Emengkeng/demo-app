'use client';

import { useState }         from 'react';
import { EventopTarget }    from '@eventop/sdk/react';
import { CanvasToolbar }    from '../../components/canvas/canvas-toolbar';
import { CanvasStage }      from '../../components/canvas/canvas-stage';
import { EffectsPanel }     from '../../components/canvas/effects-panel';
import { ExportPanel }      from '../../components/canvas/export-panel';

export default function CanvasPage() {
  const [selectedEl,  setSelectedEl]  = useState<string | null>(null);
  const [effectsOpen, setEffectsOpen] = useState(false);
  const [shadowOn,    setShadowOn]    = useState(false);
  const [blurOn,      setBlurOn]      = useState(false);

  function handleSelectEl(id: string | null) {
    setSelectedEl(id);
    if (!id) { setEffectsOpen(false); setShadowOn(false); }
  }

  function handleEffectsClick() {
    if (selectedEl) setEffectsOpen(v => !v);
  }

  function handleShadowToggle() {
    setShadowOn(v => {
      const next = !v;
      setTimeout(() => {
        document.getElementById('shadow-controls')
          ?.classList.toggle('visible', next);
      }, 0);
      return next;
    });
  }

  return (
    // EventopTarget registers the parent drop-shadow feature.
    // The individual EventopSteps inside child components
    // attach to this feature id automatically.
    <EventopTarget
      id="drop-shadow"
      name="Drop Shadow Effect"
      description="Apply a customisable drop shadow to a selected canvas element"
    >
      <div className="canvas-screen">

        <CanvasToolbar
          effectsOpen={effectsOpen}
          onEffectsClick={handleEffectsClick}
        />

        <div className="canvas-body">
          <CanvasStage selectedEl={selectedEl} onSelect={handleSelectEl} />

          <div className="canvas-panel" id="canvas-panel">

            {!selectedEl && (
              <div className="no-selection">Click a shape to select it.</div>
            )}

            {selectedEl && (
              <EffectsPanel
                open={effectsOpen}
                shadowOn={shadowOn}
                blurOn={blurOn}
                onShadowToggle={handleShadowToggle}
                onBlurToggle={() => setBlurOn(v => !v)}
              />
            )}

            <ExportPanel />
          </div>
        </div>

      </div>
    </EventopTarget>
  );
}
