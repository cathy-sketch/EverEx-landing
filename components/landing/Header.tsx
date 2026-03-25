'use client';

import { useLocale } from './LocaleContext';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const toggleLocale = () => setLocale(locale === 'ko' ? 'en' : 'ko');

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #f2f4f6',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1.5rem',
    }}>
      <div style={{
        maxWidth: '1040px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#3182f6',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 700 }}>E</span>
          </div>
          <span style={{ color: '#191f28', fontSize: '1rem', fontWeight: 700 }}>
            {t.header.brand}
          </span>
        </a>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {([
            ['#products', t.header.nav.products],
            ['#awards', t.header.nav.awards],
          ] as [string, string][]).map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{
                color: '#6b7684',
                fontSize: '0.9375rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '0.5rem 0.875rem',
                borderRadius: '8px',
                transition: 'background-color 150ms, color 150ms',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#f2f4f6';
                e.currentTarget.style.color = '#191f28';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#6b7684';
              }}
            >
              {label}
            </a>
          ))}

          <button
            onClick={toggleLocale}
            style={{
              marginLeft: '0.25rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#6b7684',
              fontSize: '0.875rem',
              fontWeight: 500,
              padding: '0.5rem 0.75rem',
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'background-color 150ms, color 150ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f2f4f6';
              e.currentTarget.style.color = '#191f28';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#6b7684';
            }}
          >
            {locale === 'ko' ? 'EN' : 'KO'}
          </button>

          <a
            href="#demo"
            style={{
              marginLeft: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              height: '40px',
              padding: '0 1.25rem',
              backgroundColor: '#3182f6',
              color: '#ffffff',
              fontSize: '0.9375rem',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '10px',
              transition: 'background-color 150ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1b6ef3')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3182f6')}
          >
            {t.header.nav.demo}
          </a>
        </nav>
      </div>
    </header>
  );
}
