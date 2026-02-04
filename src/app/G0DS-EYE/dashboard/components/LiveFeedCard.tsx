"use client";

import * as React from "react";

interface LiveFeedCardProps {
  feedId: string;
  location: string;
  status: "active" | "offline" | "warning";
  detections?: number;
}

export function LiveFeedCard({
  feedId,
  location,
  status,
  detections = 0,
}: LiveFeedCardProps) {
  const statusColors = {
    active: "bg-primary",
    offline: "bg-muted-foreground",
    warning: "bg-yellow-500",
  };

  const statusLabels = {
    active: "ACTIVE",
    offline: "OFFLINE",
    warning: "WARNING",
  };

  return (
    <div className="group relative overflow-hidden rounded border border-primary/30 bg-background/50 backdrop-blur-sm transition-all hover:border-primary">
      {/* Corner brackets */}
      <div className="absolute -left-px -top-px z-10 h-4 w-4 border-l-2 border-t-2 border-primary/60 transition-colors group-hover:border-primary" />
      <div className="absolute -right-px -top-px z-10 h-4 w-4 border-r-2 border-t-2 border-primary/60 transition-colors group-hover:border-primary" />

      {/* Video feed placeholder */}
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Scanline effect */}
        <div className="absolute inset-0 animate-scan bg-linear-to-b from-transparent via-primary/20 to-transparent" />

        {/* Camera simulation */}
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <div className="mb-2 font-mono text-xs text-primary/50">
              CAMERA FEED
            </div>
            <div className="font-display text-2xl text-primary/30">{feedId}</div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="absolute left-2 top-2 flex items-center gap-2 rounded bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div
            className={`h-1.5 w-1.5 animate-pulse rounded-full ${statusColors[status]}`}
          />
          <span className="font-mono text-[9px] tracking-wider text-foreground">
            {statusLabels[status]}
          </span>
        </div>

        {/* Detection count */}
        {status === "active" && detections > 0 && (
          <div className="absolute right-2 top-2 rounded bg-primary/20 px-2 py-1 backdrop-blur-sm">
            <span className="font-mono text-[9px] tracking-wider text-primary">
              {detections} DETECTED
            </span>
          </div>
        )}
      </div>

      {/* Feed info */}
      <div className="border-t border-primary/20 p-3">
        <div className="font-mono text-xs text-foreground">{location}</div>
        <div className="mt-1 font-mono text-[9px] text-muted-foreground">
          FEED: {feedId}
        </div>
      </div>
    </div>
  );
}
