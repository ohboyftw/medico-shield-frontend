"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { FileText, CheckSquare, RefreshCw } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    ctx.strokeStyle = "#000000";
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
    <div className="flex flex-col h-full">
      <Card className="flex-grow flex flex-col h-full">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
            <FileText className="w-5 h-5" />
            <span>Digital Signature</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
          <div
            className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg flex-grow relative touch-none"
            style={{ minHeight: "300px" }}
          >
            <canvas
              ref={canvasRef}
              width={500}
              height={300}
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
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <p className="text-slate-400 text-lg">
                  Sign here using mouse or touch
                </p>
              </div>
            )}
            <button
              onClick={clearCanvas}
              className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded hover:bg-slate-100 text-slate-600 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              Clear
            </button>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Button
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
              onClick={onSubmit}
            >
              <CheckSquare className="w-4 h-4 mr-2" />
              Capture Consent &amp; Sign
            </Button>
            <p className="text-center text-xs text-slate-400 mt-2">
              By clicking above, you agree to digitally sign this document.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
