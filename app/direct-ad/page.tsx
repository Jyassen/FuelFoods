import type { Metadata } from 'next';
import DirectAdClient from './DirectAdClient';
import { extractFromMarkdown } from '../lib/loadCopy';

export const metadata: Metadata = {
  title: 'Direct Ad Landing | FuelFoods',
  description: 'Landing page for direct ad traffic conversion to calls and menu download.',
};

export default function DirectAdLandingPage() {
  const copy = extractFromMarkdown('/Users/base/Desktop/marketing-campaigns/FuelFoods Culinary Creative/FuelFoods-Culinary/landing-pages/Direct-Ad-Conversion-Landing-Page.md');
  return <DirectAdClient headline={copy.headline} subheading={copy.subheading} />;
}


