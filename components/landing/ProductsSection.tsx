'use client';

import { useLocale } from './LocaleContext';

const PRODUCT_ICONS = ['◈', '▶', '♡', '✦', '◉'];

const TARGET_COLORS: Record<string, string> = {
  '의료기관': '#0f62fe',
  'Healthcare Provider': '#0f62fe',
  '기업 복지': '#24a148',
  'Corporate Wellness': '#24a148',
  '환자': '#8a3ffc',
  'Patient': '#8a3ffc',
  '미국 의료기관': '#0043ce',
  'US Healthcare Provider': '#0043ce',
};

export default function ProductsSection() {
  const { t } = useLocale();

  return (
    <section
      id="products"
      style={{
        backgroundColor: '#ffffff',
        padding: '5rem 1rem',
      }}
    >
      <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{
            fontSize: '0.75rem',
            letterSpacing: '0.32px',
            color: '#0f62fe',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            Platform
          </p>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.625rem)',
            fontWeight: 300,
            color: '#161616',
            marginBottom: '0.75rem',
          }}>
            {t.products.title}
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#525252',
            maxWidth: '560px',
          }}>
            {t.products.subtitle}
          </p>
        </div>

        {/* Product cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          backgroundColor: '#e0e0e0',
          border: '1px solid #e0e0e0',
        }}>
          {t.products.items.map((product, i) => (
            <div
              key={product.name}
              style={{
                backgroundColor: '#ffffff',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                transition: 'background-color 70ms',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f4f4f4')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
            >
              {/* Icon */}
              <div style={{
                fontSize: '1.5rem',
                color: '#0f62fe',
                marginBottom: '0.25rem',
              }}>
                {PRODUCT_ICONS[i]}
              </div>

              {/* Target badge */}
              <span style={{
                display: 'inline-block',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.32px',
                textTransform: 'uppercase',
                color: TARGET_COLORS[product.target] ?? '#525252',
                backgroundColor: `${TARGET_COLORS[product.target] ?? '#525252'}15`,
                padding: '0.2rem 0.5rem',
                width: 'fit-content',
              }}>
                {product.target}
              </span>

              {/* Name */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 400,
                color: '#161616',
                margin: 0,
              }}>
                {product.name}
              </h3>

              {/* Summary */}
              <p style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#525252',
                margin: 0,
              }}>
                {product.summary}
              </p>

              {/* Description */}
              <p style={{
                fontSize: '0.875rem',
                color: '#525252',
                lineHeight: 1.6,
                margin: 0,
                flexGrow: 1,
              }}>
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
