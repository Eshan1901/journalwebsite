import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [journalDropdownOpen, setJournalDropdownOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
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

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Encode the search query and navigate to a search results page
      // Or open a modal with results
      const query = encodeURIComponent(searchQuery.trim())
      
      // Option 1: Open search in new tab with Google site search
      window.open(`https://www.google.com/search?q=site:${window.location.hostname} ${searchQuery.trim()}`, '_blank')
      
      // Close search and reset
      setSearchOpen(false)
      setSearchQuery('')
    }
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
            <li className="nav-dropdown">
              <div 
                className={`nav-link ${isActive('/journals') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setJournalDropdownOpen(!journalDropdownOpen);
                }}
                style={{ cursor: 'pointer' }}
              >
                <span>Journal</span>
                <i className={`fas fa-chevron-${journalDropdownOpen ? 'up' : 'down'}`} style={{ marginLeft: '5px', fontSize: '0.75rem' }}></i>
              </div>
              {journalDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/journals" className="dropdown-item" onClick={() => setJournalDropdownOpen(false)}>
                      JCIDS
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/submit" className={`nav-link ${isActive('/submit') ? 'active' : ''}`}>
                <span>Publish With Us</span>
              </Link>
            </li>
            <li>
              <Link to="/editors" className={`nav-link ${isActive('/editors') ? 'active' : ''}`}>
                <span>Editorial Inside</span>
              </Link>
            </li>
            <li>
              <Link to="/reviewers" className={`nav-link ${isActive('/reviewers') ? 'active' : ''}`}>
                <span>Reviewers</span>
              </Link>
            </li>
          </ul>
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
                  <a href="https://www.linkedin.com/in/gnosis-press-03a13838a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="https://x.com/gnosispress" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>𝕏</a>
                  <a href="https://www.facebook.com/profile.php?id=61582160369817" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h5>Our Journal</h5>
              <ul>
                <li><a href="/journals">Journal of Computational Intelligence and Decision Science</a></li>
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
                <p><i className="fas fa-envelope"></i> <a href="mailto:info@gnosispress.org">info@gnosispress.org</a></p>
                <p><i className="fas fa-paper-plane"></i> <a href="mailto:submission.jcids@gnosispress.org">submission.jcids@gnosispress.org</a></p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 Gnosis Press. All rights reserved. | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
              <div className="certifications">
                <a href="https://publicationethics.org/" target="_blank" rel="noopener noreferrer" className="cert-badge" style={{ textDecoration: 'none' }}>COPE Member</a>
                <a href="https://doaj.org/" target="_blank" rel="noopener noreferrer" className="cert-badge" style={{ textDecoration: 'none' }}>DOAJ Listed</a>
                <a href="https://www.budapestopenaccessinitiative.org/" target="_blank" rel="noopener noreferrer" className="cert-badge" style={{ textDecoration: 'none' }}>Open Access</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout