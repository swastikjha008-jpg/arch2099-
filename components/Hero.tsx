'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import HyperspeedBackground from './HyperspeedBackground';
import GlitchText from './GlitchText';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-void pt-16">
      <div className="absolute inset-0">
        <HyperspeedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-void/60 to-void" />
        <div className="grid-overlay" />
        <div className="noise-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-4 py-1.5 font-mono text-xs text-cyan"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
          v6.0.0 &ldquo;KIRK&rdquo; — rolling release, live now
        </motion.div>

        <h1 className="font-display font-bold leading-[0.95] text-ink">
          <GlitchText speed={1.2} className="text-[clamp(2.75rem,9vw,6.5rem)]">
            ARCH//2099
          </GlitchText>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl text-lg sm:text-xl text-muted"
        >
          Your next-gen Linux desktop is here. Fast by default, open to the core,
          and built for the next generation of machines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="#install" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
            Install ARCH//2099
          </Button>
          <Button href="https://github.com" variant="secondary" icon={<Github className="h-4 w-4" />}>
            View on GitHub
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 w-full max-w-lg rounded-lg border border-line bg-panel/80 backdrop-blur-md text-left font-mono text-xs sm:text-sm shadow-[0_0_40px_-12px_rgba(0,240,255,0.35)]"
        >
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-magenta/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
            <span className="ml-3 text-muted text-[11px]">system-status — foot</span>
          </div>
          <div className="px-4 py-3 space-y-1 text-muted">
            <p><span className="text-cyan">user</span>&nbsp;&nbsp;&nbsp; root@2099</p>
            <p><span className="text-cyan">kernel</span>&nbsp; linux-2099-zen 6.9.4</p>
            <p><span className="text-cyan">uptime</span>&nbsp; 17h 06m</p>
            <p><span className="text-cyan">pkgs</span>&nbsp;&nbsp;&nbsp; 2,373</p>
            <p className="text-ink">
              <span className="text-magenta">➜</span> system ready
              <span className="inline-block w-2 h-4 bg-cyan align-middle ml-1 animate-blink" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
