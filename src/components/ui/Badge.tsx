import { cn } from "@/lib/utils";

type BadgeStatus = "active" | "ended" | "pending" | "flagged" | "success";

const statusClasses: Record<BadgeStatus, string> = {
  active: "bg-turquoise/15 text-turquoise",
  ended: "bg-teal/10 text-text-secondary",
  pending: "bg-amber/15 text-amber",
  flagged: "bg-rose/15 text-rose",
  success: "bg-lime/15 text-lime",
};

export function Badge({ status, children }: { status: BadgeStatus; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        statusClasses[status]
      )}
    >
      {children}
    </span>
  );
}
