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

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Activity, href: "/" },
  {
    id: "documentation",
    label: "Documentation",
    icon: FileText,
    href: "/documentation",
  },
  { id: "audit", label: "Risk Audit", icon: AlertTriangle, href: "/audit" },
  { id: "consent", label: "Consent", icon: CheckSquare, href: "/consent" },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <Sidebar collapsible="none">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="bg-white p-1.5 rounded-lg">
            <Shield className="w-6 h-6 text-[#1e3a5f]" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              MedicoShield
            </h1>
            <p className="text-[10px] text-blue-200 opacity-80 uppercase tracking-wider">
              Defensive Doc AI
            </p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarSeparator className="bg-white/10" />

      <SidebarContent className="py-4 px-1">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.href)}
                    tooltip={item.label}
                    size="lg"
                    className={
                      isActive(item.href)
                        ? "bg-white/10 text-white border border-white/10"
                        : "text-blue-200 hover:bg-white/5 hover:text-white"
                    }
                  >
                    <Link href={item.href}>
                      <item.icon
                        className={`w-5 h-5 ${
                          isActive(item.href)
                            ? "text-blue-100"
                            : "text-blue-300"
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator className="bg-white/10" />

      <SidebarFooter className="p-4">
        <div className="flex items-center space-x-3 px-2 py-2">
          <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center border border-blue-400/30">
            <User className="w-4 h-4 text-blue-100" />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-white truncate">
              Dr. A. Singh
            </p>
            <p className="text-xs text-blue-300 truncate">Emergency Dept.</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
