'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const tabs = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Canvas',    href: '/canvas'    },
  { label: 'Templates', href: '/templates' },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="topnav" style={{ position: 'relative' }}>
      <span className="logo">Eventop</span>

      {/* Desktop / tablet: scrollable inline tabs */}
      <div className="nav-tabs nav-tabs-inline">
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`nav-tab ${pathname === tab.href ? 'active' : ''}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Mobile-only hamburger button */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav-dropdown" onClick={() => setMenuOpen(false)}>
          {tabs.map(tab => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`nav-dropdown-item ${pathname === tab.href ? 'active' : ''}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}