'use client';

import { useState } from 'react';
import { EventopTarget, EventopStep } from '@eventop/sdk/react';
import { Button, IconButton, Toggle, Panel } from '../ui';

export function CanvasScreen() {
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
    setShadowOn(v => !v);
    setTimeout(() => {
      const el = document.getElementById('shadow-controls');
      if (el) el.classList.toggle('visible', !shadowOn);
    }, 0);
  }

  const elements = [
    { id: 'el-rect',   style: { top: 120, left: 160, width: 160, height: 90,  background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', borderRadius: 8   }},
    { id: 'el-circle', style: { top: 70,  left: 380, width: 90,  height: 90,  background: 'linear-gradient(135deg,#10b981,#06b6d4)', borderRadius: '50%' }},
  ];

  return (
    <div className="screen canvas-screen">

      {/* ── Toolbar ── */}
      <div className="canvas-toolbar" id="canvas-toolbar">

        <EventopTarget id="add-text" name="Add Text" description="Insert a text element onto the canvas" advanceOn={{ event: 'click', delay: 200 }}>
          <IconButton icon="T" label="Add text" id="btn-add-text" />
        </EventopTarget>

        <EventopTarget id="insert-image" name="Insert Image" description="Upload an image onto the canvas">
          <IconButton icon="🖼" label="Insert image" id="btn-insert-image" />
        </EventopTarget>

        {/*
          Effects button: standalone EventopTarget AND step 1 of drop-shadow flow.
          Same element, two registrations, no conflict.
        */}
        <EventopTarget id="effects-panel-btn" name="Effects Panel" description="Open the effects panel" advanceOn={{ event: 'click', delay: 200 }}>
          <EventopStep feature="drop-shadow" index={1} waitFor=".canvas-el.selected" advanceOn={{ event: 'click', delay: 200 }}>
            <IconButton icon="✨" label="Effects" id="btn-effects" active={effectsOpen} onClick={handleEffectsClick} />
          </EventopStep>
        </EventopTarget>

        <div className="toolbar-sep" />

        <EventopTarget id="export" name="Export Design" description="Download the canvas as PNG, SVG or PDF">
          <Button id="btn-export">Export</Button>
        </EventopTarget>

        <EventopTarget id="share" name="Share Design" description="Share a link to this design">
          <Button id="btn-share" variant="ghost">Share</Button>
        </EventopTarget>

      </div>

      <div className="canvas-body">

        {/* Step 0 of drop-shadow — fires when any .canvas-el is clicked */}
        <EventopStep feature="drop-shadow" index={0} advanceOn={{ selector: '.canvas-el', event: 'click', delay: 300 }}>
          <div
            id="canvas-stage"
            className="canvas-stage"
            onClick={e => { if (e.target === e.currentTarget) handleSelectEl(null); }}
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
                onClick={() => handleSelectEl(el.id)}
              />
            ))}
          </div>
        </EventopStep>

        {/* ── Right panel ── */}
        <div className="canvas-panel" id="canvas-panel">

          {!selectedEl && (
            <div className="no-selection">Click a shape to select it.</div>
          )}

          <div id="effects-panel" className={`effects-panel ${effectsOpen && selectedEl ? 'open' : ''}`}>
            <div className="panel-label">Effects</div>

            {/* Shadow toggle — step 2 of drop-shadow + standalone feature */}
            <div className="effect-row">
              <span className="effect-name">Drop Shadow</span>
              <EventopTarget id="shadow-toggle-feature" name="Shadow Toggle" description="Turn drop shadow on or off">
                <EventopStep feature="drop-shadow" index={2} waitFor="#effects-panel.open" advanceOn={{ event: 'click', delay: 300 }}>
                  <Toggle id="shadow-toggle" on={shadowOn} onToggle={handleShadowToggle} />
                </EventopStep>
              </EventopTarget>
            </div>

            {/* Shadow sliders — step 3 with nested sub-steps */}
            {shadowOn && (
              <EventopStep feature="drop-shadow" index={3} waitFor="#shadow-controls.visible">
                <div id="shadow-controls" className="shadow-controls visible">

                  {/* Sub-step 0: blur */}
                  <EventopStep feature="drop-shadow" index={0} parentStep={3}>
                    <div className="slider-row">
                      <div className="slider-label">
                        <span>Blur</span>
                        <span id="blur-val">8</span>
                      </div>
                      <input
                        id="shadow-blur"
                        type="range" min="0" max="30" defaultValue="8"
                        onChange={e => {
                          const el = document.getElementById('blur-val');
                          if (el) el.textContent = e.target.value;
                        }}
                      />
                    </div>
                  </EventopStep>

                  {/* Sub-step 1: offsets */}
                  <EventopStep feature="drop-shadow" index={1} parentStep={3}>
                    <div>
                      <div className="slider-row">
                        <div className="slider-label"><span>Offset X</span><span>4</span></div>
                        <input type="range" min="-20" max="20" defaultValue="4" />
                      </div>
                      <div className="slider-row">
                        <div className="slider-label"><span>Offset Y</span><span>6</span></div>
                        <input type="range" min="-20" max="20" defaultValue="6" />
                      </div>
                    </div>
                  </EventopStep>

                  <div className="slider-row">
                    <div className="slider-label"><span>Opacity</span><span>50%</span></div>
                    <input type="range" min="0" max="100" defaultValue="50" />
                  </div>
                </div>
              </EventopStep>
            )}

            {/* Background blur */}
            <div className="effect-row" style={{ marginTop: 12 }}>
              <span className="effect-name">Background Blur</span>
              <EventopTarget id="blur-toggle-feature" name="Background Blur" description="Apply a blur to the background behind the element">
                <Toggle id="blur-toggle" on={blurOn} onToggle={() => setBlurOn(v => !v)} />
              </EventopTarget>
            </div>
          </div>

          {/* Export panel */}
          <EventopTarget id="export-panel" name="Export Panel" description="Download the design as PNG, SVG, or PDF">
            <Panel className="export-section">
              <div className="panel-label">Export</div>
              <Button variant="ghost" id="btn-export-png">🖼 PNG</Button>
              <Button variant="ghost" id="btn-export-svg">📐 SVG</Button>
              <Button variant="ghost" id="btn-export-pdf">📄 PDF</Button>
            </Panel>
          </EventopTarget>

        </div>
      </div>
    </div>
  );
}