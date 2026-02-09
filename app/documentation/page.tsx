"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
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
    <div className="space-y-6 h-full flex flex-col animate-fade-in">
      {/* Warning Banner */}
      <Alert className="bg-amber-50 border-l-4 border-amber-500 rounded-r shadow-sm border-t-0 border-r-0 border-b-0">
        <AlertTriangle className="w-5 h-5 text-amber-600" />
        <AlertTitle className="text-sm font-bold text-amber-800">
          Physician Review Required
        </AlertTitle>
        <AlertDescription className="text-sm text-amber-700">
          All AI-generated documentation must be reviewed and approved by the
          treating physician before inclusion in medical records.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
        {/* Input Column */}
        <div className="space-y-6 flex flex-col">
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
