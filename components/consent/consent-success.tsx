"use client";

import { CheckCircle, CheckSquare, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsentSuccessProps {
  onNewConsent: () => void;
}

export function ConsentSuccess({ onNewConsent }: ConsentSuccessProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center animate-fade-in space-y-6 py-12">
      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
        <CheckCircle className="w-8 h-8 text-emerald-600" />
      </div>

      <div className="text-center">
        <h2 className="text-[18px] font-semibold text-[#1a1d23]">
          Consent Captured Successfully
        </h2>
        <p className="font-mono text-[11px] text-[#6b7280] mt-1.5">
          ID: CONSENT-2023-8992 &bull; Stored in Immutable Ledger
        </p>
      </div>

      <div className="card-instrument p-5 max-w-sm w-full">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#e2e5ea]">
          <span className="section-label">Summary</span>
          <span className="mono-readout">3 items verified</span>
        </div>
        <ul className="space-y-2">
          {[
            "Informed of Red Flags",
            "Risks of LAMA explained",
            "Follow-up mandated",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <CheckSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="text-[12px] text-[#374151]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={onNewConsent}
          className="h-8 px-4 text-[12px] border-[#e2e5ea]"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
          New Consent
        </Button>
        <Button className="h-8 px-4 text-[12px] bg-emerald-600 hover:bg-emerald-700">
          <Download className="w-3.5 h-3.5 mr-1.5" />
          Download PDF
        </Button>
      </div>
    </div>
  );
}
