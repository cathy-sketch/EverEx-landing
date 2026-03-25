'use client';

import { useLocale } from './LocaleContext';

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#161616',
        color: '#ffffff',
        padding: '5rem 1rem 6rem',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1584px', margin: '0 auto', width: '100%' }}>
        {/* Eyebrow */}
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.32px',
          color: '#0f62fe',
          marginBottom: '1rem',
          textTransform: 'uppercase',
        }}>
          AI Digital Healthcare
        </p>

        {/* Tagline */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.75rem)',
          fontWeight: 300,
          lineHeight: 1.2,
          letterSpacing: '-0.5px',
          marginBottom: '1.5rem',
          whiteSpace: 'pre-line',
          maxWidth: '800px',
        }}>
          {t.hero.tagline}
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '1.125rem',
          fontWeight: 300,
          lineHeight: 1.6,
          color: '#c6c6c6',
          maxWidth: '600px',
          marginBottom: '2.5rem',
        }}>
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="#demo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '3rem',
              padding: '0 2rem',
              backgroundColor: '#0f62fe',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 400,
              textDecoration: 'none',
              letterSpacing: '0.16px',
              transition: 'background-color 70ms cubic-bezier(0,0,.38,.9)',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0353e9')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f62fe')}
          >
            {t.hero.cta}
          </a>
          <a
            href="#products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '3rem',
              padding: '0 2rem',
              backgroundColor: 'transparent',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 400,
              textDecoration: 'none',
              letterSpacing: '0.16px',
              border: '1px solid #525252',
              transition: 'background-color 70ms, border-color 70ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#262626';
              e.currentTarget.style.borderColor = '#c6c6c6';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#525252';
            }}
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          marginTop: '4rem',
          flexWrap: 'wrap',
        }}>
          {[
            ['700,000+', '재활 데이터 학습량'],
            ['3,000+', '전문 운동 영상'],
            ['16+', '파트너 병원'],
          ].map(([num, label]) => (
            <div key={label}>
              <p style={{ fontSize: '2rem', fontWeight: 300, color: '#0f62fe', margin: 0 }}>{num}</p>
              <p style={{ fontSize: '0.75rem', color: '#8d8d8d', margin: '0.25rem 0 0', letterSpacing: '0.32px' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
