"use client";

import { StatsCards } from "@/components/dashboard/stats-cards";
import { PatientSearch } from "@/components/dashboard/patient-search";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <PatientSearch />
          <QuickActions />
        </div>

        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
