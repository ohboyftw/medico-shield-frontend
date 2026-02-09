"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/documentation": "Documentation",
  "/audit": "Risk Audit",
  "/consent": "Consent",
};

export function AppHeader() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <header className="bg-white border-b border-slate-200 py-3 px-6 lg:px-8 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="md:hidden text-slate-600" />
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-medium text-slate-500">
          System Online
        </span>
      </div>
    </header>
  );
}
