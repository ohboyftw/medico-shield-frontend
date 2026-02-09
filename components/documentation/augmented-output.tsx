"use client";

import { CheckCircle, Copy, Download, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface AugmentedOutputProps {
  loading: boolean;
  generated: boolean;
}

export function AugmentedOutput({ loading, generated }: AugmentedOutputProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header Bar */}
      <div className="bg-[#0e1e33] text-white px-4 py-2.5 rounded-t-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          {generated ? (
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Shield className="w-3.5 h-3.5 text-[#4da3ff]" />
          )}
          <span className="text-[12px] font-medium">
            Augmented Discharge Summary
          </span>
          {generated && (
            <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/20 text-[9px] font-mono px-1.5 py-0 h-4 ml-1">
              Ready
            </Badge>
          )}
        </div>
        {generated && (
          <div className="flex gap-1">
            <button
              className="p-1.5 hover:bg-white/10 rounded transition-colors"
              title="Copy to clipboard"
            >
              <Copy className="w-3.5 h-3.5 text-[#7a96b3]" />
            </button>
            <button
              className="p-1.5 hover:bg-white/10 rounded transition-colors"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#7a96b3]" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="bg-white border-x border-b border-[#e2e5ea] rounded-b-md flex-grow p-5 overflow-y-auto content-scroll relative min-h-[400px]">
        {/* Empty State */}
        {!generated && !loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#f0f2f5] flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#d1d5db]" />
            </div>
            <p className="text-[13px] font-medium text-[#6b7280]">
              Augmented documentation will appear here
            </p>
            <p className="text-[11px] text-[#9ca3af] mt-1.5 max-w-[260px]">
              Enter clinical notes and click Augment to generate a legally
              defensive summary.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#4da3ff] animate-pulse" />
              <span className="font-mono text-[10px] text-[#6b7280] uppercase tracking-wider">
                Generating documentation...
              </span>
            </div>
            <Skeleton className="h-4 w-3/4 bg-[#f0f2f5]" />
            <Skeleton className="h-4 w-full bg-[#f0f2f5]" />
            <Skeleton className="h-4 w-5/6 bg-[#f0f2f5]" />
            <Skeleton className="h-24 w-full bg-[#f0f2f5] my-4" />
            <Skeleton className="h-4 w-2/3 bg-[#f0f2f5]" />
            <Skeleton className="h-4 w-full bg-[#f0f2f5]" />
            <Skeleton className="h-4 w-1/2 bg-[#f0f2f5]" />
          </div>
        )}

        {/* Generated Content */}
        {generated && (
          <div className="animate-fade-in">
            {/* Document Header */}
            <div className="flex justify-between items-start border-b border-[#e2e5ea] pb-3 mb-4">
              <div>
                <h2 className="text-[16px] font-semibold text-[#1a1d23]">
                  Discharge Summary
                </h2>
                <span className="font-mono text-[10px] text-[#6b7280]">
                  ID: DIS-2023-AUTO-899
                </span>
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 text-[10px] font-mono">
                Ready for Review
              </Badge>
            </div>

            {/* Sections */}
            <div className="space-y-4 text-[13px] text-[#374151] leading-relaxed">
              <section>
                <h4 className="section-label mb-1.5 text-[#1e3a5f]">
                  Primary Diagnosis
                </h4>
                <p>Acute Coronary Syndrome (Anterior Wall MI)</p>
              </section>

              <section>
                <h4 className="section-label mb-1.5 text-[#1e3a5f]">
                  Course in Hospital & Treatment
                </h4>
                <p>
                  Patient presented with chest pain of 2 hours duration. ECG
                  revealed ST elevation in leads V1-V4. Troponin I was positive.
                  <strong>
                    {" "}
                    Immediate stabilization protocols were initiated.
                  </strong>{" "}
                  Patient was loaded with dual antiplatelets (Ecosprin,
                  Clopidogrel) and Statins as per ACLS guidelines. Cardiology
                  consultation was sought immediately.
                </p>
              </section>

              <section>
                <h4 className="section-label mb-1.5 text-[#1e3a5f]">
                  Discharge Status & LAMA Note
                </h4>
                <div className="bg-red-50 p-3 rounded-md border border-red-100 text-[12px]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="font-mono text-[10px] font-medium text-red-800 uppercase tracking-wider">
                      Legal Alert: LAMA
                    </span>
                  </div>
                  <p className="text-red-900">
                    Patient and attendants were explained the{" "}
                    <strong>critical nature of the condition</strong>, including
                    the risk of arrhythmia, cardiac arrest, and sudden death.
                    Despite repeated counseling regarding the necessity of
                    immediate admission and intervention, the patient&apos;s
                    attendants have chosen to take the patient elsewhere. Warning
                    signs explained. Consent for LAMA obtained separately.
                  </p>
                </div>
              </section>

              <section>
                <h4 className="section-label mb-1.5 text-[#1e3a5f]">
                  Follow Up
                </h4>
                <p>
                  Report to nearest higher center immediately. SOS for chest
                  pain, breathlessness.
                </p>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
