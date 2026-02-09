"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { PatientForm } from "@/components/documentation/patient-form";
import { NotesInput } from "@/components/documentation/notes-input";
import { AugmentedOutput } from "@/components/documentation/augmented-output";

export default function DocumentationPage() {
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [notes, setNotes] = useState("");

  const handleAugment = () => {
    if (!notes) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <div className="space-y-4 h-full flex flex-col animate-fade-in">
      {/* Warning Banner */}
      <div className="flex items-start gap-3 px-4 py-3 bg-amber-50 border border-amber-200 rounded-md">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-[12px] font-medium text-amber-900">
            Physician Review Required
          </p>
          <p className="text-[11px] text-amber-700 mt-0.5">
            All AI-generated documentation must be reviewed and approved by the
            treating physician before inclusion in medical records.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow">
        {/* Input Column */}
        <div className="space-y-4 flex flex-col">
          <PatientForm />
          <NotesInput
            notes={notes}
            onNotesChange={setNotes}
            onAugment={handleAugment}
            loading={loading}
          />
        </div>

        {/* Output Column */}
        <AugmentedOutput loading={loading} generated={generated} />
      </div>
    </div>
  );
}
