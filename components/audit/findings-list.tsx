"use client";

import { AlertCircle, Info } from "lucide-react";

export function FindingsList() {
  return (
    <div className="space-y-6">
      {/* Critical Findings */}
      <div className="bg-red-50 border border-red-100 rounded-lg overflow-hidden">
        <div className="bg-red-100 px-4 py-3 border-b border-red-200 flex items-center">
          <AlertCircle className="w-5 h-5 text-red-700 mr-2" />
          <h3 className="font-bold text-red-800 text-sm">
            Critical Vulnerabilities (2)
          </h3>
        </div>
        <div className="divide-y divide-red-100">
          <div className="p-4">
            <p className="text-red-900 font-medium text-sm">
              Missing Red Flag Evaluation
            </p>
            <p className="text-red-700 text-xs mt-1">
              Abdominal pain in 45Y Male could be cardiac (Inferior Wall MI). No
              ECG documented.
            </p>
            <div className="mt-2 bg-white/50 p-2 rounded border border-red-200 text-xs text-red-800">
              <strong>Recommendation:</strong> Document &quot;ECG done -
              Normal&quot; or &quot;Cardiac cause ruled out clinically
              because...&quot;
            </div>
          </div>
          <div className="p-4">
            <p className="text-red-900 font-medium text-sm">
              Vague Follow-up Instructions
            </p>
            <p className="text-red-700 text-xs mt-1">
              &quot;Discharge on oral meds&quot; is legally insufficient if
              complications arise.
            </p>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg overflow-hidden">
        <div className="bg-blue-100 px-4 py-3 border-b border-blue-200 flex items-center">
          <Info className="w-5 h-5 text-blue-700 mr-2" />
          <h3 className="font-bold text-blue-800 text-sm">
            Documentation Improvements
          </h3>
        </div>
        <div className="p-4">
          <p className="text-blue-900 font-medium text-sm">Vitals Stability</p>
          <p className="text-blue-700 text-xs mt-1">
            Explicitly state vitals are stable at time of discharge to prove
            patient was fit to leave.
          </p>
        </div>
      </div>
    </div>
  );
}
