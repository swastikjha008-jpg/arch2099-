'use client';

import { CSSProperties } from 'react';

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  className?: string;
}

export default function GlitchText({
  children,
  speed = 1,
  enableShadows = true,
  className = '',
}: GlitchTextProps) {
  const style = {
    '--gt-after-duration': `${speed * 3}s`,
    '--gt-before-duration': `${speed * 2}s`,
    '--gt-color-a': enableShadows ? '#ff2e8c' : 'transparent',
    '--gt-color-b': enableShadows ? '#00f0ff' : 'transparent',
  } as CSSProperties;

  return (
    <span
      style={style}
      data-text={children}
      className={`glitch-text relative inline-block select-none ${className}`}
    >
      {children}
    </span>
  );
}
