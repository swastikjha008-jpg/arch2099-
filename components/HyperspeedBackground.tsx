'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const Hyperspeed = dynamic(() => import('./Hyperspeed'), { ssr: false });

export default function HyperspeedBackground() {
  const effectOptions = useMemo(
    () => ({
      distortion: 'turbulentDistortion',
      length: 400,
      roadWidth: 9,
      islandWidth: 2,
      lanesPerRoad: 3,
      fov: 90,
      fovSpeedUp: 140,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 20,
      lightPairsPerRoadWay: 36,
      colors: {
        roadColor: 0x08090c,
        islandColor: 0x0a0c10,
        background: 0x000000,
        shoulderLines: 0x00f0ff,
        brokenLines: 0x00f0ff,
        leftCars: [0xff2e8c, 0x7b2fff, 0xd856bf],
        rightCars: [0x00f0ff, 0x0e5ea5, 0x324555],
        sticks: 0x00f0ff,
      },
    }),
    []
  );

  return (
    <div className="absolute inset-0 opacity-70">
      <Hyperspeed effectOptions={effectOptions} />
    </div>
  );
}
