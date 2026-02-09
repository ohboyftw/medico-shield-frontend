"use client";

import { Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

function getStatusBadge(status: RecentRecord["status"]) {
  switch (status) {
    case "Completed":
      return (
        <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-50">
          {status}
        </Badge>
      );
    case "Audited":
      return (
        <Badge className="bg-purple-50 text-purple-700 border border-purple-100 hover:bg-purple-50">
          {status}
        </Badge>
      );
    case "Draft":
      return (
        <Badge className="bg-amber-50 text-amber-700 border border-amber-100 hover:bg-amber-50">
          {status}
        </Badge>
      );
  }
}

export function RecentActivity() {
  return (
    <Card className="py-0">
      <CardHeader className="border-b py-4">
        <CardTitle className="flex items-center space-x-2 text-[#1e3a5f]">
          <Clock className="w-5 h-5" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50">
              <TableHead className="px-6 py-3 text-slate-500 text-xs uppercase tracking-wider font-medium">
                UHID
              </TableHead>
              <TableHead className="px-6 py-3 text-slate-500 text-xs uppercase tracking-wider font-medium">
                Patient
              </TableHead>
              <TableHead className="px-6 py-3 text-slate-500 text-xs uppercase tracking-wider font-medium">
                Condition
              </TableHead>
              <TableHead className="px-6 py-3 text-slate-500 text-xs uppercase tracking-wider font-medium">
                Status
              </TableHead>
              <TableHead className="px-6 py-3 text-slate-500 text-xs uppercase tracking-wider font-medium text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {RECENT_RECORDS.map((record) => (
              <TableRow
                key={record.id}
                className="hover:bg-slate-50 transition-colors"
              >
                <TableCell className="px-6 py-4 text-xs font-mono text-slate-500">
                  {record.uhid}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm font-medium text-slate-900">
                  {record.patient}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm text-slate-600">
                  {record.condition}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {getStatusBadge(record.status)}
                </TableCell>
                <TableCell className="px-6 py-4 text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
