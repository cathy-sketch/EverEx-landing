'use client';

import { useState } from 'react';
import { useLocale } from './LocaleContext';

interface FormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  organization?: string;
  email?: string;
}

function validate(data: FormData, errors: typeof import('./i18n').translations.ko.demo.errors): FormErrors {
  const errs: FormErrors = {};
  if (!data.name.trim()) errs.name = errors.name;
  if (!data.organization.trim()) errs.organization = errors.organization;
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errs.email = errors.email;
  }
  return errs;
}

const inputBase: React.CSSProperties = {
  height: '52px',
  padding: '0 1rem',
  border: '1.5px solid #e8ecf0',
  borderRadius: '10px',
  backgroundColor: '#f9fafb',
  fontSize: '0.9375rem',
  color: '#191f28',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  transition: 'border-color 150ms, background-color 150ms',
};

const inputError: React.CSSProperties = {
  ...inputBase,
  border: '1.5px solid #e02f2f',
  backgroundColor: '#fff9f9',
};

function Field({ label, required, error, children }: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label style={{
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#333d4b',
        display: 'flex',
        gap: '0.2rem',
        alignItems: 'center',
      }}>
        {label}
        {required && <span style={{ color: '#e02f2f' }}>*</span>}
      </label>
      {children}
      {error && (
        <p style={{ fontSize: '0.8125rem', color: '#e02f2f', margin: 0, fontWeight: 500 }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function DemoFormSection() {
  const { t } = useLocale();
  const f = t.demo.form;

  const [data, setData] = useState<FormData>({ name: '', organization: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data, t.demo.errors);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('submitting');
    const res = await fetch('/api/demo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus('success');
    } else {
      const json = await res.json();
      alert(json.error ?? '제출 중 오류가 발생했습니다.');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <section id="demo" style={{ backgroundColor: '#f9fafb', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: '#e6f9ef',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '2rem',
          }}>
            ✓
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#191f28', marginBottom: '0.75rem', letterSpacing: '-0.3px' }}>
            {t.demo.success.title}
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7684', lineHeight: 1.6, wordBreak: 'keep-all' }}>
            {t.demo.success.message}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="demo" style={{ backgroundColor: '#f9fafb', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,520px)',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#3182f6',
              backgroundColor: '#e8f3ff',
              borderRadius: '100px',
              padding: '0.3rem 1rem',
              marginBottom: '1.25rem',
            }}>
              Contact
            </span>
            <h2 style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: '#191f28',
              marginBottom: '1rem',
              letterSpacing: '-0.5px',
              wordBreak: 'keep-all',
              lineHeight: 1.25,
            }}>
              {t.demo.title}
            </h2>
            <p style={{
              fontSize: '1.0625rem',
              color: '#6b7684',
              lineHeight: 1.7,
              maxWidth: '380px',
              wordBreak: 'keep-all',
            }}>
              {t.demo.subtitle}
            </p>

            {/* Trust badges */}
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { icon: '🔒', text: '개인정보는 안전하게 보호됩니다' },
                { icon: '⚡', text: '영업일 기준 1일 내 답변 드립니다' },
                { icon: '🤝', text: '전문 컨설턴트가 직접 연락드립니다' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.125rem' }}>{icon}</span>
                  <span style={{ fontSize: '0.9375rem', color: '#6b7684', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Field label={f.name} required error={errors.name}>
                <input type="text" value={data.name} onChange={set('name')} placeholder={f.namePlaceholder}
                  style={errors.name ? inputError : inputBase}
                  onFocus={e => { if (!errors.name) e.currentTarget.style.borderColor = '#3182f6'; e.currentTarget.style.backgroundColor = '#fff'; }}
                  onBlur={e => { if (!errors.name) e.currentTarget.style.borderColor = '#e8ecf0'; e.currentTarget.style.backgroundColor = '#f9fafb'; }}
                />
              </Field>
              <Field label={f.organization} required error={errors.organization}>
                <input type="text" value={data.organization} onChange={set('organization')} placeholder={f.organizationPlaceholder}
                  style={errors.organization ? inputError : inputBase}
                  onFocus={e => { if (!errors.organization) e.currentTarget.style.borderColor = '#3182f6'; e.currentTarget.style.backgroundColor = '#fff'; }}
                  onBlur={e => { if (!errors.organization) e.currentTarget.style.borderColor = '#e8ecf0'; e.currentTarget.style.backgroundColor = '#f9fafb'; }}
                />
              </Field>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Field label={f.email} required error={errors.email}>
                <input type="email" value={data.email} onChange={set('email')} placeholder={f.emailPlaceholder}
                  style={errors.email ? inputError : inputBase}
                  onFocus={e => { if (!errors.email) e.currentTarget.style.borderColor = '#3182f6'; e.currentTarget.style.backgroundColor = '#fff'; }}
                  onBlur={e => { if (!errors.email) e.currentTarget.style.borderColor = '#e8ecf0'; e.currentTarget.style.backgroundColor = '#f9fafb'; }}
                />
              </Field>
              <Field label={f.phone}>
                <input type="tel" value={data.phone} onChange={set('phone')} placeholder={f.phonePlaceholder}
                  style={inputBase}
                  onFocus={e => { e.currentTarget.style.borderColor = '#3182f6'; e.currentTarget.style.backgroundColor = '#fff'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = '#e8ecf0'; e.currentTarget.style.backgroundColor = '#f9fafb'; }}
                />
              </Field>
            </div>

            <Field label={f.message}>
              <textarea
                value={data.message}
                onChange={set('message')}
                placeholder={f.messagePlaceholder}
                rows={4}
                style={{
                  ...inputBase,
                  height: 'auto',
                  padding: '0.875rem 1rem',
                  resize: 'vertical',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = '#3182f6'; e.currentTarget.style.backgroundColor = '#fff'; }}
                onBlur={e => { e.currentTarget.style.borderColor = '#e8ecf0'; e.currentTarget.style.backgroundColor = '#f9fafb'; }}
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                height: '52px',
                backgroundColor: status === 'submitting' ? '#a0bcf8' : '#3182f6',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                transition: 'background-color 150ms',
                fontFamily: 'inherit',
                letterSpacing: '-0.1px',
              }}
              onMouseEnter={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#1b6ef3'; }}
              onMouseLeave={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#3182f6'; }}
            >
              {status === 'submitting' ? f.submitting : f.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
