'use client';

import { useLocale } from './LocaleContext';

const TARGET_COLORS: Record<string, { bg: string; text: string }> = {
  '의료기관': { bg: '#e8f3ff', text: '#3182f6' },
  'Healthcare Provider': { bg: '#e8f3ff', text: '#3182f6' },
  '기업 복지': { bg: '#e6f9ef', text: '#1a9e5c' },
  'Corporate Wellness': { bg: '#e6f9ef', text: '#1a9e5c' },
  '환자': { bg: '#f0e9ff', text: '#7248d9' },
  'Patient': { bg: '#f0e9ff', text: '#7248d9' },
  '미국 의료기관': { bg: '#e8f0ff', text: '#2050c8' },
  'US Healthcare Provider': { bg: '#e8f0ff', text: '#2050c8' },
};

const PRODUCT_EMOJIS = ['🏥', '🎯', '💊', '🌐', '📊'];

export default function ProductsSection() {
  const { t } = useLocale();

  return (
    <section
      id="products"
      style={{
        backgroundColor: '#f9fafb',
        padding: '6rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        {/* Section header */}
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
            Platform
          </span>
          <h2 style={{
            fontSize: 'clamp(1.875rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#191f28',
            marginBottom: '1rem',
            letterSpacing: '-0.5px',
            wordBreak: 'keep-all',
          }}>
            {t.products.title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7684',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.6,
            wordBreak: 'keep-all',
          }}>
            {t.products.subtitle}
          </p>
        </div>

        {/* Product cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {t.products.items.map((product, i) => {
            const colors = TARGET_COLORS[product.target] ?? { bg: '#f2f4f6', text: '#6b7684' };
            return (
              <div
                key={product.name}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  transition: 'transform 200ms, box-shadow 200ms',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
                }}
              >
                {/* Icon + Badge row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: colors.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.375rem',
                  }}>
                    {PRODUCT_EMOJIS[i]}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: colors.text,
                    backgroundColor: colors.bg,
                    borderRadius: '100px',
                    padding: '0.25rem 0.75rem',
                  }}>
                    {product.target}
                  </span>
                </div>

                {/* Name */}
                <h3 style={{
                  fontSize: '1.1875rem',
                  fontWeight: 700,
                  color: '#191f28',
                  margin: 0,
                  letterSpacing: '-0.3px',
                }}>
                  {product.name}
                </h3>

                {/* Summary */}
                <p style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: '#333d4b',
                  margin: 0,
                }}>
                  {product.summary}
                </p>

                {/* Description */}
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#6b7684',
                  lineHeight: 1.65,
                  margin: 0,
                  flexGrow: 1,
                  wordBreak: 'keep-all',
                }}>
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
