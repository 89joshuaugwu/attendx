import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-teal/10 bg-card p-4 shadow-sm shadow-teal/5 transition-shadow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
