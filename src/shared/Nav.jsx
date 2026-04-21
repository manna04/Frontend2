import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/variables.css';
import '../assets/css/Nav.css';
import logo from '../assets/images/logo.png'

const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'Solutions',    path: '/solutions' },
  { label: 'Expertise',    path: '/expertise' },
  { label: 'About',        path: '/about' },
  { label: 'News & Events',path: '/news' },
  { label: 'Careers',      path: '/careers' },
  { label: 'Locations',    path: '/locations' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const closeMenu = () => setIsOpen(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="nav">
        {/* Logo */}
        <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Aceliea logo" />
            </Link>
          </div>

        {/* Desktop Links */}
        <div className="nav__links">
          {NAV_LINKS.map(({ label, path }) => (
            <button
              key={path}
              className={`nav__link${location.pathname === path ? ' active' : ''}`}
              onClick={() => handleNav(path)}
            >
              {label}
            </button>
          ))}
          <button className="nav__link nav__cta" onClick={() => handleNav('/contact')}>
            Contact Us
          </button>
        </div>

        {/* Hamburger */}
        <div
          className="nav__burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="nav__mobile-drawer">
          {NAV_LINKS.map(({ label, path }) => (
            <button
              key={path}
              className={`nav__mobile-item${location.pathname === path ? ' active' : ''}`}
              onClick={() => handleNav(path)}
            >
              {label}
            </button>
          ))}
          <button className="nav__mobile-item" onClick={() => handleNav('/contact')} style={{ color: '#26B5CF', fontWeight: 600 }}>
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}
