import { useState } from 'react'

const Journals = () => {
  const [activeSection, setActiveSection] = useState('welcome')

  const journalSections = [
    {
      id: 'welcome',
      title: 'Welcome to JCIDS',
      content: (
        <div>
          {/* Hero Section */}
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '40px 30px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #bee5eb',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              color: '#1a3d6b', 
              fontSize: '2.2rem', 
              marginBottom: '20px', 
              fontWeight: 'bold' 
            }}>
              Advancing Computational Intelligence & Decision Science
            </h3>
            <div style={{ 
              background: 'rgba(26, 61, 107, 0.1)', 
              padding: '10px 20px', 
              borderRadius: '20px', 
              display: 'inline-block',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1a3d6b' }}>
                Published by Gnosis Press
              </span>
            </div>
            <p style={{ 
              fontSize: '1.3rem', 
              lineHeight: '1.6', 
              color: '#2c4a80', 
              marginBottom: '25px',
              fontWeight: '500'
            }}>
              A premier international journal dedicated to publishing cutting-edge research in AI, 
              machine learning, data science, and intelligent decision-making systems.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/submit" style={{ 
                background: '#2c4a80',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(44, 74, 128, 0.3)'
              }}>
                Submit Your Research
              </a>
            </div>
          </div>

          {/* Key Highlights */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '25px', 
            marginBottom: '40px'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>Fast Review</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>15-30</div>
              <div style={{ color: '#666', fontSize: '1rem' }}>Days average review time</div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>Open Access</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>100%</div>
              <div style={{ color: '#666', fontSize: '1rem' }}>Immediate worldwide access</div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>ISSN</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>2348-8549</div>
              <div style={{ color: '#666', fontSize: '1rem' }}>Online Journal</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      title: 'Vision & Mission',
      content: (
        <div>
          <div style={{ background: '#e8f4fd', padding: '25px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #bee5eb' }}>
            <h4 style={{ color: '#1a3d6b', marginBottom: '20px', fontSize: '1.3rem' }}>Vision</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#2c4a80' }}>
              To provide a globally recognized platform for advancing high-quality research and innovation in computational intelligence and data science, fostering knowledge that drives technology for the betterment of society.
            </p>
          </div>
          
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#2c4a80', color: 'white', padding: '20px', textAlign: 'center' }}>
              <h4 style={{ margin: '0', fontSize: '1.3rem' }}>Mission</h4>
            </div>
            <div style={{ padding: '25px' }}>
              <div style={{ display: 'grid', gap: '20px' }}>
                <div>
                  <h5 style={{ color: '#2c4a80', marginBottom: '10px' }}>Research Excellence</h5>
                  <p style={{ margin: '0', fontSize: '1rem', lineHeight: '1.5' }}>
                    To promote ethical, high-quality, and original research in computational intelligence and data science.
                  </p>
                </div>
                
                <div>
                  <h5 style={{ color: '#2c4a80', marginBottom: '10px' }}>Collaboration</h5>
                  <p style={{ margin: '0', fontSize: '1rem', lineHeight: '1.5' }}>
                    To enable interdisciplinary collaboration across academia, industry, and society.
                  </p>
                </div>
                
                <div>
                  <h5 style={{ color: '#2c4a80', marginBottom: '10px' }}>Open Access</h5>
                  <p style={{ margin: '0', fontSize: '1rem', lineHeight: '1.5' }}>
                    To support open access knowledge dissemination for global inclusivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'aim',
      title: 'Journal Aim',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #dee2e6',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#1a3d6b', marginBottom: '25px', fontSize: '2rem' }}>
              Journal Aim
            </h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.7', color: '#2c4a80', margin: '0', fontWeight: '500' }}>
              The journal aims to publish and disseminate original research, critical reviews, and innovative case studies in computational intelligence and data science, thereby bridging the gap between theory and practical applications.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Original Research</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                Publish cutting-edge original research that advances the field of computational intelligence.
              </p>
            </div>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Critical Reviews</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                Provide comprehensive reviews of current trends and developments in AI technologies.
              </p>
            </div>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Innovation</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                Showcase innovative real-world applications and case studies.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'domain-tracks',
      title: 'Domain Tracks',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Research Domain Tracks
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              JCIDS welcomes research submissions across eight comprehensive domain tracks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Neural networks, deep learning, reinforcement learning, supervised/unsupervised learning, transfer learning, federated learning, AutoML, and AI optimization techniques.'
              },
              {
                title: 'Data Mining & Big Data',
                description: 'Knowledge discovery, pattern recognition, clustering, classification, association rules, big data processing, cloud computing, and distributed analytics.'
              },
              {
                title: 'Natural Language Processing',
                description: 'Text analysis, sentiment analysis, language models, machine translation, chatbots, voice recognition, and speech synthesis.'
              },
              {
                title: 'Computer Vision',
                description: 'Image recognition, object detection, facial recognition, medical imaging, video analysis, augmented reality, and 3D vision.'
              },
              {
                title: 'IoT & Edge Computing',
                description: 'Internet of Things, edge computing, sensor networks, smart devices, embedded intelligence, and real-time analytics.'
              },
              {
                title: 'Cybersecurity & AI Ethics',
                description: 'AI security, privacy-preserving ML, ethical AI, algorithmic fairness, AI governance, explainable AI, and bias detection.'
              },
              {
                title: 'Health Informatics',
                description: 'Medical AI, genomics, precision medicine, drug discovery, healthcare analytics, and telemedicine.'
              },
              {
                title: 'Robotics & Automation',
                description: 'Autonomous systems, robotic process automation, industrial automation, smart manufacturing, and human-robot interaction.'
              }
            ].map((track, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                }}
              >
                <h4 style={{ color: '#2c4a80', margin: '0 0 15px 0', fontSize: '1.3rem' }}>
                  Track {index + 1}: {track.title}
                </h4>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'editorial-policy',
      title: 'Editorial Policy',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Editorial Policy
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              JCIDS upholds a robust and transparent editorial policy designed to maintain academic integrity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Academic Integrity</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                Manuscripts are judged solely on scholarly merit, originality, and methodological soundness.
              </p>
            </div>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Double-Blind Review</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                All manuscripts undergo double-blind peer review ensuring unbiased evaluation.
              </p>
            </div>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>COPE Standards</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                JCIDS follows COPE standards to ensure ethical practices at every stage.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reviewer-policy',
      title: 'Reviewer Policy',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Reviewer Policy
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              Reviewers form the backbone of JCIDS, ensuring credibility and academic rigor.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Subject Expertise</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                Reviewers are chosen based on subject expertise and academic reputation.
              </p>
            </div>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Objective Assessment</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                Reviewers assess manuscripts objectively, focusing on originality and rigor.
              </p>
            </div>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Timely Reviews</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                Reviewers commit to providing timely reviews within agreed timeframes.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'open-access',
      title: 'Open Access Policy',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Open Access Policy
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              JCIDS operates under a fully open-access model ensuring global reach.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '25px', borderRadius: '8px', marginBottom: '20px' }}>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', margin: '0 0 15px 0' }}>
              JCIDS is a fully open access journal under Gnosis Press, allowing unrestricted access to all published content.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
              Articles are distributed under the Creative Commons Attribution (CC BY) license.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ 
              background: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <h5 style={{ color: '#2c4a80', marginBottom: '12px' }}>Global Impact</h5>
              <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Promotes knowledge equality worldwide, especially in developing regions.
              </p>
            </div>
            
            <div style={{ 
              background: '#ffffff', 
              padding: '20px', 
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <h5 style={{ color: '#2c4a80', marginBottom: '12px' }}>Standards Compliance</h5>
              <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5' }}>
                Aligns with Budapest Open Access Initiative and Plan S standards.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
          Journal of Computational Intelligence and Decision Science
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#64748b', 
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Advancing research in artificial intelligence, machine learning, and intelligent decision-making systems
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '40px' }}>
        {/* Navigation Menu */}
        <div>
          <div style={{ 
            background: '#2c4a80', 
            color: 'white', 
            padding: '20px',
            borderRadius: '12px 12px 0 0',
            marginBottom: '0'
          }}>
            <h3 style={{ margin: '0', fontSize: '1.3rem' }}>Journal Information</h3>
          </div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #ddd',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            {journalSections.map((section) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{
                  padding: '18px 24px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #f0f0f0',
                  backgroundColor: activeSection === section.id ? '#e8f4fd' : 'white',
                  color: activeSection === section.id ? '#1a3d6b' : '#2c4a80',
                  fontWeight: activeSection === section.id ? '600' : '500',
                  transition: 'all 0.2s ease',
                  fontSize: '1rem'
                }}
                onMouseOver={(e) => {
                  if (activeSection !== section.id) {
                    e.target.style.backgroundColor = '#f8f9fa';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== section.id) {
                    e.target.style.backgroundColor = 'white';
                  }
                }}
              >
                {section.title}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div style={{ 
            background: '#2c4a80', 
            color: 'white', 
            padding: '20px',
            borderRadius: '12px 12px 0 0',
            marginTop: '30px',
            marginBottom: '0'
          }}>
            <h3 style={{ margin: '0', fontSize: '1.3rem' }}>Quick Actions</h3>
          </div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #ddd',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <a href="/submit" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }}>
              Submit Paper
            </a>
            <a href="mailto:submissions@gnosispress.org?subject=JCIDS Editorial Inquiry" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }}>
              Contact Editorial
            </a>
          </div>
        </div>

        {/* Main Content Area */}
        <div>
          <div style={{ 
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h2 style={{ 
              color: '#1a3d6b', 
              marginBottom: '30px', 
              fontSize: '2.2rem',
              borderBottom: '3px solid #2c4a80',
              paddingBottom: '15px',
              fontWeight: '700'
            }}>
              {journalSections.find(section => section.id === activeSection)?.title}
            </h2>
            <div style={{ lineHeight: '1.6', color: '#333' }}>
              {journalSections.find(section => section.id === activeSection)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journals