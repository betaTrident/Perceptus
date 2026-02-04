import { TronReticle } from "@/components/tron-ui";

export function FaceDetectionViz() {
  return (
    <div className="relative aspect-square w-full max-w-md overflow-hidden rounded border border-primary/30 bg-background/50 backdrop-blur-sm">
      {/* Corner brackets */}
      <div className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-primary" />
      <div className="absolute -right-px -top-px h-8 w-8 border-r-2 border-t-2 border-primary" />
      <div className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-primary" />
      <div className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-primary" />

      {/* Scanning grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Scanning reticle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <TronReticle size={250} variant="scanning" />
      </div>

      {/* Face detection boxes */}
      <div className="absolute left-[30%] top-[25%] h-32 w-24 border-2 border-primary animate-pulse">
        <div className="absolute -top-3 left-0 bg-background px-2 font-mono text-[8px] text-primary">
          SUBJECT #001
        </div>
        <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary" />
        <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary" />
        <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary" />
        <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 animate-scan bg-linear-to-b from-transparent via-primary/20 to-transparent" />

      {/* Center text */}
      <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] tracking-widest text-primary">
        SCANNING...
      </div>
    </div>
  );
}
