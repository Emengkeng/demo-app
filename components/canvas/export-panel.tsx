'use client';

import { EventopTarget } from '@eventop/sdk/react';
import { Button } from '../ui';

export function ExportPanel() {
  return (
    <EventopTarget
      id="export-panel"
      name="Export Panel"
      description="Download the design as PNG, SVG, or PDF"
      route="/canvas"
    >
      <div className="export-section">
        <div className="panel-label">Export</div>
        <Button variant="ghost" id="btn-export-png">
          🖼 PNG
        </Button>
        <Button variant="ghost" id="btn-export-svg">
          📐 SVG
        </Button>
        <Button variant="ghost" id="btn-export-pdf">
          📄 PDF
        </Button>
      </div>
    </EventopTarget>
  );
}