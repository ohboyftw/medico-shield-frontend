"use client";

import { Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotesInputProps {
  notes: string;
  onNotesChange: (notes: string) => void;
  onAugment: () => void;
  loading: boolean;
}

export function NotesInput({
  notes,
  onNotesChange,
  onAugment,
  loading,
}: NotesInputProps) {
  return (
    <div className="card-instrument flex flex-col flex-grow">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e2e5ea]">
        <span className="section-label">Sparse Clinical Notes</span>
        <span className="mono-readout">
          {notes.length > 0 ? `${notes.length} chars` : "Input required"}
        </span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-[11px] text-[#6b7280] mb-2">
          Enter brief notes as written during rounds. AI will structure them
          for legal defensibility.
        </p>
        <textarea
          className="flex-grow w-full p-3 border border-[#e2e5ea] rounded-md font-mono text-[12px] leading-relaxed focus:ring-1 focus:ring-[#2d5a87] focus:border-[#2d5a87] outline-none resize-none bg-[#f8f9fb] focus:bg-white text-[#1a1d23] placeholder:text-[#9ca3af] min-h-[180px] transition-colors"
          placeholder="e.g. pt came with chest pain x 2 hrs. ecg st elevation v1-v4. trop +ve. loaded with eco/asp. ref to cardio. stable now. vitals 120/80. advice admission but pt relative wants LAMA."
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
        />
        <div className="mt-3 pt-3 border-t border-[#f0f2f5]">
          <Button
            onClick={onAugment}
            disabled={!notes || loading}
            className="w-full h-9 text-[12px] font-medium bg-[#1e3a5f] hover:bg-[#2d5a87] disabled:opacity-40"
          >
            {loading ? (
              <RefreshCw className="w-3.5 h-3.5 mr-2 animate-spin" />
            ) : (
              <Shield className="w-3.5 h-3.5 mr-2" />
            )}
            {loading ? "Augmenting Documentation..." : "Augment for Legal Protection"}
          </Button>
        </div>
      </div>
    </div>
  );
}
