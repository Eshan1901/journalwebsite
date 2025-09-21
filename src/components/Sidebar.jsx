import { useState } from 'react'

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarSections = [
    { id: 'vision', title: 'Vision & Mission', icon: 'fas fa-eye' },
    { id: 'aim', title: 'Journal Aim', icon: 'fas fa-bullseye' },
    { id: 'domain-tracks', title: 'Domain Tracks', icon: 'fas fa-sitemap' },
    { id: 'editorial-policy', title: 'Editorial Policy', icon: 'fas fa-gavel' },
    { id: 'reviewer-policy', title: 'Reviewer Policy', icon: 'fas fa-user-check' },
    { id: 'journal-policy', title: 'Journal Policy', icon: 'fas fa-file-contract' },
    { id: 'open-access', title: 'Open Access Policy', icon: 'fas fa-unlock-alt' },
    { id: 'copyright', title: 'Copyright Policy', icon: 'fas fa-copyright' },
    { id: 'plagiarism-ai', title: 'Plagiarism & AI Policy', icon: 'fas fa-robot' },
    { id: 'retraction', title: 'Retraction Policy', icon: 'fas fa-undo' },
    { id: 'fee-policy', title: 'Fee Policy', icon: 'fas fa-money-bill-wave' }
  ]

  const handleSectionClick = (sectionId) => {
    // Scroll to the content section on the main page
    const mainContent = document.querySelector('.container')
    if (mainContent) {
      // Trigger section change on the home page
      window.dispatchEvent(new CustomEvent('changeSectionFromSidebar', { 
        detail: { sectionId } 
      }))
    }
    onClose() // Close sidebar after navigation
  }

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="sidebar-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <h3>JCIDS</h3>
          <p style={{ fontSize: '0.9rem', margin: '5px 0 0 0', opacity: 0.9 }}>
            Journal of Computational Intelligence and Decision Science
          </p>
        </div>
        <div className="sidebar-content">
          {sidebarSections.map((section) => (
            <div key={section.id} className="sidebar-section">
              <div 
                className="sidebar-item"
                onClick={() => handleSectionClick(section.id)}
              >
                <i className={section.icon}></i>
                <span>{section.title}</span>
              </div>
            </div>
          ))}
          
          {/* Quick Actions Section */}
          <div style={{ marginTop: '30px' }}>
            <div style={{ 
              padding: '15px 20px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: '0.95rem',
              fontWeight: '600'
            }}>
              Quick Actions
            </div>
            
            <div className="sidebar-item" onClick={() => window.location.href = '/submit'}>
              <i className="fas fa-paper-plane"></i>
              <span>Submit Research</span>
            </div>
            
            <div className="sidebar-item" onClick={() => window.location.href = 'mailto:submissions@jcids.org'}>
              <i className="fas fa-envelope"></i>
              <span>Contact Editorial</span>
            </div>
            
            <div className="sidebar-item">
              <i className="fas fa-file-download"></i>
              <span>Author Template</span>
            </div>
            
            <div className="sidebar-item">
              <i className="fas fa-search"></i>
              <span>Reviewer Portal</span>
            </div>
            
            <div className="sidebar-item" onClick={() => window.location.href = '/admin'}>
              <i className="fas fa-user-shield"></i>
              <span>Admin Access</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar