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
      id: 'aim-scope',
      title: '🎯 Research Scope & Areas',
      content: (
        <div>
          <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
            JCIDS publishes original research in computational intelligence, machine learning, artificial intelligence, 
            data science, decision support systems, optimization algorithms, expert systems, neural networks, fuzzy logic, 
            evolutionary computation, swarm intelligence, natural language processing, computer vision, robotics, and 
            intelligent systems applications across various domains.
          </p>
          <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Research Areas Include:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Machine Learning and Deep Learning</li>
              <li>Artificial Intelligence Systems</li>
              <li>Data Science and Analytics</li>
              <li>Decision Support Systems</li>
              <li>Natural Language Processing</li>
            </ul>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li>Computer Vision</li>
              <li>Expert Systems</li>
              <li>Neural Networks</li>
              <li>Evolutionary Computation</li>
              <li>Smart Cities Applications</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'editorial-board',
      title: '👥 Editorial Board',
      content: (
        <div>
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '10px' }}>Editor-in-Chief</h4>
            <p style={{ lineHeight: '1.6' }}>
              <strong>Prof. Dr. Michael Chen</strong><br/>
              Massachusetts Institute of Technology (MIT), USA<br/>
              Specialization: Artificial Intelligence and Machine Learning
            </p>
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Associate Editors</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <p><strong>Dr. Sarah Johnson</strong><br/>Stanford University, USA</p>
                <p><strong>Prof. Liu Wei</strong><br/>Tsinghua University, China</p>
              </div>
              <div>
                <p><strong>Dr. Ahmed Hassan</strong><br/>Cairo University, Egypt</p>
                <p><strong>Prof. Maria Rodriguez</strong><br/>University of Barcelona, Spain</p>
              </div>
            </div>
          </div>
          
          <p style={{ lineHeight: '1.6', color: '#666' }}>
            The Editorial Board includes 25+ distinguished researchers from top universities worldwide 
            specializing in AI, machine learning, and decision science.
          </p>
        </div>
      )
    },
    {
      id: 'submission',
      title: '📝 Paper Submission',
      content: (
        <div>
          <div style={{ background: '#e8f4fd', padding: '20px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #bee5eb' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '10px' }}>📧 Submit Your Paper</h4>
            <p style={{ margin: '0', fontSize: '1.1rem' }}>
              Email: <strong>submissions@jcids.org</strong>
            </p>
          </div>
          
          <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Submission Requirements</h4>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', marginBottom: '25px' }}>
            <li>Complete manuscript in IEEE format</li>
            <li>Cover letter explaining significance</li>
            <li>Author information and affiliations</li>
            <li>Conflict of interest statement</li>
            <li>Plagiarism report (Turnitin preferred)</li>
          </ul>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div>
              <h4 style={{ color: '#2c4a80', marginBottom: '10px' }}>Paper Length</h4>
              <p>• Full papers: Maximum 12 pages<br/>• Short papers: Maximum 6 pages</p>
            </div>
            <div>
              <h4 style={{ color: '#2c4a80', marginBottom: '10px' }}>Review Process</h4>
              <p>• Double-blind peer review<br/>• Average review time: 4-6 weeks</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'guidelines',
      title: '📚 Author Guidelines',
      content: (
        <div>
          <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Manuscript Format</h4>
          <p style={{ marginBottom: '20px' }}>
            <strong>IEEE template is mandatory.</strong> Papers must be formatted according to the official IEEE conference template.
          </p>
          
          <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Paper Structure</h4>
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
            <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>Abstract</strong> (150-250 words)</li>
              <li><strong>Keywords</strong> (4-8 keywords)</li>
              <li><strong>Introduction</strong></li>
              <li><strong>Literature Review</strong></li>
              <li><strong>Methodology</strong></li>
              <li><strong>Results and Discussion</strong></li>
              <li><strong>Conclusion</strong></li>
              <li><strong>References</strong> (IEEE style, minimum 20 recent references)</li>
            </ol>
          </div>
          
          <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Technical Requirements</h4>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>Figures and tables: High resolution (minimum 300 DPI), properly captioned</li>
            <li>Format: A4 size, 10pt Times New Roman, single column, 1.15 line spacing</li>
            <li>Margins: 2.5cm all sides</li>
            <li>Mathematical equations: Use proper equation editor</li>
          </ul>
        </div>
      )
    },
    {
      id: 'ethics',
      title: '⚖️ Publication Ethics',
      content: (
        <div>
          <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
            JCIDS follows COPE (Committee on Publication Ethics) guidelines and maintains the highest 
            standards of research integrity and publication ethics.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            <div>
              <h4 style={{ color: '#2c4a80', marginBottom: '10px' }}>Zero Tolerance Policy</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.7' }}>
                <li>Plagiarism</li>
                <li>Data fabrication</li>
                <li>Falsification</li>
                <li>Duplicate submission</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#2c4a80', marginBottom: '10px' }}>Author Responsibilities</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.7' }}>
                <li>Declare conflicts of interest</li>
                <li>Ensure originality</li>
                <li>Provide accurate data</li>
                <li>Proper attribution</li>
              </ul>
            </div>
          </div>
          
          <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '8px', marginTop: '20px', border: '1px solid #ffeaa7' }}>
            <p style={{ margin: '0', color: '#856404' }}>
              <strong>Note:</strong> All submissions are checked using Turnitin plagiarism detection software. 
              Research involving human subjects requires ethics approval.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'indexing',
      title: '🔗 Indexing & Abstracting',
      content: (
        <div>
          <p style={{ marginBottom: '25px', lineHeight: '1.6' }}>
            JCIDS is indexed and abstracted in major academic databases to ensure maximum visibility 
            and accessibility of published research.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            <div>
              <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Current Indexing</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>IEEE Xplore Digital Library</li>
                <li>ACM Digital Library</li>
                <li>Google Scholar</li>
                <li>DBLP Computer Science Bibliography</li>
                <li>Microsoft Academic</li>
                <li>Semantic Scholar</li>
                <li>ResearchGate</li>
                <li>Academia.edu</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Under Review</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Scopus (Elsevier)</li>
                <li>Web of Science (Clarivate)</li>
                <li>DOAJ (Directory of Open Access Journals)</li>
                <li>Engineering Index (EI Compendex)</li>
              </ul>
            </div>
          </div>
          
          <div style={{ background: '#d4edda', padding: '15px', borderRadius: '8px', marginTop: '20px', border: '1px solid #c3e6cb' }}>
            <p style={{ margin: '0', color: '#155724' }}>
              <strong>DOI Assignment:</strong> All published articles receive DOI numbers through CrossRef for permanent citation.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'charges',
      title: '💰 Publication Charges',
      content: (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '25px' }}>
            <div style={{ background: '#e8f5e8', padding: '20px', borderRadius: '8px', border: '1px solid #c3e6cb' }}>
              <h4 style={{ color: '#155724', marginBottom: '10px' }}>🆓 Free Submission</h4>
              <p style={{ margin: '0', lineHeight: '1.6' }}>
                No charges for manuscript submission and initial review process.
              </p>
            </div>
            <div style={{ background: '#fff3cd', padding: '20px', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
              <h4 style={{ color: '#856404', marginBottom: '10px' }}>💰 Open Access APC</h4>
              <p style={{ margin: '0', lineHeight: '1.6' }}>
                <strong>$299 USD</strong> per accepted article<br/>
                Includes unlimited downloads, DOI, and archiving
              </p>
            </div>
          </div>
          
          <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Discount Policies</h4>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', marginBottom: '25px' }}>
            <li><strong>Developing countries:</strong> 50% discount available</li>
            <li><strong>Student first authors:</strong> 25% discount</li>
            <li><strong>Exceptional cases:</strong> Waiver requests considered</li>
          </ul>
          
          <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Payment Methods</h4>
          <p style={{ lineHeight: '1.6' }}>
            Credit cards (Visa/Mastercard/Amex), PayPal, bank wire transfer, institutional purchase orders. 
            Multiple currencies accepted: USD, EUR, GBP. Contact: <strong>billing@jcids.org</strong>
          </p>
        </div>
      )
    },
    {
      id: 'current-issue',
      title: '📖 Current Issue',
      content: (
        <div>
          <div style={{ background: '#e8f4fd', padding: '20px', borderRadius: '8px', marginBottom: '25px', border: '1px solid #bee5eb' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '10px' }}>📚 Volume 1, Issue 1 (2025)</h4>
            <p style={{ margin: '0', fontSize: '1rem', lineHeight: '1.6' }}>
              Inaugural Issue - Now Available Online
            </p>
          </div>
          
          <h4 style={{ color: '#2c4a80', marginBottom: '15px' }}>Featured Research Topics</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '25px' }}>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '8px' }}>Deep Learning for Healthcare</h5>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>AI applications in medical diagnosis and treatment optimization</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '8px' }}>Ethical AI Decision Making</h5>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>Frameworks for responsible AI development and deployment</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '8px' }}>Quantum Machine Learning</h5>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>Quantum computing applications in ML algorithms</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #e9ecef' }}>
              <h5 style={{ color: '#1a3d6b', marginBottom: '8px' }}>Smart City Applications</h5>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>IoT and AI integration for urban intelligence systems</p>
            </div>
          </div>
          
          {/* Search Papers Section */}
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px', marginTop: '25px' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px' }}>🔍 Search Published Papers</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr auto', gap: '15px', marginBottom: '15px' }}>
              <input 
                type="text" 
                placeholder="Search by title, abstract, keywords, or author name"
                style={{ 
                  padding: '12px 15px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <select style={{ 
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none'
              }}>
                <option>All Categories</option>
                <option>Machine Learning</option>
                <option>Deep Learning</option>
                <option>AI Systems</option>
                <option>Data Science</option>
                <option>Computer Vision</option>
                <option>NLP</option>
                <option>Robotics</option>
              </select>
              <button style={{ 
                background: '#2c4a80',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>
                🔍 Search
              </button>
            </div>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>Popular searches:</span>
              {['neural networks', 'computer vision', 'natural language processing', 'machine learning'].map(term => (
                <span key={term} style={{ 
                  background: 'white', 
                  padding: '4px 12px', 
                  borderRadius: '15px', 
                  fontSize: '0.85rem',
                  color: '#2c4a80',
                  cursor: 'pointer',
                  border: '1px solid #2c4a80'
                }}>
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'latest-news',
      title: '📰 Latest News & Updates',
      content: (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
            <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ background: '#2c4a80', color: 'white', padding: '15px' }}>
                <h4 style={{ margin: '0', fontSize: '1.1rem' }}>📢 Latest News</h4>
              </div>
              <div style={{ padding: '0' }}>
                <div style={{ padding: '20px', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px' }}>September 12, 2025</div>
                  <h5 style={{ color: '#2c4a80', marginBottom: '10px', fontSize: '1rem' }}>Email Submission System Launched!</h5>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0', color: '#555' }}>
                    Our new email-based submission system is now live. Authors can submit papers directly via email to submissions@jcids.org.
                  </p>
                </div>
                <div style={{ padding: '20px', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px' }}>September 10, 2025</div>
                  <h5 style={{ color: '#2c4a80', marginBottom: '10px', fontSize: '1rem' }}>Special Issue on AI Ethics</h5>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0', color: '#555' }}>
                    Call for papers for upcoming special issue on Ethical AI and Decision Making Systems. Submission deadline: December 31, 2025.
                  </p>
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '8px' }}>September 5, 2025</div>
                  <h5 style={{ color: '#2c4a80', marginBottom: '10px', fontSize: '1rem' }}>New Indexing Partnership</h5>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '0', color: '#555' }}>
                    JCIDS is now indexed in additional AI and Computer Science databases including DBLP and Microsoft Academic.
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ background: '#2c4a80', color: 'white', padding: '15px' }}>
                <h4 style={{ margin: '0', fontSize: '1.1rem' }}>📊 Journal Statistics</h4>
              </div>
              <div style={{ padding: '25px', textAlign: 'center' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#2c4a80' }}>0</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>Published Articles</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#2c4a80' }}>5</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>Under Review</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#2c4a80' }}>12</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>Editorial Board</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#2c4a80' }}>8</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>Countries</div>
                  </div>
                </div>
                <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2c4a80' }}>2348-8549</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>ISSN (Online)</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call for Papers */}
          <div style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', padding: '25px', borderRadius: '8px', marginTop: '30px', border: '1px solid #bee5eb' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '15px', fontSize: '1.3rem' }}>📝 Call for Papers</h4>
            <p style={{ lineHeight: '1.6', marginBottom: '20px', fontSize: '1rem' }}>
              We invite high-quality research papers in all areas of computational intelligence and decision science. 
              Fast track review process available for exceptional contributions.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2c4a80' }}>No Submission Fee</div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>Free manuscript submission</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2c4a80' }}>Fast Review</div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>4-6 weeks average</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2c4a80' }}>Open Access</div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>Immediate publication</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'featured-papers',
      title: '🌟 Featured Research',
      content: (
        <div>
          <div style={{ background: '#f8f9fa', padding: '25px', borderRadius: '8px', marginBottom: '30px' }}>
            <h4 style={{ color: '#2c4a80', marginBottom: '20px' }}>🌟 Highlighted Research Areas</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>🤖 Artificial Intelligence</h5>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#555', marginBottom: '15px' }}>
                  Latest advances in AI systems, neural architectures, and cognitive computing approaches.
                </p>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>
                  <strong>Recent topics:</strong> Transformer models, Reinforcement learning, AI safety
                </div>
              </div>
              
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>🧠 Machine Learning</h5>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#555', marginBottom: '15px' }}>
                  Novel algorithms, optimization techniques, and applications in diverse domains.
                </p>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>
                  <strong>Recent topics:</strong> Federated learning, AutoML, Explainable AI
                </div>
              </div>
              
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>📊 Data Science</h5>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#555', marginBottom: '15px' }}>
                  Big data analytics, statistical methods, and data-driven decision making frameworks.
                </p>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>
                  <strong>Recent topics:</strong> Real-time analytics, Data visualization, Privacy-preserving ML
                </div>
              </div>
              
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
                <h5 style={{ color: '#1a3d6b', marginBottom: '12px' }}>🎯 Decision Science</h5>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#555', marginBottom: '15px' }}>
                  Multi-criteria decision making, optimization models, and intelligent support systems.
                </p>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>
                  <strong>Recent topics:</strong> Game theory, Risk assessment, Strategic planning
                </div>
              </div>
            </div>
          </div>
          
          {/* Impact Metrics */}
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#2c4a80', color: 'white', padding: '20px', textAlign: 'center' }}>
              <h4 style={{ margin: '0', fontSize: '1.3rem' }}>📈 Journal Impact & Reach</h4>
            </div>
            <div style={{ padding: '30px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '25px', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>25+</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Countries Represented</div>
                  <div style={{ color: '#999', fontSize: '0.8rem', marginTop: '4px' }}>Global Reach</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>15</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Editorial Board Members</div>
                  <div style={{ color: '#999', fontSize: '0.8rem', marginTop: '4px' }}>Expert Reviewers</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>3</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Issues Per Year</div>
                  <div style={{ color: '#999', fontSize: '0.8rem', marginTop: '4px' }}>Regular Publishing</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>24/7</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Online Access</div>
                  <div style={{ color: '#999', fontSize: '0.8rem', marginTop: '4px' }}>Always Available</div>
                </div>
              </div>
              
              <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                  <div>
                    <h5 style={{ color: '#2c4a80', margin: '0 0 5px 0' }}>Indexing Status</h5>
                    <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>Currently indexed in 8+ databases</p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {['Google Scholar', 'DBLP', 'IEEE Xplore', 'ACM DL'].map(db => (
                      <span key={db} style={{ 
                        background: '#2c4a80', 
                        color: 'white', 
                        padding: '6px 12px', 
                        borderRadius: '15px', 
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
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
