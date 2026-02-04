import {
  TronReticle,
  TronGridMap,
  TronGridScanOverlay,
  TronUplinkHeader,
  TronDerezCountdown,
  TronDossierCard,
  TronRadar,
} from "@/components/tron-ui";
import { FacialRecognitionStats } from "../components/FacialRecognitionStats";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <TronGridMap />
      <TronGridScanOverlay />

      <TronUplinkHeader
        leftText="SYSTEM: PERCEPTUS - FACIAL RECOGNITION SYSTEM"
        rightText="ACCURACY: 99.7% • RESPONSE: <20ms • STATUS: OPERATIONAL"
      />

      {/* HUD corner frames */}
      <div className="pointer-events-none absolute left-4 right-4 top-10 bottom-4 z-20 hidden lg:block">
        <div className="absolute left-0 top-0 h-24 w-24 border-l-2 border-t-2 border-primary/50" />
        <div className="absolute right-0 top-0 h-24 w-24 border-r-2 border-t-2 border-primary/50" />
        <div className="absolute bottom-0 left-0 h-24 w-24 border-b-2 border-l-2 border-primary/50" />
        <div className="absolute bottom-0 right-0 h-24 w-24 border-b-2 border-r-2 border-primary/50" />
      </div>

      {/* Main hero content */}
      <div className="container relative mx-auto px-4 py-12 md:py-20">
        <div className="relative mx-auto max-w-4xl">
          {/* Outer scanning frame */}
          <div className="absolute -inset-4 md:-inset-8">
            <div className="absolute inset-0 border border-primary/20" />
            <div className="absolute -left-1 -top-1 h-10 w-10 border-l-2 border-t-2 border-primary" />
            <div className="absolute -right-1 -top-1 h-10 w-10 border-r-2 border-t-2 border-primary" />
            <div className="absolute -bottom-1 -left-1 h-10 w-10 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 h-10 w-10 border-b-2 border-r-2 border-primary" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4 font-mono text-[10px] tracking-[0.5em] text-primary">
              [ G0DS EYE PROTOCOL ]
            </div>
          </div>

          {/* Scanning reticle */}
          <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-20">
            <TronReticle size={500} variant="scanning" />
          </div>

          {/* Title content */}
          <div className="relative z-10 flex min-h-[300px] items-center justify-center py-8 md:min-h-[400px] md:py-12">
            <div className="text-center">
              <div className="mb-3 font-mono text-[10px] tracking-[0.5em] text-muted-foreground">
                CLASSIFIED RECOGNITION SYSTEM
              </div>
              <h1 className="font-display text-5xl font-black tracking-[0.15em] text-primary sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] [text-shadow:0_0_80px_oklch(from_var(--primary)_l_c_h/0.5),0_0_160px_oklch(from_var(--primary)_l_c_h/0.3)]">
                PERCEPTUS
              </h1>
              <div className="mt-4 font-mono text-sm tracking-[0.4em] text-primary md:text-base">
                ADVANCED FACIAL RECOGNITION SYSTEM
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-muted-foreground">
          Next-generation facial recognition powered by{" "}
          <span className="text-primary">neural pattern analysis</span>.
          Real-time detection, identification, and tracking with unmatched
          precision.
        </p>

        {/* CTA Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <button className="group relative overflow-hidden rounded border-2 border-primary bg-primary/20 px-10 py-4 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_var(--primary)]">
            <span className="relative z-10">INITIALIZE SCAN</span>
            <div className="absolute inset-0 -z-10 translate-y-full bg-primary transition-transform group-hover:translate-y-0" />
          </button>
        </div>

        {/* Live Stats */}
        <div className="mx-auto w-full max-w-2xl">
          <div className="mb-3 text-center font-mono text-[10px] tracking-widest text-muted-foreground">
            [ LIVE RECOGNITION STATS ]
          </div>
          <FacialRecognitionStats />
        </div>

        {/* Side panels - System info (left) */}
        <div className="pointer-events-none absolute left-0 top-1/3 hidden xl:block">
          <TronDossierCard
            category="SYSTEM STATUS"
            name="PERCEPTUS v3.7"
            fields={[
              { label: "ACCURACY", value: "99.7%", highlighted: true },
              { label: "RESPONSE TIME", value: "<20ms" },
              { label: "NEURAL NODES", value: "2,847" },
              { label: "DATABASE", value: "10M+ PROFILES" },
              { label: "STATUS", value: "OPERATIONAL" },
            ]}
            className="w-64"
          />
        </div>

        {/* Side panel - De-resolution timer and radar (right) */}
        <div className="pointer-events-none absolute right-0 top-1/3 hidden flex-col items-end gap-4 xl:flex">
          <TronDerezCountdown time="16:48" milliseconds="50" />
          <div className="rounded border border-primary/30 bg-background/80 p-4 backdrop-blur-md">
            <div className="mb-2 font-mono text-[9px] tracking-widest text-muted-foreground">
              PROXIMITY SCAN
            </div>
            <TronRadar
              size={140}
              targets={[
                { x: 30, y: 35 },
                { x: 70, y: 60 },
                { x: 50, y: 80 },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
        <div className="flex items-center justify-center gap-8 py-3">
          <div className="h-px w-24 bg-linear-to-r from-transparent to-primary/50" />
          <div className="animate-bounce font-mono text-[9px] tracking-widest text-muted-foreground">
            ↓ SCROLL ↓
          </div>
          <div className="h-px w-24 bg-linear-to-l from-transparent to-primary/50" />
        </div>
      </div>
    </section>
  );
}
