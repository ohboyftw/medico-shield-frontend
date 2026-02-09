"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CONDITION_TEMPLATES = [
  "Acute Coronary Syndrome",
  "Acute Gastroenteritis",
  "Road Traffic Accident (RTA)",
  "Febrile Seizure",
  "COPD Exacerbation",
  "Dengue Fever",
];

export function PatientForm() {
  return (
    <div className="card-instrument p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="section-label">Patient & Condition</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="text-[11px] font-medium text-[#6b7280]">
            Patient Name
          </Label>
          <Input
            placeholder="e.g. Rajesh Kumar"
            className="h-8 text-[13px] bg-[#f8f9fb] border-[#e2e5ea] focus:bg-white"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-[11px] font-medium text-[#6b7280]">
            Age / Gender
          </Label>
          <Input
            placeholder="e.g. 45 / Male"
            className="h-8 text-[13px] bg-[#f8f9fb] border-[#e2e5ea] focus:bg-white"
          />
        </div>
        <div className="col-span-2 space-y-1">
          <Label className="text-[11px] font-medium text-[#6b7280]">
            Condition Template
          </Label>
          <Select>
            <SelectTrigger className="h-8 text-[13px] bg-[#f8f9fb] border-[#e2e5ea] focus:bg-white">
              <SelectValue placeholder="Select condition..." />
            </SelectTrigger>
            <SelectContent>
              {CONDITION_TEMPLATES.map((template) => (
                <SelectItem key={template} value={template} className="text-[13px]">
                  {template}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
