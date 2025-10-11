import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="layout">
      <header className={`journal-header ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="header-content">
          <div className="journal-info">
            <div className="brand-container">
              <div className="brand-icon-large">
                <img src="/logo.png" alt="Gnosis Press Logo" className="brand-logo" />
              </div>
              <div className="brand-text">
                <h1>GNOSIS PRESS</h1>
                <span className="brand-tagline">Academic Publishing Excellence</span>
              </div>
            </div>
            <div className="journal-meta">
              <div className="meta-badge">
                <span className="badge-premium">PREMIUM</span>
                <span className="badge-journals">1 Journal</span>
              </div>
              <p>Double-Blind Peer Review • Open Access • Global Reach</p>
            </div>
          </div>
          <div className="header-buttons">
            <Link to="/submit" className="header-btn primary">
              <i className="fas fa-paper-plane"></i>
              Submit Research
            </Link>
          </div>
        </div>
      </header>

      <nav className={`navbar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="container">
          <button className="menu-toggle modern" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
            <span>Menu</span>
          </button>
          <ul className="navbar-nav">
            <li>
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/journals" className={`nav-link ${isActive('/journals') ? 'active' : ''}`}>
                <span>Our Journals</span>
              </Link>
            </li>
            <li>
              <Link to="/submit" className={`nav-link ${isActive('/submit') ? 'active' : ''}`}>
                <span>Publish With Us</span>
              </Link>
            </li>
            <li>
              <Link to="/editors" className={`nav-link ${isActive('/editors') ? 'active' : ''}`}>
                <span>Editorial</span>
              </Link>
            </li>
            <li>
              <Link to="/reviewers" className={`nav-link ${isActive('/reviewers') ? 'active' : ''}`}>
                <span>Reviewers</span>
              </Link>
            </li>
          </ul>
          
          <div className="navbar-actions">
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
            <div className="language-selector">
              <i className="fas fa-globe"></i>
              <span>EN</span>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
      {sidebarOpen && (
        <div className="sidebar-overlay active" onClick={closeSidebar}></div>
      )}

      <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-brand">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <div className="footer-logo-container">
                    <img src="/logo.png" alt="Gnosis Press Logo" className="footer-logo" />
                  </div>
                  <h4 style={{ 
                    margin: '0', 
                    marginLeft: '12px',
                    fontSize: '1.5rem',
                    fontWeight: '700'
                  }}>GNOSIS PRESS</h4>
                </div>
                <p>Leading academic publisher committed to advancing research and innovation through excellence in scholarly publishing.</p>
                <div className="social-links">
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                  <a href="#" aria-label="ResearchGate"><i className="fab fa-researchgate"></i></a>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h5>Our Journal</h5>
              <ul>
                <li><a href="/journals">JCIDS - Computational Intelligence</a></li>
                <li><a href="/submit">Submit Your Research</a></li>
                <li><a href="/editors">Editorial Guidelines</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h5>Resources</h5>
              <ul>
                <li><a href="/">Author Guidelines</a></li>
                <li><a href="/">Reviewer Portal</a></li>
                <li><a href="/">Publication Ethics</a></li>
                <li><a href="/">Open Access Policy</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h5>Contact Us</h5>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> <a href="mailto:info@gnosispress.com">info@gnosispress.com</a></p>
                <p><i className="fas fa-paper-plane"></i> <a href="mailto:submissions@gnosispress.com">submissions@gnosispress.com</a></p>
                <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                <p><i className="fas fa-map-marker-alt"></i> Global Publishing Network</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 Gnosis Press. All rights reserved. | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
              <div className="certifications">
                <span className="cert-badge">COPE Member</span>
                <span className="cert-badge">DOAJ Listed</span>
                <span className="cert-badge">Open Access</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout