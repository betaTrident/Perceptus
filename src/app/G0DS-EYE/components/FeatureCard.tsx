import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50">
      {/* Corner decorations */}
      <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
      <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
      <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary/40 transition-colors group-hover:border-primary" />
      <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />

      {/* Hover glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 font-display text-sm font-bold tracking-wider text-foreground">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
