"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen overflow-hidden bg-[#f0f2f5]">
        <AppHeader />
        <div className="flex-grow overflow-y-auto content-scroll p-4 md:p-5 lg:p-6">
          <div className="max-w-[1400px] mx-auto h-full">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
