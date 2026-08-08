"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  valueLabel?: string;
}

export function Slider({ label, valueLabel, className, ...props }: SliderProps) {
  return (
    <div className="w-full">
      {label && (
        <div className="mb-1.5 flex items-center justify-between">
          <label className="text-xs font-medium text-text-secondary">{label}</label>
          {valueLabel && <span className="text-sm font-semibold text-turquoise">{valueLabel}</span>}
        </div>
      )}
      <div className="flex items-center py-2">
        <input
          type="range"
          className={cn(
            "attendx-slider h-2 w-full cursor-pointer appearance-none rounded-full bg-teal/15 accent-turquoise",
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
}
