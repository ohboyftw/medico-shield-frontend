"use client";

import {
  FileText,
  CheckSquare,
  AlertTriangle,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  change: string;
  changeType: "up" | "down" | "neutral";
  icon: LucideIcon;
  accentColor: string;
  accentBg: string;
}

const stats: StatItem[] = [
  {
    label: "Discharges Today",
    value: "42",
    change: "+8 from yesterday",
    changeType: "up",
    icon: FileText,
    accentColor: "text-[#1e3a5f]",
    accentBg: "bg-[#1e3a5f]/[0.06]",
  },
  {
    label: "Consents Captured",
    value: "38",
    change: "90% coverage",
    changeType: "up",
    icon: CheckSquare,
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-600/[0.06]",
  },
  {
    label: "Audit Alerts",
    value: "5",
    change: "3 critical",
    changeType: "down",
    icon: AlertTriangle,
    accentColor: "text-amber-600",
    accentBg: "bg-amber-600/[0.06]",
  },
  {
    label: "Avg Risk Score",
    value: "72",
    change: "+4 pts this week",
    changeType: "up",
    icon: TrendingUp,
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-600/[0.06]",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="card-instrument p-4 group cursor-default transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <span className="section-label">{stat.label}</span>
            <div
              className={`w-7 h-7 rounded-md ${stat.accentBg} flex items-center justify-center`}
            >
              <stat.icon className={`w-3.5 h-3.5 ${stat.accentColor}`} />
            </div>
          </div>
          <div className="text-[28px] font-semibold text-[#1a1d23] leading-none tracking-tight">
            {stat.value}
          </div>
          <div
            className={`mono-readout mt-1.5 ${
              stat.changeType === "down"
                ? "text-amber-600"
                : "text-[#6b7280]"
            }`}
          >
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
}
