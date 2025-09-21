import { useState, useEffect } from 'react'

const Home = () => {
  const [activeSection, setActiveSection] = useState('welcome')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Listen for sidebar navigation events
  useEffect(() => {
    const handleSidebarNavigation = (event) => {
      setActiveSection(event.detail.sectionId)
    }
    
    window.addEventListener('changeSectionFromSidebar', handleSidebarNavigation)
    
    return () => {
      window.removeEventListener('changeSectionFromSidebar', handleSidebarNavigation)
    }
  }, [])

  const journalSections = [
    {
      id: 'welcome',
      title: '🏠 Welcome to JCIDS',
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
              🎓 Advancing Computational Intelligence & Decision Science
            </h3>
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
                📝 Submit Your Research
              </a>
              <a href="mailto:submissions@jcids.org" style={{ 
                background: 'white',
                color: '#2c4a80',
                padding: '15px 30px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '2px solid #2c4a80',
                transition: 'all 0.3s ease'
              }}>
                📧 Email Submission
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
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚡</div>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>Fast Review</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>15-30</div>
              <div style={{ color: '#666', fontSize: '1rem', lineHeight: '1.5' }}>
                Days average review process with expert peer reviewers from top institutions worldwide
              </div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌍</div>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>Open Access</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>100%</div>
              <div style={{ color: '#666', fontSize: '1rem', lineHeight: '1.5' }}>
                Immediate worldwide access to all published research with no subscription barriers
              </div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🆓</div>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>No Submission Fee</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>FREE</div>
              <div style={{ color: '#666', fontSize: '1rem', lineHeight: '1.5' }}>
                Submit your manuscript at no cost - we believe in accessible scientific publishing
              </div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔍</div>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>Double-Blind Review</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>FAIR</div>
              <div style={{ color: '#666', fontSize: '1rem', lineHeight: '1.5' }}>
                Rigorous peer review process ensuring unbiased evaluation of all submissions
              </div>
            </div>
          </div>

          {/* Journal Impact */}
          <div style={{ 
            background: 'white', 
            padding: '35px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ 
              color: '#1a3d6b', 
              marginBottom: '25px', 
              fontSize: '1.8rem',
              textAlign: 'center',
              borderBottom: '3px solid #2c4a80',
              paddingBottom: '15px'
            }}>
              📊 Journal Impact & Recognition
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '30px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>2348-8549</div>
                <div style={{ color: '#666', fontSize: '1rem', fontWeight: '500' }}>ISSN (Online)</div>
                <div style={{ color: '#999', fontSize: '0.9rem', marginTop: '5px' }}>Internationally Recognized</div>
              </div>
              <div>
                <div style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>8+</div>
                <div style={{ color: '#666', fontSize: '1rem', fontWeight: '500' }}>Indexing Databases</div>
                <div style={{ color: '#999', fontSize: '0.9rem', marginTop: '5px' }}>IEEE, ACM, Google Scholar</div>
              </div>
              <div>
                <div style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>25+</div>
                <div style={{ color: '#666', fontSize: '1rem', fontWeight: '500' }}>Countries</div>
                <div style={{ color: '#999', fontSize: '0.9rem', marginTop: '5px' }}>Global Research Community</div>
              </div>
              <div>
                <div style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>15+</div>
                <div style={{ color: '#666', fontSize: '1rem', fontWeight: '500' }}>Editorial Board</div>
                <div style={{ color: '#999', fontSize: '0.9rem', marginTop: '5px' }}>Expert Reviewers</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      title: '👁️ Vision & Mission',
      content: (
        <div>
          {/* Vision Section */}
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #bee5eb'
          }}>
            <h3 style={{ color: '#1a3d6b', marginBottom: '20px', fontSize: '1.8rem', textAlign: 'center' }}>
              🌟 Our Vision
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#2c4a80', textAlign: 'center', margin: '0', fontStyle: 'italic' }}>
              To provide a globally recognized platform for advancing high-quality research and innovation in computational intelligence and data science, fostering knowledge that drives technology for the betterment of society.
            </p>
          </div>

          {/* Mission Section */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: '#1a3d6b', marginBottom: '25px', fontSize: '1.8rem', textAlign: 'center' }}>
              🎯 Our Mission
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>🔬</div>
                <h4 style={{ color: '#2c4a80', marginBottom: '15px', textAlign: 'center' }}>Research Excellence</h4>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', textAlign: 'center' }}>
                  To promote ethical, high-quality, and original research in computational intelligence and data science.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>🤝</div>
                <h4 style={{ color: '#2c4a80', marginBottom: '15px', textAlign: 'center' }}>Collaboration</h4>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', textAlign: 'center' }}>
                  To enable interdisciplinary collaboration across academia, industry, and society.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>🌍</div>
                <h4 style={{ color: '#2c4a80', marginBottom: '15px', textAlign: 'center' }}>Open Access</h4>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', textAlign: 'center' }}>
                  To support open access knowledge dissemination for global inclusivity.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center'
          }}>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '1.5rem' }}>
              💡 Our Commitment
            </h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0' }}>
              We are dedicated to advancing the frontiers of computational intelligence and data science through rigorous peer review, 
              ethical publishing practices, and fostering a global community of researchers committed to innovation and excellence.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'aim',
      title: '🎯 Journal Aim',
      content: (
        <div>
          {/* Main Aim Section */}
          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #dee2e6',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#1a3d6b', marginBottom: '25px', fontSize: '2rem' }}>
              🎯 Journal Aim
            </h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.7', color: '#2c4a80', margin: '0', fontWeight: '500' }}>
              The journal aims to publish and disseminate original research, critical reviews, and innovative case studies in computational intelligence and data science, thereby bridging the gap between theory and practical applications.
            </p>
          </div>

          {/* Key Objectives */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              📋 Core Objectives
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📚</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Original Research</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Publish cutting-edge original research that advances the field of computational intelligence and contributes new knowledge to the scientific community.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔍</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Critical Reviews</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Provide comprehensive and critical reviews of current trends, methodologies, and developments in data science and AI technologies.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💡</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Innovative Case Studies</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Showcase innovative real-world applications and case studies that demonstrate practical implementations of theoretical concepts.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌉</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Theory-Practice Bridge</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Bridge the gap between theoretical advances and practical applications, ensuring research has real-world impact and relevance.
                </p>
              </div>
            </div>
          </div>

          {/* Research Impact Goals */}
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #bee5eb'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              🎯 Impact Goals
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '10px' }}>🚀</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>Accelerate Innovation</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Drive technological advancement through high-quality research publications
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '10px' }}>🌍</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>Global Impact</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Create research with worldwide applicability and societal benefit
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '10px' }}>🤝</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>Foster Collaboration</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Encourage interdisciplinary research and international cooperation
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '10px' }}>📈</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>Advance Knowledge</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Contribute to the expansion of computational intelligence knowledge base
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'domain-tracks',
      title: '🗂️ Domain Tracks',
      content: (
        <div>
          {/* Header Section */}
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              🗂️ Research Domain Tracks
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              JCIDS welcomes research submissions across eight comprehensive domain tracks that cover the full spectrum of computational intelligence and data science.
            </p>
          </div>

          {/* Domain Tracks Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px', marginBottom: '30px' }}>
            
            {/* Track 1 */}
            <div style={{ 
              background: 'white', 
              padding: '25px', 
              borderRadius: '12px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>🤖</div>
                <div>
                  <h4 style={{ color: '#2c4a80', margin: '0', fontSize: '1.3rem' }}>Track 1</h4>
                  <h5 style={{ color: '#1a3d6b', margin: '5px 0 0 0', fontSize: '1.1rem' }}>Artificial Intelligence & Machine Learning</h5>
                </div>
              </div>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                Neural networks, deep learning, reinforcement learning, supervised/unsupervised learning, transfer learning, federated learning, AutoML, and AI optimization techniques.
              </p>
            </div>

            {/* Track 2 */}
            <div style={{ 
              background: 'white', 
              padding: '25px', 
              borderRadius: '12px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>📊</div>
                <div>
                  <h4 style={{ color: '#2c4a80', margin: '0', fontSize: '1.3rem' }}>Track 2</h4>
                  <h5 style={{ color: '#1a3d6b', margin: '5px 0 0 0', fontSize: '1.1rem' }}>Data Mining, Big Data & Cloud Analytics</h5>
                </div>
              </div>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                Knowledge discovery, pattern recognition, clustering, classification, association rules, big data processing, cloud computing, distributed analytics, and data warehousing.
              </p>
            </div>

            {/* Track 3 */}
            <div style={{ 
              background: 'white', 
              padding: '25px', 
              borderRadius: '12px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>💬</div>
                <div>
                  <h4 style={{ color: '#2c4a80', margin: '0', fontSize: '1.3rem' }}>Track 3</h4>
                  <h5 style={{ color: '#1a3d6b', margin: '5px 0 0 0', fontSize: '1.1rem' }}>Natural Language Processing & Speech Systems</h5>
                </div>
              </div>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                Text analysis, sentiment analysis, language models, machine translation, chatbots, voice recognition, speech synthesis, and conversational AI systems.
              </p>
            </div>

            {/* Track 4 */}
            <div style={{ 
              background: 'white', 
              padding: '25px', 
              borderRadius: '12px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>👁️</div>
                <div>
                  <h4 style={{ color: '#2c4a80', margin: '0', fontSize: '1.3rem' }}>Track 4</h4>
                  <h5 style={{ color: '#1a3d6b', margin: '5px 0 0 0', fontSize: '1.1rem' }}>Computer Vision & Image Processing</h5>
                </div>
              </div>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                Image recognition, object detection, facial recognition, medical imaging, video analysis, augmented reality, 3D vision, and visual pattern recognition.
              </p>
            </div>

            {/* Track 5 */}
            <div style={{ 
              background: 'white', 
              padding: '25px', 
              borderRadius: '12px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>🌐</div>
                <div>
                  <h4 style={{ color: '#2c4a80', margin: '0', fontSize: '1.3rem' }}>Track 5</h4>
                  <h5 style={{ color: '#1a3d6b', margin: '5px 0 0 0', fontSize: '1.1rem' }}>IoT, Edge & Intelligent Systems</h5>
                </div>
              </div>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                Internet of Things, edge computing, sensor networks, smart devices, embedded intelligence, real-time analytics, and distributed intelligent systems.
              </p>
            </div>

            {/* Track 6 */}
            <div style={{ 
              background: 'white', 
              padding: '25px', 
              borderRadius: '12px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>🔒</div>
                <div>
                  <h4 style={{ color: '#2c4a80', margin: '0', fontSize: '1.3rem' }}>Track 6</h4>
                  <h5 style={{ color: '#1a3d6b', margin: '5px 0 0 0', fontSize: '1.1rem' }}>Cybersecurity, Ethics, and Governance in AI</h5>
                </div>
              </div>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                AI security, privacy-preserving ML, ethical AI, algorithmic fairness, AI governance, explainable AI, bias detection, and responsible AI development.
              </p>
            </div>

            {/* Track 7 */}
            <div style={{ 
              background: 'white', 
              padding: '25px', 
              borderRadius: '12px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>🏥</div>
                <div>
                  <h4 style={{ color: '#2c4a80', margin: '0', fontSize: '1.3rem' }}>Track 7</h4>
                  <h5 style={{ color: '#1a3d6b', margin: '5px 0 0 0', fontSize: '1.1rem' }}>Health Informatics & Bioinformatics</h5>
                </div>
              </div>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                Medical AI, genomics, precision medicine, drug discovery, healthcare analytics, electronic health records, telemedicine, and biomedical data analysis.
              </p>
            </div>

            {/* Track 8 */}
            <div style={{ 
              background: 'white', 
              padding: '25px', 
              borderRadius: '12px', 
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', marginRight: '15px' }}>🤖</div>
                <div>
                  <h4 style={{ color: '#2c4a80', margin: '0', fontSize: '1.3rem' }}>Track 8</h4>
                  <h5 style={{ color: '#1a3d6b', margin: '5px 0 0 0', fontSize: '1.1rem' }}>Robotics, Automation, and Smart Systems</h5>
                </div>
              </div>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                Autonomous systems, robotic process automation, industrial automation, smart manufacturing, human-robot interaction, and intelligent control systems.
              </p>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '25px', 
            borderRadius: '12px', 
            border: '1px solid #bee5eb'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px', fontSize: '1.4rem', textAlign: 'center' }}>
              📝 Submission Guidelines for Domain Tracks
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>📊 Track Selection</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Authors must specify their primary domain track during submission and may indicate secondary tracks if applicable.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🔬 Research Quality</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  All tracks maintain the same high standards for originality, methodology, and contribution to the field.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>👥 Expert Review</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Each track has dedicated expert reviewers ensuring specialized and thorough evaluation of submissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      title: '📋 About JCIDS',
      content: (
        <div>
          {/* Mission Statement */}
          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #dee2e6'
          }}>
            <h3 style={{ color: '#1a3d6b', marginBottom: '20px', fontSize: '1.5rem' }}>
              🎯 Our Mission
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#333', marginBottom: '0', fontStyle: 'italic' }}>
              "To advance the frontiers of computational intelligence and decision science by providing a 
              premier platform for researchers worldwide to share breakthrough discoveries, innovative 
              methodologies, and practical applications that shape the future of intelligent systems."
            </p>
          </div>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px', color: '#333' }}>
            The <strong>Journal of Computational Intelligence and Decision Science (JCIDS)</strong> is a 
            rigorously peer-reviewed, open-access publication dedicated to advancing the state-of-the-art 
            in artificial intelligence, machine learning, data science, and intelligent decision-making systems. 
            Our journal serves as a bridge between theoretical breakthroughs and practical applications, 
            fostering innovation across multiple disciplines.
          </p>

          {/* Core Focus Areas */}
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px', fontSize: '1.4rem' }}>
              🔬 Core Focus Areas
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '20px' 
            }}>
              <div style={{ 
                background: 'white', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>
                  🤖 Artificial Intelligence
                </h5>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
                  <li>Neural Networks & Deep Learning</li>
                  <li>Machine Learning Algorithms</li>
                  <li>Computer Vision & Pattern Recognition</li>
                  <li>Natural Language Processing</li>
                  <li>Expert Systems & Knowledge Representation</li>
                </ul>
              </div>
              
              <div style={{ 
                background: 'white', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>
                  📊 Data Science & Analytics
                </h5>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
                  <li>Big Data Processing & Analytics</li>
                  <li>Statistical Learning Methods</li>
                  <li>Data Mining & Knowledge Discovery</li>
                  <li>Predictive Modeling</li>
                  <li>Business Intelligence Systems</li>
                </ul>
              </div>
              
              <div style={{ 
                background: 'white', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>
                  🎯 Decision Support Systems
                </h5>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
                  <li>Multi-Criteria Decision Analysis</li>
                  <li>Optimization & Operations Research</li>
                  <li>Risk Assessment & Management</li>
                  <li>Strategic Planning Systems</li>
                  <li>Healthcare Decision Support</li>
                </ul>
              </div>
              
              <div style={{ 
                background: 'white', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>
                  🔧 Computational Intelligence
                </h5>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
                  <li>Evolutionary Computation</li>
                  <li>Swarm Intelligence</li>
                  <li>Fuzzy Logic Systems</li>
                  <li>Hybrid Intelligent Systems</li>
                  <li>Bio-inspired Computing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Publication Standards */}
          <div style={{ 
            background: '#e8f4fd', 
            padding: '25px', 
            borderRadius: '10px', 
            border: '1px solid #bee5eb',
            marginBottom: '25px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '15px', fontSize: '1.3rem' }}>
              ⭐ Publication Excellence Standards
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '20px' 
            }}>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>📝 Rigorous Peer Review</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Double-blind review process with expert reviewers from leading institutions worldwide
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🌐 Global Accessibility</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Open access publication ensuring worldwide reach and immediate availability
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🔗 Permanent Archiving</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  DOI assignment and CrossRef integration for permanent citation and discovery
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>📈 Impact Tracking</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Comprehensive indexing in major academic databases for maximum visibility
                </p>
              </div>
            </div>
          </div>

          {/* Research Impact */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '10px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px', fontSize: '1.3rem' }}>
              🌟 Why Publish with JCIDS?
            </h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '25px' 
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🚀</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>Rapid Publication</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Fast-track review process with average decision time of 15-30 days for quality submissions
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌍</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>International Reach</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Global editorial board and readership spanning 25+ countries across all continents
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💡</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>Innovation Focus</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Emphasis on novel contributions that advance the field and practical applications
                </p>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤝</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>Community Building</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Foster collaboration between researchers, practitioners, and industry professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'editorial-policy',
      title: '⚖️ Editorial Policy',
      content: (
        <div>
          {/* Header Section */}
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              ⚖️ Editorial Policy
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              JCIDS upholds a robust and transparent editorial policy designed to maintain academic integrity, fairness, and excellence in publishing.
            </p>
          </div>

          {/* Core Principles */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              🎯 Core Editorial Principles
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔍</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Academic Integrity</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  The editorial board is committed to ensuring manuscripts are judged solely on scholarly merit, originality, methodological soundness, and contribution to knowledge advancement.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>👥</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Double-Blind Review</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  All manuscripts undergo double-blind peer review ensuring neither authors' nor reviewers' identities are disclosed, eliminating potential biases.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚖️</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>COPE Standards</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  JCIDS follows COPE (Committee on Publication Ethics) standards to ensure ethical practices are upheld at every stage of the editorial workflow.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌍</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Diversity & Inclusivity</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  The editorial board promotes diversity and inclusivity, welcoming submissions from authors worldwide, including early-career researchers.
                </p>
              </div>
            </div>
          </div>

          {/* Review Process */}
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #bee5eb',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              📋 Editorial Review Process
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>1. Initial Screening</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  <strong>Editor-in-Chief and Associate Editors</strong> conduct initial screening to assess relevance, quality, and compliance with submission guidelines. Manuscripts meeting basic criteria proceed to peer review.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>2. Peer Review Assignment</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  <strong>Double-blind peer review</strong> process where manuscripts are assigned to expert reviewers. Neither authors nor reviewers know each other's identities.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>3. Editorial Decision</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  <strong>Timely decision-making</strong> with constructive feedback provided within reasonable timeframe. Clear communication of acceptance criteria and review timelines.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>4. Revision & Publication</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  <strong>Constructive dialogue</strong> where authors respond to reviewers' comments point-by-point, ensuring enhanced quality of final publication.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Responsibilities */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              👔 Editorial Responsibilities
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>🔒 Conflict of Interest</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Editors must declare potential conflicts of interest and recuse themselves from handling manuscripts where impartiality may be compromised.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>⏱️ Timely Decisions</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Editorial team ensures timely decision-making, striving to provide authors with constructive feedback within reasonable timeframe.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>🌐 Balanced Representation</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Efforts are made to balance representation of reviewers and board members across regions, genders, and domains.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>💡 Editorial Independence</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Editorial independence is strictly maintained, ensuring decisions are based on academic value and not influenced by external pressures.
                </p>
              </div>
            </div>
          </div>

          {/* Transparency & Communication */}
          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '25px', 
            borderRadius: '12px', 
            border: '1px solid #dee2e6'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px', fontSize: '1.4rem', textAlign: 'center' }}>
              📢 Transparency & Communication
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>📋 Clear Guidelines</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Clear communication of acceptance criteria, review timelines, and editorial decisions is maintained throughout the process.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🔄 Revision Tracking</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Revisions are tracked systematically, and authors are encouraged to respond to reviewers' comments comprehensively.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🌟 Responsible Dissemination</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Editorial team ensures published articles contribute to academic discourse and align with ethical principles of data sharing and societal benefit.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'reviewer-policy',
      title: '👨‍🔬 Reviewer Policy',
      content: (
        <div>
          {/* Header Section */}
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              👨‍🔬 Reviewer Policy
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              Reviewers form the backbone of the publishing process at JCIDS, ensuring the credibility, integrity, and academic rigor of published research.
            </p>
          </div>

          {/* Reviewer Selection */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              🎯 Selection of Reviewers
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎓</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Subject Expertise</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Reviewers are chosen based on subject expertise, prior publication record, and academic reputation in their respective domains.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌍</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Diverse Perspectives</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Diversity of perspective is prioritized to avoid one-sided evaluations and ensure comprehensive assessment of submissions.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔒</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>Conflict Disclosure</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>
                  Potential reviewers must disclose conflicts of interest, such as collaborations or personal relationships with authors.
                </p>
              </div>
            </div>
          </div>

          {/* Review Process */}
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #bee5eb',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              📋 Review Process
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>📝 Reviewer Assignment</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  Each manuscript is typically assigned to <strong>at least two reviewers</strong> who are experts in the relevant field. The assignment considers reviewer expertise and availability.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>🔍 Objective Assessment</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  Reviewers are expected to assess manuscripts <strong>objectively</strong>, focusing on originality, clarity, methodological rigor, ethical compliance, and contribution to the field.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>💬 Constructive Feedback</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  <strong>Constructive criticism</strong> is encouraged to help authors improve their work, while personal remarks or biased judgments are strictly discouraged.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>⏰ Timely Reviews</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  Reviewers commit to providing <strong>timely reviews</strong> within the agreed timeframe, typically 3-4 weeks from assignment.
                </p>
              </div>
            </div>
          </div>

          {/* Reviewer Responsibilities */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              📋 Reviewer Responsibilities
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>📝 Comprehensive Feedback</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Provide timely, clear, and comprehensive feedback that helps authors improve their manuscript quality and contribution.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>🔒 Confidentiality</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Maintain confidentiality of manuscripts and avoid using unpublished content for personal advantage or disclosure to others.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>💡 Improvement Suggestions</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Suggest improvements in clarity, data presentation, methodological soundness, and overall manuscript structure.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>🚨 Ethical Violations</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Report suspected plagiarism, data fabrication, or ethical violations to the editorial team immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Quality Control & Recognition */}
          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '25px', 
            borderRadius: '12px', 
            border: '1px solid #dee2e6'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px', fontSize: '1.4rem', textAlign: 'center' }}>
              🏆 Quality Control & Recognition
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>📊 Performance Evaluation</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  The editorial board regularly evaluates reviewer performance based on timeliness, depth of comments, and adherence to ethical standards.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>⭐ Recognition Program</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  High-performing reviewers may be invited to join the editorial board and receive certificates of recognition for their valuable contributions.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>📈 Continuous Improvement</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Reviewers who consistently fail to meet standards may be excluded from future reviews to maintain publication quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'journal-policy',
      title: '📋 Journal Policy',
      content: (
        <div>
          {/* Header Section */}
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              📋 Journal Policy
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              The overarching policy of JCIDS is grounded in academic integrity, inclusivity, and transparency.
            </p>
          </div>

          {/* Core Policies */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              🛡️ Core Journal Policies
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ 
                background: '#fff3cd', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #ffeaa7',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🚫</div>
                <h5 style={{ color: '#856404', marginBottom: '15px', fontSize: '1.2rem' }}>Zero Tolerance</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#856404' }}>
                  The journal upholds a <strong>zero-tolerance approach</strong> to unethical practices such as plagiarism, duplicate submission, and data manipulation.
                </p>
              </div>
              
              <div style={{ 
                background: '#d4edda', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #c3e6cb',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔍</div>
                <h5 style={{ color: '#155724', marginBottom: '15px', fontSize: '1.2rem' }}>Originality Check</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#155724' }}>
                  All submissions are checked for <strong>originality using plagiarism detection tools</strong> to ensure content authenticity.
                </p>
              </div>
              
              <div style={{ 
                background: '#cce5ff', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #99d6ff',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚖️</div>
                <h5 style={{ color: '#0056b3', marginBottom: '15px', fontSize: '1.2rem' }}>Ethical Standards</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#0056b3' }}>
                  The journal follows <strong>COPE, ICMJE, and international best practices</strong> for ethical publishing standards.
                </p>
              </div>
            </div>
          </div>

          {/* Inclusivity & Equality */}
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #bee5eb',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              🌍 Inclusivity & Equality
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>🤝 Non-Discrimination Policy</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  JCIDS does not discriminate on the basis of <strong>gender, ethnicity, nationality, or institutional affiliation</strong>. Authors, reviewers, and editors are evaluated solely on academic merit.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>🏆 Merit-Based Evaluation</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  All submissions, reviews, and editorial decisions are based purely on <strong>academic quality and scientific merit</strong>, ensuring fair treatment for all participants.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>🌐 Global Accessibility</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  The journal promotes <strong>global accessibility</strong> by accepting submissions from researchers worldwide and supporting authors from developing countries.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.2rem' }}>🎓 Early Career Support</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  Special consideration and support are provided to <strong>early-career researchers</strong> and emerging scholars in the field.
                </p>
              </div>
            </div>
          </div>

          {/* Research Ethics & Transparency */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              🔬 Research Ethics & Transparency
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>🏥 Human/Animal Ethics</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  All research involving human or animal subjects must include appropriate ethical approvals from relevant ethics committees.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>📊 Data Integrity</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Data integrity and reproducibility are emphasized, encouraging authors to share data and code where possible.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>💰 Financial Transparency</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  Editorial decisions are made independently of commercial interests, with clear communication of all policies and fees.
                </p>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>🤝 Industry Collaboration</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>
                  JCIDS actively promotes collaboration between academia and industry, encouraging applied research with societal benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Interdisciplinary Research */}
          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '25px', 
            borderRadius: '12px', 
            border: '1px solid #dee2e6'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px', fontSize: '1.4rem', textAlign: 'center' }}>
              🔗 Global Collaboration & Impact
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🌐 International Collaboration</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  The journal encourages international research collaborations and welcomes interdisciplinary submissions that cross traditional boundaries.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🎯 Societal Impact</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Priority is given to research with clear potential for societal benefit and practical applications in real-world scenarios.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>📈 Knowledge Advancement</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  This policy framework ensures that the journal operates as a responsible, ethical, and inclusive academic platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'open-access',
      title: '🔓 Open Access Policy',
      content: (
        <div>
          {/* Header Section */}
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              🔓 Open Access Policy & Licensing
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              JCIDS operates under a fully open-access model, ensuring that all published content is freely available without subscription barriers.
            </p>
          </div>

          {/* Open Access Benefits */}
          <div style={{ 
            background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #c3e6cb',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#155724', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              🌍 Benefits of Open Access
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ 
                background: 'white', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #c3e6cb',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🌐</div>
                <h5 style={{ color: '#155724', marginBottom: '15px', fontSize: '1.2rem' }}>Global Accessibility</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#155724' }}>
                  Open access facilitates <strong>knowledge equity</strong>, empowering researchers, policymakers, and practitioners in developing regions to access high-quality research without financial burden.
                </p>
              </div>
              
              <div style={{ 
                background: 'white', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #c3e6cb',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚡</div>
                <h5 style={{ color: '#155724', marginBottom: '15px', fontSize: '1.2rem' }}>Faster Knowledge Circulation</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#155724' }}>
                  By adopting this model, JCIDS contributes to <strong>faster knowledge circulation, global collaboration, and broader societal impact</strong>.
                </p>
              </div>
              
              <div style={{ 
                background: 'white', 
                padding: '25px', 
                borderRadius: '10px', 
                border: '1px solid #c3e6cb',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🤝</div>
                <h5 style={{ color: '#155724', marginBottom: '15px', fontSize: '1.2rem' }}>International Initiatives</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#155724' }}>
                  This policy aligns with global initiatives such as <strong>Plan S and Budapest Open Access Initiative</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Licensing Information */}
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              📄 Creative Commons Licensing
            </h4>
            <div style={{ 
              background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
              padding: '25px', 
              borderRadius: '10px', 
              border: '1px solid #bee5eb',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '15px' }}>📝</div>
              <h5 style={{ color: '#2c4a80', marginBottom: '15px', fontSize: '1.3rem' }}>CC BY License</h5>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#2c4a80', fontSize: '1.1rem' }}>
                Articles are licensed under <strong>Creative Commons Attribution (CC BY)</strong>, enabling wide dissemination while ensuring authors retain ownership of their work.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>✅ What Users Can Do</h5>
                <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.6', color: '#555' }}>
                  <li>Copy and distribute the work</li>
                  <li>Adapt and modify content</li>
                  <li>Use for commercial purposes</li>
                  <li>Create derivative works</li>
                </ul>
              </div>
              
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #e9ecef'
              }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>⚠️ Requirements</h5>
                <ul style={{ margin: '0', paddingLeft: '20px', lineHeight: '1.6', color: '#555' }}>
                  <li>Provide proper attribution</li>
                  <li>Link to the license</li>
                  <li>Indicate if changes were made</li>
                  <li>Do not suggest endorsement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Author Rights */}
          <div style={{ 
            background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #ffeaa7',
            marginBottom: '30px'
          }}>
            <h4 style={{ color: '#856404', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>
              👤 Author Rights & Ownership
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <h5 style={{ color: '#856404', marginBottom: '15px', fontSize: '1.2rem' }}>©️ Copyright Retention</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#856404', fontSize: '0.95rem' }}>
                  <strong>Authors retain copyright</strong> but grant JCIDS rights to publish, archive, and distribute their work.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#856404', marginBottom: '15px', fontSize: '1.2rem' }}>🔄 Reuse Rights</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#856404', fontSize: '0.95rem' }}>
                  Authors can <strong>reuse their work</strong> in future publications, academic presentations, or teaching materials, provided the original publication is cited.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#856404', marginBottom: '15px', fontSize: '1.2rem' }}>🏛️ Self-Archiving</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#856404', fontSize: '0.95rem' }}>
                  Authors are allowed <strong>self-archiving in institutional repositories</strong> and personal websites.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: '#856404', marginBottom: '15px', fontSize: '1.2rem' }}>🌐 Wide Dissemination</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#856404', fontSize: '0.95rem' }}>
                  JCIDS promotes <strong>wide dissemination through indexing and digital archives</strong> while protecting author rights.
                </p>
              </div>
            </div>
          </div>

          {/* Ethical Openness */}
          <div style={{ 
            background: 'white', 
            padding: '25px', 
            borderRadius: '12px', 
            border: '1px solid #e9ecef',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px', fontSize: '1.4rem', textAlign: 'center' }}>
              🛡️ Ethical Openness & Protection
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🔒 Safeguards Against Misuse</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  While promoting accessibility, the journal safeguards against misuse by requiring citations and prohibiting misrepresentation.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🚫 Unauthorized Use Protection</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  The journal strictly prohibits unauthorized reproduction or republication without permission from copyright holders.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🤝 Mutual Protection</h5>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.5', color: '#555' }}>
                  Copyright and licensing policies remain a mutual safeguard for authors, readers, and the journal itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'copyright',
      title: '©️ Copyright Policy',
      content: (
        <div>
          <div style={{ background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)', color: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>©️ Copyright Policy</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>Authors retain copyright of their published work in JCIDS while granting publication rights to the journal.</p>
          </div>
          
          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid #e9ecef', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', marginBottom: '30px' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>🔑 Author Rights</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '1px solid #e9ecef', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>©️</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px' }}>Copyright Retention</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>Authors retain copyright and can reuse their work in future publications, presentations, or teaching materials with proper citation.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '1px solid #e9ecef', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏛️</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px' }}>Self-Archiving</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>Authors can self-archive in institutional repositories and promote wide dissemination through indexing and digital archives.</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '10px', border: '1px solid #e9ecef', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛡️</div>
                <h5 style={{ color: '#1a3d6b', marginBottom: '15px' }}>Protection</h5>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555' }}>The journal prohibits unauthorized reproduction without permission and ensures transparent copyright agreements.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'plagiarism-ai',
      title: '🤖 Plagiarism & AI Policy',
      content: (
        <div>
          <div style={{ background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)', color: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>🤖 Plagiarism & AI Policy</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>JCIDS enforces strict policies on plagiarism and responsible use of artificial intelligence tools.</p>
          </div>
          
          <div style={{ background: '#fff3cd', padding: '30px', borderRadius: '12px', border: '1px solid #ffeaa7', marginBottom: '30px' }}>
            <h4 style={{ color: '#856404', marginBottom: '20px', fontSize: '1.6rem', textAlign: 'center' }}>🚫 Plagiarism Policy</h4>
            <p style={{ marginBottom: '20px', lineHeight: '1.6', color: '#856404' }}>All submissions are screened using advanced plagiarism detection tools. Manuscripts with more than <strong>15% similarity</strong> (excluding references) are returned or rejected.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div><h5 style={{ color: '#856404', marginBottom: '10px' }}>Direct Copying</h5><p style={{ margin: '0', fontSize: '0.9rem', color: '#856404' }}>Copying text or figures without proper attribution</p></div>
              <div><h5 style={{ color: '#856404', marginBottom: '10px' }}>Self-Plagiarism</h5><p style={{ margin: '0', fontSize: '0.9rem', color: '#856404' }}>Reuse of significant portions without citation</p></div>
              <div><h5 style={{ color: '#856404', marginBottom: '10px' }}>Data Issues</h5><p style={{ margin: '0', fontSize: '0.9rem', color: '#856404' }}>Data fabrication or falsification</p></div>
            </div>
          </div>
          
          <div style={{ background: '#cce5ff', padding: '30px', borderRadius: '12px', border: '1px solid #99d6ff' }}>
            <h4 style={{ color: '#0056b3', marginBottom: '20px', fontSize: '1.6rem', textAlign: 'center' }}>🤖 AI-Generated Content Policy</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div><h5 style={{ color: '#0056b3', marginBottom: '10px' }}>✅ Permitted Use</h5><p style={{ margin: '0', fontSize: '0.9rem', color: '#0056b3' }}>AI tools for language polishing (ChatGPT, Grammarly) are permitted with declaration</p></div>
              <div><h5 style={{ color: '#0056b3', marginBottom: '10px' }}>❌ Prohibited Use</h5><p style={{ margin: '0', fontSize: '0.9rem', color: '#0056b3' }}>AI must not replace originality in analysis, results, or conclusions</p></div>
              <div><h5 style={{ color: '#0056b3', marginBottom: '10px' }}>📝 Declaration Required</h5><p style={{ margin: '0', fontSize: '0.9rem', color: '#0056b3' }}>Authors must declare any AI assistance in acknowledgments</p></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'retraction',
      title: '🔄 Retraction Policy',
      content: (
        <div>
          <div style={{ background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)', color: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>🔄 Retraction Policy</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>JCIDS may retract or correct published articles under specific circumstances to maintain scientific integrity.</p>
          </div>
          
          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid #e9ecef', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', marginBottom: '30px' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '25px', fontSize: '1.6rem', textAlign: 'center' }}>⚠️ Retraction Circumstances</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🚫 Proven Misconduct</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>Plagiarism, data manipulation, or unethical research practices</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>📋 Duplicate Publications</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>Duplicate submissions or redundant publications</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>👤 Author Request</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>Author-initiated withdrawal for ethical reasons</p>
              </div>
            </div>
          </div>
          
          <div style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', padding: '25px', borderRadius: '12px', border: '1px solid #bee5eb' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px', fontSize: '1.4rem', textAlign: 'center' }}>🔍 Retraction Process</h4>
            <ol style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
              <li><strong>Investigation:</strong> Complaints are investigated by the editorial board</li>
              <li><strong>Author Response:</strong> Authors are given opportunity to respond</li>
              <li><strong>Decision:</strong> If misconduct is confirmed, retraction notice is issued</li>
              <li><strong>Transparency:</strong> Retractions are transparent with clear reasoning</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'fee-policy',
      title: '💰 Fee Policy',
      content: (
        <div>
          <div style={{ background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)', color: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>💰 Fee Policy</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>JCIDS currently follows a no submission fee policy to encourage participation from researchers worldwide.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '30px' }}>
            <div style={{ background: '#d4edda', padding: '25px', borderRadius: '12px', border: '1px solid #c3e6cb', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🆓</div>
              <h4 style={{ color: '#155724', marginBottom: '15px' }}>No Submission Fee</h4>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#155724' }}>Currently no charges for manuscript submission and initial review process</p>
            </div>
            <div style={{ background: '#fff3cd', padding: '25px', borderRadius: '12px', border: '1px solid #ffeaa7', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⏳</div>
              <h4 style={{ color: '#856404', marginBottom: '15px' }}>Future APC</h4>
              <p style={{ margin: '0', lineHeight: '1.6', color: '#856404' }}>Article Processing Charges initially waived for first few issues</p>
            </div>
          </div>
          
          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid #e9ecef', boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px', fontSize: '1.6rem', textAlign: 'center' }}>🎯 Fee Waiver & Discount Policy</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🌍 Developing Countries</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>Fee waivers available for authors from low- and middle-income countries</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🎓 Students</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>Discounts for students and early-career researchers</p>
              </div>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '10px' }}>🤝 Transparency</h5>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.5', color: '#555' }}>No hidden charges and transparent fee structure</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Header Section */}
      <div className="card" style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '2.5rem' }}>
          Welcome to JCIDS
        </h1>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>
          Journal of Computational Intelligence and Decision Science
        </p>
        <div style={{ 
          background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          display: 'inline-block'
        }}>
          <strong>ISSN: 2348-8549 (Online) | Open Access | Double-Blind Peer Review</strong>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '30px' }}>
        {/* Navigation Menu */}
        <div>
          <div style={{ 
            background: '#2c4a80', 
            color: 'white', 
            padding: '15px 20px',
            borderRadius: '8px 8px 0 0',
            marginBottom: '0'
          }}>
            <h3 style={{ margin: '0', fontSize: '1.2rem' }}>📖 Journal Information</h3>
          </div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #ddd',
            borderTop: 'none',
            borderRadius: '0 0 8px 8px',
            marginBottom: '20px'
          }}>
            {journalSections.map((section) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{
                  padding: '15px 20px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #f0f0f0',
                  backgroundColor: activeSection === section.id ? '#f8f9fa' : 'white',
                  color: activeSection === section.id ? '#1a3d6b' : '#2c4a80',
                  fontWeight: activeSection === section.id ? '600' : '500',
                  transition: 'all 0.2s ease'
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
            padding: '15px 20px',
            borderRadius: '8px 8px 0 0',
            marginBottom: '0'
          }}>
            <h3 style={{ margin: '0', fontSize: '1.2rem' }}>⚡ Quick Actions</h3>
          </div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #ddd',
            borderTop: 'none',
            borderRadius: '0 0 8px 8px'
          }}>
            <a href="/submit" style={{ 
              display: 'block',
              padding: '15px 20px',
              color: '#2c4a80',
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'background 0.2s'
            }}>
              📝 Submit Paper
            </a>
            <a href="mailto:submissions@jcids.org" style={{ 
              display: 'block',
              padding: '15px 20px',
              color: '#2c4a80',
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'background 0.2s'
            }}>
              📧 Email Submission
            </a>
            <a href="#template" style={{ 
              display: 'block',
              padding: '15px 20px',
              color: '#2c4a80',
              textDecoration: 'none',
              transition: 'background 0.2s'
            }}>
              📄 Download Template
            </a>
          </div>
        </div>

        {/* Main Content Area */}
        <div>
          <div className="card">
            <h2 style={{ 
              color: '#1a3d6b', 
              marginBottom: '25px', 
              fontSize: '2rem',
              borderBottom: '3px solid #2c4a80',
              paddingBottom: '10px'
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

export default Home
