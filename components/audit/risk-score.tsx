"use client";

export function RiskScore() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
          Legal Risk Score
        </p>
        <h3 className="text-3xl font-bold text-slate-900 mt-1">High Risk</h3>
      </div>
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#f1f5f9"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="#dc2626"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset="100"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute text-xl font-bold text-red-600">45/100</span>
      </div>
    </div>
  );
}
