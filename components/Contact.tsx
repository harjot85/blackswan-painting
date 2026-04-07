'use client';

import { useState } from 'react';

interface InfoItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}

const INFO_ITEMS: InfoItem[] = [
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

const SERVICES = [
  'Interior Painting', 'Exterior Painting', 'Cabinet Refinishing',
  'Deck & Fence Staining', 'Drywall Repair', 'Home Renovation', 'Other / Not Sure',
];

function FormField({ label, name, type = 'text', placeholder, required }: FormFieldProps) {
  return (
    <div className="mb-[18px]">
      <label className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-lo mb-2">
        {label}
      </label>
      <input type={type} name={name} className="form-input" placeholder={placeholder} required={required} />
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(e.currentTarget) });
      const json = await res.json() as { success: boolean };
      if (json.success) setSubmitted(true);
      else alert('Something went wrong. Please try again or call us directly.');
    } catch {
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-[108px] bg-bk relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(242,193,46,0.4), transparent)' }} />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[52px] md:gap-[88px] items-start">

          {/* Info panel */}
          <div>
            <div className="section-eyebrow">Let&rsquo;s Talk</div>
            <h2 className="section-title">Ready to<br/><em>Transform</em><br/>Your Home?</h2>

            <div className="flex flex-col gap-[26px] mt-[42px]">
              {INFO_ITEMS.map(({ label, value, icon }, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center shrink-0 text-gold">
                    {icon}
                  </div>
                  <div>
                    <div className="text-[10.5px] font-semibold tracking-[2.5px] uppercase text-lo mb-1">{label}</div>
                    <div className="text-[15px] font-medium text-hi whitespace-pre-line">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-bk-3 border border-white/[0.06] rounded-[10px] p-[42px] max-sm:p-7">
            {submitted ? (
              <div className="text-center py-12 px-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 text-gold">
                  <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-display text-[24px] font-bold mb-[10px]">Request Sent!</h3>
                <p className="text-[14px] text-mid">Thanks! We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-[24px] font-bold mb-1.5">Get a Free Quote</h3>
                <p className="text-[13.5px] text-mid mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
                  <input type="hidden" name="subject"    value="New Quote Request — Black Swan Painting" />
                  <input type="hidden" name="from_name"  value="Black Swan Painting Website" />
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="First Name" name="first_name" placeholder="John" required />
                    <FormField label="Last Name"  name="last_name"  placeholder="Smith" required />
                  </div>
                  <FormField label="Email Address" name="email" type="email" placeholder="john@example.com" required />
                  <FormField label="Phone Number"  name="phone" type="tel"   placeholder="(604) 555-0000" />

                  <div className="mb-[18px]">
                    <label className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-lo mb-2">
                      Service Needed
                    </label>
                    <select name="service" className="form-input appearance-none cursor-pointer">
                      <option value="" disabled>Select a service…</option>
                      {SERVICES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="mb-[18px]">
                    <label className="block text-[11px] font-semibold tracking-[1.5px] uppercase text-lo mb-2">
                      Project Details
                    </label>
                    <textarea name="message" className="form-input resize-y min-h-[110px]" rows={4}
                      placeholder="Tell us about your project — size, timeline, any specific requirements…" />
                  </div>

                  <button type="submit" className="btn btn-primary w-full justify-center !py-[15px] !text-[15px]" disabled={loading}>
                    {loading ? 'Sending…' : 'Send My Request →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
