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

          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.7', 
            color: '#64748b',
            maxWidth: '900px',
            margin: '25px auto 30px',
            textAlign: 'center'
          }}>
            An independent academic publishing platform dedicated to advancing high-quality research and knowledge dissemination across disciplines. 
            We follow an open access model, ensuring all published research is freely available worldwide. Through rigorous double-blind peer review 
            and adherence to COPE ethical standards, we create a global community of researchers committed to academic excellence and real-world impact.
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

      {/* About Gnosis Press */}
      <div style={{ 
        background: 'white', 
        borderRadius: '20px', 
        padding: '45px', 
        marginBottom: '40px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
        border: '2px solid #3b82f620'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '800', 
            color: '#1e293b', 
            marginBottom: '15px' 
          }}>
            About Gnosis Press
          </h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{ 
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.9', 
            color: '#475569',
            marginBottom: '25px',
            textAlign: 'justify'
          }}>
            <strong style={{ color: '#3b82f6' }}>GNOSIS PRESS</strong> is a new-age publishing house envisioned to redefine scholarly, professional, and creative publishing in the contemporary knowledge economy. Founded on the principle that ideas gain true value only when they are disseminated with clarity, credibility, and global reach, GNOSIS PRESS positions itself at the intersection of academic rigor, technological innovation, and ethical publishing practices.
          </p>

          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.9', 
            color: '#475569',
            marginBottom: '25px',
            textAlign: 'justify'
          }}>
            The publisher is committed to nurturing original thought and impactful research across diverse domains including <strong style={{ color: '#3b82f6' }}>engineering, computer science, management, medical sciences, social sciences, humanities, and emerging interdisciplinary areas</strong>. With a strong emphasis on quality and transparency, GNOSIS PRESS follows internationally accepted editorial standards, robust peer-review mechanisms, and plagiarism-free publication workflows to ensure the integrity and reliability of every published work.
          </p>

          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.9', 
            color: '#475569',
            marginBottom: '25px',
            textAlign: 'justify'
          }}>
            Leveraging modern digital platforms, the press offers <strong style={{ color: '#3b82f6' }}>seamless end-to-end publishing solutions</strong> encompassing manuscript development, editorial refinement, professional typesetting, DOI assignment, indexing support, and global digital dissemination, thereby enabling authors to focus on innovation while the publisher manages visibility and reach.
          </p>

          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.9', 
            color: '#475569',
            marginBottom: '25px',
            textAlign: 'justify'
          }}>
            GNOSIS PRESS actively encourages contributions from <strong style={{ color: '#3b82f6' }}>early-career researchers, seasoned academicians, industry professionals, and institutional research groups</strong>, fostering an inclusive ecosystem that bridges academia, industry, and society. In alignment with open-knowledge philosophies, the publisher supports flexible access models that enhance discoverability and citation impact without compromising ethical standards.
          </p>

          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.9', 
            color: '#475569',
            marginBottom: '25px',
            textAlign: 'justify'
          }}>
            Beyond traditional books and journals, GNOSIS PRESS also curates <strong style={{ color: '#3b82f6' }}>edited volumes, conference proceedings, handbooks, and special thematic issues</strong> that address contemporary challenges and future-oriented research directions. The press adheres to internationally recognized ethical standards, including guidelines set by the Committee on Publication Ethics (COPE), ensuring transparent and efficient editorial processes with double-blind peer review.
          </p>

          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.9', 
            color: '#475569',
            marginBottom: '35px',
            textAlign: 'justify'
          }}>
            Guided by the belief that <strong style={{ color: '#3b82f6' }}>knowledge should empower progress</strong>, GNOSIS PRESS aspires to become a trusted global platform for high-quality intellectual contributions, enabling authors and institutions to amplify their scholarly voice, advance innovation, and contribute meaningfully to the evolving landscape of education, research, and societal development.
          </p>

          {/* Key Features Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px',
            marginTop: '35px'
          }}>
            <a 
              href="https://doaj.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div style={{ 
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', 
                padding: '25px', 
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #bfdbfe',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                height: '100%'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>📖</div>
                <h4 style={{ color: '#1e293b', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '700' }}>
                  DOAJ Listed
                </h4>
                <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0', lineHeight: '1.5' }}>
                  Directory of Open Access Journals
                </p>
              </div>
            </a>

            <a 
              href="https://www.budapestopenaccessinitiative.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div style={{ 
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', 
                padding: '25px', 
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #bbf7d0',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                height: '100%'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔓</div>
                <h4 style={{ color: '#1e293b', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '700' }}>
                  Open Access
                </h4>
                <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0', lineHeight: '1.5' }}>
                  Free worldwide access to all research
                </p>
              </div>
            </a>

            <div style={{ 
              background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)', 
              padding: '25px', 
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid #f9a8d4'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🌐</div>
              <h4 style={{ color: '#1e293b', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '700' }}>
                Global Reach
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0', lineHeight: '1.5' }}>
                International community of scholars
              </p>
            </div>

            <a 
              href="https://publicationethics.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div style={{ 
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', 
                padding: '25px', 
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid #fcd34d',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                height: '100%'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 158, 11, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⚖️</div>
                <h4 style={{ color: '#1e293b', marginBottom: '8px', fontSize: '1.1rem', fontWeight: '700' }}>
                  COPE Member
                </h4>
                <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '0', lineHeight: '1.5' }}>
                  Highest ethical publishing practices
                </p>
              </div>
            </a>
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
              icon: '⚡',
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