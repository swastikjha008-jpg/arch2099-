import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  className?: string;
}

export default function Button({ children, href = '#', variant = 'primary', icon, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide font-display transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan active:translate-y-0';

  const variants: Record<string, string> = {
    primary:
      'bg-cyan text-void shadow-[0_0_0_1px_rgba(0,240,255,0.4),0_0_30px_-6px_rgba(0,240,255,0.8)] hover:shadow-[0_0_0_1px_rgba(0,240,255,0.6),0_0_44px_-4px_rgba(0,240,255,1)] hover:-translate-y-0.5',
    secondary:
      'bg-transparent text-ink border border-line hover:border-magenta hover:text-magenta hover:-translate-y-0.5 hover:shadow-[0_0_24px_-8px_rgba(255,46,140,0.7)]',
    ghost: 'bg-transparent text-muted hover:text-ink underline underline-offset-4 decoration-line hover:decoration-cyan',
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {icon}
      {children}
    </a>
  );
}
