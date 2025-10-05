import type { Metadata } from 'next';
import PairingGuideClient from './PairingGuideClient';

export const metadata: Metadata = {
  title: 'Seasonal Picks & Pairing Guide — Fall/Winter 2025 | FuelFoods Culinary',
  description: 'Chef-curated microgreens and edible flowers pairing guide for Fall/Winter 2025. Professional plating techniques, freshness windows, and Instagram-ready garnish ideas.',
};

export default function PairingGuidePage() {
  return <PairingGuideClient />;
}
