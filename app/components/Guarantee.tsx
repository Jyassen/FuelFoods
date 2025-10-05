interface GuaranteeItem { title: string; desc: string }

export default function Guarantee({ items }: { items?: GuaranteeItem[] }) {
  const guarantees = items ?? [
    { title: 'Freshness', desc: '7–10 day shelf life, or we replace immediately.' },
    { title: 'Instagram-Ready', desc: 'If visuals don’t improve, we adjust varieties at no cost.' },
    { title: 'Owner Access', desc: 'Direct line to Jada for partnership support.' },
  ];
  return (
    <section className="container cpg-section">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Premium Value Promise</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {guarantees.map(g => (
          <div key={g.title} className="cpg-card">
            <div className="text-lg font-bold mb-1" style={{ color: 'var(--fuel-green-primary)' }}>{g.title}</div>
            <div className="text-sm" style={{ color: 'var(--fuel-text-secondary)' }}>{g.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


