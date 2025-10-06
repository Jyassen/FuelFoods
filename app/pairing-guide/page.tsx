'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PairingGuidePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  // Hide navbar on mount
  useEffect(() => {
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const body = document.body;

    if (nav) nav.style.display = 'none';
    if (main) {
      main.style.paddingTop = '0';
      main.className = '';
    }
    if (body) {
      body.parentElement?.classList.remove('pt-16');
    }

    return () => {
      if (nav) nav.style.display = '';
      if (main) main.style.paddingTop = '';
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: '',
          message: 'Requested Seasonal Pairing Guide - Fall/Winter 2025',
          formType: 'Seasonal Pairing Guide Download',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '' });
        // Reset after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error(data.error || 'Failed to submit');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
      zIndex: 9999,
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #000000 0%, #0a0a0a 30%, #1a3a1a 70%, #2D5016 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>

        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '20px',
            lineHeight: 1.2
          }}>
            Stop Guessing Which Microgreens and Flowers Work With Your Menu
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            color: '#FFD700',
            fontWeight: 600,
            marginBottom: '40px'
          }}>
            The Microgreens and Flowers trending NYC restaurants use for appeal and profit
          </p>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>

          {/* Guide Cover Image */}
          <div style={{
            textAlign: 'center'
          }}>
            <Image
              src="/seasonal-pairing-guide-cover.png"
              alt="Seasonal Pairing Guide Fall Winter 2025"
              width={500}
              height={500}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '12px',
                filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))'
              }}
            />
          </div>

          {/* What's Inside */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800,
              color: '#2D5016',
              marginBottom: '30px'
            }}>
              What&apos;s Inside the E-Guide
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                'Restaurant-Tested Pairing Matrix for 15+ microgreens and edible flowers',
                'Seasonal availability calendar (Mon/Thu delivery schedule)',
                'Storage guidelines for 7-10 day shelf life',
                'Portion control for consistent plating',
                'Menu Integration Strategies: Pricing models that protect margins',
                'Cocktail Program Applications: Edible flower safety and handling protocols'
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#FF6B35', fontSize: '1.5rem', fontWeight: 'bold' }}>✓</span>
                  <span style={{ fontSize: '1rem', lineHeight: 1.6, color: '#333' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problem Agitation & Supporting Text */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '900px',
          margin: '0 auto 40px'
        }}>
          <p style={{
            fontSize: '1.3rem',
            color: '#ffffff',
            fontWeight: 700,
            marginBottom: '20px',
            lineHeight: 1.7,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Ordering microgreens that don&apos;t complement your dishes? Watching expensive ingredients wilt unused? Missing the opportunity to upscale bar and menu items?
          </p>
          <p style={{
            fontSize: '1.1rem',
            color: '#FF6B35',
            lineHeight: 1.8,
            marginBottom: 0,
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            fontWeight: 600
          }}>
            Get the same seasonal pairing strategies that help established NYC restaurants optimize their microgreens purchasing and menu integration. We developed these strategies through real restaurant partnerships and operational feedback.
          </p>
        </div>

        {/* Sample Images Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Transform Your Plating & Cocktails
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {[
              { src: '/images/culinary/leopard-cocktail.png', alt: 'Leopard Leaf Cocktail' },
              { src: '/images/culinary/orchids-lamb.png', alt: 'Orchids Lamb Dish' },
              { src: '/images/culinary/viola-cocktail.png', alt: 'Viola Cocktail' },
              { src: '/images/culinary/micro-tacos.png', alt: 'Microgreen Tacos' }
            ].map((img, index) => (
              <div key={index} style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.4)';
              }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* If You Are A... */}
        <div style={{
          marginBottom: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            color: '#FFD700',
            marginBottom: '30px',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            textAlign: 'center'
          }}>
            If You Are A...
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '700px' }}>
            {[
              { role: 'Executive chef', text: 'looking to elevate presentation' },
              { role: 'Sous chef', text: 'seeking consistent plating techniques' },
              { role: 'Beverage director', text: 'creating Instagram-ready cocktails' },
              { role: 'Bar manager', text: 'maximizing garnish impact' },
              { role: 'Restaurant owner', text: 'justifying premium pricing' }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <span style={{
                  color: '#FFD700',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                  flexShrink: 0
                }}>✓</span>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.6,
                  color: '#ffffff',
                  fontWeight: 700,
                  marginBottom: 0,
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}>
                  <span style={{ color: '#FF6B35', fontWeight: 800 }}>{item.role}</span> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          marginTop: '80px'
        }}>
          <a
            href="/seasonal-pairing-guide"
            style={{
              display: 'inline-block',
              padding: '24px 60px',
              background: '#000000',
              color: '#ffffff',
              fontSize: '1.3rem',
              fontWeight: 700,
              fontFamily: 'Montserrat, sans-serif',
              textDecoration: 'none',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
            }}
          >
            Access the Guide Now
          </a>
        </div>

        {/* Footer Info */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '0.95rem'
        }}>
          <p style={{ marginBottom: '10px' }}>
            <a
              href="https://culinary.fuelfoods.store"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FFD700',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              FuelFoods Microgreens & Edible Flowers
            </a>
            {' '}- NYC MWBE Certified
          </p>
          <p>
            Serving 30+ NYC restaurants with professional-grade microgreens & edible flowers
          </p>
        </div>

      </div>
    </div>
  );
}
