'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { terminalLines } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

export default function TerminalPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (!isInView) return;

    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled || lineIndex >= terminalLines.length) return;
      const line = terminalLines[lineIndex];

      if (line.output) {
        setVisibleLines(v => v + 1);
        lineIndex += 1;
        setTimeout(typeNext, 260);
        return;
      }

      const fullText = line.text;
      if (charIndex <= fullText.length) {
        setTypedText(fullText.slice(0, charIndex));
        charIndex += 1;
        setTimeout(typeNext, 32);
      } else {
        setVisibleLines(v => v + 1);
        lineIndex += 1;
        charIndex = 0;
        setTypedText('');
        setTimeout(typeNext, 400);
      }
    };

    typeNext();
    return () => {
      cancelled = true;
    };
  }, [isInView]);

  const currentLine = terminalLines[Math.min(visibleLines, terminalLines.length - 1)];
  const isTypingCurrent = currentLine && !currentLine.output;

  return (
    <section id="end-users" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <SectionHeading
          eyebrow="Command line"
          title="Every action, one command away"
          description="ARCH//2099 doesn't hide its internals behind a GUI. Query the system, install packages, and inspect processes without leaving the keyboard."
        />

        <div
          ref={ref}
          className="rounded-lg border border-line bg-panel/90 font-mono text-xs sm:text-sm shadow-[0_0_50px_-16px_rgba(0,240,255,0.4)] overflow-hidden"
        >
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-magenta/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet/70" />
            <span className="ml-3 text-muted text-[11px]">arch2099@2099 — zsh</span>
          </div>
          <div className="px-4 py-4 min-h-[220px] space-y-1.5">
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <p key={i} className={line.output ? 'text-muted pl-4' : 'text-ink'}>
                {!line.output && <span className="text-cyan mr-2">{line.prompt}</span>}
                {line.text}
              </p>
            ))}
            {isTypingCurrent && (
              <p className="text-ink">
                <span className="text-cyan mr-2">{currentLine.prompt}</span>
                {typedText}
                <span className="inline-block w-2 h-3.5 bg-cyan align-middle ml-0.5 animate-blink" />
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
