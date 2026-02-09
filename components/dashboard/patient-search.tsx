"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PatientSearch() {
  return (
    <div className="card-instrument p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="section-label">Patient Lookup</span>
        <Search className="w-3.5 h-3.5 text-[#9ca3af]" />
      </div>
      <div className="space-y-2.5">
        <div className="relative">
          <Input
            placeholder="UHID or mobile number"
            className="h-9 text-[13px] bg-[#f8f9fb] border-[#e2e5ea] focus:bg-white pl-3 pr-8 font-mono"
          />
          <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9ca3af] pointer-events-none" />
        </div>
        <Button
          size="sm"
          className="w-full h-8 text-[12px] font-medium bg-[#1e3a5f] hover:bg-[#2d5a87]"
        >
          Search Records
        </Button>
      </div>
    </div>
  );
}
