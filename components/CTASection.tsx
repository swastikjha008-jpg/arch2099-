import { ArrowRight, BookOpen, Github } from 'lucide-react';
import Button from './ui/Button';

export default function CTASection() {
  return (
    <section id="install" className="relative bg-void py-24 sm:py-32">
      <div className="grid-overlay opacity-30" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink leading-tight">
          Designed for the next generation <br className="hidden sm:block" /> of machines.
        </h2>
        <p className="mt-6 text-muted text-lg max-w-xl mx-auto">
          One command gets you a running system. No account, no telemetry, no waiting.
        </p>

        <div className="mt-10 mx-auto max-w-md rounded-lg border border-line bg-panel/80 font-mono text-sm text-left px-5 py-4 flex items-center justify-between">
          <span className="text-ink">curl -sL arch2099.sh | sh</span>
          <span className="text-cyan text-xs">copy</span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
            Install now
          </Button>
          <Button variant="secondary" icon={<Github className="h-4 w-4" />} href="https://github.com">
            View on GitHub
          </Button>
          <Button variant="ghost" icon={<BookOpen className="h-4 w-4" />} href="#faq">
            Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}
