'use client';

import { useLocale } from './LocaleContext';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer style={{
      backgroundColor: '#f9fafb',
      borderTop: '1px solid #f2f4f6',
      padding: '3rem 1.5rem',
    }}>
      <div style={{
        maxWidth: '1040px',
        margin: '0 auto',
      }}>
        {/* Top row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '28px',
              height: '28px',
              backgroundColor: '#3182f6',
              borderRadius: '7px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>E</span>
            </div>
            <span style={{ color: '#191f28', fontSize: '0.9375rem', fontWeight: 700 }}>
              {t.footer.company}
            </span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="#" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#6b7684', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#191f28')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b7684')}>
              {t.footer.links.privacy}
            </a>
            <a href="#" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#6b7684', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#191f28')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b7684')}>
              {t.footer.links.terms}
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: '1px solid #e8ecf0',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{ margin: 0, fontSize: '0.8125rem', color: '#8b95a1' }}>
            {t.footer.address}
          </p>
          <p style={{ margin: 0, fontSize: '0.8125rem', color: '#8b95a1' }}>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
