"use client";

import { useState } from 'react';
import Footer from '../components/Footer';

type GuideForm = {
  firstName: string;
  businessEmail: string;
  establishment: string;
  role: string;
  primaryInterestFood: boolean;
  primaryInterestCocktail: boolean;
  primaryInterestSourcing: boolean;
  primaryInterestCost: boolean;
  currentChallenge: string;
  nycLocation: string;
};

export default function SeasonalPairingGuideClient() {
  const [form, setForm] = useState<GuideForm>({
    firstName: '',
    businessEmail: '',
    establishment: '',
    role: 'Executive Chef',
    primaryInterestFood: false,
    primaryInterestCocktail: false,
    primaryInterestSourcing: false,
    primaryInterestCost: false,
    currentChallenge: 'Consistent Quality',
    nycLocation: 'Manhattan',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | undefined>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const name = target.name as keyof GuideForm as string;
    const isCheckbox = (target as HTMLInputElement).type === 'checkbox';
    const nextValue = isCheckbox ? (target as HTMLInputElement).checked : target.value;
    setForm(prev => ({ ...prev, [name]: nextValue } as any));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);
    try {
      const interests: string[] = [];
      if (form.primaryInterestFood) interests.push('Food Menu Integration');
      if (form.primaryInterestCocktail) interests.push('Cocktail Garnish Program');
      if (form.primaryInterestSourcing) interests.push('Local Sourcing Story');
      if (form.primaryInterestCost) interests.push('Cost Optimization Strategies');

      const message = [
        'Download Professional Pairing Guide',
        `First Name: ${form.firstName}`,
        `Business Email: ${form.businessEmail}`,
        `Restaurant/Bar Name: ${form.establishment}`,
        `Position/Role: ${form.role}`,
        `Primary Interest: ${interests.join(', ') || 'Not specified'}`,
        `Current Challenge: ${form.currentChallenge}`,
        `NYC Location: ${form.nycLocation}`,
      ].join('\n');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.firstName || 'Unknown',
          email: form.businessEmail,
          restaurant: form.establishment,
          message,
          formType: 'Seasonal Pairing Guide Download'
        })
      });
      const data = await res.json();
      setSubmitSuccess(res.ok || data.success);
      setSubmitMessage(data.message || 'Guide will be sent—check your email.');
      if (res.ok || data.success) {
        setForm({
          firstName: '',
          businessEmail: '',
          establishment: '',
          role: 'Executive Chef',
          primaryInterestFood: false,
          primaryInterestCocktail: false,
          primaryInterestSourcing: false,
          primaryInterestCost: false,
          currentChallenge: 'Consistent Quality',
          nycLocation: 'Manhattan',
        });
      }
    } catch (err) {
      setSubmitSuccess(false);
      setSubmitMessage('Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Headline */}
      <section className="container cpg-section">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Stop Guessing Which Microgreens Work With Your Menu</h1>
          <p className="text-lg md:text-xl text-[color:var(--fuel-text-secondary)]">
            Download the professional pairing guide 30+ NYC restaurants use to maximize microgreens impact and minimize food waste
          </p>
          <p className="mt-4 text-[color:var(--fuel-text-secondary)]">
            Ordering microgreens that don't complement your dishes? Watching expensive ingredients wilt unused? Getting inconsistent results that frustrate your kitchen team?
          </p>
          <p className="mt-2 text-[color:var(--fuel-text-secondary)]">
            Get the same seasonal pairing strategies that help established NYC restaurants optimize their microgreens purchasing and menu integration. Created by Jada Yassen based on real restaurant partnerships and operational feedback.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="container cpg-section">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What's Inside the Professional Pairing Guide:</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="cpg-card">
            <h3 className="font-semibold mb-2">✅ Restaurant-Tested Pairing Matrix</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>40+ varieties matched to cuisine styles</li>
              <li>Flavor profiles and complementary ingredients</li>
              <li>Seasonal availability calendar (Mon/Thu delivery schedule)</li>
              <li>Cost-per-serving calculations for menu pricing</li>
            </ul>
          </div>
          <div className="cpg-card">
            <h3 className="font-semibold mb-2">✅ Operational Best Practices</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>Storage guidelines for 7-10 day shelf life</li>
              <li>Portion control for consistent plating</li>
              <li>Waste reduction strategies from 30+ partner restaurants</li>
              <li>Mon/Thu delivery optimization tips</li>
            </ul>
          </div>
          <div className="cpg-card">
            <h3 className="font-semibold mb-2">✅ Menu Integration Strategies</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>Pricing models that protect margins</li>
              <li>Staff training guidelines for consistent execution</li>
              <li>Customer education approaches that justify premium pricing</li>
              <li>Troubleshooting common kitchen challenges</li>
            </ul>
          </div>
          <div className="cpg-card">
            <h3 className="font-semibold mb-2">✅ Cocktail Program Applications</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>Edible flower safety and handling protocols</li>
              <li>Instagram-ready garnish placement techniques</li>
              <li>Pairing suggestions for spirit categories</li>
              <li>Bar team training and storage requirements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof (excerpt) */}
      <section className="container cpg-section">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">From NYC's Established MWBE Microgreens Supplier</h2>
        <p className="text-[color:var(--fuel-text-secondary)] max-w-4xl">
          Jada Yassen, Co-Owner of FuelFoods Industries LLC, developed this guide based on direct feedback from 30+ NYC restaurant partnerships. Certified as NYC MWBE supplier, FuelFoods has refined these pairing strategies through real kitchen implementation and seasonal menu planning.
        </p>
      </section>

      {/* Lead Capture Form */}
      <section className="container cpg-section" id="download-form">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Download Professional Pairing Guide</h2>

        {submitMessage && (
          <div className={`mb-6 p-4 rounded-lg border ${submitSuccess ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-500 text-red-800'}`}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">First Name*</label>
            <input name="firstName" value={form.firstName} onChange={onChange} placeholder="Your first name" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Business Email*</label>
            <input type="email" name="businessEmail" value={form.businessEmail} onChange={onChange} placeholder="chef@restaurant.com" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Restaurant/Bar Name*</label>
            <input name="establishment" value={form.establishment} onChange={onChange} placeholder="Your establishment" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Position/Role*</label>
            <select name="role" value={form.role} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Executive Chef</option>
              <option>Sous Chef</option>
              <option>Owner</option>
              <option>Beverage Director</option>
              <option>Bar Manager</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text sm font-medium mb-2">Primary Interest</label>
            <div className="grid md:grid-cols-4 gap-2">
              <label className="flex items-center gap-2"><input type="checkbox" name="primaryInterestFood" checked={form.primaryInterestFood} onChange={onChange} /> Food Menu Integration</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="primaryInterestCocktail" checked={form.primaryInterestCocktail} onChange={onChange} /> Cocktail Garnish Program</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="primaryInterestSourcing" checked={form.primaryInterestSourcing} onChange={onChange} /> Local Sourcing Story</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="primaryInterestCost" checked={form.primaryInterestCost} onChange={onChange} /> Cost Optimization Strategies</label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Current Challenge</label>
            <select name="currentChallenge" value={form.currentChallenge} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Consistent Quality</option>
              <option>Inventory Management</option>
              <option>Staff Training</option>
              <option>Menu Pricing</option>
              <option>Supplier Reliability</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">NYC Location</label>
            <select name="nycLocation" value={form.nycLocation} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Manhattan</option>
              <option>Brooklyn</option>
              <option>Queens</option>
              <option>Bronx</option>
              <option>Staten Island</option>
              <option>Outside NYC</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-2">
            <button type="submit" disabled={submitting} className="btn-primary">{submitting ? 'Submitting...' : 'SEND ME THE PROFESSIONAL GUIDE'}</button>
          </div>
          <p className="md:col-span-2 text-sm text-[color:var(--fuel-text-secondary)] mt-2">Direct from Jada Yassen, FuelFoods Co-Owner. Includes follow-up resources for NYC restaurants.</p>
        </form>
      </section>

      <Footer />
    </main>
  );
}


