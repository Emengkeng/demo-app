'use client';

import { useEventopTour } from '@eventop/sdk/react';

export function TourStatusBar() {
  const { isActive, isPaused, resume, cancel } = useEventopTour();

  if (!isActive && !isPaused) return null;

  return (
    <div className="tour-bar">
      <span>
        {isPaused ? '⏸ Tour paused' : '▶ Tour running'}
      </span>
      {isPaused && (
        <button className="tour-bar-btn resume" onClick={resume}>
          Resume
        </button>
      )}
      <button className="tour-bar-btn cancel" onClick={cancel}>
        End tour
      </button>
    </div>
  );
}