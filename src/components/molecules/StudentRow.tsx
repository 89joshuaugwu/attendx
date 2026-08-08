import { Badge } from "@/components/ui/Badge";
import { formatDate, formatTime } from "@/lib/utils";
import type { AttendanceRecord } from "@/types";

export function StudentRow({ record }: { record: AttendanceRecord }) {
  return (
    <div className="rounded-lg border border-teal/10 bg-cream p-3 md:hidden">
      <div className="flex items-center justify-between">
        <p className="font-medium text-teal">
          {record.surname} {record.firstName}
        </p>
        <Badge status={record.flagged ? "flagged" : "success"}>
          {record.flagged ? "Flagged" : "Present"}
        </Badge>
      </div>
      <p className="mt-1 text-xs text-text-secondary">Reg: {record.regNumber}</p>
      <p className="text-xs text-text-secondary">Course: {record.courseCode}</p>
      <p className="text-xs text-text-secondary">
        {formatDate(record.submittedAt)} · {formatTime(record.submittedAt)}
      </p>
    </div>
  );
}

export function StudentTableRow({ record }: { record: AttendanceRecord }) {
  return (
    <tr className="hidden border-b border-teal/10 text-sm md:table-row">
      <td className="whitespace-nowrap px-3 py-2.5 font-mono text-text-secondary">
        {record.regNumber}
      </td>
      <td className="px-3 py-2.5 text-teal">
        {record.surname} {record.firstName}
      </td>
      <td className="px-3 py-2.5 text-text-secondary">{record.courseCode}</td>
      <td className="whitespace-nowrap px-3 py-2.5 text-text-secondary">
        {formatDate(record.submittedAt)}
      </td>
      <td className="px-3 py-2.5">
        <Badge status={record.flagged ? "flagged" : "success"}>
          {record.flagged ? "Flagged" : "Present"}
        </Badge>
      </td>
    </tr>
  );
}
