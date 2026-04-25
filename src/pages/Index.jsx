import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import { SOLUTIONS, EXPERTISE, NEWS, JOBS, LOCATIONS } from '../shared/constants';
import '../assets/css/variables.css';
import '../assets/css/global.css';
import '../assets/css/Index.css';
import '../assets/css/pages.css';
import clinicVideo from '../assets/images/clinic_video.mov';

function Modal({ modal, onClose, onContact }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', cv: null });

  if (!modal) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      alert("Security Alert: Only PDF files are allowed for CV upload.");
      e.target.value = ""; // Input clear kora
      setForm({ ...form, cv: null });
      return;
    }
    setForm({ ...form, cv: file });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* --- NEWS MODAL --- */}
        {modal.type === 'news' && (
          <>
            <div style={{ fontSize: 44, marginBottom: 14 }}>{modal.data.icon}</div>
            <span className="m-tag">{modal.data.tag}</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: '#0B1F3A', margin: '10px 0 8px' }}>
              {modal.data.title}
            </h2>
            <p style={{ color: '#5E6E82', fontSize: 14.5, lineHeight: 1.75 }}>
              {modal.data.desc || modal.data.body}
            </p>
            <p style={{ color: '#1B8FA6', fontSize: 12.5, marginTop: 14, fontWeight: 600 }}>{modal.data.date}</p>
          </>
        )}

        {/* --- SOLUTION MODAL --- */}
        {modal.type === 'solution' && (
          <>
            <div style={{ fontSize: 38, marginBottom: 10 }}>{modal.data.icon}</div>
            <span className="m-tag">Solution</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: '#0B1F3A', margin: '10px 0 8px' }}>
              {modal.data.title}
            </h2>
            <p style={{ color: '#5E6E82', lineHeight: 1.78, marginTop: 12 }}>{modal.data.desc}</p>
            <div style={{ marginTop: 22 }}>
              <button className="btn-primary" onClick={() => { onClose(); onContact(); }}>Get Started →</button>
            </div>
          </>
        )}

        
        {modal.type === 'apply' && (
          <>
            <span className="m-tag">Apply Now</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: '#0B1F3A', margin: '10px 0 6px' }}>
              {modal.data.title}
            </h2>
            
            
            <div style={{ marginBottom: 15 }}>
              <span style={{ background: '#E6F4F1', color: '#1B8FA6', padding: '4px 10px', borderRadius: '5px', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(27, 143, 166, 0.2)' }}>
                👥 Vacancies: {modal.data.openings || 1} Positions
              </span>
            </div>

            <p style={{ color: '#5E6E82', marginBottom: 18, fontSize: 13.5 }}>
              📍 {modal.data.location} &nbsp;|&nbsp; ⏱ {modal.data.type}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', color: '#5E6E82', fontSize: 12.5, marginBottom: 5, fontWeight: 600 }}>Full Name *</label>
                <input type="text" placeholder="Your full name" required onChange={e => setForm({...form, name: e.target.value})}
                  style={{ width: '100%', background: '#F2F7FA', border: '1px solid #D8E4ED', borderRadius: 9, padding: '11px 14px', fontSize: 13.5, outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', color: '#5E6E82', fontSize: 12.5, marginBottom: 5, fontWeight: 600 }}>Email *</label>
                <input type="email" placeholder="your@email.com" required onChange={e => setForm({...form, email: e.target.value})}
                  style={{ width: '100%', background: '#F2F7FA', border: '1px solid #D8E4ED', borderRadius: 9, padding: '11px 14px', fontSize: 13.5, outline: 'none' }} />
              </div>

              
              <div>
                <label style={{ display: 'block', color: '#5E6E82', fontSize: 12.5, marginBottom: 5, fontWeight: 600 }}>Upload Your CV (PDF Only) *</label>
                <input type="file" required accept="application/pdf" onChange={handleFileChange}
                  style={{ width: '100%', background: '#F2F7FA', border: '1px dashed #1B8FA6', borderRadius: 9, padding: '10px', fontSize: 12.5, cursor: 'pointer' }} />
                <small style={{ color: '#999', fontSize: '11px', display: 'block', marginTop: '5px' }}>Only PDF supported. Max size: 5MB</small>
              </div>

              <button className="sub-btn" style={{ background: '#1B8FA6', marginTop: 10 }}
                onClick={() => { 
                  if(form.name && form.email && form.cv) {
                    alert("Application submitted successfully from Home Page!");
                    onClose(); 
                  } else {
                    alert("Please fill all fields and upload your PDF CV.");
                  }
                }}>
                Submit Application →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Index() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(null);

  const goTo = (path) => { navigate(path); window.scrollTo(0, 0); };

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.40 }}>
          <source src={clinicVideo} type="video/mp4" />
        </video>
        <div className="hero__bg" />
        <div className="hero__grid" />

        <div className="hero__content">
          <div className="hero__badge fu">India's Premier Site Management Organization</div>
          <h1 className="fu2">Welcome to<br /><em>Accelia Clinical</em><br />Solutions</h1>
          <p className="fu3">
            Your trusted partner in global clinical trials and biopharmaceutical innovation —
            delivering precision, speed, and compliance across every therapeutic area.
          </p>
          <div className="hero__actions fu3">
            <button className="btn-primary" onClick={() => goTo('/solutions')}>Explore Our Solutions →</button>
            <button className="btn-outline" onClick={() => goTo('/contact')}>Get in Touch</button>
          </div>
        </div>

        <div className="hero__stats">
          {[['30+', 'Completed Trials'], ['250+', 'Clinician Network'], ['1.5', 'Years of Excellence'], ['6+', 'States Covered']].map(([n, l], i) => (
            <div key={i} className="stat-card">
              <div className="stat-card__num">{n}</div>
              <div className="stat-card__lbl">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWS ── */}
      <section style={{ background: '#F2F7FA' }}>
        <div className="sec-tag">News & Resources</div>
        <h2 className="sec-title">Latest Insights from Accelia</h2>
        <div className="news-grid">
          {NEWS.slice(0, 3).map((n, i) => (
            <div key={i} className="news-card" onClick={() => setModal({ type: 'news', data: n })}>
              <div className="news-card__img" style={{ background: n.bg }}>{n.icon}</div>
              <div className="news-card__body">
                <span className="news-tag">{n.tag}</span>
                <h3>{n.title}</h3>
                <p>{n.body.substring(0, 110)}...</p>
                <div className="news-card__date">{n.date}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <button className="btn-primary" style={{ background: '#1B8FA6' }} onClick={() => goTo('/all-news')}>
            View All News & Events
          </button>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section>
        <div className="sec-tag">Our Solutions</div>
        <h2 className="sec-title">Integrated SMO Excellence</h2>
        <div className="solutions-grid">
          {SOLUTIONS.slice(0, 6).map((s, i) => (
            <div key={i} className="sol-card" onClick={() => setModal({ type: 'solution', data: s })}>
              <div className="sol-card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="sol-card__km">Know More →</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <button className="btn-primary" style={{ background: '#1B8FA6' }} onClick={() => goTo('/solutions')}>
            View All Solutions
          </button>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section style={{ background: '#0B1F3A' }}>
        <div className="sec-tag sec-tag--gold">Therapeutic Expertise</div>
        <h2 className="sec-title sec-title--white">Across Every Critical Therapy Area</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {EXPERTISE.slice(0, 13).map((e, i) => (
            <button key={i} className="expertise-chip" onClick={() => goTo('/expertise')}>{e.title}</button>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section>
        <div className="about-grid">
          <div>
            <div className="sec-tag">About Accelia</div>
            <h2 className="sec-title">Benchmark in Speed, Precision & Site Excellence</h2>
            <p style={{ color: '#5E6E82', fontSize: 16, lineHeight: 1.82, marginBottom: 18 }}>
              Delivering 30+ clinical trials in just 1.5 years, Accelia Clinical Solutions sets the
              benchmark in speed, precision, and site excellence.
            </p>
            <button className="btn-primary" style={{ background: '#1B8FA6' }} onClick={() => goTo('/about')}>
              Learn More About Us →
            </button>
          </div>
          <div className="about-nums">
            {[['30+', 'Clinical Trials'], ['1.5 Yrs', 'Age'], ['250+', 'Clinicians'], ['6+', 'States']].map(([n, l], i) => (
              <div key={i} className="about-num">
                <div className="about-num__n">{n}</div>
                <div className="about-num__l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREERS STRIP ── */}
      <section style={{ background: '#F2F7FA' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 36 }}>
          <div>
            <div className="sec-tag">Careers</div>
            <h2 className="sec-title" style={{ marginBottom: 0 }}>Grow With Accelia</h2>
          </div>
          <button className="btn-primary" style={{ background: '#1B8FA6' }} onClick={() => goTo('/careers')}>View All Openings</button>
        </div>
        <div className="job-list">
          {JOBS.slice(0, 4).map((j, i) => (
            <div key={i} className="job-card">
              <div className="job-info">
                <h3>{j.title}</h3>
                <div className="job-meta">
                  <span className="j-tag">{j.dept}</span>
                  <span>📍 {j.location}</span>
                  {/* Vacancy count automatically fetches from constants.js */}
                  <span style={{ color: '#1B8FA6', fontWeight: '700' }}>👥 {j.openings || 1} Openings</span>
                </div>
              </div>
              <button className="btn-apply" onClick={() => setModal({ type: 'apply', data: j })}>Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section>
        <div className="sec-tag">Our Presence</div>
        <h2 className="sec-title">Pan-India Clinical Excellence</h2>
        <div className="loc-grid">
          {LOCATIONS.map((l, i) => (
            <div key={i} className={`loc-card${l.hq ? ' loc-card--hq' : ''}`}>
              <div className="loc-card__icon">{l.icon}</div>
              <h3>{l.name}</h3>
              <p>{l.note}</p>
              {l.hq && <div className="hq-badge">HQ</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="cta-strip">
        <div>
          <h2>Ready to Partner With Us?</h2>
          <p>Email: acceliaclinicalsolution@gmail.com | Phone: +91 8282986162</p>
        </div>
        <button className="btn-primary" onClick={() => goTo('/contact')}>Contact Us →</button>
      </div>

      <Footer />

      <Modal modal={modal} onClose={() => setModal(null)} onContact={() => goTo('/contact')} />
    </>
  );
}