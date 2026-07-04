import { ReactNode } from 'react';

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
  accent?: 'cyan' | 'magenta' | 'violet';
}

const accentMap = {
  cyan: 'hover:border-cyan/60 hover:shadow-[0_0_32px_-8px_rgba(0,240,255,0.45)]',
  magenta: 'hover:border-magenta/60 hover:shadow-[0_0_32px_-8px_rgba(255,46,140,0.45)]',
  violet: 'hover:border-violet/60 hover:shadow-[0_0_32px_-8px_rgba(123,47,255,0.45)]',
};

export default function GlowBorder({ children, className = '', accent = 'cyan' }: GlowBorderProps) {
  return (
    <div
      className={`relative rounded-xl border border-line bg-panel/60 backdrop-blur-sm transition-all duration-300 ${accentMap[accent]} ${className}`}
    >
      {children}
    </div>
  );
}
