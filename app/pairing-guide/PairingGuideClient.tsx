'use client';

import styles from './pairing-guide.module.css';

const varieties = {
  fall: [
    {
      name: 'Red-Vein Sorrel',
      image: 'red vein sorrel.png',
      flavor: 'Lemony acid with bright, clean finish',
      freshness: '5–7 days when stored cold, dry, and lidded',
      pairings: 'Crudo • Shellfish • Rich dairy • Cream soups',
      visual: 'High contrast veins read instantly at 45-degree angle',
      plating: 'Cluster 3–5 leaves near the hero bite; keep away from steam',
      examples: 'Scallop crudo with blood orange • Trout rillette with crème fraîche • Celery root soup finish'
    },
    {
      name: 'Micro Amaranth',
      image: 'amaranth.png',
      flavor: 'Mild earthy with jewel-tone magenta color',
      freshness: '5–7 days',
      pairings: 'Beet • Goat cheese • Duck • Chocolate',
      visual: 'Saturated color pop elevates browns and yellows',
      plating: 'Use short sprigs (trim if stems are long); bridge color transitions',
      examples: 'Roasted beet with chèvre • Duck breast with cherry • Chocolate torte accent'
    },
    {
      name: 'Micro Cilantro',
      image: 'Cilantro.png',
      flavor: 'Bright, citrusy cilantro without harshness',
      freshness: '4–6 days',
      pairings: 'Tacos • Ceviche • Fried fish • Broth bowls • Southeast Asian',
      visual: 'Feathery texture; telegraphs "fresh" in street-food shots',
      plating: 'Micro-pinches on last pass; avoid soaking',
      examples: 'Fish tacos • Pho garnish • Ceviche cups'
    },
    {
      name: 'Calendula Petals (Marigold)',
      image: 'marigold petals .png',
      flavor: 'Citrus-bitter; petal confetti',
      freshness: '3–5 days',
      pairings: 'Squash • Brown butter • Sage • Orange • Custards',
      visual: 'Confetti color; micro-dosing adds sparkle',
      plating: 'Pinch between fingers; place in arcs, not full coverage',
      examples: 'Delicata with brown butter • Carrot purée • Crème brûlée finish'
    },
    {
      name: 'Nasturtium (Early Fall)',
      image: 'nasturtium flowers.png',
      flavor: 'Peppery; watercress-like heat',
      freshness: '3–5 days (early fall only)',
      pairings: 'Mezcal/tequila cocktails • Ceviche • Grilled veg • Steak',
      visual: 'Bold, saturated petals; dramatic bloom silhouette',
      plating: 'One focal bloom > many small bits; face the bloom',
      examples: 'Mezcal sour • Steak with chimichurri • Ceviche cups'
    },
    {
      name: 'Viola / Pansy',
      image: 'pansy mix .png',
      flavor: 'Delicate, clean; soft floral',
      freshness: '3–5 days',
      pairings: 'Soft cheeses • Honey • Winter fruit • Mousse • Sours/fizz',
      visual: 'Iconic bloom face; floats beautifully on foam',
      plating: 'One to three blooms; face the camera; avoid condensation',
      examples: 'Burrata with persimmon • Panna cotta • Violet sour'
    }
  ],
  winter: [
    {
      name: 'Micro Mustard',
      image: 'Mustard Green.png',
      flavor: 'Warm brassica heat; aromatic',
      freshness: '5–7 days',
      pairings: 'Braises • Jus-based plates • Root vegetables • Pork',
      visual: 'Fine texture contrasts glossy sauces',
      plating: 'Pinch at protein apex; never bury in jus',
      examples: 'Short rib with pommes purée • Pork belly with apple mostarda • Parsnip purée'
    },
    {
      name: 'Micro Chives',
      image: 'Chive.png',
      flavor: 'Gentle allium with clean lift',
      freshness: '5–7 days',
      pairings: 'Potato • Egg • Dairy • Shellfish',
      visual: 'Tidy strands frame negative space',
      plating: 'Sprinkle intentionally in one direction; avoid confetti effect',
      examples: 'Potato-leek soup • Butter-poached lobster • Truffled egg toast'
    },
    {
      name: 'Micro Daikon (Radish)',
      image: 'Daikon.png',
      flavor: 'Peppery snap with pink stems',
      freshness: '5–7 days',
      pairings: 'Crudo • Fatty fish • Fried items • Katsu/sando',
      visual: 'Pink stem adds energy against whites',
      plating: 'Tuck under edges for dimension; limit to 4–6 sprigs',
      examples: 'Tuna crudo with yuzu • Salmon tartare • Chicken katsu slider'
    },
    {
      name: 'Pea Tendrils / Golden Pea Shoots',
      image: 'pea tendrils.png',
      flavor: 'Sweet pea, fresh and green',
      freshness: '5–7 days (tendrils) • 4–6 days (shoots)',
      pairings: 'Burrata • Lemon • Ricotta • Shellfish',
      visual: 'Looping curls add height and motion',
      plating: 'Anchor tendrils on protein ridge; keep curls intact',
      examples: 'Ricotta gnudi • Lemony shellfish pastas • Pea-mint salad topper'
    }
  ],
  yearRound: [
    {
      name: 'Micro Basil',
      image: 'Basil Mix.png',
      flavor: 'Sweet, aromatic; classic Italian profile',
      freshness: '4–5 days (avoid direct cold airflow)',
      pairings: 'Tomato • Mozzarella • Pesto • Seafood • Strawberry desserts',
      visual: 'Familiar signal of freshness; brightens reds/whites',
      plating: 'Place near acid elements; avoid heat lamp exposure',
      examples: 'Crudo • Caprese riffs • Strawberry desserts'
    },
    {
      name: 'Micro Shiso (Green)',
      image: 'Shiso Green.png',
      flavor: 'Anise-mint, subtle citrus',
      freshness: '5–7 days',
      pairings: 'Sashimi • Crudo • Rice dishes • Pickled elements',
      visual: 'Luxe, modern look; pairs with clean minimalist plating',
      plating: 'Small stacks near protein; avoid crowding',
      examples: 'Hamachi crudo • Sushi sets • Onigiri plates'
    },
    {
      name: 'Sunflower Shoots',
      image: 'Sunflower.png',
      flavor: 'Nutty crunch; satisfying bite',
      freshness: '5–7 days',
      pairings: 'Grain bowls • Sandwiches • Hearty salads • Brunch plates',
      visual: 'Volumetric height; reads as abundance',
      plating: 'Handful structure under proteins; trim long stems',
      examples: 'Grain bowl crunch • Avocado toast topper • Chicken sandwich lift'
    }
  ]
};

