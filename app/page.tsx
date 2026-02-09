"use client";

import { StatsCards } from "@/components/dashboard/stats-cards";
import { PatientSearch } from "@/components/dashboard/patient-search";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default function DashboardPage() {
  return (
    <div className="space-y-4 animate-fade-in">
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1 space-y-4">
          <PatientSearch />
          <QuickActions />
        </div>

        <div className="lg:col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
