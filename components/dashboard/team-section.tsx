'use client';

import { useState } from 'react';
import { EventopTarget } from '@eventop/sdk/react';
import { useEventopAI } from '@eventop/sdk/react';
import { Button, Avatar } from '../ui';

const members = [
  { name: 'Alice', role: 'Owner',  color: '#6366f1' },
  { name: 'Bob',   role: 'Editor', color: '#10b981' },
  { name: 'Clara', role: 'Viewer', color: '#f59e0b' },
];

export function TeamSection() {
  const { stepComplete, stepFail } = useEventopAI();
  const [email,    setEmail]    = useState('');
  const [inviting, setInviting] = useState(false);

  async function handleInvite() {
    if (!email.includes('@')) {
      stepFail('Please enter a valid email address.');
      return;
    }
    setInviting(true);
    await new Promise(r => setTimeout(r, 900));
    setInviting(false);
    stepComplete();
  }

  return (
    <>
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
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="colleague@company.com"
              className="text-input"
            />
            <Button onClick={handleInvite} disabled={inviting} id="btn-send-invite">
              {inviting ? 'Sending…' : 'Invite'}
            </Button>
          </div>
        </EventopTarget>
      </div>
    </>
  );
}
