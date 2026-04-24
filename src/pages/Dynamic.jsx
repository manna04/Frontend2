import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import '../assets/css/Dynamic.css';

function DetailModal({ data, type, onClose }) {
  if (!data) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <span className="m-tag">{type.toUpperCase()}</span>
        <h2 className="modal-title">{data.title}</h2>
        <p className="modal-desc">{data.desc || data.info}</p>
        <div className="modal-footer-info">
          Date: {data.date || "N/A"}
        </div>
      </div>
    </div>
  );
}

const DATA_STORE = {
  news: {
    heading: "Latest Clinical News",
    sub: "Real-time updates on our clinical milestones and site expansions.",
    items: [
      { id: 1, title: "30+ Trials Completed", desc: "Accelia has reached a significant milestone by completing 30+ trials within 1.5 years.", date: "April 2026" },
      { id: 2, title: "New Sites in UP", desc: "Expanding our investigator network across major cities in Uttar Pradesh.", date: "March 2026" }
    ]
  },
  reports: {
    heading: "Regulatory & SMO Reports",
    sub: "In-depth analysis of recruitment metrics and compliance audits.",
    items: [
      { id: 1, title: "Annual Performance 2024", desc: "A comprehensive review of recruitment performance and site quality metrics.", date: "Feb 2026" },
      { id: 2, title: "GCP Audit Summary", desc: "Ensuring data integrity and 100% regulatory alignment across all sites.", date: "Jan 2026" }
    ]
  },
  events: {
    heading: "Upcoming Clinical Events",
    sub: "Join our workshops, summits, and investigator training programs.",
    items: [
      { id: 1, title: "GCP Workshop – Kolkata", desc: "Intensive training on Good Clinical Practice for investigators.", date: "May 15, 2026" },
      { id: 2, title: "Clinical Research Summit", desc: "Industry leaders gathering to discuss the future of trials in India.", date: "June 8, 2026" }
    ]
  }
};

export default function AllNews() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const type = query.get('type') || 'news';
  const currentData = DATA_STORE[type] || DATA_STORE.news;

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <>
      <Nav />
      <div className="all-news-wrapper">
        <header className="dynamic-hero-header">
          <div className="sec-tag sec-tag--gold">{type.toUpperCase()}</div>
          <h1 className="main-title">{currentData.heading}</h1>
          <p className="sub-description">{currentData.sub}</p>
        </header>

        <section className="dynamic-list-container">
          <div className="dynamic-list-grid">
            {currentData.items.map((item) => (
              <div key={item.id} className="dynamic-item-card" onClick={() => setSelectedItem(item)}>
                <div className="card-top-info">
                  <span className="type-label">{type}</span>
                  <h3>{item.title}</h3>
                  <p>{(item.desc || item.info).substring(0, 90)}...</p>
                </div>
                <button className="card-action-btn">View Full Details →</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <DetailModal 
        data={selectedItem} 
        type={type} 
        onClose={() => setSelectedItem(null)} 
      />
      <Footer />
    </>
  );
}