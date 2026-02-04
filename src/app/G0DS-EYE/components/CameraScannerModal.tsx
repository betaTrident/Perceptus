"use client";

import * as React from "react";
import { TronReticle } from "@/components/tron-ui";

interface CameraScannerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CameraScannerModal({
  open,
  onOpenChange,
}: CameraScannerModalProps) {
  const [scanProgress, setScanProgress] = React.useState(0);
  const [scanStatus, setScanStatus] = React.useState("INITIALIZING");
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (open) {
      setScanProgress(0);
      setScanStatus("INITIALIZING");

      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "user" } })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          setScanStatus("SCANNING");

          const interval = setInterval(() => {
            setScanProgress((prev) => {
              if (prev >= 100) {
                clearInterval(interval);
                setScanStatus("MATCH FOUND");
                setTimeout(() => {
                  onOpenChange(false);
                  stream.getTracks().forEach((track) => track.stop());
                }, 2000);
                return 100;
              }
              return prev + 2;
            });
          }, 50);

          return () => {
            clearInterval(interval);
            stream.getTracks().forEach((track) => track.stop());
          };
        })
        .catch((err) => {
          console.error("Camera access denied:", err);
          setScanStatus("CAMERA ACCESS DENIED");
        });
    }
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 p-4">
        <div className="relative overflow-hidden rounded-lg border-2 border-primary bg-background shadow-2xl">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-30 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
          >
            <svg
              className="h-5 w-5 text-primary"
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
          <div className="pointer-events-none absolute -left-px -top-px z-20 h-16 w-16 border-l-2 border-t-2 border-primary" />
          <div className="pointer-events-none absolute -right-px -top-px z-20 h-16 w-16 border-r-2 border-t-2 border-primary" />
          <div className="pointer-events-none absolute -bottom-px -left-px z-20 h-16 w-16 border-b-2 border-l-2 border-primary" />
          <div className="pointer-events-none absolute -bottom-px -right-px z-20 h-16 w-16 border-b-2 border-r-2 border-primary" />

          <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 z-10">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <TronReticle size={350} variant="scanning" />
              </div>

              <div className="absolute left-1/2 top-1/2 h-64 w-48 -translate-x-1/2 -translate-y-1/2 border-2 border-primary animate-pulse">
                <div className="absolute -top-4 left-0 bg-background px-2 font-mono text-[10px] text-primary">
                  {scanStatus}
                </div>
                <div className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-primary" />
                <div className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-primary" />

                <div className="absolute left-[30%] top-[25%] h-2 w-2 rounded-full bg-primary animate-pulse" />
                <div className="absolute right-[30%] top-[25%] h-2 w-2 rounded-full bg-primary animate-pulse" />
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary animate-pulse" />
                <div className="absolute bottom-[30%] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary animate-pulse" />
              </div>

              <div
                className="absolute inset-x-0 h-0.5 bg-primary shadow-[0_0_10px_var(--primary)] transition-all duration-100"
                style={{ top: `${scanProgress}%` }}
              />

              <div className="absolute inset-0 animate-scan bg-linear-to-b from-transparent via-primary/30 to-transparent" />

              <div className="absolute left-4 top-4 space-y-1 font-mono text-[10px] text-primary">
                <div>SUBJECT ID: PENDING</div>
                <div>CONFIDENCE: {scanProgress.toFixed(1)}%</div>
                <div>LANDMARKS: 128/128</div>
              </div>

              <div className="absolute right-4 top-4 text-right font-mono text-[10px] text-primary">
                <div>RESOLUTION: 1920x1080</div>
                <div>FPS: 30</div>
                <div>ALGORITHM: NEURAL-v3.7</div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="mb-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                  <span>FACIAL RECOGNITION ANALYSIS</span>
                  <span>{scanProgress.toFixed(0)}%</span>
                </div>
                <div className="h-2 w-full rounded-full border border-primary/30 bg-background/50">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300 shadow-[0_0_10px_var(--primary)]"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              </div>

              {scanStatus === "MATCH FOUND" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="rounded border-2 border-primary bg-background px-8 py-4">
                    <div className="text-center font-display text-2xl font-bold text-primary animate-pulse">
                      ✓ AUTHENTICATION SUCCESSFUL
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
