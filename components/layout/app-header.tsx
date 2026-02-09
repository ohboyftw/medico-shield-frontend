"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Activity,
  FileText,
  AlertTriangle,
  CheckSquare,
  Clock,
  Bell,
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const pageConfig: Record<
  string,
  {
    title: string;
    icon: typeof Activity;
    description: string;
    actions?: { label: string; href: string }[];
  }
> = {
  "/": {
    title: "Dashboard",
    icon: Activity,
    description: "System overview & recent activity",
    actions: [
      { label: "New Discharge", href: "/documentation" },
      { label: "Run Audit", href: "/audit" },
    ],
  },
  "/documentation": {
    title: "Documentation",
    icon: FileText,
    description: "AI-powered documentation augmentation",
  },
  "/audit": {
    title: "Risk Audit",
    icon: AlertTriangle,
    description: "Pre-discharge legal risk analysis",
  },
  "/consent": {
    title: "Consent",
    icon: CheckSquare,
    description: "Informed consent capture & signatures",
  },
};

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <span className="font-mono text-[11px] text-[#6b7280] tabular-nums">
      {time}
    </span>
  );
}

export function AppHeader() {
  const pathname = usePathname();
  const config = pageConfig[pathname] || pageConfig["/"];
  const Icon = config.icon;

  return (
    <header className="header-bar py-2.5 px-4 lg:px-6 flex items-center justify-between gap-4">
      {/* Left: Navigation + Title */}
      <div className="flex items-center gap-3 min-w-0">
        <SidebarTrigger className="md:hidden text-[#6b7280] hover:text-[#1a1d23] -ml-1" />

        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-7 h-7 rounded-md bg-[#1e3a5f]/[0.06] flex items-center justify-center shrink-0">
            <Icon className="w-3.5 h-3.5 text-[#1e3a5f]" />
          </div>
          <div className="flex flex-col min-w-0">
            <h2 className="text-[14px] font-semibold text-[#1a1d23] leading-none">
              {config.title}
            </h2>
            <p className="text-[11px] text-[#6b7280] leading-none mt-0.5 truncate">
              {config.description}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        {config.actions && (
          <div className="hidden lg:flex items-center gap-1.5 ml-4 pl-4 border-l border-[#e2e5ea]">
            {config.actions.map((action) => (
              <Link key={action.href} href={action.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2.5 text-[11px] font-medium text-[#6b7280] hover:text-[#1a1d23] hover:bg-[#f0f2f5]"
                >
                  {action.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Right: Status Indicators */}
      <div className="flex items-center gap-3">
        {/* Alerts */}
        <button className="relative p-1.5 rounded-md hover:bg-[#f0f2f5] transition-colors">
          <Bell className="w-4 h-4 text-[#6b7280]" />
          <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-[#dc2626] border border-white" />
        </button>

        <div className="h-4 w-px bg-[#e2e5ea]" />

        {/* Clock */}
        <div className="hidden sm:flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-[#9ca3af]" />
          <LiveClock />
        </div>

        <div className="hidden sm:block h-4 w-px bg-[#e2e5ea]" />

        {/* System Status */}
        <div className="status-chip status-chip-online">
          <span className="status-chip-dot" />
          <span>Operational</span>
        </div>
      </div>
    </header>
  );
}
