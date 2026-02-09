"use client";

import { useState } from "react";
import { CheckSquare, Shield } from "lucide-react";
import { ConsentForm } from "@/components/consent/consent-form";
import { SignatureCanvas } from "@/components/consent/signature-canvas";
import { ConsentSuccess } from "@/components/consent/consent-success";

export default function ConsentPage() {
  const [consented, setConsented] = useState(false);

  const handleSubmit = () => {
    setConsented(true);
  };

  const handleNewConsent = () => {
    setConsented(false);
  };

  if (consented) {
    return <ConsentSuccess onNewConsent={handleNewConsent} />;
  }

  return (
    <div className="space-y-4 animate-fade-in pb-10">
      {/* Consent Header */}
      <div className="card-instrument overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white p-5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center border border-white/10">
            <Shield className="w-4 h-4 text-emerald-200" />
          </div>
          <div>
            <h2 className="text-[15px] font-semibold">
              Informed Consent Capture
            </h2>
            <p className="text-[11px] text-emerald-200 mt-0.5">
              Digital signatures are legally binding under IT Act 2000 Section 5
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left: Form */}
        <ConsentForm />

        {/* Right: Signature */}
        <SignatureCanvas onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
