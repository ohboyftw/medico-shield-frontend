"use client";

import { useState } from "react";
import { AlertTriangle, Search, RefreshCw, Shield } from "lucide-react";
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
    <div className="space-y-4 animate-fade-in">
      {/* Audit Header */}
      <div className="card-instrument overflow-hidden">
        <div className="bg-gradient-to-r from-[#0e1e33] to-[#1e3a5f] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center border border-white/10">
              <Shield className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold">
                Pre-Discharge Risk Audit
              </h2>
              <p className="text-[11px] text-[#7a96b3] mt-0.5">
                Identify legal vulnerabilities and documentation gaps before
                patient discharge
              </p>
            </div>
          </div>
          {!analyzed && (
            <Button
              onClick={runAudit}
              disabled={analyzing}
              className="bg-white text-[#1e3a5f] hover:bg-white/90 text-[12px] font-medium h-8 px-4"
            >
              {analyzing ? (
                <RefreshCw className="w-3.5 h-3.5 mr-2 animate-spin" />
              ) : (
                <AlertTriangle className="w-3.5 h-3.5 mr-2" />
              )}
              {analyzing ? "Analyzing..." : "Run Audit"}
            </Button>
          )}
          {analyzed && (
            <Button
              onClick={() => {
                setAnalyzed(false);
              }}
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10 text-[12px] h-8 px-4"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-2" />
              Re-run
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Documentation Preview */}
        <div className="lg:col-span-1">
          <DocPreview />
        </div>

        {/* Results Area */}
        <div className="lg:col-span-2 space-y-4">
          {!analyzed ? (
            <div className="card-instrument h-full flex flex-col items-center justify-center p-12">
              <div className="w-14 h-14 bg-[#f0f2f5] rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-[#d1d5db]" />
              </div>
              <h3 className="text-[14px] font-medium text-[#374151]">
                Ready to Audit
              </h3>
              <p className="text-[12px] text-[#6b7280] mt-1.5 text-center max-w-sm">
                The system will check for missed red flags, clinical reasoning
                gaps, and follow-up instructions specific to the condition.
              </p>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <RiskScore />
              <FindingsList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
