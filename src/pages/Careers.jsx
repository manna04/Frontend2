// =====================================================
// Careers.jsx — Full Version with CV Upload & Vacancies
// =====================================================
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import { JOBS } from '../shared/constants';
import '../assets/css/variables.css';
import '../assets/css/global.css';
import '../assets/css/pages.css';

const DEPARTMENTS = [
  { icon:'🔬', title:'Clinical Operations',   desc:'Manage trials with precision and impact, improving patient outcomes.' },
  { icon:'📊', title:'Project Management',    desc:'Lead complex projects across global sites with strategic oversight.' },
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
  const [form, setForm] = useState({ name:'', email:'', phone:'', cv: null });

  if (!job) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Check if the file is a PDF
    if (file && file.type !== "application/pdf") {
      alert("Security Alert: Only PDF files are allowed for CV upload.");
      e.target.value = ""; // Clear the input
      setForm({ ...form, cv: null });
      return;
    }
    setForm({ ...form, cv: file });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <span className="m-tag">Application Form</span>
        
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, color:'#0B1F3A', margin:'12px 0 4px' }}>
          {job.title}
        </h2>

        {/* Vacancy Info in Modal */}
        <div style={{ marginBottom: 18 }}>
          <span style={{ background: '#E6F4F1', color: '#1B8FA6', padding: '5px 12px', borderRadius: '6px', fontSize: '12.5px', fontWeight: '700', border: '1px solid rgba(27, 143, 166, 0.2)' }}>
            👥 Vacancies: {job.openings || 1} Positions
          </span>
        </div>

        <p style={{ color:'#5E6E82', marginBottom:24, fontSize:13.5, borderBottom: '1px solid #eee', paddingBottom: 15 }}>
          📍 {job.location} &nbsp;|&nbsp; ⏱ {job.type} &nbsp;|&nbsp; 🏢 {job.dept}
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap:15 }}>
          <div>
            <label style={{ display:'block', color:'#5E6E82', fontSize:12.5, marginBottom:6, fontWeight:600 }}>Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              style={{ width:'100%', background:'#F2F7FA', border:'1px solid #D8E4ED', borderRadius:9, padding:'12px 15px', fontSize:14, outline:'none' }}
            />
          </div>

          <div>
            <label style={{ display:'block', color:'#5E6E82', fontSize:12.5, marginBottom:6, fontWeight:600 }}>Email Address *</label>
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              style={{ width:'100%', background:'#F2F7FA', border:'1px solid #D8E4ED', borderRadius:9, padding:'12px 15px', fontSize:14, outline:'none' }}
            />
          </div>

          <div>
            <label style={{ display:'block', color:'#5E6E82', fontSize:12.5, marginBottom:6, fontWeight:600 }}>Phone Number *</label>
            <input
              type="tel"
              placeholder="+91 XXXXXXXXXX"
              required
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              style={{ width:'100%', background:'#F2F7FA', border:'1px solid #D8E4ED', borderRadius:9, padding:'12px 15px', fontSize:14, outline:'none' }}
            />
          </div>

          {/* PDF CV Upload */}
          <div>
            <label style={{ display:'block', color:'#5E6E82', fontSize:12.5, marginBottom:6, fontWeight:600 }}>Upload Your CV (PDF Only) *</label>
            <input
              type="file"
              required
              accept="application/pdf"
              onChange={handleFileChange}
              style={{ 
                width:'100%', 
                background:'#F2F7FA', 
                border:'1px dashed #1B8FA6', 
                borderRadius:9, 
                padding:'10px', 
                fontSize:13, 
                cursor:'pointer' 
              }}
            />
            <small style={{ color: '#888', fontSize: '11px', display: 'block', marginTop: '6px' }}>
              Only PDF files are supported. Maximum size: 5MB.
            </small>
          </div>

          <button
            className="sub-btn"
            style={{ background:'#1B8FA6', marginTop: '10px', padding: '14px', borderRadius: 10, color: '#fff', fontWeight: 700, border: 'none', cursor: 'pointer' }}
            onClick={() => { 
              if(form.name && form.email && form.phone && form.cv) {
                onSubmit(); 
                onClose(); 
              } else {
                alert("Please complete all fields and upload your PDF CV before submitting.");
              }
            }}
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
    setToast("Success! Your application has been received. Our HR team will contact you soon.");
    setTimeout(() => setToast(''), 4000);
  };

  return (
    <>
      <Nav />
      <div className="page-wrapper">
        
        {/* Hero Section */}
        <div className="page-hero">
          <div className="sec-tag sec-tag--gold">Careers</div>
          <h1 className="sec-title sec-title--white">Join Accelia Clinical Solutions</h1>
          <p style={{ color:'rgba(255,255,255,0.62)', maxWidth:620, fontSize:17, lineHeight:1.72 }}>
            Be part of India's fast-growing SMO. Headquartered in Kolkata, with expanding operations 
            across West Bengal, Assam, Odisha, Bihar, and Uttar Pradesh.
          </p>
        </div>

        {/* Working at Accelia */}
        <section className="working-at">
          <div className="sec-tag">Culture</div>
          <h2 className="sec-title">Working at Accelia</h2>
          <p style={{ color:'#5E6E82', fontSize:16, lineHeight:1.75, maxWidth:680 }}>
            Join a passionate team of dedicated professionals at the forefront of clinical research. 
            We offer a platform to grow, innovate, and lead.
          </p>
        </section>

        {/* Open Positions Grid */}
        <section id="openings">
          <div className="sec-tag">Open Positions</div>
          <h2 className="sec-title">Current Openings</h2>
          <div className="job-list">
            {JOBS.map((j, i) => (
              <div key={i} className="job-card">
                <div className="job-info">
                  <h3>{j.title}</h3>
                  <div className="job-meta">
                    <span className="j-tag">{j.dept}</span>
                    <span>📍 {j.location}</span>
                    {/* Display Openings Count */}
                    <span style={{ color: '#1B8FA6', fontWeight: '700', marginLeft: '5px' }}>
                      👥 {j.openings || 1} Openings
                    </span>
                  </div>
                </div>
                <button className="btn-apply" onClick={() => setApplyJob(j)}>Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Departments Section */}
        <section style={{ background:'#fff' }}>
          <div className="sec-tag">Departments</div>
          <h2 className="sec-title">Our Functions</h2>
          <div className="career-cards">
            {DEPARTMENTS.map(({ icon, title, desc }, i) => (
              <div key={i} className="career-card">
                <div style={{ fontSize:32, marginBottom:12 }}>{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Accelia Section */}
        <section style={{ background:'#F2F7FA' }}>
          <div className="sec-tag">Why Us</div>
          <h2 className="sec-title">Why Work With Accelia?</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:20 }}>
            {WHY.map(({ icon, title, desc }, i) => (
              <div key={i} className="why-card">
                <div className="why-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background:'#0B1F3A', textAlign:'center', padding: '80px 20px' }}>
          <div className="sec-tag sec-tag--gold">Your Future Start Here</div>
          <h2 className="sec-title sec-title--white">Ready to Shape the Future of Research?</h2>
          <button className="btn-primary" onClick={() => window.scrollTo({ top: document.getElementById('openings')?.offsetTop || 1200, behavior:'smooth' })}>
            Explore All Open Positions
          </button>
        </section>

        <Footer />
      </div>

      {/* Dynamic Modals & Toasts */}
      <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} onSubmit={handleSubmit} />
      {toast && <div className="toast-success-fixed">{toast}</div>}
    </>
  );
}