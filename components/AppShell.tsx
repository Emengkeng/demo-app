'use client';

import { useState, useCallback } from 'react';
import { TourStatusBar }    from './TourStatusBar';
import { DashboardScreen }  from './screens/DashboardScreen';
import { CanvasScreen }     from './screens/CanvasScreen';
import { TemplatesScreen }  from './screens/TemplatesScreen';

type Screen = 'dashboard' | 'canvas' | 'templates';

export function AppShell() {
  const [screen, setScreen] = useState<Screen>('dashboard');
  const navigate = useCallback((s: Screen) => setScreen(s), []);

  return (
    <div className="app">
      <nav className="topnav">
        <span className="logo">Eventop</span>
        <div className="nav-tabs">
          {(['dashboard', 'canvas', 'templates'] as Screen[]).map(s => (
            <button
              key={s}
              className={`nav-tab ${screen === s ? 'active' : ''}`}
              onClick={() => navigate(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Renders nothing when no tour is active */}
      <TourStatusBar />

      {/*
        Only the active screen renders.
        EventopTarget/Step components inside each screen auto-register
        on mount and auto-unregister on unmount — no screen.check() needed.
      */}
      {screen === 'dashboard' && <DashboardScreen onNavigate={navigate} />}
      {screen === 'canvas'    && <CanvasScreen />}
      {screen === 'templates' && <TemplatesScreen onApply={() => navigate('canvas')} />}
    </div>
  );
}