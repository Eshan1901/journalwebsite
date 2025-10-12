import { useState } from 'react'

const Editorial = () => {
  const [activeSection, setActiveSection] = useState('editorial-board')

  const sections = [
    {
      id: 'editorial-board',
      title: 'Editorial Board',
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
              Editorial Board
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              Meet our distinguished editorial team committed to advancing research in computational intelligence and decision science.
            </p>
          </div>

          {/* Editorial Board - now just descriptive */}
          <div style={{ 
            background: '#e8f4fd', 
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            border: '1px solid #bee5eb'
          }}>
            <h4 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.4rem' }}>JCIDS Editorial Structure</h4>
            <p style={{ color: '#2c4a80', margin: '0', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Our editorial team consists of distinguished researchers across multiple domains of computational intelligence and decision science. 
              The editorial board includes our Editor-in-Chief, Associate Editors, and Assistant Editors, all committed to maintaining 
              the highest standards of academic excellence and peer review quality.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'editor-in-chief',
      title: 'Editor-in-Chief',
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
              Editor-in-Chief
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              Leading the editorial vision and maintaining the highest standards of academic excellence.
            </p>
          </div>

          {/* Editor-in-Chief */}
          <div style={{ 
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                marginRight: '25px'
              }}>
                MR
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  color: '#1a3d6b', 
                  margin: '0 0 8px 0', 
                  fontSize: '1.8rem',
                  fontWeight: '700'
                }}>
                  Dr. Manikandan Rajagopal
                </h3>
                <p style={{ 
                  color: '#2c4a80', 
                  margin: '0 0 5px 0', 
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>
                  Associate Professor
                </p>
                <p style={{ 
                  color: '#666', 
                  margin: '0', 
                  fontSize: '1rem',
                  lineHeight: '1.4'
                }}>
                  Department of Lean Operations and Systems<br/>
                  School of Business Management
                </p>
              </div>
            </div>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <h4 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.1rem' }}>
                <i className="fas fa-university" style={{ marginRight: '8px' }}></i>
                Institutional Affiliation
              </h4>
              <p style={{ margin: '0', lineHeight: '1.6', fontSize: '1rem' }}>
                Christ (Deemed to be University)<br/>
                Bangalore, Karnataka - 560 073, India
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <div style={{ 
                background: '#e8f4fd', 
                padding: '15px', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <i className="fas fa-envelope" style={{ color: '#2c4a80', fontSize: '1.2rem', marginBottom: '8px' }}></i>
                <div style={{ fontSize: '0.9rem' }}>
                  <a href="mailto:manikandan.rajagopal@christuniversity.in" style={{ 
                    color: '#2c4a80', 
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}>
                    manikandan.rajagopal@christuniversity.in
                  </a>
                </div>
              </div>
              
              <div style={{ 
                background: '#e8f4fd', 
                padding: '15px', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <i className="fas fa-id-card" style={{ color: '#2c4a80', fontSize: '1.2rem', marginBottom: '8px' }}></i>
                <div style={{ fontSize: '0.9rem' }}>
                  <a href="https://orcid.org/0000-0001-7915-0180" target="_blank" rel="noopener noreferrer" style={{ 
                    color: '#2c4a80', 
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}>
                    ORCID: 0000-0001-7915-0180
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'managing-editors',
      title: 'Managing Editors',
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
              Managing Editors
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              Managing editorial operations and overseeing the publication process.
            </p>
          </div>

          {/* Managing Editors */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '25px' }}>
            {/* Dr. Ramkumar Sivasakthivel */}
            <div style={{ 
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  RS
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#1a3d6b', 
                    margin: '0 0 5px 0', 
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>
                    Dr. Ramkumar Sivasakthivel
                  </h4>
                  <p style={{ 
                    color: '#2c4a80', 
                    margin: '0', 
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Associate Professor
                  </p>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.4', color: '#666' }}>
                  Department of Computer Science<br/>
                  School of Sciences<br/>
                  Christ (Deemed to be University)<br/>
                  Bangalore, India
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '12px', 
                borderRadius: '6px',
                fontSize: '0.85rem'
              }}>
                <i className="fas fa-envelope" style={{ color: '#2c4a80', marginRight: '6px' }}></i>
                <a href="mailto:ramkumar.s@christuniversity.in" style={{ 
                  color: '#2c4a80', 
                  textDecoration: 'none'
                }}>
                  ramkumar.s@christuniversity.in
                </a>
              </div>
            </div>

            {/* Dr. Rajendran T */}
            <div style={{ 
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  RT
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#1a3d6b', 
                    margin: '0 0 5px 0', 
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>
                    Dr. Rajendran T
                  </h4>
                  <p style={{ 
                    color: '#2c4a80', 
                    margin: '0', 
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Associate Professor
                  </p>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.4', color: '#666' }}>
                  Department of Computer Science and Engineering<br/>
                  JCT College of Engineering and Technology<br/>
                  Coimbatore, India
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '12px', 
                borderRadius: '6px',
                fontSize: '0.85rem'
              }}>
                <i className="fas fa-envelope" style={{ color: '#2c4a80', marginRight: '6px' }}></i>
                <a href="mailto:rajendran.thavasimuthusamy@ieee.org" style={{ 
                  color: '#2c4a80', 
                  textDecoration: 'none'
                }}>
                  rajendran.thavasimuthusamy@ieee.org
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'associate-editors',
      title: 'Associate Editors',
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
              Associate Editors
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              Experienced researchers supporting the editorial process and peer review coordination.
            </p>
          </div>

          {/* Associate Editors */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '25px' }}>
            {/* Dr. K. Sathesh Kumar */}
            <div style={{ 
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  KS
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#1a3d6b', 
                    margin: '0 0 5px 0', 
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>
                    Dr. K. Sathesh Kumar
                  </h4>
                  <p style={{ 
                    color: '#2c4a80', 
                    margin: '0', 
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Associate Professor
                  </p>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.4', color: '#666' }}>
                  Computer Science and Engineering<br/>
                  Alliance College of Advanced Computing<br/>
                  Alliance University<br/>
                  Bangalore, India
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '12px', 
                borderRadius: '6px',
                fontSize: '0.85rem'
              }}>
                <i className="fas fa-envelope" style={{ color: '#2c4a80', marginRight: '6px' }}></i>
                <a href="mailto:satheshkumar.k@alliance.edu.in" style={{ 
                  color: '#2c4a80', 
                  textDecoration: 'none'
                }}>
                  satheshkumar.k@alliance.edu.in
                </a>
              </div>
            </div>

            {/* Dr. Sriramakrishnan Pathmanaban */}
            <div style={{ 
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  SP
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#1a3d6b', 
                    margin: '0 0 5px 0', 
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>
                    Dr. Sriramakrishnan Pathmanaban
                  </h4>
                  <p style={{ 
                    color: '#2c4a80', 
                    margin: '0', 
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Faculty, Department of Mathematics
                  </p>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.4', color: '#666' }}>
                  Department of Mathematics<br/>
                  Amrita School of Physical Sciences<br/>
                  Amrita Vishwa Vidyapeetham<br/>
                  Coimbatore, India
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '12px', 
                borderRadius: '6px',
                fontSize: '0.85rem'
              }}>
                <i className="fas fa-envelope" style={{ color: '#2c4a80', marginRight: '6px' }}></i>
                <a href="mailto:p_sriramakrishnan@cb.amrita.edu" style={{ 
                  color: '#2c4a80', 
                  textDecoration: 'none'
                }}>
                  p_sriramakrishnan@cb.amrita.edu
                </a>
              </div>
            </div>

            {/* Dr. Gobinath */}
            <div style={{ 
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  RG
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#1a3d6b', 
                    margin: '0 0 5px 0', 
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>
                    Dr. Gobinath
                  </h4>
                  <p style={{ 
                    color: '#2c4a80', 
                    margin: '0', 
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Associate Professor
                  </p>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.4', color: '#666' }}>
                  Department of Computer Science<br/>
                  School of Sciences<br/>
                  Christ (Deemed to be University)<br/>
                  Bangalore, India
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '12px', 
                borderRadius: '6px',
                fontSize: '0.85rem'
              }}>
                <i className="fas fa-envelope" style={{ color: '#2c4a80', marginRight: '6px' }}></i>
                <a href="mailto:gobinath.r@christuniversity.in" style={{ 
                  color: '#2c4a80', 
                  textDecoration: 'none'
                }}>
                  gobinath.r@christuniversity.in
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'assistant-editors',
      title: 'Assistant Editors',
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
              Assistant Editors
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              Supporting editorial operations and coordinating manuscript processing.
            </p>
          </div>

          {/* Assistant Editors */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '25px' }}>
            {/* Dr. M. Arun */}
            <div style={{ 
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  MA
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#1a3d6b', 
                    margin: '0 0 5px 0', 
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>
                    Dr. M. Arun
                  </h4>
                  <p style={{ 
                    color: '#2c4a80', 
                    margin: '0', 
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Associate Professor
                  </p>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.4', color: '#666' }}>
                  Department of Computer Applications<br/>
                  School of Computing<br/>
                  Kalasalingam Academy of Research and Education<br/>
                  Krishnan Koil, Tamil Nadu, India
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '12px', 
                borderRadius: '6px',
                fontSize: '0.85rem'
              }}>
                <i className="fas fa-envelope" style={{ color: '#2c4a80', marginRight: '6px' }}></i>
                <a href="mailto:drarunmurugesan@gmail.com" style={{ 
                  color: '#2c4a80', 
                  textDecoration: 'none'
                }}>
                  drarunmurugesan@gmail.com
                </a>
              </div>
            </div>

            {/* Dr. R. Stephen */}
            <div style={{ 
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  marginRight: '15px'
                }}>
                  RS
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    color: '#1a3d6b', 
                    margin: '0 0 5px 0', 
                    fontSize: '1.3rem',
                    fontWeight: '700'
                  }}>
                    Dr. R. Stephen
                  </h4>
                  <p style={{ 
                    color: '#2c4a80', 
                    margin: '0', 
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    Assistant Professor
                  </p>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.4', color: '#666' }}>
                  Department of Computer Science<br/>
                  School of Sciences<br/>
                  Christ (Deemed to be University)<br/>
                  Bangalore, India
                </p>
              </div>

              <div style={{ 
                background: '#f8f9fa', 
                padding: '12px', 
                borderRadius: '6px',
                fontSize: '0.85rem'
              }}>
                <i className="fas fa-envelope" style={{ color: '#2c4a80', marginRight: '6px' }}></i>
                <a href="mailto:stephen.r@christuniversity.in" style={{ 
                  color: '#2c4a80', 
                  textDecoration: 'none'
                }}>
                  stephen.r@christuniversity.in
                </a>
              </div>
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
          Editorial Team
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#64748b', 
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Distinguished scholars and researchers committed to advancing computational intelligence and decision science
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
            <h3 style={{ margin: '0', fontSize: '1.3rem' }}>Editorial Sections</h3>
          </div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #ddd',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            {sections.map((section) => (
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

          {/* Contact Editorial */}
          <div style={{ 
            background: '#2c4a80', 
            color: 'white', 
            padding: '20px',
            borderRadius: '12px 12px 0 0',
            marginTop: '30px',
            marginBottom: '0'
          }}>
            <h3 style={{ margin: '0', fontSize: '1.3rem' }}>Contact Editorial</h3>
          </div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #ddd',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <a href="mailto:editorial@gnosispress.org?subject=JCIDS Editorial Inquiry" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }}>
              Editorial Office
            </a>
            <a href="mailto:submissions@gnosispress.org?subject=JCIDS Submission Query" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }}>
              Submission Queries
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
              {sections.find(section => section.id === activeSection)?.title}
            </h2>
            <div style={{ lineHeight: '1.6', color: '#333' }}>
              {sections.find(section => section.id === activeSection)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editorial