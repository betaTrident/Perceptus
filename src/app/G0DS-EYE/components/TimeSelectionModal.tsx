"use client";

interface TimeSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onTimeInClick: () => void;
  onTimeOutClick: () => void;
}

export function TimeSelectionModal({
  open,
  onOpenChange,
  onTimeInClick,
  onTimeOutClick,
}: TimeSelectionModalProps) {
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
        <div className="relative overflow-hidden rounded-lg border-2 border-primary bg-background p-8 shadow-2xl">
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
            <div className="mb-8 text-center">
              <div className="mb-2 font-mono text-[10px] tracking-[0.5em] text-muted-foreground">
                ATTENDANCE MODE
              </div>
              <h2 className="font-display text-2xl font-bold tracking-wider text-primary">
                SELECT ACTION
              </h2>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                Choose your attendance status
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              {/* Time In Button */}
              <button
                onClick={onTimeInClick}
                className="group relative w-full overflow-hidden rounded border-2 border-primary bg-primary/20 py-4 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_var(--primary)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  TIME IN
                </span>
                <div className="absolute inset-0 -z-10 translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
              </button>

              {/* Time Out Button */}
              <button
                onClick={onTimeOutClick}
                className="group relative w-full overflow-hidden rounded border-2 border-primary/50 bg-primary/10 py-4 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_var(--primary)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  TIME OUT
                </span>
                <div className="absolute inset-0 -z-10 translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
              </button>
            </div>

            {/* Footer info */}
            <div className="mt-6 border-t border-primary/20 pt-4 text-center">
              <p className="font-mono text-[9px] tracking-widest text-muted-foreground">
                FACIAL RECOGNITION REQUIRED FOR VERIFICATION
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
