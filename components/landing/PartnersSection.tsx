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

function PartnerGroup({ title, partners }: { title: string; partners: { name: string; abbr: string }[] }) {
  return (
    <div>
      <p style={{
        fontSize: '0.75rem',
        letterSpacing: '0.32px',
        textTransform: 'uppercase',
        color: '#525252',
        marginBottom: '1rem',
        borderBottom: '1px solid #e0e0e0',
        paddingBottom: '0.5rem',
      }}>
        {title}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {partners.map(p => (
          <div
            key={p.name}
            title={p.name}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e0e0e0',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '120px',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#161616',
              letterSpacing: '0.5px',
            }}
          >
            {p.abbr}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const { t } = useLocale();

  return (
    <section
      id="partners"
      style={{
        backgroundColor: '#ffffff',
        padding: '5rem 1rem',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '0.75rem',
            letterSpacing: '0.32px',
            color: '#0f62fe',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            Ecosystem
          </p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.625rem)',
            fontWeight: 300,
            color: '#161616',
            marginBottom: '0.75rem',
          }}>
            {t.partners.title}
          </h2>
          <p style={{ fontSize: '1rem', color: '#525252', maxWidth: '560px' }}>
            {t.partners.subtitle}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <PartnerGroup title={t.partners.strategic} partners={PARTNERS.strategic} />
          <PartnerGroup title={t.partners.global} partners={PARTNERS.global} />
          <PartnerGroup title={t.partners.healthcare} partners={PARTNERS.healthcare} />
        </div>
      </div>
    </section>
  );
}
