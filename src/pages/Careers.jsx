// =====================================================
// Careers.jsx — Careers Page
// =====================================================
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import { JOBS } from '../shared/constants';
import '../assets/css/variables.css';
import '../assets/css/global.css';
import '../assets/css/pages.css';

const DEPARTMENTS = [
  { icon:'🔬', title:'Clinical Operations',   desc:'Manage trials with precision and impact, improving patient outcomes.' },
  { icon:'📊', title:'Project Management',     desc:'Lead complex projects across global sites with strategic oversight.' },
  { icon:'📈', title:'Biometrics',             desc:'Deliver data-driven insights with accuracy and regulatory alignment.' },
  { icon:'⚕️',  title:'Medical Affairs',       desc:'Bridge science and strategy through clinical expertise and evidence.' },
  { icon:'📋', title:'Regulatory Affairs',     desc:'Navigate complex global regulations to support trial success.' },
  { icon:'🏢', title:'Corporate Services',     desc:'Support teams in HR, Finance, and Legal driving our mission forward.' },
];

const WHY = [
  { icon:'🚀', title:'Fast-Growing',        desc:"Be part of one of India's fastest-growing SMOs — 30+ trials in just 18 months." },
  { icon:'🌍', title:'Pan-India Impact',    desc:'Work across multiple states and therapeutic areas with diverse sponsor portfolios.' },
  { icon:'🎓', title:'Continuous Learning', desc:'Access GCP workshops, training programs, and professional development opportunities.' },
  { icon:'🤝', title:'Collaborative Culture', desc:'A team-first environment where innovation, integrity, and excellence are celebrated.' },
];

