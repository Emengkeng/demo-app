'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Canvas',    href: '/canvas'    },
  { label: 'Templates', href: '/templates' },
] as const;

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="topnav">
      <span className="logo">Eventop</span>
      <div className="nav-tabs">
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
    </nav>
  );
}