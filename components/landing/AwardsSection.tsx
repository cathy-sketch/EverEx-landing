'use client';

import { useLocale } from './LocaleContext';

const AWARD_ICONS = ['⬡', '◆', '●'];
const AWARD_COLORS = ['#f1c21b', '#0f62fe', '#da1e28'];

export default function AwardsSection() {
  const { t } = useLocale();

  return (
    <section
      id="awards"
      style={{
        backgroundColor: '#f4f4f4',
        padding: '5rem 1rem',
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
            Recognition
          </p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.625rem)',
            fontWeight: 300,
            color: '#161616',
            marginBottom: '0.75rem',
          }}>
            {t.awards.title}
          </h2>
          <p style={{ fontSize: '1rem', color: '#525252', maxWidth: '560px' }}>
            {t.awards.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
        }}>
          {t.awards.items.map((award, i) => (
            <div
              key={award.name}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e0e0e0',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <div style={{
                fontSize: '2rem',
                color: AWARD_COLORS[i],
                lineHeight: 1,
              }}>
                {AWARD_ICONS[i]}
              </div>
              <div>
                <p style={{
                  fontSize: '0.6875rem',
                  color: '#525252',
                  letterSpacing: '0.32px',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem',
                }}>
                  {award.year} · {award.category}
                </p>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 400,
                  color: '#161616',
                  margin: 0,
                }}>
                  {award.name}
                </h3>
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#525252',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {award.description}
              </p>
              <p style={{
                fontSize: '0.75rem',
                color: '#8d8d8d',
                margin: 0,
              }}>
                {award.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
