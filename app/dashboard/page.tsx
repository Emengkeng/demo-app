import { StatsRow }    from '../../components/dashboard/stats-row';
import { ProjectGrid } from '../../components/dashboard/project-grid';
import { TeamSection } from '../../components/dashboard/team-section';

export default function DashboardPage() {
  return (
    <div className="dashboard-body">
      <StatsRow />
      <ProjectGrid />
      <TeamSection />
    </div>
  );
}