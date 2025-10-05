import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  tight?: boolean;
  children: ReactNode;
  center?: boolean;
}

export default function Section({ id, title, subtitle, tight, children, center }: SectionProps) {
  return (
    <section id={id} className={tight ? 'container cpg-section-tight' : 'container cpg-section'}>
      {(title || subtitle) && (
        <div className={center ? 'text-center' : ''}>
          {title && <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>}
          {subtitle && <p className="text-[color:var(--fuel-text-secondary)] max-w-3xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}


