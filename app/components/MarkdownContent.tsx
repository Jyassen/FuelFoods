import fs from 'fs';
import path from 'path';

interface MarkdownContentProps {
  filePath: string;
  title?: string;
}

export default function MarkdownContent({ filePath, title }: MarkdownContentProps) {
  let content = '';
  try {
    const abs = path.resolve(filePath);
    content = fs.readFileSync(abs, 'utf8');
  } catch (e) {
    content = `Failed to load content from: ${filePath}`;
  }

  return (
    <section className="container cpg-section">
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>}
      <div
        style={{
          whiteSpace: 'pre-wrap',
          lineHeight: 1.7,
          color: 'var(--fuel-text-primary)'
        }}
        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
      >
        {content}
      </div>
    </section>
  );
}


