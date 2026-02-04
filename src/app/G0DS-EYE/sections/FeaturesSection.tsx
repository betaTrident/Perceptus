import {
  TronGridScanOverlay,
  TronStatusStrip,
} from "@/components/tron-ui";
import { FeatureCard } from "../components/FeatureCard";

const features = [
  {
    title: "REAL-TIME DETECTION",
    description:
      "Advanced computer vision algorithms detect faces in milliseconds across multiple camera feeds simultaneously.",
    icon: (
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
    ),
  },
  {
    title: "NEURAL MATCHING",
    description:
      "Deep learning models analyze 128+ facial landmarks to create unique biometric signatures for instant identification.",
    icon: (
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "MULTI-ANGLE TRACKING",
    description:
      "Track subjects across camera zones with continuous re-identification even through occlusions and pose variations.",
    icon: (
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "THREAT ASSESSMENT",
    description:
      "AI-powered behavioral analysis monitors patterns and generates real-time alerts for suspicious activity.",
    icon: (
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
    ),
  },
  {
    title: "ENCRYPTED DATABASE",
    description:
      "Military-grade encryption protects biometric data with distributed storage across secure nodes.",
    icon: (
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
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "API INTEGRATION",
    description:
      "RESTful API enables seamless integration with existing security infrastructure and third-party systems.",
    icon: (
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
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative border-t border-primary/20 py-24">
      <div className="absolute inset-0 bg-linear-to-b from-background via-card/20 to-background" />
      <TronGridScanOverlay />

      <TronStatusStrip
        variant="default"
        items={[
          { label: "NEURAL ENGINE", value: "ACTIVE", highlighted: true },
          { label: "PROCESSING CORES", value: "16/16", highlighted: true },
          { label: "MEMORY CACHE", value: "87%" },
        ]}
      />

      <div className="container relative mx-auto px-4">
        <div className="relative mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-3 font-mono text-[10px] tracking-[0.5em] text-muted-foreground">
            SYSTEM CAPABILITIES
          </div>
          <h2 className="mb-4 font-display text-4xl font-black tracking-wider text-foreground md:text-5xl">
            ADVANCED RECOGNITION
          </h2>
          <p className="text-muted-foreground">
            Military-grade facial recognition with cutting-edge neural pattern
            analysis and real-time threat assessment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