function ApplyModal({ job, onClose, onSubmit }) {
  const [form, setForm] = useState({ name:'', email:'', phone:'', note:'' });

  if (!job) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <span className="m-tag">Apply Now</span>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, color:'#0B1F3A', margin:'10px 0 6px' }}>
          {job.title}
        </h2>
        <p style={{ color:'#5E6E82', marginBottom:22, fontSize:13.5 }}>
          📍 {job.location} &nbsp;|&nbsp; ⏱ {job.type} &nbsp;|&nbsp; 🏢 {job.dept}
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {[
            { label:'Full Name *',  key:'name',  type:'text',  placeholder:'Your full name' },
            { label:'Email *',      key:'email', type:'email', placeholder:'your@email.com' },
            { label:'Phone',        key:'phone', type:'tel',   placeholder:'+91 XXXXXXXXXX' },
          ].map(f => (
            <div key={f.key}>
              <label style={{ display:'block', color:'#5E6E82', fontSize:12.5, marginBottom:5, fontWeight:500 }}>{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                style={{ width:'100%', background:'#F2F7FA', border:'1px solid #D8E4ED', borderRadius:9, padding:'11px 14px', fontSize:13.5, outline:'none', fontFamily:'inherit' }}
              />
            </div>
          ))}
          <div>
            <label style={{ display:'block', color:'#5E6E82', fontSize:12.5, marginBottom:5, fontWeight:500 }}>Cover Note</label>
            <textarea
              placeholder="Tell us about your relevant experience..."
              value={form.note}
              onChange={e => setForm({ ...form, note: e.target.value })}
              style={{ width:'100%', background:'#F2F7FA', border:'1px solid #D8E4ED', borderRadius:9, padding:'11px 14px', fontSize:13.5, minHeight:100, resize:'vertical', outline:'none', fontFamily:'inherit' }}
            />
          </div>
          <button
            className="sub-btn"
            style={{ background:'#1B8FA6' }}
            onClick={() => { onSubmit(); onClose(); }}
          >
            Submit Application →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Careers() {
  const navigate = useNavigate();
  const [applyJob, setApplyJob] = useState(null);
  const [toast, setToast]       = useState('');

  const handleSubmit = () => {
    setToast("Application submitted! We'll review and contact you soon.");
    setTimeout(() => setToast(''), 3500);
  };

  return (
    <>
      <Nav />

      <div className="page-wrapper">

        {/* Hero */}
        <div className="page-hero">
          <div className="sec-tag sec-tag--gold">Careers</div>
          <h1 className="sec-title sec-title--white">Join Accelia Clinical Solutions</h1>
          <p style={{ color:'rgba(255,255,255,0.62)', maxWidth:620, fontSize:17, lineHeight:1.72 }}>
            Be part of Accelia's expanding SMO ecosystem, driving high-impact clinical research
            that transforms lives across India. Headquartered in Kolkata, with a strong presence
            across all regions of West Bengal, Assam, Bhubaneswar, Bihar, and Uttar Pradesh.
          </p>
        </div>

        {/* Working at */}
        <section className="working-at">
          <div className="sec-tag">Working at Accelia</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(30px,4vw,50px)', fontWeight:700, color:'#0B1F3A', marginBottom:14 }}>
            Working at Accelia
          </h2>
          <p style={{ color:'#5E6E82', fontSize:16, lineHeight:1.75, maxWidth:680 }}>
            Join a passionate team of dedicated professionals working at the forefront of
            clinical research in India. We offer a platform to grow, innovate, and lead in
            the future of site management.
          </p>
        </section>

        {/* Departments */}
        <section style={{ background:'#fff' }}>
          <div className="sec-tag">Departments</div>
          <h2 className="sec-title">Our Functions</h2>
          <p className="sec-sub">Explore the diverse roles that power Accelia's clinical operations across India.</p>
          <div className="career-cards">
            {DEPARTMENTS.map(({ icon, title, desc }, i) => (
              <div key={i} className="career-card">
                <div style={{ fontSize:28, marginBottom:10 }}>{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Development */}
        <section style={{ background:'#F2F7FA' }}>
          <div className="sec-tag">Growth</div>
          <h2 className="sec-title">Career Development</h2>
          <p style={{ color:'#5E6E82', fontSize:16, lineHeight:1.78, maxWidth:680 }}>
            We provide structured training pathways, mentorship, and hands-on opportunities through
            programs like CRA Essentials and Associate PM tracks.
          </p>
        </section>

        {/* Open Positions */}
        <section>
          <div className="sec-tag">Open Positions</div>
          <h2 className="sec-title">Current Openings</h2>
          <p className="sec-sub">Join us across our locations in West Bengal, Assam, Bhubaneswar, Bihar, and Uttar Pradesh.</p>
          <div className="job-list">
            {JOBS.map((j, i) => (
              <div key={i} className="job-card">
                <div className="job-info">
                  <h3>{j.title}</h3>
                  <div className="job-meta">
                    <span className="j-tag">{j.dept}</span>
                    <span>📍 {j.location}</span>
                    <span>⏱ {j.type}</span>
                  </div>
                </div>
                <button className="btn-apply" onClick={() => setApplyJob(j)}>Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Why Accelia */}
        <section style={{ background:'#F2F7FA' }}>
          <div className="sec-tag">Why Accelia</div>
          <h2 className="sec-title">Why Work With Us</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(235px,1fr))', gap:18 }}>
            {WHY.map(({ icon, title, desc }, i) => (
              <div key={i} className="why-card">
                <div className="why-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore CTA */}
        <section style={{ background:'#0B1F3A', textAlign:'center' }}>
          <div className="sec-tag sec-tag--gold">Explore Opportunities</div>
          <h2 className="sec-title sec-title--white">Ready to Make an Impact?</h2>
          <p style={{ color:'rgba(255,255,255,0.62)', fontSize:16, lineHeight:1.72, maxWidth:580, margin:'0 auto 32px' }}>
            We're hiring across Asia-Pacific, Europe, and North America. Join us and shape
            the future of global clinical research.
          </p>
          <button className="btn-primary" onClick={() => window.scrollTo({ top: document.getElementById('openings')?.offsetTop || 400, behavior:'smooth' })}>
            View Open Positions
          </button>
        </section>

        <Footer />
      </div>

      {/* Apply Modal */}
      <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} onSubmit={handleSubmit} />

      {/* Toast */}
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
