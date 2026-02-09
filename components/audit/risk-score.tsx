"use client";

import { AlertTriangle, Shield } from "lucide-react";

export function RiskScore() {
  const score = 45;
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = (s: number) => {
    if (s >= 80) return { stroke: "#059669", text: "text-emerald-600", label: "Low Risk", bg: "bg-emerald-50" };
    if (s >= 60) return { stroke: "#d97706", text: "text-amber-600", label: "Medium Risk", bg: "bg-amber-50" };
    return { stroke: "#dc2626", text: "text-red-600", label: "High Risk", bg: "bg-red-50" };
  };

  const config = getScoreColor(score);

  return (
    <div className="card-instrument p-5">
      <div className="flex items-center gap-6">
        {/* Score Ring */}
        <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#f0f2f5"
              strokeWidth="6"
              fill="transparent"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke={config.stroke}
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-[20px] font-semibold ${config.text} leading-none`}>
              {score}
            </span>
            <span className="font-mono text-[8px] text-[#9ca3af] uppercase mt-0.5">
              / 100
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-[15px] font-semibold text-[#1a1d23]">
              {config.label}
            </span>
          </div>
          <p className="text-[12px] text-[#6b7280] leading-relaxed">
            Documentation has critical gaps that could expose the treating
            physician to legal liability. Immediate review recommended.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="hidden md:flex flex-col gap-2 shrink-0">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-red-50 border border-red-100">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="font-mono text-[10px] text-red-700 font-medium">
              2 Critical
            </span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-amber-50 border border-amber-100">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="font-mono text-[10px] text-amber-700 font-medium">
              1 Warning
            </span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-100">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="font-mono text-[10px] text-blue-700 font-medium">
              1 Suggestion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
