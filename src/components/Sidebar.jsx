import { useLocation } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()

  // Define sections based on current page
  const getPageSections = () => {
    switch (location.pathname) {
      case '/journals':
        return [
          { id: 'welcome', title: 'Welcome', icon: '🏠' },
          { id: 'vision', title: 'Vision & Mission', icon: '👁️' },
          { id: 'aim', title: 'Journal Aim', icon: '🎯' },
          { id: 'domain-tracks', title: 'Domain Tracks', icon: '🌐' },
          { id: 'editorial-policy', title: 'Editorial Policy', icon: '📋' },
          { id: 'reviewer-policy', title: 'Reviewer Policy', icon: '✅' },
          { id: 'open-access', title: 'Open Access', icon: '🔓' }
        ]
      case '/editors':
        return [
          { id: 'editor-in-chief', title: 'Editor-in-Chief', icon: '👑' },
          { id: 'associate-editors', title: 'Associate Editors', icon: '👔' },
          { id: 'assistant-editors', title: 'Assistant Editors', icon: '👥' }
        ]
      case '/submit':
        return [
          { id: 'guidelines', title: 'Guidelines', icon: '📝' },
          { id: 'process', title: 'Review Process', icon: '🔄' },
          { id: 'contact', title: 'Contact', icon: '📧' }
        ]
      default:
        return [
          { id: 'about', title: 'About JCIDS', icon: 'ℹ️' },
          { id: 'highlights', title: 'Highlights', icon: '⭐' },
          { id: 'domains', title: 'Research Areas', icon: '🔬' }
        ]
    }
  }

  const currentSections = getPageSections()

  const handleSectionClick = (sectionId) => {
    window.dispatchEvent(new CustomEvent('changeSectionFromSidebar', { 
      detail: { sectionId } 
    }))
    onClose()
  }

  const handlePageNavigation = (page) => {
    window.location.href = page
    onClose()
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="sidebar-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            margin: '0', 
            fontSize: '1.1rem', 
            fontWeight: '600',
            color: '#ffffff'
          }}>
            📚 JCIDS
          </h3>
          <p style={{ 
            margin: '4px 0 0 0', 
            fontSize: '0.8rem', 
            color: '#e2e8f0'
          }}>
            Journal Navigation
          </p>
        </div>
      </div>
      
      <div className="sidebar-content">
        {/* Current Page Sections */}
        {currentSections.length > 0 && (
          <div style={{ padding: '20px 0' }}>
            <div style={{ 
              padding: '0 20px 15px 20px',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {location.pathname === '/journals' && 'Journal Sections'}
              {location.pathname === '/editors' && 'Editorial Team'}
              {location.pathname === '/submit' && 'Submission Info'}
              {location.pathname === '/' && 'About JCIDS'}
            </div>
            
            <div>
              {currentSections.map((section) => (
                <div key={section.id} 
                     className="sidebar-item"
                     onClick={() => handleSectionClick(section.id)}>
                  <span style={{ fontSize: '16px' }}>{section.icon}</span>
                  <span>{section.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Navigation to other pages */}
        <div style={{ 
          padding: '20px 0',
          borderTop: currentSections.length > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none'
        }}>
          <div style={{ 
            padding: '0 20px 15px 20px',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Other Pages
          </div>
          
          <div>
            {location.pathname !== '/' && (
              <div className="sidebar-item" onClick={() => handlePageNavigation('/')}>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </div>
            )}
            
            {location.pathname !== '/journals' && (
              <div className="sidebar-item" onClick={() => handlePageNavigation('/journals')}>
                <i className="fas fa-book-open"></i>
                <span>Journal</span>
              </div>
            )}
            
            {location.pathname !== '/editors' && (
              <div className="sidebar-item" onClick={() => handlePageNavigation('/editors')}>
                <i className="fas fa-users"></i>
                <span>Editorial Team</span>
              </div>
            )}
            
            {location.pathname !== '/submit' && (
              <div className="sidebar-item" onClick={() => handlePageNavigation('/submit')}>
                <i className="fas fa-paper-plane"></i>
                <span>Submit Paper</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Contact Section */}
        <div style={{ 
          padding: '20px 15px',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div className="sidebar-item" 
               onClick={() => window.location.href = 'mailto:editorial@gnosispress.org'}
               style={{
                 backgroundColor: 'rgba(34, 197, 94, 0.15)',
                 border: '1px solid rgba(34, 197, 94, 0.3)',
                 borderRadius: '8px'
               }}>
            <i className="fas fa-envelope" style={{ color: '#4ade80' }}></i>
            <span>Contact Editorial</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar