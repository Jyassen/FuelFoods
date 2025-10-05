import fs from 'fs';

export type LandingCopy = {
  headline?: string;
  subheading?: string;
};

export function extractFromMarkdown(filePath: string): LandingCopy {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    // Extract HEADLINE: ... and SUBHEADING: ... anywhere in the doc (typically inside code fences)
    const headlineMatch = raw.match(/HEADLINE:\s*(.+)/i);
    const subheadingMatch = raw.match(/SUBHEADING:\s*(.+)/i);
    return {
      headline: headlineMatch ? headlineMatch[1].trim() : undefined,
      subheading: subheadingMatch ? subheadingMatch[1].trim() : undefined,
    };
  } catch (e) {
    return {};
  }
}


