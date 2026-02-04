import * as React from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon?: React.ReactNode;
  highlighted?: boolean;
}

export function StatCard({
  label,
  value,
  trend,
  trendValue,
  icon,
  highlighted = false,
}: StatCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded border ${
        highlighted ? "border-primary/50" : "border-primary/30"
      } bg-background/50 p-4 backdrop-blur-sm transition-all hover:border-primary`}
    >
      {/* Corner brackets */}
      <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary" />
      <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary" />

      {/* Glow effect */}
      {highlighted && (
        <div className="absolute inset-0 -z-10 bg-primary/5" />
      )}

      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-2 font-mono text-[9px] tracking-widest text-muted-foreground">
            {label}
          </div>
          <div className="font-display text-2xl font-bold text-primary">
            {value}
          </div>
          {trend && trendValue && (
            <div className="mt-2 flex items-center gap-1">
              {trend === "up" && (
                <svg
                  className="h-3 w-3 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              )}
              {trend === "down" && (
                <svg
                  className="h-3 w-3 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              )}
              <span
                className={`font-mono text-[10px] ${
                  trend === "up"
                    ? "text-green-500"
                    : trend === "down"
                    ? "text-red-500"
                    : "text-muted-foreground"
                }`}
              >
                {trendValue}
              </span>
            </div>
          )}
        </div>
        {icon && <div className="text-primary/40">{icon}</div>}
      </div>
    </div>
  );
}
