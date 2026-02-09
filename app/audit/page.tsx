"use client";

import { useState } from "react";
import { AlertTriangle, Search, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocPreview } from "@/components/audit/doc-preview";
import { RiskScore } from "@/components/audit/risk-score";
import { FindingsList } from "@/components/audit/findings-list";

export default function AuditPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const runAudit = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Red Gradient Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2" />
            Pre-Discharge Risk Audit
          </h2>
          <p className="text-red-100 text-sm mt-1 opacity-90">
            Identify legal vulnerabilities and documentation gaps before patient
            leaves.
          </p>
        </div>
        {!analyzed && (
          <Button
            className="bg-white text-red-700 hover:bg-red-50 border-transparent"
            onClick={runAudit}
            disabled={analyzing}
          >
            {analyzing ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : null}
            {analyzing ? "Analyzing..." : "Run Audit Analysis"}
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documentation Preview */}
        <div className="lg:col-span-1">
          <DocPreview />
        </div>

        {/* Results Area */}
        <div className="lg:col-span-2 space-y-6">
          {!analyzed ? (
            <div className="h-full flex flex-col items-center justify-center bg-white border border-slate-200 rounded-lg border-dashed p-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-slate-900 font-medium">Ready to Audit</h3>
              <p className="text-slate-500 text-sm mt-2 text-center max-w-md">
                The system will check for missed red flags, clinical reasoning
                gaps, and follow-up instructions specific to the condition.
              </p>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <RiskScore />
              <FindingsList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
