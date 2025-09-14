import { useState } from 'react'

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarSections = [
    { id: 'about', title: 'About JCIDS', icon: 'fas fa-info-circle' },
    { id: 'aim-scope', title: 'Aim & Scope', icon: 'fas fa-bullseye' },
    { id: 'editorial-board', title: 'Editorial Board', icon: 'fas fa-users' },
    { id: 'submission', title: 'Paper Submission', icon: 'fas fa-upload' },
    { id: 'guidelines', title: 'Author Guidelines', icon: 'fas fa-book' },
    { id: 'ethics', title: 'Publication Ethics', icon: 'fas fa-balance-scale' },
    { id: 'indexing', title: 'Indexing & Abstracting', icon: 'fas fa-database' },
    { id: 'charges', title: 'Publication Charges', icon: 'fas fa-dollar-sign' }
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
              <i className="fas fa-edit"></i>
              <span>Submit Paper</span>
            </div>
            
            <div className="sidebar-item" onClick={() => window.location.href = 'mailto:submissions@jcids.org'}>
              <i className="fas fa-envelope"></i>
              <span>Email Submission</span>
            </div>
            
            <div className="sidebar-item">
              <i className="fas fa-download"></i>
              <span>Download Template</span>
            </div>
            
            <div className="sidebar-item" onClick={() => window.location.href = '/admin'}>
              <i className="fas fa-user-shield"></i>
              <span>Admin Panel</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar