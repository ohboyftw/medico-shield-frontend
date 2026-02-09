"use client";

import { Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function PatientSearch() {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
          <Search className="w-5 h-5" />
          <span>Patient Search</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-1">
            <Label className="text-sm font-medium text-slate-700">
              Search by UHID / Mobile
            </Label>
            <div className="relative">
              <Input placeholder="Enter UHID or 10-digit mobile" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
            </div>
          </div>
          <Button className="w-full">Search Records</Button>
        </div>
      </CardContent>
    </Card>
  );
}
