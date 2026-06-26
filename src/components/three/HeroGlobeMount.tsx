"use client";

import dynamic from "next/dynamic";

const HeroGlobe = dynamic(() => import("./HeroGlobe"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center">
      <div className="h-40 w-40 animate-pulse-glow rounded-full bg-violet/40 blur-2xl" />
    </div>
  ),
});

export default function HeroGlobeMount() {
  return (
    <div className="h-full w-full">
      <HeroGlobe />
    </div>
  );
}
