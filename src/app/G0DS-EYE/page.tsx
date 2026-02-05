"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import {
  PerceptusHeader,
  LoginModal,
  CameraScannerModal,
  TimeSelectionModal,
} from "./components";
import {
  HeroSection,
  FeaturesSection,
  LiveDemoSection,
  CTASection,
  Footer,
} from "./sections";

// Dynamic import for Three.js components (client-side only)
const TronGrid3D = dynamic(
  () => import("@/components/tron-3d").then((mod) => mod.TronGrid3D),
  { ssr: false }
);


export default function PerceptusPage() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isScannerOpen, setIsScannerOpen] = React.useState(false);
  const [isTimeSelectionOpen, setIsTimeSelectionOpen] = React.useState(false);

  const handleAuthSuccess = () => {
    setIsScannerOpen(true);
  };

  const handleTimeInClick = () => {
    setIsTimeSelectionOpen(false);
    setIsScannerOpen(true);
  };

  const handleTimeOutClick = () => {
    setIsTimeSelectionOpen(false);
    setIsScannerOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* 3D Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <TronGrid3D
          className="h-full w-full"
          enableParticles
          enableBeams
          cameraAnimation
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/50 to-background" />
      </div>

      {/* Header */}
      <PerceptusHeader onLoginClick={() => setIsLoginOpen(true)} />

      {/* Modals */}
      <LoginModal
        open={isLoginOpen}
        onOpenChange={setIsLoginOpen}
        onAuthSuccess={handleAuthSuccess}
      />
      <TimeSelectionModal
        open={isTimeSelectionOpen}
        onOpenChange={setIsTimeSelectionOpen}
        onTimeInClick={handleTimeInClick}
        onTimeOutClick={handleTimeOutClick}
      />
      <CameraScannerModal
        open={isScannerOpen}
        onOpenChange={setIsScannerOpen}
      />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection onInitializeScan={() => setIsTimeSelectionOpen(true)} />
        <FeaturesSection />
        <LiveDemoSection />
        <CTASection />
      </main>

      <Footer />

      {/* Animation styles */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}

