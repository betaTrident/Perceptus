import { TronDataField } from "@/components/tron-ui";
import { FaceDetectionViz } from "../components/FaceDetectionViz";

export function LiveDemoSection() {
  return (
    <section className="relative border-t border-primary/20 py-24">
      <div className="absolute inset-0 bg-linear-to-b from-card/20 to-background" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Visualization */}
          <div className="flex justify-center">
            <FaceDetectionViz />
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <div className="mb-3 font-mono text-[10px] tracking-[0.5em] text-muted-foreground">
              LIVE DEMONSTRATION
            </div>
            <h2 className="mb-4 font-display text-4xl font-black tracking-wider text-foreground md:text-5xl">
              SEE IT IN ACTION
            </h2>
            <p className="mb-6 text-muted-foreground">
              PERCEPTUS processes facial data through multiple neural layers,
              extracting distinctive features and comparing them against a
              comprehensive database in real-time.
            </p>

            {/* Technical specs */}
            <div className="space-y-3">
              <TronDataField
                label="DETECTION RATE"
                value="99.7%"
                highlighted
              />
              <TronDataField
                label="FALSE POSITIVE"
                value="0.003%"
                highlighted
              />
              <TronDataField
                label="PROCESSING SPEED"
                value="<20ms"
                highlighted
              />
              <TronDataField label="CONCURRENT FEEDS" value="128" />
            </div>

            <div className="mt-8 rounded border border-primary/30 bg-background/50 p-4 backdrop-blur-sm">
              <div className="mb-2 font-mono text-[9px] tracking-widest text-muted-foreground">
                SECURITY NOTE
              </div>
              <p className="text-xs text-muted-foreground">
                All biometric data is encrypted using AES-256 and stored in
                compliance with international privacy regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
