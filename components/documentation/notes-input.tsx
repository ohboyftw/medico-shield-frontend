"use client";

import { FileText, Shield, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    <Card className="flex-grow flex flex-col h-full">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
          <FileText className="w-5 h-5" />
          <span>Sparse Clinical Notes</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-xs text-slate-500 mb-2">
          Enter brief notes as typically written during rounds. The AI will
          structure them legally.
        </p>
        <textarea
          className="flex-grow w-full p-4 border border-slate-300 rounded-md font-mono text-sm focus:ring-2 focus:ring-[#2d5a87] focus:border-[#2d5a87] outline-none resize-none bg-slate-50 min-h-[200px]"
          placeholder="e.g. pt came with chest pain x 2 hrs. ecg st elevation v1-v4. trop +ve. loaded with eco/asp. ref to cardio. stable now. vitals 120/80. advice admission but pt relative wants LAMA."
          value={notes}
          onChange={(e) => onNotesChange(e.target.value)}
        />
        <div className="mt-4 pt-4 border-t border-slate-100">
          <Button
            onClick={onAugment}
            disabled={!notes || loading}
            className="w-full"
          >
            {loading ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Shield className="w-4 h-4 mr-2" />
            )}
            {loading ? "Augmenting..." : "Augment for Legal Protection"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
