'use client';

import { useLocale } from './LocaleContext';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer style={{
      backgroundColor: '#161616',
      borderTop: '1px solid #393939',
      padding: '2rem 1rem',
      color: '#8d8d8d',
    }}>
      <div style={{
        maxWidth: '1584px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div>
          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#c6c6c6' }}>
            {t.footer.company}
          </p>
          <p style={{ margin: '0.25rem 0 0', fontSize: '0.75rem' }}>
            {t.footer.address}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#" style={{ fontSize: '0.75rem', color: '#8d8d8d', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c6c6c6')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8d8d8d')}>
            {t.footer.links.privacy}
          </a>
          <a href="#" style={{ fontSize: '0.75rem', color: '#8d8d8d', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#c6c6c6')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8d8d8d')}>
            {t.footer.links.terms}
          </a>
          <p style={{ margin: 0, fontSize: '0.75rem' }}>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
