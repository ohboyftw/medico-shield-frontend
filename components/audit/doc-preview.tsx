"use client";

import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function DocPreview() {
  return (
    <Card className="h-full">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
          <FileText className="w-5 h-5" />
          <span>Current Documentation</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-600 h-96 overflow-y-auto leading-relaxed">
          PATIENT: MALE/45Y
          <br />
          C/O: ABDOMINAL PAIN
          <br />
          <br />
          HISTORY: Pt says pain since last night. Vomited twice. Ate outside
          food.
          <br />
          <br />
          EXAM: Soft, mild tenderness in epigastrium. Bowel sounds +.
          <br />
          <br />
          TREATMENT: Inj Pan 40, Inj Emset. Oral fluids.
          <br />
          <br />
          DIAGNOSIS: Gastritis.
          <br />
          <br />
          PLAN: Discharge on oral meds.
        </div>
      </CardContent>
    </Card>
  );
}
