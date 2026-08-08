import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GeoPoint } from "@/types";

export function LocationPill({
  point,
  label = "Your location",
  className,
}: {
  point: GeoPoint;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-turquoise/30 bg-turquoise/10 px-3 py-1.5 text-sm text-turquoise",
        className
      )}
    >
      <MapPin className="h-4 w-4 shrink-0" />
      <span className="font-mono text-xs">
        {label}: {point.lat.toFixed(4)}°N, {point.lng.toFixed(4)}°E ±{Math.round(point.accuracy)}m
      </span>
    </div>
  );
}
