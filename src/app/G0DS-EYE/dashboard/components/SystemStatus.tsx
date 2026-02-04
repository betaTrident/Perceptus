"use client";

import * as React from "react";

interface SystemMetric {
  label: string;
  value: number;
  max: number;
  unit?: string;
  status: "normal" | "warning" | "critical";
}

const metrics: SystemMetric[] = [
  { label: "CPU USAGE", value: 42, max: 100, unit: "%", status: "normal" },
  { label: "MEMORY", value: 68, max: 100, unit: "%", status: "normal" },
  { label: "GPU LOAD", value: 85, max: 100, unit: "%", status: "warning" },
  { label: "NETWORK", value: 156, max: 1000, unit: "Mbps", status: "normal" },
  { label: "STORAGE", value: 2.4, max: 10, unit: "TB", status: "normal" },
  { label: "ACTIVE CAMERAS", value: 47, max: 64, unit: "", status: "normal" },
];

export function SystemStatus() {
  const getStatusColor = (status: SystemMetric["status"]) => {
    switch (status) {
      case "critical":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-primary";
    }
  };

  const getPercentage = (value: number, max: number) => {
    return (value / max) * 100;
  };

  return (
    <div className="relative overflow-hidden rounded border border-primary/30 bg-background/50 p-6 backdrop-blur-sm">
      {/* Corner brackets */}
      <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary" />
      <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary" />

      {/* Header */}
      <div className="mb-6">
        <div className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground">
          DIAGNOSTICS
        </div>
        <h3 className="font-display text-lg font-bold text-foreground">
          System Status
        </h3>
      </div>

      {/* Metrics */}
      <div className="space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                {metric.label}
              </span>
              <span className="font-mono text-xs font-bold text-primary">
                {metric.value}
                {metric.unit} / {metric.max}
                {metric.unit}
              </span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full border border-primary/20 bg-background">
              <div
                className={`h-full transition-all duration-500 ${getStatusColor(
                  metric.status
                )} shadow-[0_0_10px_var(--primary)]`}
                style={{ width: `${getPercentage(metric.value, metric.max)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* System health indicator */}
      <div className="mt-6 rounded border border-primary/20 bg-primary/5 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground">
              OVERALL STATUS
            </div>
            <div className="font-display text-sm font-bold text-primary">
              OPERATIONAL
            </div>
          </div>
          <div className="h-3 w-3 animate-pulse rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
        </div>
      </div>
    </div>
  );
}
