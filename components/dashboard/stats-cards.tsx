"use client";

import {
  FileText,
  CheckSquare,
  AlertTriangle,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

const stats: StatItem[] = [
  {
    label: "Discharges Today",
    value: "42",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    label: "Consents Captured",
    value: "38",
    icon: CheckSquare,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    label: "Audit Alerts",
    value: "5",
    icon: AlertTriangle,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    label: "System Status",
    value: "Online",
    icon: Activity,
    color: "text-green-600",
    bg: "bg-green-100",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          className="hover:shadow-md transition-shadow cursor-pointer py-4"
        >
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-slate-800 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
