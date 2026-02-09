"use client";

import Link from "next/link";
import {
  FileText,
  CheckSquare,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    label: "New Discharge",
    description: "Augment clinical notes",
    icon: FileText,
    href: "/documentation",
    accentColor: "text-[#1e3a5f]",
    accentBg: "bg-[#1e3a5f]/[0.06]",
    hoverBg: "hover:bg-[#1e3a5f]/[0.03]",
  },
  {
    label: "Capture Consent",
    description: "Digital signature",
    icon: CheckSquare,
    href: "/consent",
    accentColor: "text-emerald-600",
    accentBg: "bg-emerald-600/[0.06]",
    hoverBg: "hover:bg-emerald-600/[0.03]",
  },
  {
    label: "Run Audit",
    description: "Check documentation",
    icon: AlertTriangle,
    href: "/audit",
    accentColor: "text-amber-600",
    accentBg: "bg-amber-600/[0.06]",
    hoverBg: "hover:bg-amber-600/[0.03]",
  },
];

export function QuickActions() {
  return (
    <div className="card-instrument p-4">
      <div className="mb-3">
        <span className="section-label">Quick Actions</span>
      </div>
      <div className="space-y-1.5">
        {actions.map((action, idx) => (
          <Link
            key={idx}
            href={action.href}
            className={`flex items-center gap-3 p-2.5 rounded-md border border-transparent hover:border-[#e2e5ea] ${action.hoverBg} transition-all group`}
          >
            <div
              className={`w-8 h-8 rounded-md ${action.accentBg} flex items-center justify-center shrink-0`}
            >
              <action.icon className={`w-4 h-4 ${action.accentColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-[#1a1d23]">
                {action.label}
              </div>
              <div className="text-[11px] text-[#6b7280]">
                {action.description}
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </div>
  );
}
