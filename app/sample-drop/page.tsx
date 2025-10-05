import type { Metadata } from 'next';
import SampleDropClient from './SampleDropClient';

export const metadata: Metadata = {
  title: 'Free Sample Drop Program | FuelFoods Culinary',
  description: 'Stop choosing between quality ingredients and profit margins. 30+ NYC restaurants solved this with FuelFoods\' free sample program. MWBE-certified, Black-owned supplier.',
  keywords: ['NYC microgreens supplier', 'free samples restaurant', 'MWBE certified supplier', 'Black-owned business NYC'],
};

export default function SampleDropPage() {
  return <SampleDropClient />;
}
