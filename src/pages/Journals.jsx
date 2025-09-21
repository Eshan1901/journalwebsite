import { useState } from 'react'

const Journals = () => {
  const [showGuidelines, setShowGuidelines] = useState(false)
  const [guidelineContent, setGuidelineContent] = useState('')

  const handleGuidelineClick = async () => {
    if (!guidelineContent) {
      try {
        const response = await fetch('/j1.txt')
        const content = await response.text()
        setGuidelineContent(content)
      } catch (error) {
        console.error('Error loading guidelines:', error)
      }
    }
    setShowGuidelines(!showGuidelines)
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      {!showGuidelines ? (
        <div className="card" style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }} onClick={handleGuidelineClick}>
          <h3 style={{ 
            color: '#2c4a80', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            margin: 0
          }}>
            <i className="fas fa-file-alt"></i>
            JCIDS Journal Guidelines
          </h3>
        </div>
      ) : (
        <div className="card" style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '2rem' 
          }}>
            <h2 style={{ color: '#2c4a80', margin: 0 }}>JCIDS Journal Guidelines</h2>
            <button 
              onClick={handleGuidelineClick}
              style={{
                background: 'none',
                border: '1px solid #2c4a80',
                color: '#2c4a80',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
          <div style={{ 
            whiteSpace: 'pre-wrap', 
            lineHeight: '1.6',
            color: '#333'
          }}>
            {guidelineContent.split('\n\n').map((section, index) => (
              <div key={index} style={{ marginBottom: '1.5rem' }}>
                {section}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Journals
