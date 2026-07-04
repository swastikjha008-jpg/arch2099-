import { Github, Twitter, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="faq" className="relative bg-void border-t border-line/60 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          ARCH<span className="text-cyan">{'//'}</span>2099
        </div>

        <p className="font-mono text-xs text-faint text-center">
          Built for builders. Open source, forever. © 2099.
        </p>

        <div className="flex items-center gap-5 text-muted">
          <a href="https://github.com" aria-label="GitHub" className="hover:text-cyan transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-cyan transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Community" className="hover:text-cyan transition-colors">
            <MessageSquare className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
