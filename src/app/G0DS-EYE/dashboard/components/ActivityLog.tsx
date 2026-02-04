"use client";

import * as React from "react";

interface Activity {
  id: string;
  type: "detection" | "identification" | "alert" | "system";
  message: string;
  timestamp: string;
  severity?: "normal" | "warning" | "critical";
}

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "identification",
    message: "Subject #A4728 identified - Main Entrance",
    timestamp: "2 min ago",
    severity: "normal",
  },
  {
    id: "2",
    type: "alert",
    message: "Unauthorized access attempt - Sector 7",
    timestamp: "5 min ago",
    severity: "critical",
  },
  {
    id: "3",
    type: "detection",
    message: "Multiple faces detected - Lobby Camera 3",
    timestamp: "8 min ago",
    severity: "normal",
  },
  {
    id: "4",
    type: "system",
    message: "Neural engine recalibration complete",
    timestamp: "12 min ago",
    severity: "normal",
  },
  {
    id: "5",
    type: "identification",
    message: "Subject #B9201 identified - Parking Lot",
    timestamp: "15 min ago",
    severity: "normal",
  },
  {
    id: "6",
    type: "alert",
    message: "Camera feed interrupted - North Wing",
    timestamp: "18 min ago",
    severity: "warning",
  },
];

export function ActivityLog() {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "detection":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        );
      case "identification":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "alert":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        );
      case "system":
        return (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
    }
  };

  const getSeverityColor = (severity?: Activity["severity"]) => {
    switch (severity) {
      case "critical":
        return "text-red-500";
      case "warning":
        return "text-yellow-500";
      default:
        return "text-primary";
    }
  };

  return (
    <div className="relative h-full overflow-hidden rounded border border-primary/30 bg-background/50 backdrop-blur-sm">
      {/* Header */}
      <div className="border-b border-primary/20 p-4">
        <div className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground">
          RECENT ACTIVITY
        </div>
        <h3 className="font-display text-lg font-bold text-foreground">
          System Log
        </h3>
      </div>

      {/* Activity list */}
      <div className="max-h-[500px] overflow-y-auto p-4">
        <div className="space-y-3">
          {mockActivities.map((activity) => (
            <div
              key={activity.id}
              className="group relative flex gap-3 rounded border border-primary/10 bg-background/30 p-3 transition-all hover:border-primary/30 hover:bg-background/50"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 ${getSeverityColor(activity.severity)}`}>
                {getActivityIcon(activity.type)}
              </div>

              {/* Content */}
              <div className="flex-1 overflow-hidden">
                <div className="font-mono text-xs text-foreground">
                  {activity.message}
                </div>
                <div className="mt-1 font-mono text-[9px] text-muted-foreground">
                  {activity.timestamp}
                </div>
              </div>

              {/* Severity indicator */}
              {activity.severity && activity.severity !== "normal" && (
                <div
                  className={`h-2 w-2 flex-shrink-0 self-center rounded-full ${
                    activity.severity === "critical"
                      ? "bg-red-500 animate-pulse"
                      : "bg-yellow-500"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Corner brackets */}
      <div className="pointer-events-none absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary" />
      <div className="pointer-events-none absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary" />
      <div className="pointer-events-none absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary" />
      <div className="pointer-events-none absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary" />
    </div>
  );
}
