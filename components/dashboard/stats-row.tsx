'use client';

const stats = [
  { id: '1', label: 'Projects', value: '12',  change: '↑ 3 this month'    },
  { id: '2', label: 'Assets',   value: '284', change: '↑ 18 this week'    },
  { id: '3', label: 'Members',  value: '5',   change: '1 invite pending'  },
] as const;

export function StatsRow() {
  return (
    <div className="stats-row">
      {stats.map(s => (
        <div key={s.id} className="stat-card">
          <div className="stat-label">{s.label}</div>
          <div className="stat-value">{s.value}</div>
          <div className="stat-change">{s.change}</div>
        </div>
      ))}
    </div>
  );
}