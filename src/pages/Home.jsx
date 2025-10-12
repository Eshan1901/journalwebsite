import { useState } from 'react'

const Home = () => {
  return (
    <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '15px' }}>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Leading Academic Publisher</span>
          </div>
          
          <h1 className="hero-title">
            GNOSIS PRESS
          </h1>
          
          <p className="hero-subtitle">
            Empowering Global Research Through Excellence in Academic Publishing
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Premium Journal</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Open Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Journal */}
      <div style={{ 
        background: 'white', 
        borderRadius: '20px', 
        padding: '35px', 
        marginBottom: '40px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
        border: '2px solid #3b82f620'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            fontWeight: '800', 
            color: '#1e293b', 
            marginBottom: '12px' 
          }}>
            Our Premier Journal
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover JCIDS - The Journal of Computational Intelligence and Decision Science
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr',
          gap: '35px',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '2.2rem', 
              fontWeight: '800', 
              color: '#3b82f6', 
              marginBottom: '6px' 
            }}>
              JCIDS
            </h3>
            <h4 style={{ 
              fontSize: '1.2rem', 
              color: '#64748b', 
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Journal of Computational Intelligence and Decision Science
            </h4>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.5', 
              color: '#475569',
              marginBottom: '25px'
            }}>
              Leading research in artificial intelligence, machine learning, and intelligent decision-making systems for advancing computational intelligence.
            </p>
            
            <div style={{ 
              display: 'flex',
              gap: '14px',
              marginTop: '25px'
            }}>
              <button
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => window.location.href = '/journals'}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Explore Journal
              </button>
              <button
                style={{
                  background: 'transparent',
                  color: '#3b82f6',
                  border: '2px solid #3b82f6',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => window.location.href = '/submit'}
                onMouseOver={(e) => {
                  e.target.style.background = '#3b82f6';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#3b82f6';
                }}
              >
                Submit Paper
              </button>
            </div>
          </div>

          <div>
            <div style={{ 
              background: '#f8fafc', 
              padding: '25px', 
              borderRadius: '14px',
              border: '1px solid #e2e8f0'
            }}>
              <h5 style={{ color: '#1e293b', marginBottom: '18px', fontSize: '1.1rem' }}>Journal Highlights</h5>
              
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#3b82f6' }}>2348-8549</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem' }}>ISSN (Online)</div>
              </div>
              
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#10b981' }}>15-30</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Days Review Time</div>
              </div>
              
              <div style={{ marginBottom: '14px' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#f59e0b' }}>100%</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Open Access</div>
              </div>
              
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ef4444' }}>Global</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Reach</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Areas */}
      <div style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
        borderRadius: '20px', 
        padding: '45px 35px', 
        marginBottom: '45px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '2.2rem', 
            fontWeight: '800', 
            color: '#1e293b', 
            marginBottom: '12px' 
          }}>
            Research Domain Tracks
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            JCIDS welcomes research across eight comprehensive tracks covering the full spectrum of computational intelligence
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px' 
        }}>
          {[
            {
              icon: '🤖',
              title: 'AI & Machine Learning',
              description: 'Neural networks, deep learning, reinforcement learning, and AI optimization techniques'
            },
            {
              icon: '📊',
              title: 'Data Mining & Analytics',
              description: 'Big data processing, pattern recognition, clustering, and cloud analytics'
            },
            {
              icon: '💬',
              title: 'Natural Language Processing',
              description: 'Text analysis, language models, machine translation, and conversational AI'
            },
            {
              icon: '👁️',
              title: 'Computer Vision',
              description: 'Image recognition, object detection, video analysis, and visual pattern recognition'
            },
            {
              icon: '🌐',
              title: 'IoT & Edge Computing',
              description: 'Internet of Things, edge computing, sensor networks, and intelligent systems'
            },
            {
              icon: '🔒',
              title: 'AI Security & Ethics',
              description: 'AI security, privacy-preserving ML, ethical AI, and algorithmic fairness'
            },
            {
              icon: '🏥',
              title: 'Health Informatics',
              description: 'Medical AI, genomics, precision medicine, and healthcare analytics'
            },
            {
              icon: '🤖',
              title: 'Robotics & Automation',
              description: 'Autonomous systems, robotic automation, and human-robot interaction'
            }
          ].map((track, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                padding: '25px',
                borderRadius: '14px',
                boxShadow: '0 3px 12px rgba(0, 0, 0, 0.04)',
                border: '1px solid #e2e8f0',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{track.icon}</div>
              <h4 style={{ 
                color: '#1e293b', 
                marginBottom: '10px', 
                fontSize: '1.1rem',
                fontWeight: '700'
              }}>
                {track.title}
              </h4>
              <p style={{ 
                margin: '0', 
                lineHeight: '1.5', 
                color: '#64748b',
                fontSize: '0.9rem'
              }}>
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        borderRadius: '20px',
        padding: '45px 35px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{ 
          fontSize: '2.2rem', 
          fontWeight: '800', 
          marginBottom: '12px',
          color: 'white'
        }}>
          Ready to Publish Your Research?
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          marginBottom: '28px', 
          color: '#dbeafe',
          maxWidth: '600px',
          margin: '0 auto 28px'
        }}>
          Join researchers worldwide who trust Gnosis Press for their academic publishing needs.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            style={{
              background: 'white',
              color: '#3b82f6',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={() => window.location.href = '/submit'}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Submit Your Paper
          </button>
          <button 
            style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '14px 28px',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={() => window.location.href = '/journals'}
            onMouseOver={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#3b82f6';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home