import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    icon: '🔍', title: 'SEO Optimization', tag: 'Organic Growth',
    desc: 'We build sustainable organic search visibility through technical SEO, content strategy, backlink development, and on-page optimization.',
    features: ['Technical SEO Audits', 'Keyword Research & Mapping', 'On-Page Optimization', 'Link Building', 'Local SEO', 'Core Web Vitals'],
    result: '+280% avg. organic traffic increase',
  },
  {
    icon: '📣', title: 'PPC & Paid Ads', tag: 'Paid Performance',
    desc: 'Precision-targeted campaigns on Google, Meta, and LinkedIn that turn your ad spend into measurable revenue.',
    features: ['Google Ads Management', 'Meta Ads (FB + IG)', 'LinkedIn Advertising', 'Retargeting Campaigns', 'Conversion Tracking', 'A/B Testing'],
    result: '4.2x average ROAS for our clients',
  },
  {
    icon: '📱', title: 'Social Media Marketing', tag: 'Brand Presence',
    desc: 'Strategy, content, and community management that builds a loyal following and drives real business outcomes.',
    features: ['Content Calendar', 'Reels & Short-Form Video', 'Community Management', 'Influencer Outreach', 'Brand Voice Development', 'Monthly Reporting'],
    result: '+170% avg. follower growth in 3 months',
  },
  {
    icon: '✍️', title: 'Content Marketing', tag: 'Authority Building',
    desc: 'Strategic long-form content that ranks, educates, and moves your audience through the buying journey.',
    features: ['Blog & Article Writing', 'SEO Content Strategy', 'Whitepapers & eBooks', 'Video Scripts', 'Case Studies', 'Infographics'],
    result: '3x more qualified leads via content',
  },
  {
    icon: '📧', title: 'Email Marketing', tag: 'Retention & Revenue',
    desc: 'Automated, personalized email workflows that nurture leads, delight customers, and maximize lifetime value.',
    features: ['Email Automation Flows', 'Newsletter Campaigns', 'Drip Sequences', 'List Segmentation', 'A/B Subject Testing', 'Analytics & Reporting'],
    result: '42% avg. open rate across campaigns',
  },
  {
    icon: '📊', title: 'Analytics & Reporting', tag: 'Insights',
    desc: "We translate data into decisions — custom dashboards that give you full visibility into what's working and what isn't.",
    features: ['GA4 Setup & Audits', 'Custom Dashboards', 'Attribution Modeling', 'Monthly Reports', 'Competitor Analysis', 'Growth Roadmaps'],
    result: 'Full-funnel visibility in 72 hours',
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <span className="section-tag">Our Services</span>
          <h1>Every Channel.<br /><span className="accent-text">One Strategy.</span></h1>
          <p>End-to-end digital marketing services designed to work together — and deliver results that compound over time.</p>
        </div>
      </section>

      <section className="section services-detail">
        <div className="container services-detail-layout">
          {/* Sidebar */}
          <div className="services-sidebar">
            {services.map((srv, i) => (
              <button
                key={i}
                className={`sidebar-item ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="sidebar-icon">{srv.icon}</span>
                <div>
                  <div className="sidebar-title">{srv.title}</div>
                  <div className="sidebar-tag">{srv.tag}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="service-detail-panel" key={active}>
            <div className="sdp-tag">{s.icon} {s.tag}</div>
            <h2>{s.title}</h2>
            <p className="sdp-desc">{s.desc}</p>
            <div className="sdp-result">
              <span>📈</span> {s.result}
            </div>
            <h4>What's Included</h4>
            <ul className="sdp-features">
              {s.features.map((f, i) => (
                <li key={i}><span className="check">✓</span> {f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
