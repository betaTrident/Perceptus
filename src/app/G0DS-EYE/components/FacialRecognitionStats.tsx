"use client";

import * as React from "react";

export function FacialRecognitionStats() {
  const [stats, setStats] = React.useState({
    detected: 0,
    identified: 0,
    tracked: 0,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        detected: Math.floor(Math.random() * 999) + 1,
        identified: Math.floor(Math.random() * 850) + 1,
        tracked: Math.floor(Math.random() * 50) + 1,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: "DETECTED", value: stats.detected },
        { label: "IDENTIFIED", value: stats.identified },
        { label: "TRACKING", value: stats.tracked },
      ].map((stat) => (
        <div
          key={stat.label}
          className="group relative overflow-hidden rounded border border-primary/30 bg-background/50 p-4 backdrop-blur-sm"
        >
          <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary" />
          <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary" />
          <div className="mb-2 font-mono text-[9px] tracking-widest text-muted-foreground">
            {stat.label}
          </div>
          <div className="font-display text-3xl font-bold text-primary glow-text">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}
