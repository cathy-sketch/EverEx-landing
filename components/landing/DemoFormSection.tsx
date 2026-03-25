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

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
      <label style={{
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#161616',
        letterSpacing: '0.32px',
        display: 'flex',
        gap: '0.25rem',
        alignItems: 'center',
      }}>
        {label}
        {required && (
          <span style={{ color: '#da1e28', fontSize: '0.75rem' }}>*</span>
        )}
      </label>
      {children}
      {error && (
        <p style={{
          fontSize: '0.75rem',
          color: '#da1e28',
          margin: 0,
          letterSpacing: '0.32px',
        }}>
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  height: '2.5rem',
  padding: '0 1rem',
  border: '1px solid #8d8d8d',
  backgroundColor: '#f4f4f4',
  fontSize: '0.875rem',
  color: '#161616',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  border: '2px solid #da1e28',
};

export default function DemoFormSection() {
  const { t } = useLocale();
  const f = t.demo.form;

  const [data, setData] = useState<FormData>({ name: '', organization: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data, t.demo.errors);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // MVP: simulate async submit
    setTimeout(() => setStatus('success'), 800);
  };

  if (status === 'success') {
    return (
      <section id="demo" style={{ backgroundColor: '#161616', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#24a148' }}>✓</div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 300, color: '#ffffff', marginBottom: '1rem' }}>
            {t.demo.success.title}
          </h2>
          <p style={{ fontSize: '1rem', color: '#c6c6c6' }}>
            {t.demo.success.message}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="demo"
      style={{
        backgroundColor: '#161616',
        padding: '5rem 1rem',
      }}
    >
      <div style={{ maxWidth: '1584px', margin: '0 auto' }}>
        <div className="landing-demo-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr min(560px, 100%)',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left: text */}
          <div>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.32px',
              color: '#0f62fe',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              Contact
            </p>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.625rem)',
              fontWeight: 300,
              color: '#ffffff',
              marginBottom: '1rem',
            }}>
              {t.demo.title}
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#c6c6c6',
              lineHeight: 1.6,
              maxWidth: '400px',
            }}>
              {t.demo.subtitle}
            </p>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="landing-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Field label={f.name} required error={errors.name}>
                <input
                  type="text"
                  value={data.name}
                  onChange={set('name')}
                  placeholder={f.namePlaceholder}
                  style={errors.name ? inputErrorStyle : inputStyle}
                />
              </Field>
              <Field label={f.organization} required error={errors.organization}>
                <input
                  type="text"
                  value={data.organization}
                  onChange={set('organization')}
                  placeholder={f.organizationPlaceholder}
                  style={errors.organization ? inputErrorStyle : inputStyle}
                />
              </Field>
            </div>

            <div className="landing-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <Field label={f.email} required error={errors.email}>
                <input
                  type="email"
                  value={data.email}
                  onChange={set('email')}
                  placeholder={f.emailPlaceholder}
                  style={errors.email ? inputErrorStyle : inputStyle}
                />
              </Field>
              <Field label={f.phone}>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={set('phone')}
                  placeholder={f.phonePlaceholder}
                  style={inputStyle}
                />
              </Field>
            </div>

            <Field label={f.message}>
              <textarea
                value={data.message}
                onChange={set('message')}
                placeholder={f.messagePlaceholder}
                rows={5}
                style={{
                  ...inputStyle,
                  height: 'auto',
                  padding: '0.75rem 1rem',
                  resize: 'vertical',
                }}
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                height: '3rem',
                backgroundColor: status === 'submitting' ? '#8d8d8d' : '#0f62fe',
                color: '#ffffff',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '0.16px',
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                transition: 'background-color 70ms',
                alignSelf: 'flex-start',
                padding: '0 2rem',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => {
                if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#0353e9';
              }}
              onMouseLeave={e => {
                if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#0f62fe';
              }}
            >
              {status === 'submitting' ? f.submitting : f.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
