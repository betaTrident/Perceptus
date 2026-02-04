"use client";

import Link from "next/link";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative border-b border-primary/30 bg-background/60 backdrop-blur-xl">
        {/* Top accent line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />

        {/* Scan line effect */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)",
            }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Left section */}
            <div className="flex items-center gap-6">
              <Link href="/G0DS-EYE/dashboard" className="group relative">
                <div className="absolute -left-2 -top-2 h-3 w-3 border-l-2 border-t-2 border-primary/60 transition-colors group-hover:border-primary" />
                <div className="absolute -right-2 -top-2 h-3 w-3 border-r-2 border-t-2 border-primary/60 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-2 -left-2 h-3 w-3 border-b-2 border-l-2 border-primary/60 transition-colors group-hover:border-primary" />
                <div className="absolute -bottom-2 -right-2 h-3 w-3 border-b-2 border-r-2 border-primary/60 transition-colors group-hover:border-primary" />

                <h1 className="px-2 py-1 font-display text-sm font-bold tracking-[0.2em] text-primary md:text-base">
                  PERCEPTUS • ADMIN
                </h1>
              </Link>

              <div className="hidden items-center gap-2 md:flex">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary [box-shadow:0_0_8px_var(--primary)]" />
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  ADMIN CONSOLE ACTIVE
                </span>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              {/* Quick actions */}
              <nav className="hidden items-center gap-1 md:flex">
                <Link
                  href="/G0DS-EYE/dashboard"
                  className="rounded px-3 py-1.5 font-mono text-xs tracking-wider text-primary/70 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  DASHBOARD
                </Link>
                <Link
                  href="/G0DS-EYE/dashboard/monitoring"
                  className="rounded px-3 py-1.5 font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  MONITORING
                </Link>
                <Link
                  href="/G0DS-EYE/dashboard/analytics"
                  className="rounded px-3 py-1.5 font-mono text-xs tracking-wider text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  ANALYTICS
                </Link>
              </nav>

              {/* User menu */}
              <div className="flex items-center gap-3 rounded border border-primary/30 bg-primary/5 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-mono text-xs tracking-wider text-primary">
                  ADMIN-001
                </span>
              </div>

              {/* Logout */}
              <Link
                href="/G0DS-EYE"
                className="group relative overflow-hidden rounded border border-primary/50 bg-primary/10 px-4 py-2 font-mono text-xs tracking-wider text-primary transition-all hover:bg-destructive hover:border-destructive hover:text-destructive-foreground"
              >
                <span className="relative z-10">LOGOUT</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
