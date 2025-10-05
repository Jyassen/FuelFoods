'use client';

import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Seasonal Picks & Pairing Guide — Fall/Winter 2025 | FuelFoods Culinary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        
        /* ========================================
           RESET & BASE STYLES
        ======================================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* FuelFoods Official Brand Colors from Logo */
            --fuel-green-primary: #5DBE62;
            --fuel-green-dark: #3D9142;
            --fuel-green-hover: #4CAF50;
            --fuel-green-light: #E8F5E9;
            --fuel-orange-accent: #FF6B35;
            --fuel-yellow-lightning: #FFC107;
            --fuel-gold-accent: #D4A574;
            --fuel-black: #1A1A1A;
            --fuel-text-primary: #1A1A1A;
            --fuel-text-secondary: #666666;
            --fuel-bg-warm: #F5F1E8;
            --fuel-bg-cream: #FAF8F3;
            --fuel-gray-light: #E5E5E5;
            --fuel-white: #FFFFFF;

            /* Typography Scale */
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            --font-heading: 'Montserrat', sans-serif;

            /* Spacing Scale */
            --space-xs: 8px;
            --space-sm: 16px;
            --space-md: 24px;
            --space-lg: 32px;
            --space-xl: 48px;
            --space-2xl: 64px;

            /* Border Radius */
            --radius-sm: 4px;
            --radius-md: 8px;
            --radius-lg: 12px;

            /* Elevated Shadows for White Tiles */
            --shadow-elevated: 0 8px 32px rgba(0, 0, 0, 0.4);
            --shadow-elevated-hover: 0 16px 48px rgba(0, 0, 0, 0.5);
            --shadow-elevated-sm: 0 4px 16px rgba(0, 0, 0, 0.3);
        }

        body {
            font-family: var(--font-sans);
            line-height: 1.7;
            color: var(--fuel-text-primary);
            background: linear-gradient(180deg, #000000 0%, #1A1A1A 20%, #2D3D2A 50%, #3D5C3B 80%, #4A6F47 100%);
            background-attachment: fixed;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .container {
            position: relative;
            z-index: 1;
        }

        /* ========================================
           TYPOGRAPHY
        ======================================== */
        h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
            line-height: 1.2;
            font-weight: 800;
            color: var(--fuel-green-primary);
        }

        h1 {
            font-size: clamp(36px, 5vw, 52px);
            margin-bottom: var(--space-xs);
            letter-spacing: -0.02em;
        }

        h2 {
            font-size: clamp(28px, 4vw, 38px);
            margin: var(--space-2xl) 0 var(--space-lg);
            position: relative;
            padding-bottom: var(--space-sm);
            color: var(--fuel-white);
        }

        h2::after {
            content: '◆';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            color: var(--fuel-yellow-lightning);
            font-size: 16px;
            padding: 0 var(--space-sm);
        }

        section > h2 {
            text-align: center;
        }

        h3 {
            font-size: clamp(22px, 3vw, 28px);
            margin-bottom: var(--space-sm);
            color: var(--fuel-green-primary);
        }

        h4 {
            font-family: var(--font-sans);
            font-size: 18px;
            font-weight: 700;
            color: var(--fuel-green-primary);
            margin-bottom: var(--space-sm);
        }

        p {
            margin-bottom: var(--space-sm);
        }

        strong {
            font-weight: 700;
            color: var(--fuel-green-primary);
        }

        .subtitle {
            font-family: var(--font-heading);
            font-size: clamp(16px, 2vw, 20px);
            color: var(--fuel-gold-accent);
            margin-bottom: var(--space-sm);
            font-weight: 700;
            font-style: italic;
        }

        .season-year {
            font-family: var(--font-sans);
            font-size: 14px;
            color: var(--fuel-text-secondary);
            margin-bottom: var(--space-md);
            font-weight: 400;
        }

        /* ========================================
           LAYOUT & CONTAINER
        ======================================== */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: var(--space-xl) var(--space-md);
        }

        /* ========================================
           HEADER
        ======================================== */
        header {
            text-align: center;
            margin-bottom: var(--space-2xl);
            padding: var(--space-2xl) var(--space-md);
            background: var(--fuel-white);
            border: none;
            border-radius: 16px;
            position: relative;
            box-shadow: var(--shadow-elevated);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logo-container {
            text-align: center;
            margin-bottom: var(--space-md);
        }

        .logo-container img {
            width: 180px;
            height: auto;
            max-width: 100%;
        }

        .meta {
            background: var(--fuel-green-light);
            padding: var(--space-md);
            border-radius: var(--radius-sm);
            border-left: 4px solid var(--fuel-green-primary);
            font-size: 16px;
            line-height: 1.8;
            color: var(--fuel-text-primary);
        }

        .meta strong {
            color: var(--fuel-green-primary);
            font-weight: 700;
        }

        /* ========================================
           CHECKLIST
        ======================================== */
        .checklist {
            background: var(--fuel-white);
            padding: var(--space-lg);
            border-radius: 16px;
            margin: var(--space-lg) 0;
            border: none;
            box-shadow: var(--shadow-elevated);
        }

        .checklist p {
            margin-bottom: var(--space-sm);
            padding-left: 32px;
            position: relative;
            font-size: 16px;
            line-height: 1.6;
        }

        .checklist p:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--fuel-orange-accent);
            font-weight: 700;
            font-size: 20px;
        }

        .time-investment {
            color: var(--fuel-text-secondary);
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: var(--space-sm);
        }

        /* ========================================
           SEASON GRID
        ======================================== */
        .season-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--space-md);
            margin: var(--space-lg) 0;
        }

        .season-card {
            background: var(--fuel-white);
            padding: var(--space-lg);
            border-radius: 16px;
            border: none;
            box-shadow: var(--shadow-elevated);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .season-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-elevated-hover);
        }

        .season-card h4 {
            font-family: var(--font-heading);
            color: var(--fuel-green-primary);
            font-size: 22px;
            margin-bottom: var(--space-sm);
            padding-bottom: var(--space-xs);
            border-bottom: 2px solid var(--fuel-green-light);
        }

        .season-card p {
            color: var(--fuel-text-primary);
            line-height: 1.7;
            margin-bottom: 0;
        }

        /* ========================================
           DIVIDER
        ======================================== */
        .divider {
            text-align: center;
            margin: var(--space-2xl) 0;
            position: relative;
        }

        .divider::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--fuel-green-primary) 20%, var(--fuel-yellow-lightning) 50%, var(--fuel-green-primary) 80%, transparent);
            opacity: 0.6;
        }

        .divider::after {
            content: '❦';
            display: inline-block;
            padding: 0 var(--space-md);
            color: var(--fuel-yellow-lightning);
            font-size: 24px;
            position: relative;
            z-index: 1;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        /* ========================================
           VARIETY CARDS
        ======================================== */
        .variety-cards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-lg);
            margin: var(--space-xl) 0;
        }

        .variety-card {
            background: var(--fuel-white);
            border: none;
            border-radius: 20px;
            padding: var(--space-lg);
            box-shadow: var(--shadow-elevated);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            position: relative;
        }


        .variety-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-elevated-hover);
        }

        .variety-card h3 {
            margin-top: 0;
            font-size: clamp(20px, 2.5vw, 26px);
            padding-bottom: var(--space-sm);
            border-bottom: 2px solid var(--fuel-green-light);
            margin-bottom: var(--space-md);
        }

        /* ========================================
           PRODUCT IMAGES
        ======================================== */
        .image-container {
            width: 100%;
            height: 200px;
            border-radius: 0;
            overflow: visible;
            margin: var(--space-md) auto;
            background: transparent;
            position: relative;
            box-shadow: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .image-container img {
            max-width: 85%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
            object-position: center;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: block;
            margin: 0 auto;
        }

        .variety-card:hover .image-container img {
            transform: scale(1.03);
        }

        .image-placeholder {
            background: transparent;
            padding: var(--space-2xl) var(--space-md);
            text-align: center;
            color: var(--fuel-text-secondary);
            font-style: italic;
            border-radius: 0;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 200px;
        }

        /* ========================================
           VARIETY INFO GRID
        ======================================== */
        .variety-info {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-sm);
            margin-top: var(--space-md);
        }

        .info-item {
            margin-bottom: var(--space-md);
        }

        .info-label {
            font-family: var(--font-sans);
            font-weight: 700;
            color: var(--fuel-green-primary);
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 6px;
            display: block;
        }

        .info-content {
            color: var(--fuel-text-primary);
            font-size: 14px;
            line-height: 1.5;
            font-weight: 400;
        }

        .storage-box .info-label {
            font-size: 12px;
        }

        .storage-box .info-content {
            font-size: 15px;
        }

        /* ========================================
           STORAGE BOX
        ======================================== */
        .storage-box {
            background: var(--fuel-white);
            padding: var(--space-lg) var(--space-xl);
            border-radius: 16px;
            margin: var(--space-lg) 0;
            border: none;
            box-shadow: var(--shadow-elevated);
        }

        .storage-box .info-item {
            margin-bottom: var(--space-sm);
        }

        .storage-box .info-item:last-child {
            margin-bottom: 0;
        }

        /* ========================================
           SUBSTITUTION BOX
        ======================================== */
        .substitution-box {
            background: var(--fuel-white);
            padding: var(--space-lg) var(--space-xl);
            border-radius: 16px;
            margin: var(--space-lg) 0;
            border: none;
            box-shadow: var(--shadow-elevated);
        }

        .substitution-list {
            margin: var(--space-sm) 0 0 0;
        }

        .substitution-list p {
            margin-bottom: var(--space-sm);
            padding-left: 24px;
            position: relative;
            font-size: 15px;
            line-height: 1.6;
        }

        .substitution-list p:last-child {
            margin-bottom: 0;
        }

        .substitution-list p:before {
            content: "→";
            position: absolute;
            left: 0;
            color: var(--fuel-yellow-lightning);
            font-weight: 700;
            font-size: 18px;
        }

        /* ========================================
           EXAMPLES BOX
        ======================================== */
        .examples-box {
            background: var(--fuel-white);
            padding: var(--space-lg) var(--space-xl);
            border-radius: 16px;
            margin: var(--space-lg) 0;
            border: none;
            box-shadow: var(--shadow-elevated);
        }

        .examples-box p {
            margin-bottom: var(--space-sm);
            font-size: 15px;
            line-height: 1.6;
        }

        .examples-box p:last-child {
            margin-bottom: 0;
        }

        /* ========================================
           CTA BOX
        ======================================== */
        .cta-box {
            background: var(--fuel-white);
            border: none;
            border-radius: 20px;
            padding: var(--space-xl);
            margin: var(--space-2xl) 0;
            text-align: center;
            box-shadow: var(--shadow-elevated);
            position: relative;
            overflow: hidden;
        }


        .cta-box h3 {
            color: var(--fuel-green-primary);
            margin-bottom: var(--space-md);
            font-size: clamp(22px, 3vw, 28px);
        }

        .cta-box p {
            margin: var(--space-sm) 0;
            color: var(--fuel-text-primary);
        }

        .cta-contact {
            display: inline-block;
            margin-top: var(--space-md);
            padding: 16px 32px;
            background: var(--fuel-green-primary);
            color: var(--fuel-white);
            text-decoration: none;
            border-radius: 50px;
            font-weight: 700;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            box-shadow: 0 4px 14px rgba(23, 134, 65, 0.25);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cta-contact:hover {
            background: var(--fuel-green-hover);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(23, 134, 65, 0.35);
        }

        /* ========================================
           TABLE OF CONTENTS
        ======================================== */
        .table-of-contents {
            background: var(--fuel-white);
            padding: var(--space-xl);
            border-radius: 20px;
            margin: var(--space-2xl) 0;
            box-shadow: var(--shadow-elevated);
        }

        .table-of-contents h3 {
            text-align: center;
            margin-bottom: var(--space-lg);
            color: var(--fuel-green-primary);
        }

        .toc-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--space-md);
        }

        .toc-link {
            display: block;
            padding: var(--space-md);
            background: var(--fuel-green-light);
            border-radius: 12px;
            text-decoration: none;
            color: var(--fuel-text-primary);
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-align: center;
            border: 2px solid transparent;
        }

        .toc-link:hover {
            background: var(--fuel-green-primary);
            color: var(--fuel-white);
            transform: translateY(-4px);
            box-shadow: var(--shadow-elevated-sm);
        }


        /* ========================================
           ANIMATIONS
        ======================================== */
        @keyframes fadeUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-fade-up {
            animation: fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* ========================================
           RESPONSIVE DESIGN
        ======================================== */
        @media (max-width: 968px) {
            .variety-cards-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .container {
                padding: var(--space-md) var(--space-sm);
            }

            h2 {
                margin: var(--space-xl) 0 var(--space-md);
            }

            .variety-info {
                grid-template-columns: 1fr;
            }

            .season-grid {
                grid-template-columns: 1fr;
            }

            .variety-card {
                padding: var(--space-md);
            }

            .image-container {
                height: 180px;
            }

            .image-container img {
                max-width: 90%;
            }
        }

        @media (max-width: 480px) {
            h1 {
                font-size: 32px;
            }

            .checklist,
            .storage-box,
            .substitution-box,
            .examples-box,
            .cta-box {
                padding: var(--space-md);
            }
        }

        /* ========================================
           PRINT / PDF STYLES
        ======================================== */
        @media print {
            /* Preserve all colors and backgrounds */
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }

            body {
                background: linear-gradient(180deg, #000000 0%, #1A1A1A 20%, #2D3D2A 50%, #3D5C3B 80%, #4A6F47 100%);
                background-attachment: fixed;
            }

            /* Prevent page breaks inside cards */
            .variety-card,
            .season-card,
            .cta-box,
            .storage-box,
            .substitution-box,
            .examples-box,
            .checklist,
            .table-of-contents {
                break-inside: avoid;
                page-break-inside: avoid;
            }

            /* Keep section headings with their content */
            h2, h3 {
                break-after: avoid;
                page-break-after: avoid;
            }

            /* Preserve shadows and styling */
            .variety-card,
            .season-card,
            .storage-box,
            .substitution-box,
            .examples-box,
            .checklist,
            .table-of-contents,
            .cta-box,
            header {
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
            }

            /* Preserve gradients */
            h2::after {
                color: var(--fuel-yellow-lightning) !important;
            }

            .divider::before {
                background: linear-gradient(90deg, transparent, #5DBE62 20%, #FFC107 50%, #5DBE62 80%, transparent) !important;
            }

            .divider::after {
                color: var(--fuel-yellow-lightning) !important;
            }

            /* Keep links functional and styled */
            a {
                color: inherit;
                text-decoration: none;
            }

            .toc-link {
                background: var(--fuel-green-light) !important;
                border: 2px solid transparent;
            }

            .cta-contact {
                background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%) !important;
                color: white !important;
            }

            /* Preserve image quality */
            img {
                max-width: 100%;
                page-break-inside: avoid;
            }

            /* Add page margins */
            @page {
                margin: 0.75in;
                size: letter;
            }

            /* Hide animations delay for PDF */
            .animate-fade-up {
                animation: none !important;
                opacity: 1 !important;
            }

            /* Ensure white cards stay white */
            .variety-card,
            .season-card,
            .storage-box,
            .substitution-box,
            .examples-box,
            .checklist,
            .table-of-contents,
            .cta-box,
            header {
                background: white !important;
            }

            /* Keep text colors */
            h1, h2, h3, h4, h5, h6 {
                color: var(--fuel-green-primary) !important;
            }

            h2 {
                color: white !important;
            }
        }
    
      `}</style>

      <div dangerouslySetInnerHTML={{
        __html: `<div class="container">
        <header class="animate-fade-up">
            <div class="logo-container">
                <img src="/images/brand/Logo.png" alt="FuelFoods Culinary - Microgreens & Flowers" />
            </div>
            <h1>Seasonal Picks & Pairing Guide</h1>
            <p class="subtitle">Microgreens & Edible Flowers</p>
            <p class="season-year">— Fall/Winter 2025 —</p>
            <div class="meta">
                <strong>For:</strong> Executive chefs, sous chefs, beverage directors, and bar managers<br>
                <strong>Focus:</strong> Elevate presentation, increase shareability, and justify premium pricing with reliable garnishes
            </div>
        </header>

        <!-- Table of Contents -->
        <nav class="table-of-contents animate-fade-up">
            <h3>Quick Navigation</h3>
            <div class="toc-grid">
                <a href="#quick-checklist" class="toc-link">Quick Checklist</a>
                <a href="#fall-varieties" class="toc-link">Fall Varieties</a>
                <a href="#winter-varieties" class="toc-link">Winter Varieties</a>
                <a href="#year-round" class="toc-link">Year-Round</a>
                <a href="#usage-tips" class="toc-link">Usage Tips</a>
                <a href="#next-steps" class="toc-link">Next Steps</a>
            </div>
        </nav>

        <section id="quick-checklist" class="animate-fade-up">
            <h2>Quick Implementation Checklist</h2>
            <p class="time-investment" style="text-align: center; color: rgba(255,255,255,0.8);">Time investment: 2 minutes</p>
            <div class="checklist">
                <p>Add 1–2 high-impact flowers to your feature dessert and signature cocktail</p>
                <p>Anchor microgreens at protein edges; avoid random scatter</p>
                <p>Shoot one before/after plate per week; post with garnish credits</p>
                <p>Stage service cups to reduce waste; garnish last at the pass</p>
            </div>
        </section>

        <div class="divider"></div>

        <h2 id="fall-varieties">Fall Season Varieties</h2>
        <p style="text-align: center; color: rgba(255,255,255,0.8); margin-bottom: var(--space-xl); font-size: 16px;">Peak availability: September through November</p>

        <div class="variety-cards-grid">
        <!-- Red-Vein Sorrel -->
        <div class="variety-card animate-fade-up">
            <h3>Red-Vein Sorrel</h3>
            <div class="image-container">
                <img src="/images/microgreens/red vein sorrel.png"
                     alt="Red-vein sorrel leaves showing distinctive red veining against green"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Lemony acid with bright, clean finish</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">5–7 days when stored cold, dry, and lidded</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Crudo • Shellfish • Rich dairy • Cream soups</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">High contrast veins read instantly at 45-degree angle</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Cluster 3–5 leaves near the hero bite; keep away from steam</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Scallop crudo with blood orange • Trout rillette with crème fraîche • Celery root soup finish</div>
                </div>
            </div>
        </div>

        <!-- Micro Amaranth -->
        <div class="variety-card animate-fade-up">
            <h3>Micro Amaranth</h3>
            <div class="image-container">
                <img src="/images/microgreens/amaranth.png"
                     alt="Micro amaranth showing vibrant magenta-purple color with delicate stems"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Mild earthy with jewel-tone magenta color</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">5–7 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Beet • Goat cheese • Duck • Chocolate</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Saturated color pop elevates browns and yellows</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Use short sprigs (trim if stems are long); bridge color transitions</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Roasted beet with chèvre • Duck breast with cherry • Chocolate torte accent</div>
                </div>
            </div>
        </div>

        <!-- Micro Cilantro -->
        <div class="variety-card animate-fade-up">
            <h3>Micro Cilantro</h3>
            <div class="image-container">
                <img src="/images/microgreens/Cilantro.png"
                     alt="Micro cilantro with bright feathery texture"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Bright, citrusy cilantro without harshness</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">4–6 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Tacos • Ceviche • Fried fish • Broth bowls • Southeast Asian</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Feathery texture; telegraphs "fresh" in street-food shots</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Micro-pinches on last pass; avoid soaking</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Fish tacos • Pho garnish • Ceviche cups</div>
                </div>
            </div>
        </div>

        <!-- Calendula Petals -->
        <div class="variety-card animate-fade-up">
            <h3>Calendula Petals (Marigold)</h3>
            <div class="image-container">
                <img src="/images/microgreens/marigold petals .png"
                     alt="Bright orange calendula petals showing confetti-like appearance"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Citrus-bitter; petal confetti</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">3–5 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Squash • Brown butter • Sage • Orange • Custards</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Confetti color; micro-dosing adds sparkle</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Pinch between fingers; place in arcs, not full coverage</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Delicata with brown butter • Carrot purée • Crème brûlée finish</div>
                </div>
            </div>
        </div>

        <!-- Nasturtium -->
        <div class="variety-card animate-fade-up">
            <h3>Nasturtium (Early Fall)</h3>
            <div class="image-container">
                <img src="/images/microgreens/nasturtium flowers.png"
                     alt="Bold saturated nasturtium blooms with dramatic silhouette"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Peppery; watercress-like heat</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">3–5 days (early fall only)</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Mezcal/tequila cocktails • Ceviche • Grilled veg • Steak</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Bold, saturated petals; dramatic bloom silhouette</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">One focal bloom > many small bits; face the bloom</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Mezcal sour • Steak with chimichurri • Ceviche cups</div>
                </div>
            </div>
        </div>

        <!-- Viola / Pansy -->
        <div class="variety-card animate-fade-up">
            <h3>Viola / Pansy</h3>
            <div class="image-container">
                <img src="/images/microgreens/pansy mix .png"
                     alt="Viola blooms showing iconic face pattern in purple and yellow"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Delicate, clean; soft floral</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">3–5 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Soft cheeses • Honey • Winter fruit • Mousse • Sours/fizz</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Iconic bloom face; floats beautifully on foam</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">One to three blooms; face the camera; avoid condensation</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Burrata with persimmon • Panna cotta • Violet sour</div>
                </div>
            </div>
        </div>
        </div>

        <div class="divider"></div>

        <h2 id="winter-varieties">Winter Season Varieties</h2>
        <p style="text-align: center; color: rgba(255,255,255,0.8); margin-bottom: var(--space-xl); font-size: 16px;">Peak availability: December through March (greenhouse-grown)</p>

        <div class="variety-cards-grid">
        <!-- Micro Mustard -->
        <div class="variety-card animate-fade-up">
            <h3>Micro Mustard</h3>
            <div class="image-container">
                <img src="/images/microgreens/Mustard Green.png"
                     alt="Fine-textured micro mustard greens with delicate leaves"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Warm brassica heat; aromatic</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">5–7 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Braises • Jus-based plates • Root vegetables • Pork</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Fine texture contrasts glossy sauces</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Pinch at protein apex; never bury in jus</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Short rib with pommes purée • Pork belly with apple mostarda • Parsnip purée</div>
                </div>
            </div>
        </div>

        <!-- Micro Chives -->
        <div class="variety-card animate-fade-up">
            <h3>Micro Chives</h3>
            <div class="image-container">
                <img src="/images/microgreens/Chive.png"
                     alt="Delicate micro chive strands showing clean, uniform appearance"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Gentle allium with clean lift</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">5–7 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Potato • Egg • Dairy • Shellfish</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Tidy strands frame negative space</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Sprinkle intentionally in one direction; avoid confetti effect</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Potato-leek soup • Butter-poached lobster • Truffled egg toast</div>
                </div>
            </div>
        </div>

        <!-- Micro Daikon (Radish) -->
        <div class="variety-card animate-fade-up">
            <h3>Micro Daikon (Radish)</h3>
            <div class="image-container">
                <img src="/images/microgreens/Daikon.png"
                     alt="Micro daikon with distinctive pink stems and green leaves"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Peppery snap with pink stems</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">5–7 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Crudo • Fatty fish • Fried items • Katsu/sando</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Pink stem adds energy against whites</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Tuck under edges for dimension; limit to 4–6 sprigs</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Tuna crudo with yuzu • Salmon tartare • Chicken katsu slider</div>
                </div>
            </div>
        </div>

        <!-- Pea Tendrils -->
        <div class="variety-card animate-fade-up">
            <h3>Pea Tendrils / Golden Pea Shoots</h3>
            <div class="image-container">
                <img src="/images/microgreens/pea tendrils.png"
                     alt="Pea tendrils showing characteristic curls and vibrant green color"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Sweet pea, fresh and green</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">5–7 days (tendrils) • 4–6 days (shoots)</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Burrata • Lemon • Ricotta • Shellfish</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Looping curls add height and motion</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Anchor tendrils on protein ridge; keep curls intact</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Ricotta gnudi • Lemony shellfish pastas • Pea-mint salad topper</div>
                </div>
            </div>
        </div>

        <!-- Calendula Petals -->
        <div class="variety-card animate-fade-up">
            <h3>Calendula Petals (Marigold)</h3>
            <div class="image-container">
                <img src="/images/microgreens/marigold petals .png"
                     alt="Bright orange calendula petals showing confetti-like appearance"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Citrus-bitter; petal confetti</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">3–5 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Squash • Brown butter • Sage • Orange • Custards</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Confetti color; micro-dosing adds sparkle</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Pinch between fingers; place in arcs, not full coverage</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Delicata with brown butter • Carrot purée • Crème brûlée finish</div>
                </div>
            </div>
        </div>

        <!-- Viola / Pansy -->
        <div class="variety-card animate-fade-up">
            <h3>Viola / Pansy</h3>
            <div class="image-container">
                <img src="/images/microgreens/pansy mix .png"
                     alt="Viola blooms showing iconic face pattern in purple and yellow"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Delicate, clean; soft floral</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">3–5 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Soft cheeses • Honey • Winter fruit • Mousse • Sours/fizz</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Iconic bloom face; floats beautifully on foam</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">One to three blooms; face the camera; avoid condensation</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Burrata with persimmon • Panna cotta • Violet sour</div>
                </div>
            </div>
        </div>
        </div>

        <div class="divider"></div>

        <h2 id="year-round">Year-Round Varieties</h2>
        <p style="text-align: center; color: rgba(255,255,255,0.8); margin-bottom: var(--space-xl); font-size: 16px;">Available throughout the year (controlled environment)</p>

        <div class="variety-cards-grid">
        <!-- Micro Basil -->
        <div class="variety-card animate-fade-up">
            <h3>Micro Basil</h3>
            <div class="image-container">
                <img src="/images/microgreens/Basil Mix.png"
                     alt="Micro basil showing sweet aromatic leaves"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Sweet, aromatic; classic Italian profile</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">4–5 days (avoid direct cold airflow)</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Tomato • Mozzarella • Pesto • Seafood • Strawberry desserts</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Familiar signal of freshness; brightens reds/whites</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Place near acid elements; avoid heat lamp exposure</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Crudo • Caprese riffs • Strawberry desserts</div>
                </div>
            </div>
        </div>

        <!-- Micro Shiso (Green) -->
        <div class="variety-card animate-fade-up">
            <h3>Micro Shiso (Green)</h3>
            <div class="image-container">
                <img src="/images/microgreens/Shiso Green.png"
                     alt="Micro shiso green with luxe modern appearance"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Anise-mint, subtle citrus</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">5–7 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Sashimi • Crudo • Rice dishes • Pickled elements</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Luxe, modern look; pairs with clean minimalist plating</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Small stacks near protein; avoid crowding</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Hamachi crudo • Sushi sets • Onigiri plates</div>
                </div>
            </div>
        </div>

        <!-- Sunflower Shoots -->
        <div class="variety-card animate-fade-up">
            <h3>Sunflower Shoots</h3>
            <div class="image-container">
                <img src="/images/microgreens/Sunflower.png"
                     alt="Sunflower shoots with volumetric height"
                     loading="lazy">
            </div>
            <div class="variety-info">
                <div class="info-item">
                    <span class="info-label">Flavor Profile</span>
                    <div class="info-content">Nutty crunch; satisfying bite</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Freshness Window</span>
                    <div class="info-content">5–7 days</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Best Pairings</span>
                    <div class="info-content">Grain bowls • Sandwiches • Hearty salads • Brunch plates</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Visual Impact</span>
                    <div class="info-content">Volumetric height; reads as abundance</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Plating Approach</span>
                    <div class="info-content">Handful structure under proteins; trim long stems</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Application Examples</span>
                    <div class="info-content">Grain bowl crunch • Avocado toast topper • Chicken sandwich lift</div>
                </div>
            </div>
        </div>
        </div>

        <div class="divider"></div>

        <!-- Usage Tips Section -->
        <h2 id="usage-tips">Usage Tips</h2>
        <p style="text-align: center; color: rgba(255,255,255,0.8); margin-bottom: var(--space-xl); font-size: 16px;">Professional handling, storage, and implementation guidance</p>

        <!-- Handling & Storage -->
        <section class="animate-fade-up">
            <h3 style="color: var(--fuel-white); text-align: center;">Handling & Storage Reference</h3>
            <div class="storage-box">
                <div class="info-item">
                    <span class="info-label">Receiving</span>
                    <div class="info-content">Inspect turgor, color, aroma; reject water-logged or yellowing packs</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Storage</span>
                    <div class="info-content">1–4°C / 34–39°F • Lids closed • Low free moisture • No direct airflow</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Service</span>
                    <div class="info-content">Stage small, lidded cups • Garnish last • Avoid heat lamps and steam</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Sanitation</span>
                    <div class="info-content">No soak/rinse • Dry brush if needed • Dedicate tweezers • Glove at pass</div>
                </div>
                <div class="info-item">
                    <span class="info-label">Bar</span>
                    <div class="info-content">Keep above ice • Avoid citrus mist • Use dry, chilled pans with parchment</div>
                </div>
            </div>
        </section>

        <!-- Substitution Options -->
        <section class="animate-fade-up">
            <h3 style="color: var(--fuel-white); text-align: center;">Substitution Options</h3>
            <div class="substitution-box">
                <p style="margin-bottom: 12px; font-weight: 600; font-size: 15px;">When items are tight:</p>
                <div class="substitution-list">
                    <p><strong>Nasturtium</strong> (spicy) → micro mustard (heat) or calendula (color)</p>
                    <p><strong>Sorrel</strong> (acid) → micro shiso green (anise-mint nuance)</p>
                    <p><strong>Viola/pansy</strong> (bloom) → dianthus (cool-weather structure for cocktails/desserts)</p>
                </div>
            </div>
        </section>

        <!-- Menu & Social Copy Examples -->
        <section class="animate-fade-up">
            <h3 style="color: var(--fuel-white); text-align: center;">Menu & Social Copy Examples</h3>
            <div class="examples-box">
                <p><strong>Menu:</strong> "Roasted delicata, brown butter, sage, calendula"</p>
                <p><strong>Cocktail:</strong> "Violet Sour — gin, lemon, egg white, viola"</p>
                <p><strong>Social:</strong> "Before/after: sorrel turns cream soup into a hero shot."</p>
            </div>
        </section>

        <!-- Photography & Reels Shot List -->
        <section class="animate-fade-up">
            <h3 style="color: var(--fuel-white); text-align: center;">Photography & Reels Shot List</h3>
            <div class="examples-box">
                <p><strong>Angles:</strong> Top-down hero • 45° for height • Macro of petal texture</p>
                <p><strong>Motion:</strong> Pour, oil expression, garnish placement • 3–5 sec cuts • Wipe rims</p>
                <p><strong>Tips:</strong> Shoot clean before adding garnish • Face blooms toward camera • Use natural light when possible</p>
            </div>
        </section>

        <div class="divider"></div>

        <!-- Next Steps CTA -->
        <section id="next-steps" class="animate-fade-up">
            <h2>Next Steps</h2>
            <div class="cta-box">
                <h3>Request complimentary NYC sample kit</h3>
                <p style="margin: 16px 0;">Qualified accounts</p>
                <p style="margin: 16px 0; font-size: 18px; color: var(--fuel-text-secondary);">or</p>
                <h3>Schedule 10-minute supplier consultation</h3>
                <p style="margin-top: 24px; font-size: 14px; color: var(--fuel-text-secondary);">We'll suggest seasonal SKUs and quantities based on your menu and station setup.</p>
                <a href="https://culinary.fuelfoods.store" class="cta-contact">Contact FuelFoods</a>
            </div>
        </section>

    </div>`
      }} />
    </>
  );
}
