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
import { PhoneCall, ArrowRight, Camera, ShieldCheck, Truck, Clock, Download } from 'lucide-react';

type PartnershipForm = {
  restaurantName: string;
  contactNameTitle: string;
  phone: string;
  email: string;
  address: string;
  primaryChallenge: string;
  currentApproach: string;
  menuStyle: string;
  bestTimeToCall: string;
};

export default function DirectAdClient({ headline, subheading }: { headline?: string; subheading?: string }) {
  const [form, setForm] = useState<PartnershipForm>({
    restaurantName: '',
    contactNameTitle: '',
    phone: '',
    email: '',
    address: '',
    primaryChallenge: 'Quality vs. Cost Dilemma',
    currentApproach: 'Premium ingredients hurt margins',
    menuStyle: 'Contemporary American',
    bestTimeToCall: 'Morning (9-11am)'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | undefined>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);
    try {
      const message = [
        'Partnership Assessment Request',
        `Restaurant Name: ${form.restaurantName}`,
        `Your Name & Title: ${form.contactNameTitle}`,
        `Direct Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Restaurant Address: ${form.address}`,
        `Primary Challenge: ${form.primaryChallenge}`,
        `Current Approach: ${form.currentApproach}`,
        `Menu Style: ${form.menuStyle}`,
        `Best Time for Jada to Call: ${form.bestTimeToCall}`
      ].join('\n');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.contactNameTitle || 'Unknown',
          email: form.email,
          phone: form.phone,
          restaurant: form.restaurantName,
          message,
          formType: 'Direct Ad Landing - Partnership Assessment'
        })
      });
      const data = await res.json();
      setSubmitSuccess(res.ok || data.success);
      setSubmitMessage(data.message || 'Thanks—your request was received.');
      if (res.ok || data.success) {
        setForm({
          restaurantName: '',
          contactNameTitle: '',
          phone: '',
          email: '',
          address: '',
          primaryChallenge: 'Quality vs. Cost Dilemma',
          currentApproach: 'Premium ingredients hurt margins',
          menuStyle: 'Contemporary American',
          bestTimeToCall: 'Morning (9-11am)'
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center py-2 text-sm font-semibold"
      >
        Call today—limited partnerships within NYC delivery zones
      </motion.div>

      <BrandHero
        eyebrow="Restaurant Partners"
        title={headline || "Stop Choosing Between Quality Ingredients and Profitable Margins"}
        subtitle={subheading || "Get Instagram-ready presentations that customers photograph AND share—while protecting your food costs through longer-lasting, premium microgreens"}
        variant="dark"
        overlayClassName="bg-black/55"
        primaryCta={{ href: 'tel:13474090464', label: 'CALL JADA NOW: 347-409-0464' }}
        secondaryCta={{ href: '#partnership-form', label: 'REQUEST PARTNERSHIP ASSESSMENT' }}
        tertiaryCta={{ href: '/images/catalog/FuelFoods Catalog 2025 NEW .pdf', label: 'GET RESTAURANT SUCCESS GUIDE', newTab: true }}
      />

      <StatBar />

      <Section title="Every NYC Chef Faces This Impossible Choice">
        <div className="grid md:grid-cols-3 gap-4">
          {[{
            title: 'Quality vs. Profit Margins',
            desc: 'Premium ingredients that destroy food costs or cheap ingredients that disappoint customers and hurt reputation.',
            Icon: ShieldCheck
          }, {
            title: 'Instagram Pressure',
            desc: 'Guests expect photo‑worthy presentations; most microgreens look flat and uninspiring on camera.',
            Icon: Camera
          }, {
            title: 'Waste & Spoilage',
            desc: 'Typical 3–4 day shelf life forces constant reorders and creates expensive waste.',
            Icon: Clock
          }, {
            title: 'Supplier Reliability',
            desc: 'Last‑minute supplier issues cause service disruptions and menu changes.',
            Icon: Truck
          }, {
            title: 'Generic Results',
            desc: 'Cookie‑cutter ingredients make dishes look like everyone else’s.',
            Icon: ArrowRight
          }, {
            title: 'No Local Story',
            desc: 'Missing the genuine community connection diners value today.',
            Icon: ShieldCheck
          }].map(({ title, desc, Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: 0.05 * idx }}
              className="cpg-card"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  <Icon className="text-[color:var(--fuel-green-primary)]" size={20} />
                </div>
                <div>
                  <div className="font-semibold mb-1">{title}</div>
                  <p className="text-sm" style={{ color: 'var(--fuel-text-secondary)' }}>{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="The FuelFoods Premium Value Solution">
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            h: 'Instagram‑Ready Presentations',
            points: [
              'Vibrant colors and textures that photograph beautifully.',
              'Guests naturally share your dishes online.',
              'Free marketing from user‑generated content.',
              'Stand out with visually striking plates.'
            ],
            Icon: Camera
          }, {
            h: '7–10 Day Freshness Window',
            points: [
              '24–48 hour harvest‑to‑delivery maintains peak quality.',
              'Double the shelf life versus typical suppliers.',
              'Reduce waste by extending service life.',
              'Camera‑ready quality from day one to last.'
            ],
            Icon: Clock
          }, {
            h: 'Premium Value Economics',
            points: [
              'Visible presentation upgrades support stronger pricing.',
              'Low garnish cost with outsized perceived value.',
              'Waste reduction improves food‑cost targets.',
              'Value across the entire menu.'
            ],
            Icon: ShieldCheck
          }, {
            h: 'Menu Utilization Versatility',
            points: [
              'From appetizers to desserts and cocktail programs.',
              'Cross‑utilize inventory to maximize value per order.',
              'Seasonal varieties create differentiation.',
              'Consistent sizing supports plating standards.'
            ],
            Icon: ArrowRight
          }].map(({ h, points, Icon }, idx) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.06 * idx }}
              className="cpg-card"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="text-[color:var(--fuel-green-primary)]" size={20} />
                <h3 className="font-semibold">{h}</h3>
              </div>
              <div className="space-y-1 text-sm md:text-base" style={{ color: 'var(--fuel-text-secondary)' }}>
                {points.map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Trusted by NYC's Finest" subtitle="Proudly supplying fresh microgreens and edible flowers to prestigious kitchens in New York City." center>
        <div className="mb-8">
          <LogoCloud />
        </div>
      </Section>

      <Steps
        title="Partnership in 4 Steps"
        steps={[
          { title: '1) Connect', desc: 'Call Jada or submit the assessment form.' },
          { title: '2) Samples', desc: 'Receive chef-sized samples on Mon/Thu routes.' },
          { title: '3) Trial', desc: 'Test in service with 7–10 day freshness window.' },
          { title: '4) Scale', desc: 'Lock delivery schedule and optimize pricing.' },
        ]}
      />

      <Guarantee />

      <Section tight>
        <div className="flex flex-wrap gap-3">
          <a href="tel:13474090464" className="btn-primary inline-flex items-center gap-2"><PhoneCall size={18} /> CALL OWNER—CALL NOW</a>
          <a href="/images/catalog/FuelFoods Catalog 2025 NEW .pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2"><Download size={18} /> GET RESTAURANT SUCCESS GUIDE</a>
        </div>
      </Section>

      <Section id="partnership-form" title="Speak With Jada About Partnership Qualification">
        <p className="mb-6"><strong className="inline-flex items-center gap-2"><PhoneCall size={18} /> DIRECT OWNER LINE: 347-409-0464</strong><br />
        <em>Speak directly with Jada about solving your quality vs. cost dilemma</em></p>

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
            <label className="block text-sm font-medium mb-2">Your Name & Title*</label>
            <input name="contactNameTitle" value={form.contactNameTitle} onChange={onChange} placeholder="Chef Maria Rodriguez, Executive Chef" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Direct Phone*</label>
            <input name="phone" value={form.phone} onChange={onChange} placeholder="347-555-0123" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email*</label>
            <input type="email" name="email" value={form.email} onChange={onChange} placeholder="chef@restaurant.com" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Restaurant Address*</label>
            <input name="address" value={form.address} onChange={onChange} placeholder="Address for NYC delivery zone confirmation" required className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Primary Challenge</label>
            <select name="primaryChallenge" value={form.primaryChallenge} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Quality vs. Cost Dilemma</option>
              <option>Instagram Presentation Needs</option>
              <option>Waste from Short Shelf Life</option>
              <option>Need Local Sourcing Story</option>
              <option>Supplier Reliability Issues</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Current Approach</label>
            <select name="currentApproach" value={form.currentApproach} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Premium ingredients hurt margins</option>
              <option>Cheap ingredients disappoint customers</option>
              <option>Constantly reordering due to spoilage</option>
              <option>Using national suppliers with no story</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Menu Style</label>
            <select name="menuStyle" value={form.menuStyle} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Contemporary American</option>
              <option>Farm-to-Table</option>
              <option>Italian/Mediterranean</option>
              <option>Asian Fusion</option>
              <option>International/Eclectic</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Best Time for Jada to Call</label>
            <select name="bestTimeToCall" value={form.bestTimeToCall} onChange={onChange} className="w-full px-4 py-2 bg-white rounded-lg border border-gray-300">
              <option>Morning (9-11am)</option>
              <option>Afternoon (1-3pm)</option>
              <option>Evening (5-7pm)</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-2 flex flex-wrap gap-3">
            <button type="submit" disabled={submitting} className="btn-primary inline-flex items-center gap-2">{submitting ? 'Submitting...' : 'SPEAK WITH JADA ABOUT PARTNERSHIP'}<ArrowRight size={18} /></button>
            <a href="tel:13474090464" className="btn-secondary inline-flex items-center gap-2"><PhoneCall size={18} /> CALL OWNER DIRECT: 347-409-0464</a>
          </div>
        </form>
      </Section>

      <Footer />
      <StickyCTA href="#partnership-form" label="Request Partnership" />
    </main>
  );
}
