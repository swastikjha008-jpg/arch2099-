'use client';

import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import GooeyNav from './GooeyNav';
import { navItems } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/60 bg-void/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg text-ink">
          <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_2px_rgba(0,240,255,0.8)]" />
          ARCH<span className="text-cyan">{'//'}</span>2099
        </a>

        <div className="hidden md:flex">
          <GooeyNav items={navItems} initialActiveIndex={0} />
        </div>

        <a
          href="#install"
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-magenta px-5 py-2.5 text-sm font-semibold text-void font-display shadow-[0_0_24px_-4px_rgba(255,46,140,0.8)] hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(255,46,140,1)] transition-all"
        >
          <Download className="h-4 w-4" />
          Get ARCH//2099
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-ink"
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-void px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <a key={item.label} href={item.href} className="text-muted hover:text-cyan text-sm font-medium" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href="#install"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-magenta px-5 py-3 text-sm font-semibold text-void font-display"
            onClick={() => setOpen(false)}
          >
            <Download className="h-4 w-4" />
            Get ARCH//2099
          </a>
        </div>
      )}
    </header>
  );
}