export default function PairingGuideClient() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Montserrat:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <main className={styles.page}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <img src="/images/brand/Logo.png" alt="FuelFoods Culinary" />
          </div>
          <h1>Seasonal Picks & Pairing Guide</h1>
          <p className={styles.subtitle}>Microgreens & Edible Flowers</p>
          <p className={styles.seasonYear}>— Fall/Winter 2025 —</p>
          <div className={styles.meta}>
            <strong>For:</strong> Executive chefs, sous chefs, beverage directors, and bar managers<br />
            <strong>Focus:</strong> Elevate presentation, increase shareability, and justify premium pricing with reliable garnishes
          </div>
        </header>

        <nav className={styles.toc}>
          <h3>Quick Navigation</h3>
          <div className={styles.tocGrid}>
            <a href="#fall-varieties">Fall Varieties</a>
            <a href="#winter-varieties">Winter Varieties</a>
            <a href="#year-round">Year-Round</a>
            <a href="#usage-tips">Usage Tips</a>
            <a href="#next-steps">Next Steps</a>
          </div>
        </nav>

        <section id="fall-varieties" className={styles.section}>
          <h2>Fall Season Varieties</h2>
          <p className={styles.seasonalNote}>Peak availability: September through November</p>
          <div className={styles.varietyGrid}>
            {varieties.fall.map((variety, i) => (
              <VarietyCard key={i} variety={variety} />
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        <section id="winter-varieties" className={styles.section}>
          <h2>Winter Season Varieties</h2>
          <p className={styles.seasonalNote}>Peak availability: December through March (greenhouse-grown)</p>
          <div className={styles.varietyGrid}>
            {varieties.winter.map((variety, i) => (
              <VarietyCard key={i} variety={variety} />
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        <section id="year-round" className={styles.section}>
          <h2>Year-Round Varieties</h2>
          <p className={styles.seasonalNote}>Available throughout the year (controlled environment)</p>
          <div className={styles.varietyGrid}>
            {varieties.yearRound.map((variety, i) => (
              <VarietyCard key={i} variety={variety} />
            ))}
          </div>
        </section>

        <div className={styles.divider} />

        <section id="usage-tips" className={styles.section}>
          <h2>Usage Tips</h2>
          <div className={styles.tipBox}>
            <h3>Handling & Storage Reference</h3>
            <div className={styles.tipContent}>
              <div className={styles.tipItem}>
                <strong>Receiving:</strong> Inspect turgor, color, aroma; reject water-logged or yellowing packs
              </div>
              <div className={styles.tipItem}>
                <strong>Storage:</strong> 1–4°C / 34–39°F • Lids closed • Low free moisture • No direct airflow
              </div>
              <div className={styles.tipItem}>
                <strong>Service:</strong> Stage small, lidded cups • Garnish last • Avoid heat lamps and steam
              </div>
              <div className={styles.tipItem}>
                <strong>Sanitation:</strong> No soak/rinse • Dry brush if needed • Dedicate tweezers • Glove at pass
              </div>
            </div>
          </div>
        </section>

        <section id="next-steps" className={styles.cta}>
          <h2>Next Steps</h2>
          <div className={styles.ctaBox}>
            <h3>Request complimentary NYC sample kit</h3>
            <p>Qualified accounts</p>
            <p style={{ margin: '16px 0', fontSize: '18px', color: '#666' }}>or</p>
            <h3>Schedule 10-minute supplier consultation</h3>
            <p style={{ marginTop: '24px', fontSize: '14px', color: '#666' }}>
              We'll suggest seasonal SKUs and quantities based on your menu and station setup.
            </p>
            <a href="https://culinary.fuelfoods.store" className={styles.ctaButton}>
              Contact FuelFoods
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <strong>FuelFoods Industries LLC</strong> | NYC | MWBE certified | Serving NYC restaurants since 2021
        </footer>
      </main>
    </>
  );
}

function VarietyCard({ variety }: { variety: any }) {
  return (
    <div className={styles.varietyCard}>
      <h3>{variety.name}</h3>
      <div className={styles.imageContainer}>
        <img src={`/images/varieties/${variety.image}`} alt={variety.name} loading="lazy" />
      </div>
      <div className={styles.varietyInfo}>
        <InfoItem label="Flavor Profile" content={variety.flavor} />
        <InfoItem label="Freshness Window" content={variety.freshness} />
        <InfoItem label="Best Pairings" content={variety.pairings} />
        <InfoItem label="Visual Impact" content={variety.visual} />
        <InfoItem label="Plating Approach" content={variety.plating} />
        <InfoItem label="Application Examples" content={variety.examples} />
      </div>
    </div>
  );
}

function InfoItem({ label, content }: { label: string; content: string }) {
  return (
    <div className={styles.infoItem}>
      <span className={styles.infoLabel}>{label}</span>
      <div className={styles.infoContent}>{content}</div>
    </div>
  );
}
