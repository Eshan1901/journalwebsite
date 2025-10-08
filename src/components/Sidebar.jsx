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
          
          {/* Publisher Info */}
          <div style={{ textAlign: 'center', marginBottom: '20px', padding: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.3rem', fontWeight: 'bold' }}>📚 Gnosis Press</h3>
            <p style={{ margin: '0', fontSize: '0.9rem', opacity: 0.8 }}>Academic Publishing Excellence</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '0.8rem', opacity: 0.7 }}>2 Premium Journals</p>
          </div>
          
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '10px', 
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '15px'
          }}>
            <p style={{ fontSize: '0.9rem', margin: '0', color: 'white', opacity: 0.9 }}>
              📋 Navigate Journal Policies & Information
            </p>
          </div>
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
            
            <div className="sidebar-item" onClick={() => window.location.href = `/submit?journal=${selectedJournal}`}>
              <i className="fas fa-paper-plane"></i>
              <span>Submit Research</span>
            </div>
            
            <div className="sidebar-item" onClick={() => window.location.href = `mailto:submissions@gnosispress.org?subject=${selectedJournal.toUpperCase()} Submission Inquiry`}>
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
            
            {/* Gnosis Press Footer */}
            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '5px' }}>
                Powered by
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>
                📚 Gnosis Press
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '3px' }}>
                Academic Publishing Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar