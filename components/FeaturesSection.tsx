'use client';

import { features } from '@/lib/data';
import FeatureCard from './FeatureCard';
import SectionHeading from './ui/SectionHeading';

export default function FeaturesSection() {
  return (
    <section id="developers" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="System design"
          title="Lightweight control at every layer"
          description="Every default in ARCH//2099 was chosen for a reason. Nothing is included just because it's expected."
        />

        <div className="mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
