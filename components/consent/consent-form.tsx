"use client";

import { User, FileText, CheckSquare } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    <div className="space-y-6">
      {/* Patient Details */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
            <User className="w-5 h-5" />
            <span>Patient Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-sm font-medium text-slate-700">
                Patient Name
              </Label>
              <Input defaultValue="Rajesh Kumar" />
            </div>
            <div className="space-y-1">
              <Label className="text-sm font-medium text-slate-700">UHID</Label>
              <Input defaultValue="8821" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Signatory */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
            <FileText className="w-5 h-5" />
            <span>Signatory</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-1">
              <Label className="text-sm font-medium text-slate-700">
                Signatory Name
              </Label>
              <Input placeholder="Name of person signing" />
            </div>
            <div className="space-y-1">
              <Label className="text-sm font-medium text-slate-700">
                Relationship
              </Label>
              <Select defaultValue="self">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select relationship..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="self">Self (Patient)</SelectItem>
                  <SelectItem value="spouse">Spouse</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="child">Child</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Acknowledgments */}
      <Card>
        <CardHeader className="border-b">
          <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
            <CheckSquare className="w-5 h-5" />
            <span>Acknowledgments</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {ACKNOWLEDGMENTS.map((text, i) => (
              <label
                key={i}
                className={`flex items-start p-3 rounded border cursor-pointer hover:bg-slate-50 transition-colors ${
                  i === 3
                    ? "bg-amber-50 border-amber-200"
                    : "border-slate-200"
                }`}
              >
                <Checkbox
                  className={`mt-0.5 ${
                    i === 3
                      ? "data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                      : "data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  }`}
                />
                <span
                  className={`ml-3 text-sm ${
                    i === 3 ? "font-medium text-amber-900" : "text-slate-700"
                  }`}
                >
                  {text}
                </span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
