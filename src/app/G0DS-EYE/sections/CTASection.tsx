import { TronGridScanOverlay } from "@/components/tron-ui";

export function CTASection() {
  return (
    <section className="relative border-t border-primary/20 py-24">
      <div className="absolute inset-0 bg-linear-to-b from-background to-card/20" />
      <TronGridScanOverlay />

      <div className="container relative mx-auto px-4">
        <div className="relative mx-auto max-w-4xl">
          {/* Outer frame */}
          <div className="absolute -inset-4 md:-inset-8">
            <div className="absolute inset-0 border border-primary/20" />
            <div className="absolute -left-1 -top-1 h-10 w-10 border-l-2 border-t-2 border-primary" />
            <div className="absolute -right-1 -top-1 h-10 w-10 border-r-2 border-t-2 border-primary" />
            <div className="absolute -bottom-1 -left-1 h-10 w-10 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 h-10 w-10 border-b-2 border-r-2 border-primary" />
          </div>

          <div className="relative z-10 py-16 text-center">
            <div className="mb-6 font-mono text-[10px] tracking-[0.5em] text-muted-foreground">
              READY TO DEPLOY
            </div>
            <h2 className="mb-6 font-display text-5xl font-black tracking-wider text-primary md:text-6xl">
              ACTIVATE PERCEPTUS
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Join the next generation of security systems. Deploy PERCEPTUS and
              gain unprecedented visibility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group relative overflow-hidden rounded border-2 border-primary bg-primary/20 px-12 py-5 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_var(--primary)]">
                <span className="relative z-10">REQUEST DEMO</span>
                <div className="absolute inset-0 -z-10 translate-y-full bg-primary transition-transform group-hover:translate-y-0" />
              </button>
              <button className="group relative overflow-hidden rounded border border-primary/30 bg-transparent px-12 py-5 font-mono text-sm font-bold tracking-wider text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_var(--primary)]">
                <span className="relative z-10">CONTACT SALES</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
