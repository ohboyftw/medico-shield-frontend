"use client";

import { useState } from "react";
import { CheckSquare } from "lucide-react";
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
    <div className="space-y-6 animate-fade-in pb-10">
      {/* Green Gradient Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold flex items-center">
          <CheckSquare className="w-6 h-6 mr-2" />
          Informed Consent Capture
        </h2>
        <p className="text-emerald-100 text-sm mt-1">
          Digital signatures are legally binding under IT Act 2000.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Form */}
        <ConsentForm />

        {/* Right: Signature */}
        <SignatureCanvas onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
