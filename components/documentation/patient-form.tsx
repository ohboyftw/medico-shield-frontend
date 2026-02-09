"use client";

import { User } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
          <User className="w-5 h-5" />
          <span>Patient &amp; Condition</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-sm font-medium text-slate-700">
              Patient Name
            </Label>
            <Input placeholder="e.g. Rajesh Kumar" />
          </div>
          <div className="space-y-1">
            <Label className="text-sm font-medium text-slate-700">
              Age/Gender
            </Label>
            <Input placeholder="e.g. 45 / Male" />
          </div>
          <div className="col-span-2 space-y-1">
            <Label className="text-sm font-medium text-slate-700">
              Condition Template
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Condition..." />
              </SelectTrigger>
              <SelectContent>
                {CONDITION_TEMPLATES.map((template) => (
                  <SelectItem key={template} value={template}>
                    {template}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
