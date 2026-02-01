import { useLocation } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()

  // Define sections based on current page
  const getPageSections = () => {
    switch (location.pathname) {
      case '/journals':
        return [
          { id: 'about-journal', title: 'About the Journal', icon: '📚' },
          { id: 'vision', title: 'Journal Overview', icon: '🎯' },
          { id: 'editorial-policy', title: 'Editorial Policy', icon: '📋' },
          { id: 'reviewer-policy', title: 'Reviewer Policy', icon: '✅' },
          { id: 'open-access', title: 'Open Access Policy', icon: '🔓' },
          { id: 'editorial-workflow', title: 'Editorial Workflow', icon: '🔄' },
          { id: 'publication-ethics', title: 'Publication Ethics', icon: '⚖️' },
          { id: 'article-processing-charges', title: 'Processing Charges', icon: '💰' },
          { id: 'instructions-authors', title: 'Instructions to Authors', icon: '📝' },
          { id: 'archives', title: 'Archives', icon: '📦' },
          { id: 'current-issue', title: 'Current Issue', icon: '📰' },
          { id: 'articles-in-press', title: 'Articles in Press', icon: '⏳' },
          { id: 'contact-information', title: 'Contact Information', icon: '📧' }
        ]
      case '/editors':
        return [
          { id: 'editorial-board', title: 'Editorial Board', icon: '👥' },
          { id: 'editor-in-chief', title: 'Editor-in-Chief', icon: '👑' },
          { id: 'associate-editors', title: 'Associate Editors', icon: '👔' },
          { id: 'assistant-editors', title: 'Assistant Editors', icon: '🤝' }
        ]
      case '/instructions-to-authors':
        return []
      default:
        return []
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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '8px'
          }}>
            <div className="sidebar-logo-container">
              <img src="/logo.png" alt="Gnosis Press Logo" className="sidebar-logo" />
            </div>
            <h3 style={{ 
              margin: '0', 
              fontSize: '1.2rem', 
              fontWeight: '700',
              color: '#ffffff',
              marginLeft: '12px'
            }}>
              JCIDS
            </h3>
          </div>
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
                <i className="fas fa-book"></i>
                <span>JCIDS Journal</span>
              </div>
            )}
            
            {location.pathname !== '/editors' && (
              <div className="sidebar-item" onClick={() => handlePageNavigation('/editors')}>
                <i className="fas fa-user-tie"></i>
                <span>Editorial Board</span>
              </div>
            )}
            
            {location.pathname !== '/instructions-to-authors' && (
              <div className="sidebar-item" onClick={() => handlePageNavigation('/instructions-to-authors')}>
                <i className="fas fa-file-alt"></i>
                <span>Author Guidelines</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Contact Section */}
        <div style={{ 
          padding: '20px 15px',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ 
            padding: '0 5px 10px 5px',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Quick Actions
          </div>
          
          <div className="sidebar-item" 
               onClick={() => window.location.href = '/instructions-to-authors'}
               style={{
                 backgroundColor: 'rgba(59, 130, 246, 0.15)',
                 border: '1px solid rgba(59, 130, 246, 0.3)',
                 borderRadius: '8px',
                 marginBottom: '10px'
               }}>
            <i className="fas fa-paper-plane" style={{ color: '#60a5fa' }}></i>
            <span>Submit Paper</span>
          </div>
          
          <div className="sidebar-item" 
               onClick={() => window.location.href = 'mailto:submission.jcids@gnosispress.org'}
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