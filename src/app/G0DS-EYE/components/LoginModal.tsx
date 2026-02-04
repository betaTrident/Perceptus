"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess: () => void;
}

export function LoginModal({
  open,
  onOpenChange,
  onAuthSuccess,
}: LoginModalProps) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", username);
    onOpenChange(false);
    onAuthSuccess();
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* Modal Content */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-4">
        <div className="relative overflow-hidden rounded-lg border-2 border-primary bg-background p-6 shadow-2xl">
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-20 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
          >
            <svg
              className="h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Corner brackets */}
          <div className="pointer-events-none absolute -left-px -top-px z-20 h-8 w-8 border-l-2 border-t-2 border-primary" />
          <div className="pointer-events-none absolute -right-px -top-px z-20 h-8 w-8 border-r-2 border-t-2 border-primary" />
          <div className="pointer-events-none absolute -bottom-px -left-px z-20 h-8 w-8 border-b-2 border-l-2 border-primary" />
          <div className="pointer-events-none absolute -bottom-px -right-px z-20 h-8 w-8 border-b-2 border-r-2 border-primary" />

          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Scanline effect */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--primary), var(--primary) 1px, transparent 1px, transparent 3px)",
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-6">
              <div className="mb-2 text-center font-mono text-[10px] tracking-[0.5em] text-muted-foreground">
                SECURITY CLEARANCE
              </div>
              <h2 className="text-center font-display text-2xl font-bold tracking-wider text-primary">
                SYSTEM ACCESS
              </h2>
              <p className="mt-2 text-center font-mono text-xs text-muted-foreground">
                Enter your credentials to access PERCEPTUS
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  USERNAME
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="border-primary/30 bg-background font-mono text-sm tracking-wider focus:border-primary focus:ring-primary/50"
                    required
                  />
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  PASSWORD
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="border-primary/30 bg-background font-mono text-sm tracking-wider focus:border-primary focus:ring-primary/50"
                    required
                  />
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded border-2 border-primary bg-primary/20 py-3 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_var(--primary)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary group-hover:bg-primary-foreground" />
                    AUTHENTICATE
                  </span>
                  <div className="absolute inset-0 -z-10 translate-y-full bg-primary transition-transform group-hover:translate-y-0" />
                </button>
              </div>

              {/* Footer info */}
              <div className="border-t border-primary/20 pt-4 text-center">
                <p className="font-mono text-[9px] tracking-widest text-muted-foreground">
                  SECURITY LEVEL: CLASSIFIED • ACCESS RESTRICTED
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
