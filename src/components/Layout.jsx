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
            <h1>Journal of Computational Intelligence and Decision Science</h1>
            <div className="journal-meta">
              <p>JCIDS | Double-Blind Peer-Reviewed Journal</p>
              <p>ISSN: 2348-8549 (Online) | Impact Factor: 8.2</p>
            </div>
          </div>
          <div className="header-buttons">
            <Link to="/submit" className="header-btn">
              <i className="fas fa-paper-plane"></i>
              Submit Paper
            </Link>
            <Link to="/admin" className="header-btn">
              <i className="fas fa-cog"></i>
              Admin
            </Link>
          </div>
        </div>
      </header>

      <nav className={`navbar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="container">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <ul className="navbar-nav">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/journals" className={isActive('/journals') ? 'active' : ''}>
                Journals
              </Link>
            </li>
            <li>
              <Link to="/submit" className={isActive('/submit') ? 'active' : ''}>
                For Authors
              </Link>
            </li>
            <li>
              <Link to="/editors" className={isActive('/editors') ? 'active' : ''}>
                For Editors
              </Link>
            </li>
            <li>
              <Link to="/reviewers" className={isActive('/reviewers') ? 'active' : ''}>
                For Reviewers
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
          <p>&copy; 2025 Journal of Computational Intelligence and Decision Science. All rights reserved.</p>
          <p>Contact: <a href="mailto:submissions@jcids.org" style={{color: '#66b3ff'}}>submissions@jcids.org</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Layout