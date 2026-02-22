'use client';

import { EventopStep } from '@eventop/sdk/react';

export function ShadowControls() {
  return (
    // Step 3: the whole sliders container
    <EventopStep
      feature="drop-shadow"
      index={3}
      waitFor="#shadow-controls.visible"
    >
      <div id="shadow-controls" className="shadow-controls visible">

        {/* Sub-step 3.0: blur */}
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

        {/* Sub-step 3.1: offsets */}
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
  );
}
