"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import {
  TronGridScanOverlay,
  TronUplinkHeader,
  TronRadar,
} from "@/components/tron-ui";
import {
  DashboardHeader,
  StatCard,
  LiveFeedCard,
  ActivityLog,
  SystemStatus,
} from "./components";

// Dynamic import for Three.js components (client-side only)
const TronGrid3D = dynamic(
  () => import("@/components/tron-3d").then((mod) => mod.TronGrid3D),
  { ssr: false }
);

export default function DashboardPage() {
  const [liveStats, setLiveStats] = React.useState({
    activeCameras: 47,
    detectedFaces: 0,
    identifiedSubjects: 0,
    activeAlerts: 0,
  });

  // Simulate real-time stats updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats({
        activeCameras: 47,
        detectedFaces: Math.floor(Math.random() * 150) + 50,
        identifiedSubjects: Math.floor(Math.random() * 100) + 30,
        activeAlerts: Math.floor(Math.random() * 5),
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* 3D Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <TronGrid3D
          className="h-full w-full"
          enableParticles
          enableBeams
          cameraAnimation
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/50 to-background" />
      </div>

      {/* Header */}
      <DashboardHeader />

      {/* Main content */}
      <main className="relative z-10">
        {/* Top bar with system info */}
        <TronUplinkHeader
          leftText="PERCEPTUS ADMIN CONSOLE - REAL-TIME MONITORING"
          rightText={`UPTIME: 847h 23m • CAMERAS: ${liveStats.activeCameras}/64 • LAST SYNC: 2s ago`}
        />

        <TronGridScanOverlay />

        <div className="container mx-auto px-4 py-8">
          {/* Stats Overview */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground">
                  OVERVIEW
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  System Metrics
                </h2>
              </div>
              <div className="rounded border border-primary/30 bg-background/50 px-4 py-2">
                <span className="font-mono text-xs text-primary">
                  REAL-TIME MODE
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                label="ACTIVE CAMERAS"
                value={liveStats.activeCameras}
                icon={
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                }
                highlighted
              />
              <StatCard
                label="DETECTED FACES"
                value={liveStats.detectedFaces}
                trend="up"
                trendValue="+12% vs last hour"
                icon={
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
                }
              />
              <StatCard
                label="IDENTIFIED"
                value={liveStats.identifiedSubjects}
                trend="up"
                trendValue="+8% vs last hour"
                icon={
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                }
              />
              <StatCard
                label="ACTIVE ALERTS"
                value={liveStats.activeAlerts}
                highlighted={liveStats.activeAlerts > 0}
                icon={
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                }
              />
            </div>
          </section>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Camera Feeds */}
            <div className="lg:col-span-2">
              <section className="mb-8">
                <div className="mb-4">
                  <div className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground">
                    LIVE SURVEILLANCE
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Camera Feeds
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <LiveFeedCard
                    feedId="CAM-001"
                    location="Main Entrance - East Wing"
                    status="active"
                    detections={12}
                  />
                  <LiveFeedCard
                    feedId="CAM-007"
                    location="Lobby - Ground Floor"
                    status="active"
                    detections={8}
                  />
                  <LiveFeedCard
                    feedId="CAM-012"
                    location="Parking Lot - North Section"
                    status="active"
                    detections={3}
                  />
                  <LiveFeedCard
                    feedId="CAM-023"
                    location="Security Checkpoint - Level 2"
                    status="warning"
                    detections={0}
                  />
                </div>
              </section>

              {/* Activity Log */}
              <section>
                <ActivityLog />
              </section>
            </div>

            {/* Right Column - System Status & Analytics */}
            <div className="space-y-8">
              {/* System Status */}
              <SystemStatus />

              {/* Proximity Radar */}
              <div className="relative overflow-hidden rounded border border-primary/30 bg-background/50 p-6 backdrop-blur-sm">
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary" />

                <div className="mb-4">
                  <div className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground">
                    SPATIAL TRACKING
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Proximity Map
                  </h3>
                </div>

                <div className="flex justify-center">
                  <TronRadar
                    size={200}
                    targets={[
                      { x: 30, y: 35 },
                      { x: 70, y: 60 },
                      { x: 50, y: 80 },
                      { x: 20, y: 70 },
                      { x: 85, y: 25 },
                    ]}
                  />
                </div>

                <div className="mt-4 space-y-2 text-center">
                  <div className="font-mono text-sm text-primary">
                    5 Active Targets
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    SCAN RADIUS: 50M
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="relative overflow-hidden rounded border border-primary/30 bg-background/50 p-6 backdrop-blur-sm">
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary" />

                <div className="mb-4">
                  <div className="mb-1 font-mono text-[10px] tracking-widest text-muted-foreground">
                    ACTIONS
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Quick Controls
                  </h3>
                </div>

                <div className="space-y-2">
                  <button className="w-full rounded border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                    EXPORT LOGS
                  </button>
                  <button className="w-full rounded border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                    RUN DIAGNOSTICS
                  </button>
                  <button className="w-full rounded border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                    CLEAR CACHE
                  </button>
                  <button className="w-full rounded border border-destructive/30 bg-destructive/10 px-4 py-2 font-mono text-xs tracking-wider text-destructive transition-all hover:bg-destructive hover:text-destructive-foreground">
                    EMERGENCY LOCKDOWN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
