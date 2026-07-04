'use client';

import { motion } from 'framer-motion';
import { philosophyPoints } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

export default function PhilosophySection() {
  return (
    <section className="relative bg-surface py-24 sm:py-32 border-y border-line/60 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-violet/20 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Why it exists"
          title="Built on three non-negotiables"
          align="center"
          description="ARCH//2099 isn't trying to be everything. It's trying to stay out of your way while doing exactly what you tell it to."
        />

        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {philosophyPoints.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center sm:text-left"
            >
              <div className="font-mono text-xs text-magenta tracking-widest mb-3">/{p.title.toLowerCase()}</div>
              <h3 className="font-display font-semibold text-xl text-ink mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
