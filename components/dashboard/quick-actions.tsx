"use client";

import Link from "next/link";
import {
  Activity,
  FileText,
  CheckSquare,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const actions = [
  {
    label: "New Discharge",
    icon: FileText,
    iconColor: "text-[#1e3a5f]",
    hoverBorder: "hover:border-[#2d5a87]",
    href: "/documentation",
  },
  {
    label: "New Consent",
    icon: CheckSquare,
    iconColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-600",
    href: "/consent",
  },
  {
    label: "Run Audit",
    icon: AlertTriangle,
    iconColor: "text-red-500",
    hoverBorder: "hover:border-red-500",
    href: "/audit",
  },
  {
    label: "Sync Data",
    icon: RefreshCw,
    iconColor: "text-amber-500",
    hoverBorder: "hover:border-amber-500",
    href: "#",
  },
];

export function QuickActions() {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
          <Activity className="w-5 h-5" />
          <span>Quick Actions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, idx) => (
            <Link
              key={idx}
              href={action.href}
              className={`p-3 text-left border border-slate-200 rounded-lg hover:bg-slate-50 ${action.hoverBorder} transition-all group block`}
            >
              <action.icon
                className={`w-5 h-5 ${action.iconColor} mb-2 group-hover:scale-110 transition-transform`}
              />
              <div className="text-xs font-medium text-slate-600">
                {action.label}
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
