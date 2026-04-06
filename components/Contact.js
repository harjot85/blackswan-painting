'use client';

import { useState } from 'react';

const INFO_ITEMS = [
  {
    label: 'Location', value: 'Chilliwack, BC',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    label: 'Phone', value: '(604) 555-0198',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.27 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.55 5.55l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
  {
    label: 'Email', value: 'hello@blackswanpainting.ca',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    label: 'Hours', value: 'Mon–Fri: 7am – 6pm\nSat: 8am – 4pm',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(e.target) });
      const json = await res.json();
      if (json.success) setSubmitted(true);
      else alert('Something went wrong. Please try again or call us directly.');
    } catch {
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" style={{
      padding: '108px 0', background: 'var(--black)', position: 'relative', overflow: 'hidden',
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(242,193,46,0.4), transparent)',
      }}/>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 88, alignItems: 'start' }}
             className="contact-grid">

          {/* Info panel */}
          <div>
            <div className="section-eyebrow">Let&rsquo;s Talk</div>
            <h2 className="section-title">Ready to<br/><em>Transform</em><br/>Your Home?</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 26, marginTop: 42 }}>
              {INFO_ITEMS.map(({ label, value, icon }, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44,
                    background: 'var(--yellow-muted)',
                    border: '1px solid rgba(242,193,46,0.2)',
                    borderRadius: 8, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, color: 'var(--yellow)',
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--white-4)', marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--white-2)', whiteSpace: 'pre-line' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: 'var(--black-3)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 10, padding: 42,
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                <div style={{
                  width: 64, height: 64, background: 'var(--yellow-muted)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', color: 'var(--yellow)',
                }}>
                  <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, marginBottom: 10 }}>Request Sent!</h3>
                <p style={{ fontSize: 14, color: 'var(--white-3)' }}>Thanks! We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, marginBottom: 6 }}>Get a Free Quote</h3>
                <p style={{ fontSize: 13.5, color: 'var(--white-3)', marginBottom: 32 }}>Fill out the form and we&apos;ll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit}>
                  {/* Replace with your W3Forms key */}
                  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE"/>
                  <input type="hidden" name="subject"    value="New Quote Request — Black Swan Painting"/>
                  <input type="hidden" name="from_name"  value="Black Swan Painting Website"/>
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }}/>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                    <FormField label="First Name" name="first_name" placeholder="John" required/>
                    <FormField label="Last Name"  name="last_name"  placeholder="Smith" required/>
                  </div>
                  <FormField label="Email Address" name="email" type="email" placeholder="john@example.com" required/>
                  <FormField label="Phone Number"  name="phone" type="tel"   placeholder="(604) 555-0000"/>

                  <div style={{ marginBottom: 18 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--white-4)', marginBottom: 8 }}>
                      Service Needed
                    </label>
                    <select name="service" className="form-input" style={{ width: '100%', appearance: 'none', cursor: 'pointer' }}>
                      <option value="" disabled>Select a service…</option>
                      {['Interior Painting','Exterior Painting','Cabinet Refinishing','Deck & Fence Staining','Drywall Repair','Home Renovation','Other / Not Sure'].map(s => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: 18 }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--white-4)', marginBottom: 8 }}>
                      Project Details
                    </label>
                    <textarea name="message" className="form-input" rows={4}
                      style={{ resize: 'vertical', minHeight: 110 }}
                      placeholder="Tell us about your project — size, timeline, any specific requirements…"/>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loading}
                    style={{ width: '100%', justifyContent: 'center', padding: 15, fontSize: 15 }}>
                    {loading ? 'Sending…' : 'Send My Request →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          background: var(--black-4);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 5px;
          padding: 11px 15px;
          color: var(--white);
          font-family: var(--font-body);
          font-size: 14px;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          display: block;
          width: 100%;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.2); }
        .form-input:focus {
          border-color: var(--yellow);
          box-shadow: 0 0 0 3px rgba(242,193,46,0.1);
        }
        .form-input option { background: var(--black-3); }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .contact-grid > div:last-child { padding: 28px 22px !important; }
        }
      `}</style>
    </section>
  );
}

function FormField({ label, name, type = 'text', placeholder, required }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--white-4)', marginBottom: 8 }}>
        {label}
      </label>
      <input type={type} name={name} className="form-input" placeholder={placeholder} required={required}/>
    </div>
  );
}