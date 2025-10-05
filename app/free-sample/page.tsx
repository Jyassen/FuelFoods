import type { Metadata } from 'next';
import FreeSampleClient from './FreeSampleClient';
import { extractFromMarkdown } from '../lib/loadCopy';

export const metadata: Metadata = {
  title: 'Free Sample Drop | FuelFoods',
  description: 'Request professional sample kit for NYC restaurants.',
};

export default function FreeSamplePage() {
  const copy = extractFromMarkdown('/Users/base/Desktop/marketing-campaigns/FuelFoods Culinary Creative/FuelFoods-Culinary/landing-pages/Free-Sample-Drop-Landing-Page-V2-Authentic.md');
  return <FreeSampleClient headline={copy.headline} subheading={copy.subheading} />;
}


