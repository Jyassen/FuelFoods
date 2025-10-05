'use client';

import { useEffect, useState } from 'react';
import styles from './sample-drop.module.css';

const partners = ['Aliya', 'Atria', 'Charm', 'Continent', 'FishCheeks', 'Native', 'Nemesis', 'Prime39', 'RPB', 'Victory'];

const faqs = [
  {
    q: 'Is this really completely free?',
    a: 'Yes, completely free. FuelFoods covers all costs including harvest, packaging, and delivery. No credit card required, no hidden fees.'
  },
  {
    q: 'How do you qualify restaurants?',
    a: 'We serve NYC restaurants within our delivery zones (all boroughs). Priority given to establishments with $20+ average tickets and genuine interest in quality ingredients.'
  },
  {
    q: 'What\'s your actual delivery schedule?',
    a: 'Standard routes Monday and Thursday. Same-day rush delivery available within certain NYC zones for established partners.'
  },
  {
    q: 'Are you a local NYC business?',
    a: 'Yes, MWBE certified NYC business serving all 5 boroughs. We support local sourcing initiatives and community partnerships.'
  },
  {
    q: 'What if the samples don\'t work for our menu?',
    a: 'No problem at all. Sample program exists specifically to determine fit before any commitment. Many restaurants find specific varieties work better than others.'
  }
];

export default function SampleDropClient() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // TODO: Connect to actual API
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', data);
    e.currentTarget.reset();
    setIsSubmitting(false);
    alert('Thank you! Your sample request has been submitted. We will contact you within 24 hours.');
  };

  return (
    <>
      <script src="https://unpkg.com/lucide@latest" async />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroHeader}>
              <h1>Stop Choosing Between Quality Ingredients<br />and Profit Margins</h1>
              <p className={styles.subtitle}>30+ NYC restaurants solved this dilemma with FuelFoods microgreens and edible flowers!</p>
            </div>

            <div className={styles.heroVideoWrapper}>
              <div className={styles.heroVideoContainer}>
                <video className={styles.heroVideo} autoPlay loop muted playsInline>
                  <source src="/videos/sample-vid-edited.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className={styles.heroBottomGrid}>
              <div className={styles.heroText}>
                <p className={styles.problemAgitation}>
                  Tired of ingredient costs killing your margins? Or settling for mediocre greens that disappoint customers?
                  You're facing the same choice every chef makes daily...until now.
                </p>
                <p className={styles.supportingText}>
                  Request free samples from NYC's Black-owned microgreens supplier and discover why restaurants report higher
                  customer satisfaction AND improved food costs within their first delivery cycle.
                </p>
                <div className={styles.heroInfoRow}>
                  <div className={styles.heroInfoItem}>
                    <i data-lucide="star"></i>
                    <span>Trusted by 30+ NYC Restaurants</span>
                  </div>
                  <div className={styles.heroInfoItem}>
                    <i data-lucide="award"></i>
                    <span>MWBE Certified</span>
                  </div>
                  <div className={styles.heroInfoItem}>
                    <i data-lucide="check-circle"></i>
                    <span>Freshness Guaranteed</span>
                  </div>
                </div>
              </div>

              <div className={styles.heroFormWrapper}>
                <div className={styles.heroFormCompact}>
                  <h3>Request Your Free Samples</h3>
                  <p>Get professional samples delivered within 48 hours</p>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <input type="text" name="restaurant_name" placeholder="Restaurant Name" required />
                      <input type="text" name="contact_name" placeholder="Your Name" required />
                    </div>
                    <div className={styles.formRow}>
                      <input type="email" name="email" placeholder="Email Address" required />
                      <input type="tel" name="phone" placeholder="Phone Number" required />
                    </div>
                    <input type="text" name="address" placeholder="Restaurant Address (NYC)" required />
                    <button type="submit" className={styles.ctaPrimary} disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Request Free Samples'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.partnersSection}>
          <div className={styles.container}>
            <h2 className={styles.partnersHeading}>Join These Satisfied Partners</h2>
            <div className={styles.partnersScrollContainer}>
              <div className={styles.partnersScroll}>
                {[...partners, ...partners].map((partner, i) => (
                  <img
                    key={`${partner}-${i}`}
                    src={`/images/restaurant_partners/${partner}.png`}
                    alt={`${partner} Restaurant`}
                    className={styles.partnerLogo}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Your Free Sample includes:</h2>
            <div className={styles.valueGrid}>
              <div className={styles.valueItem}>
                <h3>Our Most Popular Microgreen Varieties</h3>
                <ul>
                  <li>Chef-selected premium microgreens</li>
                  <li>Menu-ready portions for testing</li>
                  <li>24-48 hour freshness guarantee</li>
                </ul>
              </div>
              <div className={styles.valueItem}>
                <h3>Flower Selections that Sell</h3>
                <ul>
                  <li>Eye-catching floral garnishes</li>
                  <li>Proven customer favorites</li>
                  <li>Seasonal items that upscale</li>
                </ul>
              </div>
              <div className={styles.valueItem}>
                <h3>BONUS: Our Seasonal Picks & Pairing Guide</h3>
                <ul>
                  <li>Professional pairing recommendations</li>
                  <li>Seasonal menu inspiration</li>
                  <li>Chef-tested combinations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Sample Program Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <div
                  className={`${styles.faqQuestion} ${activeFAQ === i ? styles.active : ''}`}
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                >
                  Q: {faq.q}
                </div>
                <div className={`${styles.faqAnswer} ${activeFAQ === i ? styles.active : ''}`}>
                  A: {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.businessInfo}>
              <strong>FuelFoods Industries LLC</strong> | NYC | MWBE certified | Serving NYC restaurants since 2021
            </div>
            <div className={styles.contactLinks}>
              <a href="mailto:info@fuelfoods.store">info@fuelfoods.store</a>
              <span>|</span>
              <a href="https://culinary.fuelfoods.store" target="_blank" rel="noopener noreferrer">
                culinary.fuelfoods.store
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
