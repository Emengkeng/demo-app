'use client';

import { useState } from 'react';
import { EventopTarget } from '@eventop/sdk/react';
import { useEventopAI } from '@eventop/sdk/react';
import { Avatar, Button, Card } from '../ui';

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  const { stepComplete, stepFail } = useEventopAI();
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviting, setInviting]       = useState(false);

  async function handleInvite() {
    if (!inviteEmail.includes('@')) {
      stepFail('Please enter a valid email address.');
      return;
    }
    setInviting(true);
    await new Promise(r => setTimeout(r, 900));
    setInviting(false);
    stepComplete();
  }

  const projects = [
    { name: 'Brand Kit v2',  thumb: '🎨', sub: '2h ago'    },
    { name: 'Landing Page',  thumb: '📐', sub: 'Yesterday'  },
    { name: 'Social Posts',  thumb: '🖼', sub: '3 days ago' },
  ];

  const stats = [
    { label: 'Projects', value: '12',  change: '↑ 3 this month'   },
    { label: 'Assets',   value: '284', change: '↑ 18 this week'   },
    { label: 'Members',  value: '5',   change: '1 invite pending' },
  ];

  const members = [
    { name: 'Alice', role: 'Owner',  color: '#6366f1' },
    { name: 'Bob',   role: 'Editor', color: '#10b981' },
    { name: 'Clara', role: 'Viewer', color: '#f59e0b' },
  ];

  return (
    <div className="screen dashboard">
      <div className="dashboard-body">

        {/* Stats */}
        <div className="stats-row">
          {stats.map(s => (
            <div key={s.label} className="stat-card">
              <div className="stat-label">{s.label}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-change">{s.change}</div>
            </div>
          ))}
        </div>

        {/* Recent projects */}
        <h2 className="section-title">Recent projects</h2>
        <div className="grid">
          {projects.map(p => (
            <Card
              key={p.name}
              thumb={p.thumb}
              title={p.name}
              subtitle={p.sub}
              onClick={() => onNavigate('canvas')}
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
              onClick={() => onNavigate('canvas')}
            />
          </EventopTarget>
        </div>

        {/* Team */}
        <h2 className="section-title">Team</h2>
        <div className="team-row">
          {members.map(m => (
            <div key={m.name} className="member-card">
              <Avatar name={m.name} color={m.color} />
              <div>
                <div className="member-name">{m.name}</div>
                <div className="member-role">{m.role}</div>
              </div>
            </div>
          ))}

          <EventopTarget
            id="invite-member"
            name="Invite Teammate"
            description="Add a new member to the workspace by email"
          >
            <div className="invite-card" id="invite-form">
              <input
                type="email"
                value={inviteEmail}
                onChange={e => setInviteEmail(e.target.value)}
                placeholder="colleague@company.com"
                className="text-input"
              />
              <Button onClick={handleInvite} disabled={inviting} id="btn-send-invite">
                {inviting ? 'Sending…' : 'Invite'}
              </Button>
            </div>
          </EventopTarget>
        </div>

      </div>
    </div>
  );
}