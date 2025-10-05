interface Step {
  title: string;
  desc: string;
}

interface StepsProps {
  title?: string;
  steps: Step[];
}

export default function Steps({ title = 'How It Works', steps }: StepsProps) {
  return (
    <section className="container cpg-section">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((s, idx) => (
          <div key={idx} className="cpg-card">
            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3" style={{ backgroundColor: 'var(--fuel-green-light)', color: 'var(--fuel-green-primary)' }}>{idx + 1}</div>
            <div className="font-semibold mb-1">{s.title}</div>
            <div className="text-sm" style={{ color: 'var(--fuel-text-secondary)' }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


