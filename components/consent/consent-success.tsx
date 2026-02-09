"use client";

import { CheckCircle, CheckSquare, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConsentSuccessProps {
  onNewConsent: () => void;
}

export function ConsentSuccess({ onNewConsent }: ConsentSuccessProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center animate-fade-in space-y-6 py-12">
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-10 h-10 text-emerald-600" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Consent Captured Successfully
        </h2>
        <p className="text-slate-500 mt-2">
          ID: CONSENT-2023-8992 &bull; Stored in Immutable Ledger
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm max-w-md w-full">
        <h3 className="font-bold text-sm text-slate-700 mb-3 border-b pb-2">
          Summary
        </h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-center">
            <CheckSquare className="w-4 h-4 mr-2 text-emerald-500" />
            Informed of Red Flags
          </li>
          <li className="flex items-center">
            <CheckSquare className="w-4 h-4 mr-2 text-emerald-500" />
            Risks of LAMA explained
          </li>
          <li className="flex items-center">
            <CheckSquare className="w-4 h-4 mr-2 text-emerald-500" />
            Follow-up mandated
          </li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <Button variant="outline" onClick={onNewConsent}>
          New Consent
        </Button>
        <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </div>
  );
}
