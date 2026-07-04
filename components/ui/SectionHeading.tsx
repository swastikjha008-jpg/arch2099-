interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-8 bg-gradient-to-r from-cyan to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-tight">{title}</h2>
      {description && <p className="mt-4 text-muted text-base leading-relaxed">{description}</p>}
    </div>
  );
}
