'use client';

import { useLocale } from './LocaleContext';

const PARTNERS = {
  strategic: [
    { name: 'Samsung', abbr: 'SAMSUNG' },
    { name: 'LG', abbr: 'LG' },
    { name: 'Novartis', abbr: 'NOVARTIS' },
  ],
  global: [
    { name: 'Premier', abbr: 'PREMIER' },
    { name: 'Vineyard', abbr: 'VINEYARD' },
    { name: 'Xenco Medical', abbr: 'XENCO' },
  ],
  healthcare: [
    { name: 'Korean Industrial Health Association', abbr: 'KIHA' },
    { name: 'Hospital Network', abbr: '16+ Hospitals' },
  ],
};

export default function PartnersSection() {
  const { t } = useLocale();
  const allPartners = [...PARTNERS.strategic, ...PARTNERS.global, ...PARTNERS.healthcare];

  return (
    <section
      id="partners"
      style={{
        backgroundColor: '#191f28',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#3182f6',
            backgroundColor: 'rgba(49,130,246,0.15)',
            borderRadius: '100px',
            padding: '0.3rem 1rem',
            marginBottom: '1rem',
          }}>
            Ecosystem
          </span>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.5px',
            wordBreak: 'keep-all',
          }}>
            {t.partners.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#8b95a1',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.6,
            wordBreak: 'keep-all',
          }}>
            {t.partners.subtitle}
          </p>
        </div>

        {/* Partner logos grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '1rem',
        }}>
          {allPartners.map(p => (
            <div
              key={p.name}
              title={p.name}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '14px',
                padding: '1.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: '#c6cdd4',
                letterSpacing: '0.5px',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'background-color 150ms, color 150ms',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(49,130,246,0.12)';
                (e.currentTarget as HTMLDivElement).style.color = '#3182f6';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLDivElement).style.color = '#c6cdd4';
              }}
            >
              {p.abbr}
            </div>
          ))}
        </div>

        {/* Sub-category labels */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {[
            { label: t.partners.strategic, count: PARTNERS.strategic.length },
            { label: t.partners.global, count: PARTNERS.global.length },
            { label: t.partners.healthcare, count: PARTNERS.healthcare.length },
          ].map(({ label, count }) => (
            <div key={label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: '#6b7684',
              fontWeight: 500,
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'rgba(49,130,246,0.15)',
                color: '#3182f6',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}>{count}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
