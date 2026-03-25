import React, { useState } from 'react';
import './Portfolio.css';

type Category = 'All' | 'SEO' | 'PPC' | 'Social' | 'Content';

const projects = [
  { title: 'Bloom Retail', category: 'SEO', industry: 'E-Commerce', metric: '+340%', metricLabel: 'Organic Traffic', desc: 'Took a Bengaluru fashion retailer from 1,200 to 5,300 monthly organic sessions through technical SEO and content overhaul.', color: '#FFF0EB' },
  { title: 'TechKart', category: 'PPC', industry: 'B2B SaaS', metric: '5.1x', metricLabel: 'ROAS Achieved', desc: 'Restructured their Google Ads account and scaled from ₹2L to ₹18L/month in revenue while cutting CPL by 38%.', color: '#EBF5FF' },
  { title: 'Luxe Living', category: 'Social', industry: 'Real Estate', metric: '+180%', metricLabel: 'Followers in 90 days', desc: 'Built a high-quality Instagram presence with Reels strategy that generated 24 qualified enquiries per month.', color: '#EBFFF0' },
  { title: 'FreshBite', category: 'Content', industry: 'F&B / D2C', metric: '3x', metricLabel: 'More Organic Leads', desc: 'Developed a 6-month content marketing calendar with SEO-optimised articles that now drives consistent inbound leads.', color: '#FFF8EB' },
  { title: 'MediCare Clinics', category: 'SEO', industry: 'Healthcare', metric: '#1', metricLabel: 'Google Position (Key Terms)', desc: 'Local SEO strategy with GMB optimisation and targeted backlinks — now the most visible clinic group in 3 Bengaluru zones.', color: '#F5EBFF' },
  { title: 'SwiftLogic', category: 'PPC', industry: 'Logistics SaaS', metric: '–42%', metricLabel: 'Cost Per Lead', desc: 'Migrated from broad to intent-based PPC strategy. Same budget, dramatically better lead quality and lower CAC.', color: '#EBFFFE' },
];

const categories: Category[] = ['All', 'SEO', 'PPC', 'Social', 'Content'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <span className="section-tag">Our Work</span>
          <h1>Real Clients.<br /><span className="accent-text">Real Results.</span></h1>
          <p>A selection of campaigns and outcomes we're proud of. Every number here is verifiable and backed by data.</p>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="filter-tabs">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-tab ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filtered.map((p, i) => (
              <div key={i} className="project-card" style={{ background: p.color }}>
                <div className="project-top">
                  <span className="project-industry">{p.industry}</span>
                  <span className={`project-category cat-${p.category.toLowerCase()}`}>{p.category}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-metric">
                  <div className="metric-value">{p.metric}</div>
                  <div className="metric-label">{p.metricLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
