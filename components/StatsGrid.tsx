import { stats } from '@/lib/data';
import AnimatedCounter from './ui/AnimatedCounter';
import SectionHeading from './ui/SectionHeading';

export default function StatsGrid() {
  return (
    <section className="relative bg-surface py-24 sm:py-32 border-y border-line/60">
      <div className="grid-overlay opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Live metrics" title="Numbers pulled straight from the kernel" align="left" />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
          {stats.map(stat => (
            <div key={stat.label} className="bg-panel px-6 py-10 flex flex-col items-start gap-2">
              <span className="font-display text-3xl sm:text-4xl font-bold text-cyan text-glow-cyan">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
