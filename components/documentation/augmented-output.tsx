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
      {/* Dark Header Bar */}
      <div className="bg-[#1e3a5f] text-white px-5 py-3 rounded-t-lg flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <h3 className="font-semibold text-base">
            Augmented Discharge Summary
          </h3>
        </div>
        <div className="flex space-x-2">
          <button
            className="p-1.5 hover:bg-white/10 rounded transition-colors"
            title="Copy"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            className="p-1.5 hover:bg-white/10 rounded transition-colors"
            title="Download"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white border-x border-b border-slate-200 rounded-b-lg flex-grow p-6 overflow-y-auto shadow-sm relative min-h-[400px]">
        {/* Empty State */}
        {!generated && !loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-8 text-center">
            <Shield className="w-16 h-16 mb-4 opacity-20" />
            <p className="font-medium">
              Augmented documentation will appear here
            </p>
            <p className="text-sm mt-2 max-w-xs">
              Enter clinical notes on the left and click Augment to generate a
              legally defensive summary.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="space-y-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-32 w-full my-6" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        )}

        {/* Generated Content */}
        {generated && (
          <div className="prose prose-sm prose-slate max-w-none font-serif animate-fade-in">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 m-0">
                  Discharge Summary
                </h2>
                <p className="text-slate-500 m-0">ID: DIS-2023-AUTO-899</p>
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-50">
                Ready for Review
              </Badge>
            </div>

            <h4 className="text-[#1e3a5f] font-bold uppercase text-xs tracking-wider mb-2 border-b border-slate-100 pb-1">
              Primary Diagnosis
            </h4>
            <p>Acute Coronary Syndrome (Anterior Wall MI)</p>

            <h4 className="text-[#1e3a5f] font-bold uppercase text-xs tracking-wider mt-6 mb-2 border-b border-slate-100 pb-1">
              Course in Hospital &amp; Treatment
            </h4>
            <p>
              Patient presented with chest pain of 2 hours duration. ECG
              revealed ST elevation in leads V1-V4. Troponin I was positive.
              <strong>
                {" "}
                Immediate stabilization protocols were initiated.
              </strong>{" "}
              Patient was loaded with dual antiplatelets (Ecosprin, Clopidogrel)
              and Statins as per ACLS guidelines. Cardiology consultation was
              sought immediately.
            </p>

            <h4 className="text-[#1e3a5f] font-bold uppercase text-xs tracking-wider mt-6 mb-2 border-b border-slate-100 pb-1">
              Discharge Status &amp; LAMA Note
            </h4>
            <div className="bg-red-50 p-3 rounded border border-red-100 text-red-900">
              <p className="font-bold text-xs mb-1">
                LEGAL ALERT: LAMA (Left Against Medical Advice)
              </p>
              <p>
                Patient and attendants were explained the{" "}
                <strong>critical nature of the condition</strong>, including the
                risk of arrhythmia, cardiac arrest, and sudden death. Despite
                repeated counseling regarding the necessity of immediate
                admission and intervention, the patient&apos;s attendants have
                chosen to take the patient elsewhere. Warning signs explained.
                Consent for LAMA obtained separately.
              </p>
            </div>

            <h4 className="text-[#1e3a5f] font-bold uppercase text-xs tracking-wider mt-6 mb-2 border-b border-slate-100 pb-1">
              Follow Up
            </h4>
            <p>
              Report to nearest higher center immediately. SOS for chest pain,
              breathlessness.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
