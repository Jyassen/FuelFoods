interface StatItem {
  label: string;
  value: string;
}

interface StatBarProps {
  items?: StatItem[];
}

export default function StatBar({ items }: StatBarProps) {
  const stats = items ?? [
    { label: 'Shelf Life', value: '7–10 Days' },
    { label: 'NYC Partners', value: '30+' },
    { label: 'Delivery Routes', value: 'Mon / Thu' },
    { label: 'Certification', value: 'MWBE' },
  ];

  return (
    <section className="container cpg-section-tight">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-gray-200 bg-white px-4 py-4 text-center shadow-sm">
            <div className="text-lg md:text-xl font-extrabold" style={{ color: 'var(--fuel-green-primary)' }}>{s.value}</div>
            <div className="text-xs md:text-sm" style={{ color: 'var(--fuel-text-secondary)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


