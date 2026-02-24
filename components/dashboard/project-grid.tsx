'use client';

import { useRouter } from 'next/navigation';
import { EventopTarget } from '@eventop/sdk/react';
import { Card } from '../ui';

const projects = [
  { id: '1', name: 'Brand Kit v2',  thumb: '🎨', sub: '2h ago'     },
  { id: '2', name: 'Landing Page',  thumb: '📐', sub: 'Yesterday'  },
  { id: '3', name: 'Social Posts',  thumb: '🖼', sub: '3 days ago' },
] as const;

export function ProjectGrid() {
  const router = useRouter();

  return (
    <>
      <h2 className="section-title">Recent projects</h2>
      <div className="grid">
        {projects.map(p => (
          <Card
            key={p.id}
            thumb={p.thumb}
            title={p.name}
            subtitle={p.sub}
            onClick={() => router.push('/canvas')}
          />
        ))}

        <EventopTarget
          id="new-project"
          name="Create New Project"
          description="Start a new blank design project"
          route="/dashboard"
        >
          <Card
            isNew
            thumb="＋"
            title="New project"
            onClick={() => router.push('/canvas')}
          />
        </EventopTarget>
      </div>
    </>
  );
}