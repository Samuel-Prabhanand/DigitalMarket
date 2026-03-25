import React from 'react';
import './About.css';

const team = [
  { name: 'Aryan Kapoor', role: 'Founder & CEO', emoji: '👨‍💼' },
  { name: 'Divya Nair', role: 'Head of SEO', emoji: '👩‍💻' },
  { name: 'Kabir Mehta', role: 'Creative Director', emoji: '🎨' },
  { name: 'Ananya Singh', role: 'Paid Ads Lead', emoji: '📊' },
];

const values = [
  { icon: '🎯', title: 'Results First', desc: 'Every strategy we craft is laser-focused on delivering measurable outcomes for your business.' },
  { icon: '🔬', title: 'Data Driven', desc: 'We let numbers guide every decision — no guesswork, just insights that matter.' },
  { icon: '🤝', title: 'True Partnership', desc: 'We work as an extension of your team, fully committed to your success.' },
  { icon: '💡', title: 'Always Innovating', desc: 'The digital landscape shifts fast. We stay ahead so your brand always does too.' },
];

const About: React.FC = () => (
  <div className="about-page">
    {/* Hero */}
    <section className="about-hero">
      <div className="container">
        <span className="section-tag">Our Story</span>
        <h1>Marketing That<br /><span className="accent-text">Means Business</span></h1>
        <p>Founded in Bengaluru in 2012, NovaSpark has grown from a 2-person startup into a 40-person agency trusted by brands across India and Southeast Asia.</p>
      </div>
    </section>

    {/* Story */}
    <section className="section story-section">
      <div className="container story-grid">
        <div className="story-text">
          <span className="section-tag">Who We Are</span>
          <h2>A Team of Growth Obsessives</h2>
          <p>We started NovaSpark because we believed great marketing shouldn't be reserved for enterprises with giant budgets. Small and mid-sized businesses deserve strategy that works just as hard.</p>
          <p>Today we serve clients across e-commerce, SaaS, real estate, healthcare, and consumer goods — delivering campaigns that don't just look good, but drive real business outcomes.</p>
          <div className="story-badges">
            <div className="badge">🏆 Google Premier Partner</div>
            <div className="badge">📘 Meta Business Partner</div>
            <div className="badge">⭐ HubSpot Certified</div>
          </div>
        </div>
        <div className="story-stats">
          {[['250+', 'Brands Scaled'], ['₹120Cr+', 'Ad Spend Managed'], ['40+', 'Team Members'], ['12', 'Years in Business']].map(([v, l]) => (
            <div key={l} className="story-stat">
              <div className="story-stat-val">{v}</div>
              <div className="story-stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section values-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Believe</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section team-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">The People</span>
          <h2>Meet the Team</h2>
          <p>Strategists, creatives, and analysts who live and breathe digital marketing.</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div key={i} className="team-card">
              <div className="team-avatar">{m.emoji}</div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
