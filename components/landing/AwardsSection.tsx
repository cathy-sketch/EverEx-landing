'use client';

import { useLocale } from './LocaleContext';

const AWARD_COLORS = [
  { bg: '#fffbe6', accent: '#f5a623', icon: '🏆' },
  { bg: '#e8f3ff', accent: '#3182f6', icon: '🎖️' },
  { bg: '#ffe9e9', accent: '#e02f2f', icon: '🥇' },
];

export default function AwardsSection() {
  const { t } = useLocale();

  return (
    <section
      id="awards"
      style={{
        backgroundColor: '#ffffff',
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
            backgroundColor: '#e8f3ff',
            borderRadius: '100px',
            padding: '0.3rem 1rem',
            marginBottom: '1rem',
          }}>
            Recognition
          </span>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#191f28',
            marginBottom: '1rem',
            letterSpacing: '-0.5px',
            wordBreak: 'keep-all',
          }}>
            {t.awards.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7684',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.6,
            wordBreak: 'keep-all',
          }}>
            {t.awards.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {t.awards.items.map((award, i) => {
            const style = AWARD_COLORS[i % AWARD_COLORS.length];
            return (
              <div
                key={award.name}
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  border: '1px solid #f2f4f6',
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  backgroundColor: style.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  {style.icon}
                </div>
                <div>
                  <p style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: style.accent,
                    marginBottom: '0.375rem',
                    letterSpacing: '0.3px',
                  }}>
                    {award.year} · {award.category}
                  </p>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#191f28',
                    margin: 0,
                    letterSpacing: '-0.2px',
                    wordBreak: 'keep-all',
                  }}>
                    {award.name}
                  </h3>
                </div>
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#6b7684',
                  lineHeight: 1.65,
                  margin: 0,
                  wordBreak: 'keep-all',
                }}>
                  {award.description}
                </p>
                <p style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  color: '#8b95a1',
                  margin: 0,
                }}>
                  {award.organization}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
