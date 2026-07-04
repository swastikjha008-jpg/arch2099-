'use client';

import FuzzyText from '@/components/FuzzyText';
import Button from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-void flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="grid-overlay" />
      <div className="noise-overlay" />

      <FuzzyText fontSize="clamp(4rem, 18vw, 12rem)" color="#00F0FF" baseIntensity={0.15} hoverIntensity={0.4}>
        404
      </FuzzyText>

      <p className="relative z-10 mt-4 font-mono text-sm text-muted text-center">
        segmentation fault — this route does not exist on this system
      </p>

      <div className="relative z-10 mt-8">
        <Button href="/" variant="secondary" icon={<ArrowLeft className="h-4 w-4" />}>
          Return to system root
        </Button>
      </div>
    </main>
  );
}
