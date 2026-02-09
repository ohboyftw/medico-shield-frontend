"use client";

import { AlertCircle, AlertTriangle, Info, ChevronRight } from "lucide-react";

interface Finding {
  severity: "critical" | "warning" | "suggestion";
  title: string;
  description: string;
  recommendation?: string;
  legalRef?: string;
}

const findings: Finding[] = [
  {
    severity: "critical",
    title: "Missing Red Flag Evaluation",
    description:
      "Abdominal pain in 45Y Male could be cardiac (Inferior Wall MI). No ECG documented.",
    recommendation:
      'Document "ECG done - Normal" or "Cardiac cause ruled out clinically because..."',
    legalRef: "V. Kishan Rao vs. Nikhil Super Speciality (2010)",
  },
  {
    severity: "critical",
    title: "Vague Follow-up Instructions",
    description:
      '"Discharge on oral meds" is legally insufficient if complications arise.',
    recommendation:
      'Specify: "Return immediately if pain worsens, fever develops, or vomiting persists"',
  },
  {
    severity: "warning",
    title: "No Differential Diagnosis Documented",
    description:
      "Clinical reasoning should document what was considered and ruled out.",
    recommendation:
      'Add: "Appendicitis, pancreatitis considered and ruled out based on..."',
  },
  {
    severity: "suggestion",
    title: "Vitals at Discharge",
    description: "No documentation of stable vitals at discharge time.",
    recommendation:
      'Add: "Vitals stable at discharge: BP X/Y, HR Z, SpO2 W%"',
  },
];

const severityConfig = {
  critical: {
    icon: AlertCircle,
    bg: "bg-red-50",
    border: "border-red-100",
    headerBg: "bg-red-100/60",
    headerBorder: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    textColor: "text-red-800",
    dotColor: "bg-red-500",
    label: "Critical Vulnerability",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50",
    border: "border-amber-100",
    headerBg: "bg-amber-100/60",
    headerBorder: "border-amber-200",
    iconColor: "text-amber-600",
    titleColor: "text-amber-900",
    textColor: "text-amber-800",
    dotColor: "bg-amber-500",
    label: "Warning",
  },
  suggestion: {
    icon: Info,
    bg: "bg-blue-50",
    border: "border-blue-100",
    headerBg: "bg-blue-100/60",
    headerBorder: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    textColor: "text-blue-800",
    dotColor: "bg-blue-500",
    label: "Improvement",
  },
};

export function FindingsList() {
  const grouped = {
    critical: findings.filter((f) => f.severity === "critical"),
    warning: findings.filter((f) => f.severity === "warning"),
    suggestion: findings.filter((f) => f.severity === "suggestion"),
  };

  return (
    <div className="space-y-4">
      {(["critical", "warning", "suggestion"] as const).map((severity) => {
        const items = grouped[severity];
        if (items.length === 0) return null;
        const config = severityConfig[severity];
        const Icon = config.icon;

        return (
          <div
            key={severity}
            className={`${config.bg} border ${config.border} rounded-md overflow-hidden`}
          >
            {/* Section Header */}
            <div
              className={`${config.headerBg} px-4 py-2 border-b ${config.headerBorder} flex items-center gap-2`}
            >
              <Icon className={`w-3.5 h-3.5 ${config.iconColor}`} />
              <span
                className={`font-mono text-[10px] font-medium ${config.titleColor} uppercase tracking-wider`}
              >
                {config.label} ({items.length})
              </span>
            </div>

            {/* Findings */}
            <div className="divide-y divide-current/5">
              {items.map((finding, idx) => (
                <div key={idx} className="p-4">
                  <div className="flex items-start gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${config.dotColor} mt-1.5 shrink-0`}
                    />
                    <div className="flex-1">
                      <p
                        className={`text-[13px] font-medium ${config.titleColor}`}
                      >
                        {finding.title}
                      </p>
                      <p
                        className={`text-[12px] ${config.textColor} mt-1 leading-relaxed opacity-80`}
                      >
                        {finding.description}
                      </p>
                      {finding.recommendation && (
                        <div className="mt-2 bg-white/50 p-2.5 rounded border border-current/10">
                          <span className="font-mono text-[9px] text-[#6b7280] uppercase tracking-wider block mb-1">
                            Recommendation
                          </span>
                          <p className={`text-[11px] ${config.textColor}`}>
                            {finding.recommendation}
                          </p>
                        </div>
                      )}
                      {finding.legalRef && (
                        <div className="mt-1.5 flex items-center gap-1">
                          <ChevronRight className="w-3 h-3 text-[#9ca3af]" />
                          <span className="font-mono text-[10px] text-[#9ca3af] italic">
                            {finding.legalRef}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
