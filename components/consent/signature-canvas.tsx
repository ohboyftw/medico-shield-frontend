"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { CheckSquare, RefreshCw, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SignatureCanvasProps {
  onSubmit: () => void;
}

export function SignatureCanvas({ onSubmit }: SignatureCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#1a1d23";
  }, []);

  const getCoordinates = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!canvasRef.current) return { offsetX: 0, offsetY: 0 };

      if ("touches" in e && e.touches[0]) {
        const rect = canvasRef.current.getBoundingClientRect();
        return {
          offsetX: e.touches[0].clientX - rect.left,
          offsetY: e.touches[0].clientY - rect.top,
        };
      }

      const mouseEvent = e as React.MouseEvent;
      return {
        offsetX: mouseEvent.nativeEvent.offsetX,
        offsetY: mouseEvent.nativeEvent.offsetY,
      };
    },
    []
  );

  const startDrawing = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!canvasRef.current) return;
      const { offsetX, offsetY } = getCoordinates(e);
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
      setIsDrawing(true);
      setHasSignature(true);
    },
    [getCoordinates]
  );

  const draw = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDrawing || !canvasRef.current) return;
      const { offsetX, offsetY } = getCoordinates(e);
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    },
    [isDrawing, getCoordinates]
  );

  const stopDrawing = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const clearCanvas = useCallback(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  }, []);

  return (
    <div className="card-instrument flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e2e5ea]">
        <span className="section-label">Digital Signature</span>
        <div className="flex items-center gap-1.5">
          <PenTool className="w-3 h-3 text-[#9ca3af]" />
          <span className="mono-readout">
            {hasSignature ? "Signed" : "Awaiting"}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div
          className="bg-white border border-dashed border-[#d1d5db] rounded-md flex-grow relative touch-none"
          style={{ minHeight: "280px" }}
        >
          <canvas
            ref={canvasRef}
            width={500}
            height={280}
            className="w-full h-full absolute inset-0 cursor-crosshair"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          {!isDrawing && !hasSignature && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <PenTool className="w-5 h-5 text-[#d1d5db] mb-2" />
              <p className="text-[12px] text-[#9ca3af]">
                Sign here using mouse or touch
              </p>
            </div>
          )}
          <button
            onClick={clearCanvas}
            className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 text-[10px] font-medium bg-white border border-[#e2e5ea] rounded hover:bg-[#f8f9fb] text-[#6b7280] transition-colors"
          >
            <RefreshCw className="w-2.5 h-2.5" />
            Clear
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-[#f0f2f5]">
          <Button
            onClick={onSubmit}
            className="w-full h-9 text-[12px] font-medium bg-emerald-600 hover:bg-emerald-700"
          >
            <CheckSquare className="w-3.5 h-3.5 mr-2" />
            Capture Consent & Sign
          </Button>
          <p className="text-center text-[10px] text-[#9ca3af] mt-2">
            Legally binding under IT Act 2000 Section 5
          </p>
        </div>
      </div>
    </div>
  );
}
