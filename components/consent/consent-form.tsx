"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ACKNOWLEDGMENTS = [
  "I have been explained the diagnosis and treatment plan in my language.",
  "I understand the warning signs (red flags) that require immediate return.",
  "I have been given the opportunity to ask questions.",
  "I decline further investigation/admission (LAMA) against medical advice.",
];

export function ConsentForm() {
  return (
    <div className="space-y-4">
      {/* Patient Details */}
      <div className="card-instrument p-4">
        <div className="mb-3">
          <span className="section-label">Patient Details</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label className="text-[11px] font-medium text-[#6b7280]">
              Patient Name
            </Label>
            <Input
              defaultValue="Rajesh Kumar"
              className="h-8 text-[13px] bg-[#f8f9fb] border-[#e2e5ea] focus:bg-white"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-[11px] font-medium text-[#6b7280]">
              UHID
            </Label>
            <Input
              defaultValue="8821"
              className="h-8 text-[13px] bg-[#f8f9fb] border-[#e2e5ea] focus:bg-white font-mono"
            />
          </div>
        </div>
      </div>

      {/* Signatory */}
      <div className="card-instrument p-4">
        <div className="mb-3">
          <span className="section-label">Signatory</span>
        </div>
        <div className="space-y-3">
          <div className="space-y-1">
            <Label className="text-[11px] font-medium text-[#6b7280]">
              Signatory Name
            </Label>
            <Input
              placeholder="Name of person signing"
              className="h-8 text-[13px] bg-[#f8f9fb] border-[#e2e5ea] focus:bg-white"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-[11px] font-medium text-[#6b7280]">
              Relationship
            </Label>
            <Select defaultValue="self">
              <SelectTrigger className="h-8 text-[13px] bg-[#f8f9fb] border-[#e2e5ea] focus:bg-white">
                <SelectValue placeholder="Select relationship..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="self" className="text-[13px]">Self (Patient)</SelectItem>
                <SelectItem value="spouse" className="text-[13px]">Spouse</SelectItem>
                <SelectItem value="parent" className="text-[13px]">Parent</SelectItem>
                <SelectItem value="child" className="text-[13px]">Child</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Acknowledgments */}
      <div className="card-instrument p-4">
        <div className="mb-3">
          <span className="section-label">Acknowledgments</span>
        </div>
        <div className="space-y-2">
          {ACKNOWLEDGMENTS.map((text, i) => {
            const isLama = i === 3;
            return (
              <label
                key={i}
                className={`flex items-start gap-3 p-3 rounded-md border cursor-pointer transition-colors ${
                  isLama
                    ? "bg-amber-50 border-amber-200 hover:bg-amber-50/80"
                    : "border-[#e2e5ea] hover:bg-[#f8f9fb]"
                }`}
              >
                <Checkbox
                  className={`mt-0.5 shrink-0 ${
                    isLama
                      ? "data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                      : "data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  }`}
                />
                <span
                  className={`text-[12px] leading-relaxed ${
                    isLama ? "font-medium text-amber-900" : "text-[#374151]"
                  }`}
                >
                  {text}
                </span>
                {isLama && (
                  <span className="font-mono text-[9px] text-amber-600 uppercase tracking-wider shrink-0 mt-0.5">
                    LAMA
                  </span>
                )}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
