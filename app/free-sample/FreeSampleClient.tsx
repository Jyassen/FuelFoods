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

type SampleForm = {
  restaurantName: string;
  contactName: string;
  businessEmail: string;
  phone: string;
  address: string;
  avgTicket: string;
  cuisine: string;
  weeklyCovers: string;
  deliveryPreference: string;
  interest: string[];
  supplierChallenge: string;
};

export default function FreeSampleClient({ headline, subheading }: { headline?: string; subheading?: string }) {
  const [form, setForm] = useState<SampleForm>({
    restaurantName: '',
    contactName: '',
    businessEmail: '',
    phone: '',
    address: '',
    avgTicket: '$20-30',
    cuisine: 'American',
    weeklyCovers: 'Under 200',
    deliveryPreference: 'Monday Route',
    interest: [],
    supplierChallenge: 'Consistency',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | undefined>();

  const toggleInterest = (val: string) => {
    setForm(prev => {
      const exists = prev.interest.includes(val);
      return { ...prev, interest: exists ? prev.interest.filter(i => i !== val) : [...prev.interest, val] };
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);
    try {
      const message = [
        'Request Professional Sample Kit',
        `Restaurant Name: ${form.restaurantName}`,
        `Contact Name: ${form.contactName}`,
        `Business Email: ${form.businessEmail}`,
        `Phone Number: ${form.phone}`,
        `Restaurant Address: ${form.address}`,
        `Average Ticket Range: ${form.avgTicket}`,
        `Cuisine Focus: ${form.cuisine}`,
        `Weekly Covers: ${form.weeklyCovers}`,
        `Delivery Preference: ${form.deliveryPreference}`,
        `Primary Interest: ${form.interest.join(', ') || 'Not specified'}`,
        `Current Supplier Challenges: ${form.supplierChallenge}`,
      ].join('\n');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.contactName || 'Unknown',
          email: form.businessEmail,
          phone: form.phone,
          restaurant: form.restaurantName,
          message,
          formType: 'Free Sample Drop Request'
        })
      });
      const data = await res.json();
      setSubmitSuccess(res.ok || data.success);
      setSubmitMessage(data.message || 'Thanks—your request was received.');
      if (res.ok || data.success) {
        setForm({
          restaurantName: '',
          contactName: '',
          businessEmail: '',
          phone: '',
          address: '',
          avgTicket: '$20-30',
          cuisine: 'American',
          weeklyCovers: 'Under 200',
          deliveryPreference: 'Monday Route',
          interest: [],
          supplierChallenge: 'Consistency',
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
        eyebrow="Free Sample Program"
        title={headline || 'Stop Choosing Between Quality Ingredients and Profit Margins'}
        subtitle={subheading || "30+ NYC restaurants solved this dilemma with FuelFoods' free sample program—see how 40× nutrient-dense microgreens boost both quality and bottom line"}
        primaryCta={{ href: '#sample-form', label: 'REQUEST PROFESSIONAL SAMPLES' }}
        secondaryCta={{ href: 'tel:13474090464', label: '📞 Call Jada: 347-409-0464' }}
      />

      <StatBar />

      {/* Form */}
      <Section id="sample-form" title="Request Professional Sample Kit">
        {submitMessage && (
          <div className={`mb-6 p-4 rounded-lg border ${submitSuccess ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-500 text-red-800'}`}>
            {submitMessage}
          </div>
        )}
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Restaurant Name*</label>
            <input name="restaurantName" value={form.restaurantName} onChange={onChange} placeholder="Your restaurant name" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contact Name*</label>
            <input name="contactName" value={form.contactName} onChange={onChange} placeholder="Chef/Owner name" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Business Email*</label>
            <input type="email" name="businessEmail" value={form.businessEmail} onChange={onChange} placeholder="chef@restaurant.com" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number*</label>
            <input name="phone" value={form.phone} onChange={onChange} placeholder="347-555-0123" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Restaurant Address*</label>
            <input name="address" value={form.address} onChange={onChange} placeholder="Delivery within NYC" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Average Ticket Range</label>
            <select name="avgTicket" value={form.avgTicket} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>$20-30</option>
              <option>$31-50</option>
              <option>$51-75</option>
              <option>$76+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Cuisine Focus</label>
            <select name="cuisine" value={form.cuisine} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>American</option>
              <option>Italian</option>
              <option>Asian</option>
              <option>Mediterranean</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Weekly Covers</label>
            <select name="weeklyCovers" value={form.weeklyCovers} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Under 200</option>
              <option>200-500</option>
              <option>500-1000</option>
              <option>1000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Delivery Preference</label>
            <select name="deliveryPreference" value={form.deliveryPreference} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Monday Route</option>
              <option>Thursday Route</option>
              <option>Same-Day Rush</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Primary Interest</label>
            <div className="grid md:grid-cols-4 gap-2">
              {['Menu Enhancement', 'Cost Optimization', 'Local Sourcing', 'Nutritional Density'].map(option => (
                <label key={option} className="flex items-center gap-2">
                  <input type="checkbox" checked={form.interest.includes(option)} onChange={() => toggleInterest(option)} /> {option}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Current Supplier Challenges</label>
            <select name="supplierChallenge" value={form.supplierChallenge} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Consistency</option>
              <option>Freshness</option>
              <option>Pricing</option>
              <option>Reliability</option>
              <option>Quality</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-2">
            <button type="submit" disabled={submitting} className="btn-primary">{submitting ? 'Submitting...' : 'REQUEST PROFESSIONAL SAMPLES'}</button>
          </div>
          <p className="md:col-span-2 text-sm text-[color:var(--fuel-text-secondary)] mt-2">Direct communication with Jada Yassen, Co-Owner. Business samples for qualified NYC restaurants only.</p>
        </form>
      </Section>

      <Section title="Trusted by NYC's Finest" center>
        <LogoCloud />
      </Section>

      <Steps
        title="Sample Program Process"
        steps={[
          { title: 'Qualify', desc: 'Confirm NYC delivery zone and schedule.' },
          { title: 'Prepare', desc: 'Harvest fresh chef-size samples (24–48 hours).' },
          { title: 'Deliver', desc: 'Mon/Thu cold-chain delivery to your kitchen.' },
          { title: 'Trial', desc: 'Evaluate 7–10 day shelf life and guest response.' },
        ]}
      />

      <Guarantee />

      <Footer />
      <StickyCTA href="#sample-form" label="Request Free Samples" />
    </main>
  );
}


