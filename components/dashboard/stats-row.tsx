'use client';

const stats = [
  { label: 'Projects', value: '12',  change: '↑ 3 this month'    },
  { label: 'Assets',   value: '284', change: '↑ 18 this week'    },
  { label: 'Members',  value: '5',   change: '1 invite pending'  },
];

export function StatsRow() {
  return (
    <div className="stats-row">
      {stats.map(s => (
        <div key={s.label} className="stat-card">
          <div className="stat-label">{s.label}</div>
          <div className="stat-value">{s.value}</div>
          <div className="stat-change">{s.change}</div>
        </div>
      ))}
    </div>
  );
}
