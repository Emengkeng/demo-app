'use client';

import { useRouter } from 'next/navigation';
import { EventopTarget } from '@eventop/sdk/react';
import { Card } from '../ui';

const projects = [
  { name: 'Brand Kit v2',  thumb: '🎨', sub: '2h ago'     },
  { name: 'Landing Page',  thumb: '📐', sub: 'Yesterday'  },
  { name: 'Social Posts',  thumb: '🖼', sub: '3 days ago' },
];

export function ProjectGrid() {
  const router = useRouter();

  return (
    <>
      <h2 className="section-title">Recent projects</h2>
      <div className="grid">
        {projects.map(p => (
          <Card
            key={p.name}
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
