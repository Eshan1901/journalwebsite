import { useState } from 'react'

const Home = () => {
  return (
    <>
      {/* Marquee Announcement - No Publication Charges */}
      <div style={{ 
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        color: 'white',
        padding: '15px 0',
        boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
        overflow: 'hidden',
        width: '100%'
      }}>
        <marquee behavior="scroll" direction="left" scrollamount="6" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
          Gnosis Press - No Publication Charges | Zero Article Processing Fees | Free Open Access Publishing | Submit Your Research Today at No Cost
        </marquee>
      </div>
      
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '15px' }}>
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

      {/* Vision, Mission, Quality Statement */}
      <div style={{ 
        background: 'white', 
        borderRadius: '12px', 
        padding: '50px 45px', 
        marginBottom: '40px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Vision */}
          <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #e5e7eb' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#1e293b',
              marginBottom: '18px',
              letterSpacing: '-0.02em'
            }}>
              Vision
            </h3>
            <p style={{ 
              fontSize: '1.05rem', 
              lineHeight: '1.8', 
              color: '#475569',
              textAlign: 'justify',
              margin: 0
            }}>
              To emerge as a globally respected new-age publishing house that empowers knowledge creation, dissemination, and impact by delivering credible, ethical, and technology-driven scholarly and professional publications that advance research, innovation, and societal progress.
            </p>
          </div>

          {/* Mission */}
          <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #e5e7eb' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#1e293b',
              marginBottom: '18px',
              letterSpacing: '-0.02em'
            }}>
              Mission
            </h3>
            <p style={{ 
              fontSize: '1.05rem', 
              lineHeight: '1.8', 
              color: '#475569',
              textAlign: 'justify',
              margin: 0
            }}>
              GNOSIS Press is committed to publishing high-quality books, journals, conference proceedings, and scholarly resources that uphold international publishing standards and ethical practices. The mission of GNOSIS Press is to provide an inclusive and transparent platform for researchers, academicians, professionals, and creative thinkers to share original ideas and impactful research with a global audience. Through rigorous peer review, editorial excellence, digital innovation, and wide dissemination, GNOSIS Press strives to enhance the visibility, accessibility, and citation impact of published works while supporting interdisciplinary research, early-career scholars, and industry-academia collaboration.
            </p>
          </div>

          {/* Quality Statement */}
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              color: '#1e293b',
              marginBottom: '18px',
              letterSpacing: '-0.02em'
            }}>
              Quality Statement
            </h3>
            <p style={{ 
              fontSize: '1.05rem', 
              lineHeight: '1.8', 
              color: '#475569',
              textAlign: 'justify',
              margin: 0
            }}>
              GNOSIS Press is dedicated to maintaining uncompromising quality in all aspects of publishing by adhering to internationally recognized editorial policies, ethical guidelines, and best practices. Every manuscript is subjected to a systematic peer-review and plagiarism-screening process to ensure originality, accuracy, and academic integrity. The press emphasizes consistency, transparency, and continuous improvement in editorial workflows, production standards, and author services. By integrating advanced publishing technologies with experienced editorial oversight, GNOSIS Press ensures timely publication, global discoverability, and long-term value of intellectual contributions, reaffirming its commitment to excellence, trust, and knowledge dissemination.
            </p>
          </div>
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
            onClick={() => window.location.href = '/instructions-to-authors'}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Submit Research
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
    </>
  )
}

export default Home