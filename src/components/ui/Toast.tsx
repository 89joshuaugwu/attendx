"use client";

import toast, { Toaster } from "react-hot-toast";
import { CheckCircle2, XCircle, Info } from "lucide-react";

export function AttendXToaster() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#ffffff",
          color: "#087f73",
          border: "1px solid rgba(8,127,115,0.12)",
          boxShadow: "0 4px 16px rgba(8,127,115,0.12)",
          borderRadius: "0.75rem",
          fontSize: "14px",
        },
      }}
    />
  );
}

export const notify = {
  success: (message: string) =>
    toast.custom((t) => (
      <div
        className={`flex items-center gap-2 rounded-lg border border-teal/10 bg-card px-4 py-3 text-sm text-teal shadow-lg`}
        style={{ opacity: t.visible ? 1 : 0, transition: "opacity 0.2s" }}
      >
        <CheckCircle2 className="h-4 w-4 shrink-0 text-lime" />
        {message}
      </div>
    )),
  error: (message: string) =>
    toast.custom((t) => (
      <div
        className={`flex items-center gap-2 rounded-lg border border-teal/10 bg-card px-4 py-3 text-sm text-teal shadow-lg`}
        style={{ opacity: t.visible ? 1 : 0, transition: "opacity 0.2s" }}
      >
        <XCircle className="h-4 w-4 shrink-0 text-rose" />
        {message}
      </div>
    )),
  info: (message: string) =>
    toast.custom((t) => (
      <div
        className={`flex items-center gap-2 rounded-lg border border-teal/10 bg-card px-4 py-3 text-sm text-teal shadow-lg`}
        style={{ opacity: t.visible ? 1 : 0, transition: "opacity 0.2s" }}
      >
        <Info className="h-4 w-4 shrink-0 text-amber" />
        {message}
      </div>
    )),
};
