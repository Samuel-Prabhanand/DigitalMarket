import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import './Contact.css';

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        subject: form.subject,
        message: form.message,
      },
    ]);

    if (error) {
      console.error('Supabase error:', error.message);
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1>Let's Build Something<br /><span className="accent-text">Great Together.</span></h1>
          <p>Tell us about your goals and we'll get back to you within one business day with a tailored plan.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-layout">
          {/* Info Panel */}
          <div className="contact-info">
            <h2>We'd love to hear from you</h2>
            <p>Whether you need a full marketing strategy or just want to talk through a specific challenge — we're here for it.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <div className="info-label">Email Us</div>
                  <a href="mailto:hello@novaspark.io">hello@novaspark.io</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <div className="info-label">Call Us</div>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <div className="info-label">Office</div>
                  <p>Koramangala, Bengaluru — 560034, India</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div>
                  <div className="info-label">Response Time</div>
                  <p>Within 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="success-state">
                <div className="success-icon">🎉</div>
                <h3>Message Received!</h3>
                <p>Thanks for reaching out. Our team will contact you within one business day.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Aryan Kapoor"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="aryan@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your goals and challenges…"
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  className="btn-primary submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
