"use client";

import { useState } from 'react';
import Footer from '../components/Footer';
import BrandHero from '../components/BrandHero';
import Section from '../components/Section';
import LogoCloud from '../components/LogoCloud';
import StatBar from '../components/StatBar';
import Steps from '../components/Steps';
import Guarantee from '../components/Guarantee';
import StickyCTA from '../components/StickyCTA';
import { motion } from 'framer-motion';
import { Download, BookOpen } from 'lucide-react';

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

export default function SeasonalPairingClient({ headline, subheading }: { headline?: string; subheading?: string }) {
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
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm(prev => ({ ...prev, [name]: (type === 'checkbox' ? checked : value) } as any));
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
      <BrandHero
        eyebrow="Professional Resource"
        title={headline || 'Stop Guessing Which Microgreens Work With Your Menu'}
        subtitle={subheading || 'Download the professional pairing guide 30+ NYC restaurants use to maximize microgreens impact and minimize food waste'}
        variant="light"
        overlayClassName="bg-white/80 backdrop-blur"
        primaryCta={{ href: '#download-form', label: 'GET THE PROFESSIONAL GUIDE' }}
      />

      <StatBar />

      <Section title="What's Inside the Professional Pairing Guide:">
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            h: 'Restaurant-Tested Pairing Matrix',
            points: [
              '40+ varieties matched to cuisine styles',
              'Flavor profiles and complementary ingredients',
              'Seasonal availability calendar (Mon/Thu delivery schedule)',
              'Cost-per-serving calculations for menu pricing'
            ]
          }, {
            h: 'Operational Best Practices',
            points: [
              'Storage guidelines for 7-10 day shelf life',
              'Portion control for consistent plating',
              'Waste reduction strategies from 30+ partner restaurants',
              'Mon/Thu delivery optimization tips'
            ]
          }, {
            h: 'Menu Integration Strategies',
            points: [
              'Pricing models that protect margins',
              'Staff training guidelines for consistent execution',
              'Customer education approaches that justify premium pricing',
              'Troubleshooting common kitchen challenges'
            ]
          }, {
            h: 'Cocktail Program Applications',
            points: [
              'Edible flower safety and handling protocols',
              'Instagram-ready garnish placement techniques',
              'Pairing suggestions for spirit categories',
              'Bar team training and storage requirements'
            ]
          }].map(({ h, points }, idx) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.05 * idx }}
              className="cpg-card"
            >
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-[color:var(--fuel-green-primary)]" size={20} />
                <h3 className="font-semibold">{h}</h3>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                {points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>
      <Section id="download-form" title="Download Professional Pairing Guide">
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
            <label className="block text-sm font-medium mb-2">Primary Interest</label>
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
            <button type="submit" disabled={submitting} className="btn-primary inline-flex items-center gap-2">{submitting ? 'Submitting...' : 'SEND ME THE PROFESSIONAL GUIDE'}<Download size={18} /></button>
          </div>
          <p className="md:col-span-2 text-sm text-[color:var(--fuel-text-secondary)] mt-2">Direct from Jada Yassen, FuelFoods Co-Owner. Includes follow-up resources for NYC restaurants.</p>
        </form>
      </Section>

      <Section title="Trusted by NYC's Finest" center>
        <LogoCloud />
      </Section>

      <Steps
        title="Download → Implement"
        steps={[
          { title: 'Download', desc: 'Get the professional pairing guide instantly.' },
          { title: 'Apply', desc: 'Use matrix + storage guidelines to improve results.' },
          { title: 'Optimize', desc: 'Reduce waste, standardize plating, increase shareability.' },
          { title: 'Consult', desc: 'Book a call with Jada for menu-specific recommendations.' },
        ]}
      />

      <Guarantee />

      <Footer />
      <StickyCTA href="#download-form" label="Get the Professional Guide" />
    </main>
  );
}


