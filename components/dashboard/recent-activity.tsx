"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { RecentRecord } from "@/types";

const RECENT_RECORDS: RecentRecord[] = [
  {
    id: "DIS-2023-892",
    patient: "Rajesh Kumar",
    uhid: "UHID-8821",
    condition: "Acute Coronary Syndrome",
    date: "10 mins ago",
    status: "Draft",
  },
  {
    id: "DIS-2023-891",
    patient: "Priya Sharma",
    uhid: "UHID-8822",
    condition: "Febrile Seizure",
    date: "25 mins ago",
    status: "Completed",
  },
  {
    id: "DIS-2023-890",
    patient: "Amit Patel",
    uhid: "UHID-8823",
    condition: "RTA - Minor",
    date: "1 hour ago",
    status: "Audited",
  },
  {
    id: "DIS-2023-889",
    patient: "Sunita Devi",
    uhid: "UHID-8824",
    condition: "Acute Gastroenteritis",
    date: "2 hours ago",
    status: "Completed",
  },
];

function StatusBadge({ status }: { status: RecentRecord["status"] }) {
  const styles = {
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Audited: "bg-[#1e3a5f]/[0.06] text-[#1e3a5f] border-[#1e3a5f]/10",
    Draft: "bg-amber-50 text-amber-700 border-amber-100",
  };

  return (
    <Badge
      variant="outline"
      className={`text-[10px] font-mono font-medium px-1.5 py-0 h-[18px] ${styles[status]}`}
    >
      {status}
    </Badge>
  );
}

export function RecentActivity() {
  return (
    <div className="card-instrument overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e2e5ea]">
        <span className="section-label">Recent Activity</span>
        <span className="mono-readout">Last 4 hours</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f8f9fb]">
              <th className="text-left px-4 py-2 font-mono text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider">
                UHID
              </th>
              <th className="text-left px-4 py-2 font-mono text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider">
                Patient
              </th>
              <th className="text-left px-4 py-2 font-mono text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider hidden md:table-cell">
                Condition
              </th>
              <th className="text-left px-4 py-2 font-mono text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider hidden sm:table-cell">
                Time
              </th>
              <th className="text-left px-4 py-2 font-mono text-[10px] font-medium text-[#9ca3af] uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f2f5]">
            {RECENT_RECORDS.map((record) => (
              <tr
                key={record.id}
                className="hover:bg-[#f8f9fb] transition-colors group"
              >
                <td className="px-4 py-2.5">
                  <span className="font-mono text-[11px] text-[#6b7280]">
                    {record.uhid}
                  </span>
                </td>
                <td className="px-4 py-2.5">
                  <div>
                    <span className="text-[13px] font-medium text-[#1a1d23]">
                      {record.patient}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-2.5 hidden md:table-cell">
                  <span className="text-[12px] text-[#6b7280]">
                    {record.condition}
                  </span>
                </td>
                <td className="px-4 py-2.5 hidden sm:table-cell">
                  <span className="mono-readout">{record.date}</span>
                </td>
                <td className="px-4 py-2.5">
                  <StatusBadge status={record.status} />
                </td>
                <td className="px-4 py-2.5 text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-[11px] text-[#6b7280] hover:text-[#1a1d23] opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
