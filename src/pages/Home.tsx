import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { value: '250+', label: 'Clients Served' },
  { value: '3.8x', label: 'Avg. ROI Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '12+', label: 'Years Experience' },
];

const services = [
  { icon: '🔍', title: 'SEO Optimization', desc: 'Rank higher, drive organic traffic and dominate search results in your niche.' },
  { icon: '📣', title: 'PPC Advertising', desc: 'Precision-targeted ad campaigns that convert clicks into paying customers.' },
  { icon: '📱', title: 'Social Media', desc: 'Build a magnetic brand presence across all major social platforms.' },
  { icon: '✍️', title: 'Content Marketing', desc: 'Compelling stories and content that educate, inspire, and convert.' },
  { icon: '📧', title: 'Email Campaigns', desc: 'Automated, personalized email flows that nurture leads into loyal clients.' },
  { icon: '📊', title: 'Analytics & Reporting', desc: 'Deep data insights that inform smarter decisions and faster growth.' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'CEO, Bloom Retail', quote: 'NovaSpark tripled our online revenue in 6 months. Their team is phenomenal — strategic, creative, and truly invested in our growth.', rating: 5 },
  { name: 'Rahul Mehta', role: 'Founder, TechKart', quote: 'The SEO results were beyond what we imagined. We went from page 5 to #1 for our main keyword in under 4 months.', rating: 5 },
  { name: 'Sneha Rao', role: 'CMO, Luxe Living', quote: 'Our social media following grew by 180% and we saw a massive spike in qualified leads. Highly recommend NovaSpark!', rating: 5 },
];

const marqueeItems = [
  { label: 'Google Ads', icon: '🎯' },
  { label: 'Meta Business', icon: '📘' },
  { label: 'HubSpot', icon: '🟠' },
  { label: 'Semrush', icon: '📊' },
  { label: 'Mailchimp', icon: '✉️' },
  { label: 'Ahrefs', icon: '🔗' },
  { label: 'Klaviyo', icon: '📬' },
  { label: 'Salesforce', icon: '☁️' },
  { label: 'Shopify', icon: '🛍️' },
  { label: 'LinkedIn Ads', icon: '💼' },
  { label: 'Hotjar', icon: '🔥' },
  { label: 'Canva Pro', icon: '🎨' },
];

const Home: React.FC = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text fade-up">
            <span className="section-tag">Digital Marketing Agency</span>
            <h1>
              We Scale Brands<br />
              <span className="accent-text">Exceptionally Fast.</span>
            </h1>
            <p>Data-driven strategies, creative execution, and relentless optimization — everything your brand needs to dominate online.</p>
            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">Get Free Strategy Call →</Link>
              <Link to="/portfolio" className="btn-outline">See Our Work</Link>
            </div>
          </div>
          <div className="hero-visual fade-in">
            <div className="hero-card card-1">
              <div className="card-icon">📈</div>
              <div>
                <div className="card-stat">+340%</div>
                <div className="card-label">Traffic Growth</div>
              </div>
            </div>
            <div className="hero-card card-2">
              <div className="card-icon">💰</div>
              <div>
                <div className="card-stat">₹2.4Cr</div>
                <div className="card-label">Revenue Generated</div>
              </div>
            </div>
            <div className="hero-card card-3">
              <div className="card-icon">🎯</div>
              <div>
                <div className="card-stat">98%</div>
                <div className="card-label">Client Satisfaction</div>
              </div>
            </div>
            <div className="hero-orb" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header" ref={addRef}>
            <span className="section-tag">What We Do</span>
            <h2>Services Built<br />to Drive Growth</h2>
            <p>From discovery to conversion — we cover every stage of your digital journey.</p>
          </div>

          {/* Marquee strip */}
          <div className="marquee-wrap" ref={addRef}>
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div key={i} className="marquee-item">
                  <span className="marquee-icon">{item.icon}</span>
                  <span className="marquee-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div
                key={i}
                ref={addRef}
                className="service-card scroll-reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="service-link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Grow Your Business?</h2>
            <p>Book a free 30-minute strategy session with our experts today.</p>
          </div>
          <Link to="/contact" className="btn-primary">Book Free Call →</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Stories</span>
            <h2>Brands That Trust Us</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div
                key={i}
                ref={addRef}
                className="testimonial-card scroll-reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="stars">{'★'.repeat(t.rating)}</div>
                <p className="quote">"{t.quote}"</p>
                <div className="reviewer">
                  <div className="reviewer-avatar">{t.name[0]}</div>
                  <div>
                    <div className="reviewer-name">{t.name}</div>
                    <div className="reviewer-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
