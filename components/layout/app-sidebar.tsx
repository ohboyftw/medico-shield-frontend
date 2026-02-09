"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Shield,
  Activity,
  FileText,
  AlertTriangle,
  CheckSquare,
  User,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Activity,
    href: "/",
    description: "Overview & activity",
  },
  {
    id: "documentation",
    label: "Documentation",
    icon: FileText,
    href: "/documentation",
    description: "AI augmentation",
  },
  {
    id: "audit",
    label: "Risk Audit",
    icon: AlertTriangle,
    href: "/audit",
    description: "Pre-discharge check",
  },
  {
    id: "consent",
    label: "Consent",
    icon: CheckSquare,
    href: "/consent",
    description: "Digital signatures",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <Sidebar collapsible="none" className="sidebar-panel relative">
      {/* Logo & Brand */}
      <SidebarHeader className="relative z-10 px-4 py-5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2d5a87] to-[#1e3a5f] flex items-center justify-center border border-white/10 shadow-lg shadow-black/20">
              <Shield className="w-[18px] h-[18px] text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0e1e33]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold text-white tracking-tight leading-none">
              MedicoShield
            </span>
            <span className="font-mono text-[9px] text-[#5a7da0] uppercase tracking-[0.12em] mt-1">
              Defensive Doc AI
            </span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarSeparator className="bg-white/[0.06] mx-3" />

      {/* System Status */}
      <div className="relative z-10 px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] text-[#5a7da0] uppercase tracking-[0.1em]">
            System
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] text-emerald-400">
              Online
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <SidebarContent className="relative z-10 px-2 py-1">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={item.label}
                      size="lg"
                      className={`relative rounded-md transition-all duration-150 ${
                        active
                          ? "nav-item-active text-white"
                          : "text-[#7a96b3] hover:text-[#c8d6e5] hover:bg-white/[0.04]"
                      }`}
                    >
                      <Link href={item.href} className="flex items-center">
                        {/* LED indicator */}
                        <div
                          className={`nav-indicator absolute left-0 top-1/2 -translate-y-1/2 -ml-2 ${
                            active ? "nav-indicator-active" : ""
                          }`}
                        />
                        <item.icon
                          className={`w-[18px] h-[18px] shrink-0 ${
                            active ? "text-[#4da3ff]" : ""
                          }`}
                        />
                        <div className="flex flex-col min-w-0 ml-0.5">
                          <span
                            className={`text-[13px] leading-tight ${
                              active ? "font-semibold" : "font-medium"
                            }`}
                          >
                            {item.label}
                          </span>
                          <span className="text-[10px] text-[#5a7da0] leading-tight truncate">
                            {item.description}
                          </span>
                        </div>
                        {active && (
                          <ChevronRight className="w-3.5 h-3.5 ml-auto text-[#4da3ff]/60" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="relative z-10 flex-1" />

      <SidebarSeparator className="bg-white/[0.06] mx-3 relative z-10" />

      {/* Quick Stats */}
      <div className="relative z-10 px-4 py-3">
        <span className="font-mono text-[9px] text-[#5a7da0] uppercase tracking-[0.1em]">
          Today
        </span>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="bg-white/[0.04] rounded px-2.5 py-1.5 border border-white/[0.04]">
            <div className="font-mono text-[16px] font-semibold text-white leading-none">
              42
            </div>
            <div className="font-mono text-[9px] text-[#5a7da0] mt-0.5">
              Discharged
            </div>
          </div>
          <div className="bg-white/[0.04] rounded px-2.5 py-1.5 border border-white/[0.04]">
            <div className="font-mono text-[16px] font-semibold text-emerald-400 leading-none">
              38
            </div>
            <div className="font-mono text-[9px] text-[#5a7da0] mt-0.5">
              Consented
            </div>
          </div>
        </div>
      </div>

      <SidebarSeparator className="bg-white/[0.06] mx-3 relative z-10" />

      {/* User Profile */}
      <SidebarFooter className="relative z-10 px-3 py-3">
        <div className="flex items-center gap-2.5 px-1">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#2d5a87]/40 to-[#1e3a5f]/40 flex items-center justify-center border border-white/[0.08]">
            <User className="w-3.5 h-3.5 text-[#7a96b3]" />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[12px] font-medium text-[#c8d6e5] truncate leading-none">
              Dr. A. Singh
            </span>
            <span className="font-mono text-[10px] text-[#5a7da0] truncate mt-0.5">
              Emergency Dept.
            </span>
          </div>
          <Badge
            variant="outline"
            className="text-[9px] font-mono border-emerald-500/30 text-emerald-400 bg-emerald-500/10 px-1.5 py-0 h-4"
          >
            ON
          </Badge>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
