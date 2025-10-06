import { useState } from 'react'

const Journals = () => {
  const [selectedJournal, setSelectedJournal] = useState(null)

  const journals = {
    jcids: {
      title: 'JCIDS',
      fullName: 'Journal of Computational Intelligence and Decision Science',
      description: 'Leading research in artificial intelligence, machine learning, and intelligent decision-making systems for advancing computational intelligence.',
      issn: '2348-8549',
      focus: 'Artificial Intelligence & Machine Learning',
      status: 'Active',
      color: '#3b82f6',
      domains: [
        'Artificial Intelligence',
        'Machine Learning',
        'Data Science',
        'Decision Support Systems',
        'Neural Networks',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision'
      ],
      metrics: {
        'Acceptance Rate': '25%',
        'Review Time': '6-8 weeks',
        'Publication Fee': 'Waived for developing countries',
        'Indexing': 'Major databases'
      }
    },
    cmes: {
      title: 'CMES',
      fullName: 'Computational Modeling and Engineering Sciences',
      description: 'Advanced computational methods and engineering solutions for complex real-world challenges and innovative technological breakthroughs.',
      issn: 'Coming Soon',
      focus: 'Computational Engineering',
      status: 'Active',
      color: '#10b981',
      domains: [
        'Computational Mechanics',
        'Finite Element Analysis',
        'Multiphysics Modeling',
        'Computational Fluid Dynamics',
        'Structural Analysis',
        'Materials Modeling',
        'Computational Biology',
        'Engineering Optimization'
      ],
      metrics: {
        'Acceptance Rate': '30%',
        'Review Time': '8-10 weeks',
        'Publication Fee': 'Transparent pricing',
        'Indexing': 'Under review'
      }
    }
  }

  return (
    <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div className="journals-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '800', 
          color: '#1e293b', 
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Our Research Journals
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#64748b', 
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Discover our portfolio of high-impact, peer-reviewed journals advancing research across multiple disciplines
        </p>
      </div>

      {/* Journal Overview */}
      <div style={{ 
        background: 'white', 
        borderRadius: '20px', 
        padding: '40px', 
        marginBottom: '60px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#3b82f6', marginBottom: '8px' }}>2</div>
            <div style={{ color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Journals</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#10b981', marginBottom: '8px' }}>16+</div>
            <div style={{ color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Research Domains</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#f59e0b', marginBottom: '8px' }}>100%</div>
            <div style={{ color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Open Access</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: '800', color: '#ef4444', marginBottom: '8px' }}>Global</div>
            <div style={{ color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Reach</div>
          </div>
        </div>
      </div>

      {/* Journals Grid */}
      <div style={{ display: 'grid', gap: '40px', marginBottom: '80px' }}>
        {Object.entries(journals).map(([key, journal]) => (
          <div
            key={key}
            style={{
              background: 'white',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: `2px solid ${journal.color}20`,
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: selectedJournal === key ? '1fr' : '2fr 1fr',
              gap: '40px',
              alignItems: 'start'
            }}>
              <div>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: journal.color,
                    color: 'white',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    {journal.focus}
                  </div>
                  <h2 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '800', 
                    color: journal.color, 
                    marginBottom: '8px' 
                  }}>
                    {journal.title}
                  </h2>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    color: '#64748b', 
                    marginBottom: '16px',
                    fontWeight: '600'
                  }}>
                    {journal.fullName}
                  </h3>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.6', 
                    color: '#475569',
                    marginBottom: '24px'
                  }}>
                    {journal.description}
                  </p>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '20px',
                  marginBottom: '32px'
                }}>
                  <div style={{ 
                    background: '#f8fafc', 
                    padding: '20px', 
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h4 style={{ color: '#1e293b', marginBottom: '12px', fontSize: '1rem' }}>Publication Details</h4>
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ color: '#64748b', fontSize: '0.9rem' }}>ISSN: </span>
                      <span style={{ color: '#1e293b', fontWeight: '600' }}>{journal.issn}</span>
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Status: </span>
                      <span style={{ 
                        background: '#dcfce7', 
                        color: '#166534', 
                        padding: '2px 8px', 
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {journal.status}
                      </span>
                    </div>
                  </div>

                  <div style={{ 
                    background: '#f8fafc', 
                    padding: '20px', 
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h4 style={{ color: '#1e293b', marginBottom: '12px', fontSize: '1rem' }}>Journal Metrics</h4>
                    {Object.entries(journal.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key} style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{key}: </span>
                        <span style={{ color: '#1e293b', fontWeight: '600' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {selectedJournal !== key && (
                <div>
                  <h4 style={{ color: '#1e293b', marginBottom: '16px' }}>Research Domains</h4>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px',
                    marginBottom: '24px'
                  }}>
                    {journal.domains.slice(0, 6).map((domain, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '6px 12px',
                          background: `${journal.color}10`,
                          border: `1px solid ${journal.color}30`,
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          color: journal.color,
                          fontWeight: '500'
                        }}
                      >
                        {domain}
                      </span>
                    ))}
                    {journal.domains.length > 6 && (
                      <span style={{ color: '#64748b', fontSize: '0.85rem', alignSelf: 'center' }}>
                        +{journal.domains.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {selectedJournal === key && (
              <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '30px',
                  marginBottom: '32px'
                }}>
                  <div>
                    <h4 style={{ color: '#1e293b', marginBottom: '16px' }}>All Research Domains</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {journal.domains.map((domain, index) => (
                        <span
                          key={index}
                          style={{
                            padding: '6px 12px',
                            background: `${journal.color}10`,
                            border: `1px solid ${journal.color}30`,
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            color: journal.color,
                            fontWeight: '500'
                          }}
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 style={{ color: '#1e293b', marginBottom: '16px' }}>Complete Metrics</h4>
                    {Object.entries(journal.metrics).map(([key, value]) => (
                      <div key={key} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginBottom: '8px',
                        padding: '8px 0',
                        borderBottom: '1px solid #f1f5f9'
                      }}>
                        <span style={{ color: '#64748b' }}>{key}:</span>
                        <span style={{ color: '#1e293b', fontWeight: '600' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              marginTop: '24px',
              flexWrap: 'wrap'
            }}>
              <button
                style={{
                  background: journal.color,
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => window.location.href = '/submit'}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Submit to {journal.title}
              </button>
              <button
                style={{
                  background: 'transparent',
                  color: journal.color,
                  border: `2px solid ${journal.color}`,
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setSelectedJournal(selectedJournal === key ? null : key)}
                onMouseOver={(e) => {
                  e.target.style.background = journal.color;
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = journal.color;
                }}
              >
                {selectedJournal === key ? 'Show Less' : 'Learn More'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        borderRadius: '24px',
        padding: '60px 40px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          marginBottom: '16px',
          color: 'white'
        }}>
          Ready to Publish Your Research?
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '32px', 
          color: '#cbd5e1',
          maxWidth: '600px',
          margin: '0 auto 32px'
        }}>
          Join thousands of researchers worldwide who trust Genosis Press for their academic publishing needs.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            style={{
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '1.1rem',
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
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onClick={() => window.location.href = '/reviewers'}
            onMouseOver={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#1e293b';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Become a Reviewer
          </button>
        </div>
      </div>
    </div>
  )
}

export default Journals
