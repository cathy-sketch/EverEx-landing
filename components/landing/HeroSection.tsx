'use client';

import { useLocale } from './LocaleContext';

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        padding: '7rem 1.5rem 8rem',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1040px', margin: '0 auto', width: '100%' }}>
        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.375rem',
          backgroundColor: 'rgba(49,130,246,0.15)',
          border: '1px solid rgba(49,130,246,0.3)',
          borderRadius: '100px',
          padding: '0.3rem 0.875rem',
          marginBottom: '2rem',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3182f6' }} />
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#3182f6', letterSpacing: '0.3px' }}>
            AI Digital Healthcare
          </span>
        </div>

        {/* Tagline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-1px',
          marginBottom: '1.5rem',
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
        }}>
          {t.hero.tagline}
        </h1>

        {/* Description */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          fontWeight: 400,
          lineHeight: 1.7,
          color: '#8b95a1',
          maxWidth: '560px',
          marginBottom: '3rem',
          wordBreak: 'keep-all',
        }}>
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
          <a
            href="#demo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '52px',
              padding: '0 2rem',
              backgroundColor: '#3182f6',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '12px',
              transition: 'background-color 150ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1b6ef3')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3182f6')}
          >
            {t.hero.cta}
          </a>
          <a
            href="#products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '52px',
              padding: '0 2rem',
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '12px',
              transition: 'background-color 150ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.14)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '0',
          marginTop: '5rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '3rem',
          flexWrap: 'wrap',
        }}>
          {[
            ['700,000+', '재활 데이터 학습량'],
            ['3,000+', '전문 운동 영상'],
            ['16+', '파트너 병원'],
          ].map(([num, label], i) => (
            <div key={label} style={{
              flex: '1 1 160px',
              paddingRight: '2rem',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              paddingLeft: i > 0 ? '2rem' : '0',
            }}>
              <p style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.5px' }}>{num}</p>
              <p style={{ fontSize: '0.875rem', color: '#6b7684', margin: '0.375rem 0 0', fontWeight: 500 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
