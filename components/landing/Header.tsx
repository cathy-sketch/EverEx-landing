'use client';

import { useLocale } from './LocaleContext';
import { Locale } from './i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();

  const toggleLocale = () => setLocale(locale === 'ko' ? 'en' : 'ko');

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: '#161616',
      borderBottom: '1px solid #393939',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }}>
      <div style={{
        maxWidth: '1584px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <svg viewBox="0 0 32 32" width="20" height="20" fill="white" aria-hidden="true">
            <path d="M0 24.772h32v1.783H0zm0-4.454h32v1.786H0zm4.456-4.455h23.091v1.786H4.456zm0-4.455h23.091v1.783H4.456zM0 7.454h32v1.783H0zm0-4.457h32v1.786H0z" />
          </svg>
          <span style={{
            color: '#ffffff',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.1px',
          }}>
            {t.header.brand}
          </span>
        </div>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {([
            ['#products', t.header.nav.products],
            ['#awards', t.header.nav.awards],
            ['#demo', t.header.nav.demo],
          ] as [string, string][]).map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{
                color: '#c6c6c6',
                fontSize: '0.875rem',
                textDecoration: 'none',
                padding: '0 0.75rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                transition: 'background-color 70ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#262626')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            aria-label="언어 전환 / Switch language"
            style={{
              marginLeft: '0.5rem',
              backgroundColor: 'transparent',
              border: '1px solid #525252',
              color: '#c6c6c6',
              fontSize: '0.75rem',
              padding: '0.25rem 0.625rem',
              cursor: 'pointer',
              letterSpacing: '0.5px',
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
            {locale === 'ko' ? 'EN' : 'KO'}
          </button>
        </nav>
      </div>
    </header>
  );
}
