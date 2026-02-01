import { useState, useEffect } from 'react'

const Journals = () => {
  const [activeSection, setActiveSection] = useState('about-journal')

  useEffect(() => {
    // Check if there's a hash in the URL on mount
    if (window.location.hash) {
      const hash = window.location.hash.substring(1) // Remove the '#'
      setActiveSection(hash)
      // Scroll to the section after a short delay to ensure content is rendered
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  const journalSections = [
    {
      id: 'about-journal',
      title: 'About the Journal',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '40px 30px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #bee5eb'
          }}>
            {/* JCIDS Logo */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginBottom: '25px' 
            }}>
              <img 
                src="/jcidslogo.jpeg" 
                alt="JCIDS Logo" 
                style={{ 
                  height: '100px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }} 
              />
            </div>
            
            <h3 style={{ 
              color: '#1a3d6b', 
              fontSize: '2rem', 
              marginBottom: '20px', 
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              About the Journal
            </h3>
            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
              <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                The Journal of Computational Intelligence and Decision Science is an open access, peer-reviewed academic journal published by Gnosis Press. It focuses on advancing research and applications in the areas of computational intelligence, data-driven decision-making, and intelligent systems across multiple domains. The journal welcomes contributions that integrate theory, methodology, and practice to address complex decision problems through innovative computational approaches.
              </p>
              <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                The journal provides immediate and free access to all its published content, enabling researchers, practitioners, and institutions worldwide to engage with the latest findings without any subscription or access barriers. A rigorous double-blind peer review process ensures the quality, originality, and scientific integrity of every manuscript.
              </p>
              <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                Authors can expect an initial decision within six to eight weeks of submission, reflecting the journal's commitment to a timely and transparent review process. All published articles are assigned DOI numbers to ensure global discoverability and persistent access.
              </p>
              <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                The journal adheres to the highest standards of publication ethics and follows the guidelines of the Committee on Publication Ethics (COPE). It encourages interdisciplinary submissions and fosters research that bridges artificial intelligence, computational methods, and decision science to generate real-world impact.
              </p>
              <p style={{ margin: '0', textAlign: 'justify' }}>
                The Journal of Computational Intelligence and Decision Science aims to serve as a platform for academic excellence and practical innovation, bringing together researchers, industry experts, and policymakers to shape the future of intelligent decision-making.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '25px'
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
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>6-8</div>
              <div style={{ color: '#666', fontSize: '1rem' }}>Weeks to first decision</div>
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
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>XXXX-XXXX</div>
              <div style={{ color: '#666', fontSize: '1rem' }}>Online Journal</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      title: 'Journal Overview (Vision, Mission & Aim)',
      content: (
        <div>
          {/* Vision Card */}
          <div style={{ 
            background: '#ffffff', 
            padding: '45px', 
            borderRadius: '8px', 
            marginBottom: '30px', 
            border: '1px solid #d1d5db', 
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              width: '4px',
              height: '100%',
              background: '#374151'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ 
                  color: '#1f2937', 
                  fontSize: '2.5rem', 
                  fontWeight: '700',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.5px'
                }}>Vision</h4>
                <div style={{ 
                  width: '80px', 
                  height: '3px', 
                  background: '#374151',
                  borderRadius: '2px'
                }}></div>
              </div>
              <p style={{ 
                fontSize: '1.15rem', 
                lineHeight: '1.9', 
                color: '#4b5563', 
                margin: '0',
                textAlign: 'justify',
                fontWeight: '400'
              }}>
                To provide a globally recognized platform for advancing high-quality research and innovation in computational intelligence and data science, fostering knowledge that drives technology for the betterment of society.
              </p>
            </div>
          </div>
          
          {/* Mission Card */}
          <div style={{ 
            background: '#ffffff', 
            padding: '45px', 
            borderRadius: '8px', 
            marginBottom: '30px', 
            border: '1px solid #d1d5db', 
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              width: '4px',
              height: '100%',
              background: '#374151'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ 
                  color: '#1f2937', 
                  fontSize: '2.5rem', 
                  fontWeight: '700',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.5px'
                }}>Mission</h4>
                <div style={{ 
                  width: '80px', 
                  height: '3px', 
                  background: '#374151',
                  borderRadius: '2px'
                }}></div>
              </div>
              <ul style={{ 
                fontSize: '1.15rem', 
                lineHeight: '1.9', 
                color: '#4b5563', 
                margin: '0',
                paddingLeft: '25px',
                fontWeight: '400'
              }}>
                <li style={{ marginBottom: '12px' }}>To promote ethical, high-quality, and original research in computational intelligence and data science.</li>
                <li style={{ marginBottom: '12px' }}>To enable interdisciplinary collaboration across academia, industry, and society.</li>
                <li>To support open access knowledge dissemination for global inclusivity.</li>
              </ul>
            </div>
          </div>

          {/* Aim Card */}
          <div style={{ 
            background: '#ffffff', 
            padding: '45px', 
            borderRadius: '8px', 
            border: '1px solid #d1d5db', 
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              width: '4px',
              height: '100%',
              background: '#374151'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ 
                  color: '#1f2937', 
                  fontSize: '2.5rem', 
                  fontWeight: '700',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.5px'
                }}>Aim</h4>
                <div style={{ 
                  width: '80px', 
                  height: '3px', 
                  background: '#374151',
                  borderRadius: '2px'
                }}></div>
              </div>
              <p style={{ 
                fontSize: '1.15rem', 
                lineHeight: '1.9', 
                color: '#4b5563', 
                margin: '0',
                textAlign: 'justify',
                fontWeight: '400'
              }}>
                The journal aims to publish and disseminate original research, critical reviews, and innovative case studies in computational intelligence and data science, thereby bridging the gap between theory and practical applications.
              </p>
            </div>
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
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: '0' }}>
              The Journal of Computational Intelligence and Decision Science follows a transparent and rigorous editorial policy to ensure the quality, originality, and ethical integrity of every manuscript.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '25px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #bee5eb' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The editorial process is designed to maintain academic standards, provide fair and timely review, and support open access dissemination of research.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '15px' }}>
            {[
              'All submissions must be original and not under review elsewhere.',
              'The journal follows a double-blind peer review process to ensure impartial evaluation.',
              'All manuscripts undergo an initial editorial screening for relevance, originality, and ethical compliance.',
              'Reviewers are selected based on subject expertise and must disclose any conflicts of interest.',
              'Final editorial decisions are made by the Editor-in-Chief, based on reviewers\' recommendations and the journal\'s standards.',
              'The journal adheres to the guidelines of the Committee on Publication Ethics (COPE).',
              'Authors, reviewers, and editors are required to declare conflicts of interest and funding sources.',
              'Every published article is assigned a DOI and made openly accessible without subscription barriers.',
              'Post-publication corrections, retractions, or clarifications will be issued when necessary to maintain research integrity.',
              'Transparency is maintained in editorial timelines, including time to first decision and revision cycles.',
              'Editorial board members who submit manuscripts are excluded from the decision-making process on their own work.',
              'The journal encourages data availability and methodological transparency to support reproducibility.',
              'The editorial policy is periodically reviewed to align with evolving best practices in academic publishing.'
            ].map((policy, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '18px 22px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '12px'
                }}
              >
                <div style={{ color: '#2c4a80', fontSize: '1.2rem', marginTop: '2px' }}>✓</div>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#333', fontSize: '1rem' }}>
                  {policy}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'reviewer-policy',
      title: 'Review Policy',
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
              Review Policy
            </h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: '0' }}>
              The Journal of Computational Intelligence and Decision Science follows a rigorous and transparent peer review process to ensure the publication of high-quality, original research.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '25px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #bee5eb' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The review system is designed to maintain academic integrity, provide constructive feedback to authors, and support timely editorial decisions.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '15px' }}>
            {[
              'The journal follows a double-blind peer review process. Identities of authors and reviewers are kept confidential throughout the review cycle.',
              'All submissions undergo an initial editorial screening to assess suitability, quality, and compliance with ethical standards.',
              'Manuscripts that pass the initial screening are assigned to expert reviewers with relevant subject expertise.',
              'Reviewers are expected to provide objective, constructive, and evidence-based feedback within the stipulated review timeline.',
              'Each manuscript is reviewed by at least two independent reviewers to ensure balanced and fair evaluation.',
              'The review focuses on originality, methodological rigor, clarity of presentation, significance of contribution, and relevance to the journal\'s scope.',
              'Reviewers must disclose any potential conflicts of interest before accepting a review assignment.',
              'The editorial team makes the final decision—accept, revise, or reject—based on reviewers\' recommendations and the journal\'s quality standards.',
              'Authors receive detailed reviewer comments and are expected to address all points systematically in their revised submissions.',
              'Revised manuscripts may be sent for a second round of review, depending on the extent of revisions required.',
              'The review process typically leads to a first decision within six to eight weeks of submission.',
              'All participants in the review process must maintain strict confidentiality and respect the intellectual property of submitted work.',
              'The journal periodically evaluates and updates its review policy to reflect best practices in scholarly publishing and peer review ethics.'
            ].map((policy, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '18px 22px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '12px'
                }}
              >
                <div style={{ color: '#2c4a80', fontSize: '1.2rem', marginTop: '2px' }}>✓</div>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#333', fontSize: '1rem' }}>
                  {policy}
                </p>
              </div>
            ))}
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
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: '0' }}>
              The Journal of Computational Intelligence and Decision Science follows a full open access publishing model, ensuring that all articles are freely and permanently available online to readers worldwide.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '30px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #bee5eb' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The journal supports unrestricted access to research findings, encouraging wider dissemination, increased visibility, and greater impact of published work.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '15px', marginBottom: '30px' }}>
            {[
              'All articles are published under an open access model and are available online without any subscription or paywall.',
              'Authors retain the copyright to their work, and articles are distributed under a Creative Commons license that allows sharing and reuse with proper attribution.',
              'Readers can freely read, download, copy, distribute, print, and cite published articles without prior permission, provided the original source is properly credited.',
              'Each article is assigned a DOI to ensure permanent accessibility and reliable citation.',
              'The journal ensures a transparent editorial and publication process without hidden costs for readers or institutions.',
              'Open access aligns with international efforts to make scientific knowledge widely available, accelerating innovation and promoting global collaboration.',
              'The journal adheres to ethical standards and maintains the integrity of the scholarly record while enabling open dissemination of knowledge.'
            ].map((policy, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '18px 22px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '12px'
                }}
              >
                <div style={{ color: '#2c4a80', fontSize: '1.2rem', marginTop: '2px' }}>✓</div>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#333', fontSize: '1rem' }}>
                  {policy}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'editorial-workflow',
      title: 'Editorial Workflow',
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
              Editorial Workflow
            </h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: '0' }}>
              The Journal of Computational Intelligence and Decision Science follows a structured and transparent editorial workflow to ensure fairness, quality, and efficiency at every stage of the publication process.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '25px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #bee5eb' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The workflow is designed to maintain academic standards, minimize delays, and provide authors with a clear understanding of the process from submission to publication.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '25px' }}>
            {[
              {
                step: '1. Manuscript Submission',
                desc: 'Authors submit their manuscripts ONLY to the email Id provided (submission.jcids@gnosispress.org). All required files, including the main manuscript, figures, tables, supplementary materials, author details, declarations, and ethical approvals (if applicable), must be provided at the time of submission.'
              },
              {
                step: '2. Initial Screening (Desk Review)',
                desc: 'Upon submission, the editorial office checks the manuscript for completeness, formatting, plagiarism, and alignment with the journal\'s scope. Manuscripts that do not meet the basic requirements may be returned to authors for technical corrections or declined at this stage.'
              },
              {
                step: '3. Assignment to Editor',
                desc: 'Once the submission passes the initial checks, it is assigned to the Editor-in-Chief or a designated Associate Editor based on the topic area. The handling editor evaluates the manuscript\'s quality, originality, relevance, and compliance with ethical standards.'
              },
              {
                step: '4. Editorial Evaluation',
                desc: 'The handling editor decides whether the manuscript proceeds to peer review. Manuscripts with insufficient quality, scope mismatch, or ethical issues may be rejected without external review (desk rejection). Authors are notified promptly in such cases.'
              },
              {
                step: '5. Reviewer Selection and Invitation',
                desc: 'For manuscripts sent for review, the handling editor identifies and invites two or more qualified reviewers with relevant subject expertise. Reviewers must disclose any conflicts of interest before accepting the assignment.'
              },
              {
                step: '6. Double-Blind Peer Review',
                desc: 'The journal follows a double-blind peer review model, ensuring that both authors and reviewers remain anonymous to each other. Reviewers assess the manuscript\'s originality, methodology, clarity, contribution, and relevance. They provide detailed, constructive feedback and a recommendation (accept, minor revision, major revision, or reject).'
              },
              {
                step: '7. Editorial Decision (Round 1)',
                desc: 'The handling editor evaluates the reviewers\' comments and makes a decision: accept, revise (minor or major), or reject. A decision letter along with anonymized reviewer feedback is sent to the authors.'
              },
              {
                step: '8. Author Revision and Resubmission',
                desc: 'If revisions are requested, authors prepare a revised manuscript along with a point-by-point response letter addressing all reviewer comments. The revised submission must be completed within the stipulated timeline.'
              },
              {
                step: '9. Second Review (if required)',
                desc: 'Revised manuscripts may undergo an additional round of peer review, particularly if major changes were made. The same reviewers are typically re-invited to ensure continuity of evaluation.'
              },
              {
                step: '10. Final Editorial Decision',
                desc: 'After considering reviewer recommendations and the quality of revisions, the handling editor, in consultation with the Editor-in-Chief if necessary, makes the final decision on acceptance or rejection.'
              },
              {
                step: '11. Copyediting and Proofreading',
                desc: 'Accepted manuscripts undergo professional language editing, formatting, and typesetting to meet the journal\'s publication standards. Authors receive page proofs for final corrections and must review them carefully for accuracy.'
              },
              {
                step: '12. DOI Assignment and Online First Publication',
                desc: 'Once proofs are finalized, the article is assigned a DOI and published online ahead of its inclusion in an issue. This ensures rapid visibility and citation.'
              },
              {
                step: '13. Issue Compilation and Indexing',
                desc: 'Articles are then organized into the appropriate volume and issue. The journal ensures proper indexing and discoverability through open access platforms and databases.'
              },
              {
                step: '14. Post-Publication Updates',
                desc: 'The journal allows for post-publication corrections, retractions, or updates if necessary, in accordance with COPE guidelines. Authors and readers can contact the editorial office to report errors or ethical concerns.'
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{
                    minWidth: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}>
                    {index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h5 style={{ color: '#1a3d6b', margin: '0 0 10px 0', fontSize: '1.15rem' }}>
                      {item.step}
                    </h5>
                    <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '1rem' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '25px', 
            borderRadius: '12px',
            marginTop: '30px',
            border: '1px solid #dee2e6',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0', fontWeight: '600' }}>
              For submission queries, please contact: <a href="mailto:submission.jcids@gnosispress.org" style={{ color: '#1a3d6b', textDecoration: 'none' }}>submission.jcids@gnosispress.org</a>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'publication-ethics',
      title: 'Publication Ethics',
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
              Publication Ethics
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0' }}>
              Commitment to academic integrity and ethical publishing standards
            </p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80', marginBottom: '25px' }}>
              The Journal of Computational Intelligence and Decision Science adheres to the highest standards of publication ethics as outlined by the Committee on Publication Ethics (COPE). We are committed to maintaining academic integrity throughout the publication process.
            </p>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Zero Tolerance for Misconduct</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                <li>Plagiarism is strictly prohibited. All submissions are screened using advanced plagiarism detection tools.</li>
                <li>Manuscripts with more than 15% similarity (excluding references) are returned or rejected.</li>
                <li>Duplicate submissions or redundant publications are not accepted.</li>
                <li>Data manipulation and fabrication result in immediate rejection and potential author sanctions.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Author Responsibilities</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                <li>Authors must ensure their work is original and properly cited.</li>
                <li>All contributors who meet authorship criteria must be listed as authors.</li>
                <li>Conflicts of interest must be declared at the time of submission.</li>
                <li>Research involving human subjects or animals must have appropriate ethical approval.</li>
                <li>Authors must provide data and materials for verification if requested.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Reviewer Ethics</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                <li>Reviewers must maintain confidentiality of manuscripts under review.</li>
                <li>Reviewers must disclose conflicts of interest and decline if unable to provide unbiased review.</li>
                <li>Reviews must be objective, constructive, and completed in a timely manner.</li>
                <li>Reviewers must not use unpublished information for personal advantage.</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Editorial Integrity</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                <li>Editorial decisions are based solely on scientific merit and relevance.</li>
                <li>Editors do not have conflicts of interest with submitted manuscripts.</li>
                <li>The peer review process is fair, transparent, and unbiased.</li>
                <li>Corrections, retractions, and errata are published when necessary.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'article-processing-charges',
      title: 'Article Processing Charges',
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
              Article Processing Charges
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0' }}>
              Transparent and affordable publishing fees
            </p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ 
              background: '#e8f4fd', 
              padding: '25px', 
              borderRadius: '8px', 
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.5rem', marginBottom: '10px' }}>No Submission Fees</h4>
              <p style={{ fontSize: '1.1rem', color: '#2c4a80', margin: '0' }}>
                JCIDS follows a <strong>no submission fee</strong> policy to encourage broad participation from researchers worldwide.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Publication Charges</h4>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80', marginBottom: '15px' }}>
                Article Processing Charges (APC) are <strong>currently waived</strong> for the initial issues to support early contributors and build the journal's community.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                Future APCs, if introduced, will be announced well in advance and will remain competitive and transparent. Waivers and discounts will be available for authors from developing countries and those without institutional funding.
              </p>
            </div>

            <div>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Fee Transparency</h4>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                All fee structures will be clearly communicated on the journal website. No hidden charges will be applied at any stage of the publication process.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'instructions-authors',
      title: 'Instructions to Authors',
      content: (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Overview Section */}
          <div className="card">
            <h2><i className="fas fa-info-circle"></i> Overview</h2>
            <p>
              All manuscripts must be submitted via email to <strong>submission.jcids@gnosispress.org</strong>, and manuscripts submitted for publication must be prepared according to the guidelines given below.
            </p>
            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #2196f3',
              marginTop: '15px'
            }}>
              <p style={{ marginBottom: '10px' }}><strong>Download Template:</strong></p>
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <a 
                  href="/JCIDS_Template_2026.docx" 
                  download="JCIDS_Template_2026.docx"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    textDecoration: 'none',
                    background: '#2c5aa0',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#1e3f7a'}
                  onMouseLeave={(e) => e.target.style.background = '#2c5aa0'}
                >
                  <i className="fas fa-file-word"></i>
                  Download JCIDS Template (DOCX)
                </a>
              </div>
            </div>
            <p style={{ marginTop: '15px' }}>
              This guideline is intended to assist authors as they prepare their manuscripts. To avoid any delay and time-consuming restructuring, Journal of Computational Intelligence and Decision Science (JCIDS) asks and encourages authors to read the guidelines before writing the manuscript.
            </p>
            <p>
              JCIDS publishes review and research articles. All papers must be written in English, and follow a clear, concise style. The language editors may have to check the language and grammar of your submitted manuscript, and make editorial changes if deemed necessary.
            </p>
          </div>

          {/* Submission Process */}
          <div className="card">
            <h2><i className="fas fa-paper-plane"></i> Submission Process</h2>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '25px', 
              borderRadius: '8px', 
              textAlign: 'center',
              margin: '20px 0',
              border: '2px solid #28a745'
            }}>
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ fontSize: '1.3rem', color: '#28a745', display: 'block', marginBottom: '10px' }}>
                  📧 Email Submission Address
                </strong>
                <a href="mailto:submission.jcids@gnosispress.org" style={{ 
                  fontSize: '1.4rem', 
                  color: '#2c5aa0',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}>
                  submission.jcids@gnosispress.org
                </a>
              </div>
            </div>

            <h3>Email Submission Checklist:</h3>
            <ul>
              <li><strong>Subject Line:</strong> "JCIDS Submission: [Your Paper Title]"</li>
              <li><strong>Attachment:</strong> PDF file of your complete manuscript</li>
              <li><strong>Email Body:</strong> Include author names, affiliations, and brief abstract</li>
              <li><strong>Cover Letter:</strong> Attach as separate document or include in email body</li>
              <li><strong>Statement of Novelty:</strong> 100-200 words</li>
              <li><strong>Corresponding Author:</strong> Clearly identify with complete contact details</li>
            </ul>

            <h3 style={{ marginTop: '25px' }}>Review Timeline:</h3>
            <div style={{ marginTop: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ 
                  width: '35px', 
                  height: '35px', 
                  borderRadius: '50%', 
                  background: '#28a745', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '15px',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>1</div>
                <div>
                  <strong>Initial Review (2-3 days):</strong> Editorial screening for scope and format compliance
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ 
                  width: '35px', 
                  height: '35px', 
                  borderRadius: '50%', 
                  background: '#17a2b8', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '15px',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>2</div>
                <div>
                  <strong>Peer Review (4-6 weeks):</strong> Double-blind review by subject matter experts
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ 
                  width: '35px', 
                  height: '35px', 
                  borderRadius: '50%', 
                  background: '#ffc107', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '15px',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>3</div>
                <div>
                  <strong>Decision (1-2 weeks):</strong> Editorial decision and reviewer feedback
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '35px', 
                  height: '35px', 
                  borderRadius: '50%', 
                  background: '#dc3545', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '15px',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>4</div>
                <div>
                  <strong>Publication (2-3 weeks after acceptance):</strong> Final formatting and online publication
                </div>
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="card">
            <h2><i className="fas fa-envelope-open-text"></i> Cover Letter</h2>
            <p>
              A submitted manuscript must be accompanied by a cover letter. The cover letter must clearly state that:
            </p>
            <ul>
              <li>The manuscript is an original work with its own merit</li>
              <li>Has not been previously published in whole or in part</li>
              <li>Is not being considered for publication elsewhere</li>
              <li>All authors have read the final manuscript</li>
              <li>All authors have approved the submission to the journal</li>
              <li>All authors have accepted full responsibilities pertaining to the manuscript's delivery and contents</li>
            </ul>
            <p>
              If there are any ethical, copyright, or disclosure issues that come with the manuscript, please reveal them in the cover letter. Authors need to declare that there is no conflict of interests or disclose all conflicts of interest regarding the manuscript submitted.
            </p>

            <h3 style={{ marginTop: '25px' }}>Statement of Novelty</h3>
            <p>
              The statement of novelty should be submitted with a manuscript. The statement should be <strong>100-200 words</strong>, and must not be a paraphrase of the abstract.
            </p>
            <p>In the statement of novelty, the authors should address:</p>
            <ol>
              <li>What is the novelty or originality of the research, compared to the existing literature</li>
              <li>The scientific impact of the research and interests to readers</li>
            </ol>
          </div>

          {/* Templates */}
          <div className="card">
            <h2><i className="fas fa-file-alt"></i> Templates</h2>
            <p>
              Authors are strongly encouraged to use the Microsoft Word template to prepare their manuscript. Using the provided template will significantly speed up the copy-editing and publication process for accepted manuscripts.
            </p>
            
            <div style={{ 
              background: '#fff3cd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ffc107',
              marginTop: '15px',
              marginBottom: '15px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-exclamation-triangle"></i> File Size Limit:</strong> The total file size for all submissions must not exceed 200 MB. If the file size exceeds this limit, please contact the Editorial Office at <strong>submission.jcids@gnosispress.org</strong>.
              </p>
            </div>

            <h3>Template Instructions:</h3>
            <div style={{ marginBottom: '20px' }}>
              <h4><i className="fas fa-file-word"></i> Microsoft Word Template</h4>
              <p>
                Manuscripts prepared in Microsoft Word must be submitted as a single file. The template includes predefined styles accessible via the "Styles" gallery in Word. Figures should be inserted into the main text immediately after the paragraph where they are first cited.
              </p>
              <ul style={{ marginTop: '10px' }}>
                <li>Download the JCIDS DOCX template above</li>
                <li>Replace placeholder text with your content</li>
                <li>Use the predefined styles for consistent formatting</li>
                <li>Submit your completed manuscript as PDF to submission.jcids@gnosispress.org</li>
              </ul>
            </div>

            <div>
              <h4><i className="fas fa-paperclip"></i> Supplementary Files</h4>
              <p>
                These can be in any format, though it is recommended to use common, non-proprietary formats whenever possible.
              </p>
            </div>
          </div>

          {/* General Format */}
          <div className="card">
            <h2><i className="fas fa-file-invoice"></i> General Format of Articles</h2>
            <p>Manuscripts should comprise:</p>
            
            <div style={{ marginTop: '20px' }}>
              <h3><i className="fas fa-chevron-right"></i> Front Matter</h3>
              <ul>
                <li>Title</li>
                <li>Author list</li>
                <li>Affiliations</li>
                <li>Abstract</li>
                <li>Keywords</li>
              </ul>

              <h4 style={{ marginTop: '20px' }}>• Title</h4>
              <p>
                The title of your manuscript should be precise, clear, and directly related to the study. Acronyms are not allowed in paper titles. They can be used in abstracts only if the related expanded form is provided (just after the acronym, in parentheses) the first time they are used.
              </p>

              <h4>• Author Information</h4>
              <p>
                Please provide the full names of all authors, including first and last names, with middle name initials included if necessary. Affiliations should follow the PubMed/MEDLINE standard format, including detailed address information such as city, postal code, state/province, and country. At least one author must be designated as the corresponding author, whose email address will be publicly displayed in the published article.
              </p>
              <div style={{ 
                background: '#e3f2fd', 
                padding: '12px', 
                borderRadius: '5px',
                border: '1px solid #2196f3',
                marginTop: '10px'
              }}>
                <p style={{ margin: 0, fontSize: '14px' }}>
                  <strong>Note:</strong> For authors with equal contributions, use a superscript symbol (#) for identification and include the statement: "These authors contributed equally to this work."
                </p>
              </div>

              <h4 style={{ marginTop: '20px' }}>• Author Affiliations</h4>
              <p>
                All authors must include their current affiliation as well as the institution where the majority of the research for the manuscript was conducted. Authors who are not currently associated with any university, institution, or organization should identify themselves as <strong>"Independent Researchers."</strong>
              </p>

              <h4>• Abstract</h4>
              <p>
                Abstracts of a research paper should be typically <strong>200 to 400 words</strong> in length, and <strong>150 to 300 words</strong> for a review paper. Abstracts shall be running continuously and shall not include reference citations. Abbreviations that appear only once in the abstract should be defined in full.
              </p>

              <h4>• Keywords</h4>
              <p>
                Please list <strong>3 to 10</strong> pertinent keywords specific to the article yet reasonably common within the subject discipline.
              </p>
            </div>

            <div style={{ marginTop: '30px' }}>
              <h3><i className="fas fa-chevron-right"></i> Main Text</h3>
              <p>
                For Articles, a structured format is recommended: <strong>Introduction, Results, Discussion, Methods, Conclusions</strong>. Reviews may use a more flexible structure.
              </p>
            </div>

            <div style={{ marginTop: '30px' }}>
              <h3><i className="fas fa-chevron-right"></i> Back Matter</h3>
              <ul>
                <li>Acknowledgment</li>
                <li>Funding Statement</li>
                <li>Author Contributions</li>
                <li>Availability of Data and Materials</li>
                <li>Ethics Approval</li>
                <li>Conflict of Interests</li>
                <li>Supplementary Materials (if any)</li>
                <li>Glossary (if any)</li>
                <li>Appendices (if any)</li>
                <li>References</li>
              </ul>
            </div>
          </div>

          {/* Figures and Tables */}
          <div className="card">
            <h2><i className="fas fa-image"></i> Figures and Tables</h2>
            
            <h3>Order and Citation</h3>
            <ol>
              <li>Figures and tables should be numbered consecutively using Arabic numerals and placed within the text immediately following their first citation</li>
              <li>The first citation of figures and tables in the main text must follow a sequential order</li>
              <li>Lettered subpanels of figures may be cited in any order after the first mention of the whole figure (e.g., Fig. 3C before Fig. 3A, provided Figs. 1 and 2 have been cited)</li>
            </ol>

            <h3 style={{ marginTop: '25px' }}>Content Requirements</h3>
            <ul>
              <li>Figure content should be complete and characters should not be masked</li>
              <li>Any special characters or icons (e.g., *, **, #) need corresponding explanations</li>
              <li>Remove all non-English terms or add definitions for them</li>
              <li>References in the form of "[xx]" are not allowed in images</li>
              <li>No specific feature should be augmented, altered, enhanced, obscured, moved, or removed</li>
            </ul>

            <h3 style={{ marginTop: '25px' }}>Resolution and Format</h3>
            <p>
              Figures should be scaled to a maximum width of <strong>16.51 cm (6.50 in)</strong> and height of <strong>20 cm (7.87 in)</strong>. The preferred format is <strong>.tif</strong>, with RGB color space, a DPI of 500+.
            </p>
            
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              marginTop: '15px',
              border: '1px solid #dee2e6'
            }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Image Type</th>
                  <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Description</th>
                  <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Format</th>
                  <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Resolution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Line Art</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Lines and text, no tonal areas</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>tif or eps</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>900–1200 dpi</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Halftone</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Continuous tone photograph</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>tif</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>300 dpi</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Combo</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Halftone + text or line art</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>tif or eps</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>500–900 dpi</td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ marginTop: '25px' }}>Labels and Captions</h3>
            <ul>
              <li>Labels must be sized in proportion to the image (no smaller than 8-point)</li>
              <li>Use standard fonts (Arial, Helvetica or Symbol)</li>
              <li>All labels should be in black</li>
              <li>Space must be inserted before measurement units</li>
              <li>Provide a short title and sufficient explanation in the legend</li>
              <li>Multi-panel figures should be assembled as a single file</li>
              <li>Sublabels (A, B, C, D) should be placed in the top left-hand corner</li>
            </ul>

            <h3 style={{ marginTop: '25px' }}>Scale Bar</h3>
            <p>
              A scale bar, rather than magnification, must be provided for any micrographs. The scale bar should be explicitly and prominently displayed on each figure.
            </p>

            <h3 style={{ marginTop: '25px' }}>Copyright of Figures and Tables</h3>
            <p>
              Ensure that permission has been obtained and there is no copyright issue. If copyright is needed, provide citation: "Reprinted/adapted with permission from reference [xx]. Copyright year, copyright owner's name". All figures, tables, and images will be published under a Creative Commons CC-BY license.
            </p>
          </div>

          {/* Additional Guidelines */}
          <div className="card">
            <h2><i className="fas fa-ruler"></i> Additional Guidelines</h2>
            
            <h3>Acronyms/Abbreviations/Initialisms</h3>
            <p>
              Must be defined upon first use in three sections: the abstract, the main text, and the first figure or table. When first introduced, include the abbreviation in parentheses following the full term. Accepted abbreviations for statistical parameters are: P, n, SD, SEM, df, ns, ANOVA, t.
            </p>

            <h3 style={{ marginTop: '25px' }}>International System of Units</h3>
            <p>The use of SI Units is required. Key rules:</p>
            <ul>
              <li>Space between unit and number: <code>5 mm</code> NOT <code>5mm</code></li>
              <li>Space before and after operator: <code>3 cm × 5 cm</code> NOT <code>3 cm×5 cm</code></li>
              <li>Use Arabic numbers: <code>5 kg</code> NOT <code>five kilograms</code></li>
              <li>No hyphen between value and unit: <code>5 kg</code> NOT <code>5-kg</code></li>
              <li>Clarify all units: <code>3 cm × 5 cm</code> NOT <code>3 × 5 cm</code></li>
            </ul>

            <h3 style={{ marginTop: '25px' }}>Symbols</h3>
            <p>
              Greek letters must be inserted using the correct Greek symbol (Times, Helvetica or Symbol font), NOT written in full. Examples: α (alpha), β (beta), γ (gamma).
            </p>

            <h3 style={{ marginTop: '25px' }}>Equations</h3>
            <p>
              If preparing in Word, use the Microsoft Equation Editor or MathType add-on. Ensure equations are editable and not inserted as images.
            </p>

            <h3 style={{ marginTop: '25px' }}>Statistical Analysis</h3>
            <p>When statistical analysis is performed, provide:</p>
            <ul>
              <li>Name of the statistical test used</li>
              <li>The number for each analysis</li>
              <li>The comparisons of interest</li>
              <li>The alpha level and actual p-value</li>
            </ul>
            <p>Reporting guidelines:</p>
            <ul>
              <li>When P &lt; 0.001, report as <em>P</em> &lt; 0.001</li>
              <li>When P &gt; 0.99, report as <em>P</em> &gt; 0.99</li>
            </ul>

            <h3 style={{ marginTop: '25px' }}>Scientific Naming</h3>
            <p>
              Linnean scientific names should be in <em>italics</em>, while higher than generic taxa should not. Gene designations should be lowercase and in italics, while protein designations should be in regular capital letters. All <em>p</em> in p-value should be lowercase and italic.
            </p>
          </div>

          {/* Back Matter / Declarations */}
          <div className="card">
            <h2><i className="fas fa-file-signature"></i> Declarations (Back Matter)</h2>
            <p>
              The following 6 pieces of information need to be truthfully provided at the end of the article:
            </p>

            <h3>1. Acknowledgement</h3>
            <p>
              This section is for acknowledging any support not covered under Author Contributions or Funding Statement sections. If there are no acknowledgments, use "Not applicable".
            </p>

            <h3>2. Funding Statement</h3>
            <p>
              Describe sources of funding that have supported the work, including specific grant numbers and URLs to sponsors' websites. Format: "This research was funded by Name of Funder, grant number xxx". If no funding: "The author(s) received no specific funding for this study".
            </p>

            <h3>3. Author Contributions</h3>
            <p>
              Mandatory for research articles (except single-author papers). Suggested format:
            </p>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              fontSize: '14px',
              fontStyle: 'italic',
              marginTop: '10px'
            }}>
              "The authors confirm contribution to the paper as follows: Conceptualization, First-name Lastname1 and First-name Lastname2; methodology, First-name Lastname1; software, First-name Lastname1; validation, First-name Lastname1, First-name Lastname2 and First-name Lastname3; formal analysis, First-name Lastname1; investigation, First-name Lastname1; resources, First-name Lastname1; data curation, First-name Lastname1; writing—original draft preparation, First-name Lastname1; writing—review and editing, First-name Lastname1; visualization, First-name Lastname1; supervision, First-name Lastname1; project administration, First-name Lastname1; funding acquisition, First-name Lastname1. All authors reviewed the results and approved the final version of the manuscript."
            </div>

            <h3 style={{ marginTop: '25px' }}>4. Availability of Data and Materials</h3>
            <p>
              This statement should inform readers where the data can be accessed. Select appropriate template:
            </p>
            <ul>
              <li><strong>Public Repository:</strong> "The data supporting the findings are openly available in [repository name] at [DOI/URL]."</li>
              <li><strong>In Article/Supplementary:</strong> "All data are included within the article and/or its Supplementary Materials."</li>
              <li><strong>Upon Request:</strong> "Data are available from the corresponding author upon reasonable request."</li>
              <li><strong>Restricted:</strong> "Restrictions apply due to [ethical/legal/privacy] reasons."</li>
              <li><strong>No New Data:</strong> "No new data were created or analyzed in this study."</li>
            </ul>

            <h3 style={{ marginTop: '25px' }}>5. Ethics Approval</h3>
            <p>
              State whether the study included human or animal subjects. Include:
            </p>
            <ul>
              <li>The committee which approved the study</li>
              <li>Compliance documents and policies</li>
              <li>Reference or approval number</li>
              <li>Use "Not applicable" for studies not involving humans or animals</li>
            </ul>

            <h3 style={{ marginTop: '25px' }}>6. Conflicts of Interest</h3>
            <p>
              Declare conflicts of interest or state: "The author(s) declare(s) no conflicts of interest to report regarding the present study."
            </p>
          </div>

          {/* References */}
          <div className="card">
            <h2><i className="fas fa-book"></i> References</h2>
            <p>
              Gnosis Press recommends editors and authors to utilize professional reference management tools such as Mendeley or Zotero for academic writing and literature formatting.
            </p>
            <p>
              All references should be cited in the main text sequentially and listed individually at the end of the manuscript. We recommend preparing references with bibliography software (Mendeley, Zotero). Include the digital object identifier (DOI) for all references where available.
            </p>

            <h3>Citation Format</h3>
            <p>
              Use square brackets and consecutive numbers: [1], [2,3], [4–6]. For embedded citations with pagination: [5] (p. 10), or [6] (p. 101–105). When a reference is the subject of a sentence, use author's last name: Rhee [1] or "Reference [1]". For multiple authors: Al-Khshali et al. [2].
            </p>

            <h3 style={{ marginTop: '25px' }}>Reference Style</h3>
            
            <h4><i className="fas fa-newspaper"></i> Journals</h4>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '12px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              marginTop: '10px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              1. Author AA, Author BB. Title of article. Abbreviated Journal Name. Year;volume(issue):pagination.
            </div>

            <h4 style={{ marginTop: '20px' }}><i className="fas fa-book"></i> Books</h4>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '12px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              marginTop: '10px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              3. Author AA, Author BB. Title of the book. Publisher Location: Publisher; Year. Pagination (Optional).
              <br /><br />
              8. Author AA, Author BB. Title of the chapter. In: Editor AA, Editor BB, editors. Title of the book. xth ed. Publisher Location: Publisher; Year. Pagination (Required).
            </div>

            <h4 style={{ marginTop: '20px' }}><i className="fas fa-users"></i> Conferences</h4>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '12px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              marginTop: '10px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              11. Author AA, Author BB. Title of the paper. In: Editor AA, Editor BB, editors. Conference Title: Proceedings of the xth Name of Conference; Date; Location. Publisher Location: Publisher; Year. Pagination (Required).
            </div>

            <h4 style={{ marginTop: '20px' }}><i className="fas fa-graduation-cap"></i> Dissertations and Theses</h4>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '12px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              marginTop: '10px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              13. Author AA. Title of dissertation [dissertation/master's thesis]. Location: Institution Name; Year. Pagination (Optional).
            </div>

            <h4 style={{ marginTop: '20px' }}><i className="fas fa-globe"></i> Web Sites</h4>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '12px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              marginTop: '10px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              14. Author AA/Organization. Title of webpage [Internet]. Location: Publisher; Date [cited 2024 Jan 1]. Available from: http://URL.
            </div>

            <h4 style={{ marginTop: '20px' }}><i className="fas fa-lightbulb"></i> Patents</h4>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '12px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              marginTop: '10px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              15. Inventor AA, Inventor BB, inventors; Assignee AA, assignee. Title of the patent. Country of patent Patent number. Issue date.
            </div>
          </div>

          {/* Supplementary Materials */}
          <div className="card">
            <h2><i className="fas fa-folder-plus"></i> Supplementary Materials</h2>
            <p>
              Gnosis Press encourages authors to provide supplementary materials that complement their main articles. These may include additional data, figures, tables, multimedia content, or relevant information.
            </p>

            <h3>Guidelines:</h3>
            <ol>
              <li><strong>Submission:</strong> Submit supplementary materials along with the main article, clearly labeled as "Supplementary Materials"</li>
              <li><strong>Relevance:</strong> All materials should be directly relevant and provide valuable additional insights</li>
              <li><strong>File Formats:</strong> Word, PDF, Excel, CSV, images (JPEG/PNG), audio (MP3), video (MP4), or other appropriate formats</li>
              <li><strong>Data:</strong> Should be well-organized, properly labeled, with clear context explanations</li>
              <li><strong>Figures and Tables:</strong> Must be clear, readable (minimum 300 dpi), referenced with prefix "S" (e.g., Fig. S1, Table S1)</li>
            </ol>
          </div>

          {/* Appendices */}
          <div className="card">
            <h2><i className="fas fa-file-medical-alt"></i> Appendices</h2>
            <p>
              The appendix is an optional section containing details and data supplemental to the main text. Place before the References section. Multiple appendices should be ordered as A, B, C, etc.
            </p>
            <p>
              Appendix sections must be referenced in the main text. Within appendices, figures, tables, and elements should be labeled starting with "A" (e.g., Figure A1, Figure A2).
            </p>
          </div>

          {/* Data Sharing and Deposition */}
          <div className="card">
            <h2><i className="fas fa-database"></i> Data Sharing and Deposition</h2>
            <p>
              At Gnosis Press, we value open scientific exchange and believe in promoting transparency and reproducibility in research. To ensure consistency across Gnosis Press journals, authors are required to include a Data Availability Statement in all submissions.
            </p>

            <div style={{ 
              background: '#fff3cd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ffc107',
              marginTop: '15px',
              marginBottom: '20px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-info-circle"></i> Note:</strong> Data sharing may be inappropriate when ethical, legal, or privacy considerations arise. Authors must clearly outline any limitations in the Data Availability Statement during manuscript submission. It is the author's responsibility to ensure that any shared data adhere to the consent obtained from participants regarding the use of confidential information.
              </p>
            </div>

            <h3>Data Repositories</h3>
            <p>
              Authors are strongly encouraged to deposit research data in reputable and discipline-specific data repositories. Preferred repositories should be recognized and indexed by DataCite, re3data, or other relevant organizations.
            </p>
            
            <h4 style={{ marginTop: '20px' }}>Recommended General Repositories:</h4>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '10px',
              marginTop: '10px'
            }}>
              {['Dataverse', 'Dryad', 'figshare', 'GigaScience', 'Mendeley Data', 'Zenodo'].map((repo, idx) => (
                <div key={idx} style={{ 
                  background: '#f8f9fa', 
                  padding: '10px', 
                  borderRadius: '5px',
                  border: '1px solid #dee2e6',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  {repo}
                </div>
              ))}
            </div>

            <h4 style={{ marginTop: '25px' }}>Specialized Repositories for Health Research:</h4>
            <p style={{ fontSize: '14px', marginTop: '10px' }}>
              For journals with health research subjects, deposition of sequence information to community-endorsed public repositories is necessary. Accession numbers and relevant identifiers must be included in the submitted manuscript.
            </p>
            
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              marginTop: '15px',
              fontSize: '14px',
              border: '1px solid #dee2e6'
            }}>
              <thead>
                <tr style={{ background: '#f8f9fa' }}>
                  <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Data Type</th>
                  <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Repositories</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>DNA and RNA Sequences</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>GenBank, European Nucleotide Archive (ENA), DDBJ, Protein DataBank, UniProt</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>DNA Sequencing Data</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Gene Expression Omnibus (GEO), ArrayExpress, NCBI Sequence Read Archive, ENA Sequence Versions Archive</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>New microarray</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Gene Expression Omnibus (GEO), ArrayExpress</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Genetic polymorphisms</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>dbSNP, dbVar</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Genotype and phenotype data</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>dbGaP, European Genome-phenome Archive (EGA)</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Protein sequences</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>UniProt</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Flow cytometry</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>FlowRepository</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Chemical Compound Screening</td>
                  <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>PubChem</td>
                </tr>
              </tbody>
            </table>

            <h3 style={{ marginTop: '25px' }}>Data Citation</h3>
            <p>
              Research data should be cited in the main article to give proper credit and acknowledge the efforts of data creators. Authors must properly reference deposited data in the reference list, including the dataset's persistent identifier (DOI, accession number, etc.).
            </p>

            <h3 style={{ marginTop: '25px' }}>Analytic Methods (Code) Transparency</h3>
            <p>
              For work where novel computer code was developed, authors should release it either by depositing it in a recognized public repository such as GitHub or uploading it as supplementary information to the publication. The name, version, corporation and location information for all software used should be clearly indicated. Please include all the parameters used to run software/program analyses.
            </p>

            <h4 style={{ marginTop: '20px' }}>1. Code Availability</h4>
            <p>
              Authors are strongly encouraged to share the computer code and software used to generate results presented in their articles. The availability of code enhances research reproducibility and allows other researchers to build upon the work.
            </p>

            <h4>2. Code Repositories</h4>
            <p>
              Authors should deposit their code and software in well-established and reputable code repositories such as <strong>GitHub, GitLab, Bitbucket</strong>, or other relevant platforms. Providing a link to the code repository should be included in the Data Availability Statement.
            </p>

            <h4>3. Code Documentation</h4>
            <p>
              Authors must ensure that the deposited code is well-documented, readable, and easy to understand. Sufficient comments and explanations should be provided within the code to facilitate its usage by others.
            </p>

            <h4>4. Citation</h4>
            <p>
              Authors must provide a citation for the code in the article's reference list. Include the code's persistent identifier (e.g., DOI or URL) to facilitate proper acknowledgment and citation by other researchers.
            </p>
          </div>

          {/* Suggesting Reviewers */}
          <div className="card">
            <h2><i className="fas fa-user-check"></i> Suggesting Reviewers</h2>
            <p>
              Authors are welcome and encouraged to suggest reviewers when they submit their manuscripts. Authors should make sure suggested reviewers are totally independent and without conflicts of interest in any way.
            </p>
            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #2196f3',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-exclamation-circle"></i> Important:</strong> When suggesting reviewers, the Corresponding Author must provide an <strong>institutional email address</strong> for each suggested reviewer.
              </p>
            </div>
            <p style={{ marginTop: '15px' }}>
              Suggested reviewers should be experts in the field with no personal, professional, or financial relationships with the authors that could be perceived as conflicts of interest.
            </p>
          </div>

          {/* English Editing Service */}
          <div className="card">
            <h2><i className="fas fa-language"></i> English Editing Service</h2>
            <p>
              Clear and concise language enables both the journal editors and reviewers to concentrate on the scientific content of your manuscript. In order to facilitate a proper peer review process and ensure that submissions are judged exclusively on academic merit, JCIDS strongly encourages authors to prepare the language of their manuscripts with the utmost care.
            </p>
            <p>
              If you are an author whose native language is not English—or you have any concerns regarding the language quality of your manuscript—we recommend having your manuscript professionally edited by a qualified English-speaking researcher in your field prior to submission.
            </p>
            <div style={{ 
              background: '#fff3cd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ffc107',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-info-circle"></i> Note:</strong> Gnosis Press offers paid language editing services, or you may choose to use an alternative service that provides a confirmation certificate. The use of language polishing service does not indicate the acceptance of your manuscript for publication in JCIDS.
              </p>
            </div>
          </div>

          {/* Authorship and Contribution */}
          <div className="card">
            <h2><i className="fas fa-users"></i> Authorship and Contribution</h2>
            
            <h3>Authorship Criteria</h3>
            <p>
              Gnosis Press follows the International Committee of Medical Journal Editors (ICMJE) guidelines regarding authorship and contributions. Authorship should be based on the following <strong>4 criteria</strong>:
            </p>
            <ol>
              <li>Substantial contributions to the conception or design of the work; or the acquisition, analysis, or interpretation of data for the work; <strong>AND</strong></li>
              <li>Drafting the work or reviewing it critically for important intellectual content; <strong>AND</strong></li>
              <li>Final approval of the version to be published; <strong>AND</strong></li>
              <li>Agreement to be accountable for all aspects of the work in ensuring that questions related to the accuracy or integrity of any part of the work are appropriately investigated and resolved.</li>
            </ol>
            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #2196f3',
              marginTop: '15px',
              marginBottom: '20px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-exclamation-circle"></i> Important:</strong> All those designated as authors should meet <strong>ALL FOUR</strong> criteria for authorship. Those who do not meet all four criteria should be acknowledged in the acknowledgement section.
              </p>
            </div>

            <h3>Corresponding Author</h3>
            <p>
              The corresponding author is the one individual who takes primary responsibility for communication with the journal during the manuscript submission, peer-review, and publication process. The corresponding author typically ensures that all the journal's administrative requirements are properly completed and reported, including:
            </p>
            <ul>
              <li>Providing details of authorship</li>
              <li>Ethics committee approval</li>
              <li>Clinical trial registration documentation</li>
              <li>Disclosures of relationships and activities</li>
            </ul>
            <p>
              The corresponding author should be available throughout the submission and peer-review process to respond to editorial queries in a timely way, and should be available after publication to respond to critiques of the work and cooperate with any requests from the journal for data or additional information.
            </p>

            <h3 style={{ marginTop: '25px' }}>Multi-Author Groups</h3>
            <p>
              When work is conducted by a large multi-author group, it is advised that the list of authors be decided before the work starts and confirmed before manuscript submission. All members listed as authors should have met all four criteria for authorship with final approval of the manuscript, and should be able to take public responsibility for the work with full confidence in the accuracy and integrity of the work of all group authors.
            </p>
            <div style={{ 
              background: '#fff3cd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ffc107',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-exclamation-triangle"></i> Note:</strong> Submissions by any individual other than one of the listed authors will strictly not be considered. All authors will take responsibility for the content of the manuscript they submitted, and ensure they are familiar with the other authors' individual contributions.
              </p>
            </div>

            <h3 style={{ marginTop: '25px' }}>Non-Author Contributors</h3>
            <p>
              Contributors who meet fewer than all 4 of the above criteria for authorship should not be listed as authors, but they should be acknowledged. Examples of activities that alone (without other contributions) do not qualify a contributor for authorship include:
            </p>
            <ul>
              <li>Acquisition of funding</li>
              <li>General supervision of a research group or general administrative support</li>
              <li>Writing assistance, technical editing, language editing, and proofreading</li>
            </ul>
            <p>
              Those whose contributions do not justify authorship may be acknowledged individually or together as a group under a single heading (e.g., "Clinical Investigators" or "Participating Investigators"), and their contributions should be specified (e.g., "served as scientific advisors," "critically reviewed the study proposal," "collected data," "provided and cared for study patients," "participated in writing or technical editing of the manuscript").
            </p>

            <h3 style={{ marginTop: '25px' }}>Alteration to Authorship</h3>
            <p>
              Requests made for an authorship change after submission must be made to the editorial office with an explanation for the change, include the signature of all authors, and be submitted by the corresponding author.
            </p>
            <div style={{ 
              background: '#ffebee', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ef5350',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0, color: '#c62828' }}>
                <strong><i className="fas fa-ban"></i> Critical Policy:</strong> Gnosis Press places significant importance on maintaining the integrity and transparency of authorship contributions. Gnosis Press journals do not accept any requests to change the <strong>first author or corresponding author</strong> during any stage of manuscript processing. Any insistence on altering the first author or corresponding author will result in the rejection of the manuscript without further review or consideration.
              </p>
            </div>
            <p style={{ marginTop: '15px' }}>
              Please note that if you have changed affiliation during the course of the research, your new affiliation could be acknowledged in a note. Gnosis Press does not normally take requests for changes to affiliations after the acceptance of manuscripts.
            </p>
            <p>
              Authorship issues found after publication may result in a correction. If and when the authors are unable to resolve among themselves an authorship-related dispute, Gnosis Press may raise the issue with the authors' institution(s) and abide by its/their guidelines.
            </p>
          </div>

          {/* Editors and Journal Staff as Authors */}
          <div className="card">
            <h2><i className="fas fa-user-shield"></i> Editors and Journal Staff as Authors</h2>
            <p>
              In circumstances where Editors or editorial staff of the journal submit their own studies to the journal, they shall not be involved in the reviewing process, and the review process must be made transparently and rigorously.
            </p>
            <p>
              Submissions authored by editors or editorial staff of the journal will be handled by another editor who has the least conflicts of interest (COIs) with the authors to minimize bias.
            </p>
          </div>

          {/* Conflicts of Interest */}
          <div className="card">
            <h2><i className="fas fa-balance-scale"></i> Conflicts of Interest</h2>
            <p>
              Conflicts of interest (COIs, also referred to as "competing interests") may indicate the potential to influence the validity or objectivity of research. Editors, authors, and reviewers may be involved in COIs, and JCIDS considers it essential to identify and seek to mitigate them so as to ensure the integrity of its role in the dissemination and preservation of knowledge.
            </p>
            <div style={{ 
              background: '#ffebee', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ef5350',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0, color: '#c62828' }}>
                <strong><i className="fas fa-exclamation-triangle"></i> Warning:</strong> Failure to declare competing interests may result in decline of a manuscript.
              </p>
            </div>

            <p style={{ marginTop: '15px' }}>
              Authors must declare all potential conflicts of interest; if they have none to declare, they should state plainly, "The author(s) declare(s) no conflicts of interest to report regarding the present study".
            </p>

            <p>
              In order to limit COIs, all roles involved in the peer-review process must identify and declare any personal circumstances or associations that may be perceived as having such influence and acknowledge all funding sources for the work. However, COI statements relating to public funding sources, such as government agencies and charitable or academic institutions, need not be supplied.
            </p>

            <p>
              JCIDS defines a COI as any relationship that may have an impact on the authors, reviewers, or editors of a manuscript during the peer review process, on the making of editorial decisions, or generally on any stage in the path toward publication.
            </p>

            <h3 style={{ marginTop: '25px' }}>Types of Conflicts of Interest</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}>
                <h4 style={{ marginTop: 0, color: '#2c5aa0' }}><i className="fas fa-dollar-sign"></i> Financial COIs</h4>
                <ul style={{ fontSize: '14px', marginBottom: 0 }}>
                  <li>Stock or share ownership</li>
                  <li>Patent applications</li>
                  <li>Research grants</li>
                  <li>Consultancies</li>
                  <li>Royalties</li>
                </ul>
              </div>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}>
                <h4 style={{ marginTop: 0, color: '#2c5aa0' }}><i className="fas fa-handshake"></i> Non-financial COIs</h4>
                <ul style={{ fontSize: '14px', marginBottom: 0 }}>
                  <li>Affiliation with the same institution</li>
                  <li>Personal relationships (advisers, students, friends, family)</li>
                  <li>Academic relationships (co-authors, collaborators, competitors)</li>
                  <li>Government employees</li>
                  <li>Members of JCIDS editorial board</li>
                </ul>
              </div>
            </div>

            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #2196f3',
              marginTop: '20px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-info-circle"></i> Note:</strong> COIs are not considered permanent; relationships that have ended more than two years prior to the submission of a manuscript need not be identified as sources of potential conflict.
              </p>
            </div>

            <h3 style={{ marginTop: '25px' }}>COI Requirements by Role</h3>
            
            <h4><i className="fas fa-user-edit"></i> Authors</h4>
            <p>
              Gnosis Press requires a declaration from all authors of a manuscript regarding any potential COIs that could be relevant to the integrity or reliability of the scientific and professional judgment presented therein. If there is, in fact, no conflict of interest, the authors should state plainly, "The authors declare no conflicts of interest to report regarding the present study."
            </p>

            <h4 style={{ marginTop: '20px' }}><i className="fas fa-user-check"></i> Reviewers</h4>
            <p>
              Reviewers should declare any COIs when they are assigned a manuscript and disclose this information to the editor, who will then assess whether they should proceed with the review process.
            </p>

            <h4 style={{ marginTop: '20px' }}><i className="fas fa-user-tie"></i> Editors</h4>
            <p>
              The evaluation procedure (i.e., peer review and decisions regarding publication) must be free of biased editorial decisions. If an editor, guest editor, or associate editor believes that a personal, professional, or financial connection to an author may compromise the procedure, he or she must inform the journal's editorial office of the fact.
            </p>
          </div>

          {/* Artificial Intelligence Policy */}
          <div className="card">
            <h2><i className="fas fa-robot"></i> Artificial Intelligence Policy</h2>
            <p>
              Gnosis Press acknowledges the evolving impact of Generative Artificial Intelligence (GenAI), including tools such as ChatGPT and other large language models (LLMs), on scholarly publishing. In line with guidance issued by the STM Association and the Committee on Publication Ethics (COPE), we have established the following policy to promote transparency and uphold academic integrity.
            </p>

            <h3 style={{ marginTop: '25px' }}>1. Use of AI in Manuscript Preparation</h3>
            <p>
              Authors who employ GenAI tools during the preparation of their manuscripts—for tasks such as text generation, graphical output, data analysis, study design, or interpretation—are required to declare such usage upon submission.
            </p>
            <p>
              Specific details regarding the nature and scope of AI tool usage should be disclosed in the <strong>"Materials and Methods"</strong> section. Additionally, the tool's name and version must be acknowledged in the <strong>"Acknowledgments"</strong> section.
            </p>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              marginTop: '15px',
              marginBottom: '15px'
            }}>
              <p style={{ marginBottom: '10px' }}><strong>Acknowledgment statement example:</strong></p>
              <p style={{ 
                fontStyle: 'italic',
                fontSize: '14px',
                margin: 0,
                padding: '10px',
                background: 'white',
                borderRadius: '3px',
                border: '1px solid #dee2e6'
              }}>
                "During the preparation of this manuscript, the authors utilized [tool name, version] for [brief description of use]. The authors have carefully reviewed and revised the output and accept full responsibility for all content."
              </p>
            </div>

            <div style={{ 
              background: '#e8f5e9', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #4caf50',
              marginBottom: '15px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-check-circle"></i> Exemption:</strong> When AI tools are used solely for linguistic editing—such as grammar correction, spelling checks, punctuation, style improvements, or formatting adjustments—this falls outside the policy's requirements and does not need to be declared. This allowance applies only to editorial refinements and does not extend to generative content creation or authorship.
              </p>
            </div>

            <p>
              Authors remain fully accountable for the accuracy, originality, integrity, and ethical compliance of all manuscript content, including any output generated or supported by GenAI tools. All materials must conform to Gnosis Press's Publication Ethics, including but not limited to, policies concerning plagiarism, data integrity, and image authenticity.
            </p>

            <div style={{ 
              background: '#fff3cd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ffc107',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-info-circle"></i> Important:</strong> GenAI tools cannot be cited as references, as such tools do not constitute verifiable or accountable contributors to scholarly work.
              </p>
            </div>

            <p style={{ marginTop: '15px' }}>
              Gnosis Press reserves the right to request clarification or supporting information and will make editorial decisions in accordance with Gnosis Press's Editorial Policies and Terms and Conditions.
            </p>

            <h3 style={{ marginTop: '25px' }}>2. Authorship</h3>
            <div style={{ 
              background: '#ffebee', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ef5350'
            }}>
              <p style={{ margin: 0, color: '#c62828' }}>
                <strong><i className="fas fa-ban"></i> Critical Rule:</strong> GenAI tools and LLMs do not fulfill Gnosis Press's Authorship Criteria and <strong>cannot be listed as authors</strong>.
              </p>
            </div>

            <h3 style={{ marginTop: '25px' }}>3. Use of AI in Peer Review</h3>
            <p>
              Peer reviewers should not employ GenAI tools for the generation or structuring of review reports. Such use may compromise confidentiality, data protection, and proprietary information.
            </p>
            <p>
              Limited application of AI for improving the linguistic clarity of a review report (e.g., grammar or punctuation) may be permitted but must be disclosed upon submission.
            </p>
            <div style={{ 
              background: '#ffebee', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ef5350',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0, color: '#c62828' }}>
                <strong><i className="fas fa-shield-alt"></i> Strict Prohibition:</strong> Under no circumstances may reviewers upload manuscripts (in full or in part), images, tables, or related materials to any AI platform, since such actions breach Gnosis Press's Privacy Policy. Violations of this policy will result in the rejection of the review report.
              </p>
            </div>

            <h3 style={{ marginTop: '25px' }}>4. Use of AI in Editorial Decision-Making</h3>
            <p>
              The Editors (including Editors-in-Chief, Associate Editors, Guest Editors, or Editorial Board Members) are strictly prohibited from using GenAI tools in the editorial evaluation or decision-making process. Uploading any confidential manuscript materials to AI platforms constitutes a breach of Gnosis Press's Privacy Policy.
            </p>

            <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
              Gnosis Press is committed to revisiting this Artificial Intelligence Policy in alignment with emerging best practices from STM Association, COPE, and the wider academic community.
            </p>
          </div>

          {/* Copyright and Licensing */}
          <div className="card">
            <h2><i className="fas fa-copyright"></i> Copyright and Licensing</h2>
            <p>
              JCIDS publishes all articles under an open-access license, which means that the articles remain accessible to all without charge and without technical or legal barriers and that they can be reused with proper acknowledgment and citation.
            </p>
            <p>
              Financial support for the open access publication is provided by the authors' institutions or by research funding agencies in the way of article processing charge (APC) once manuscripts have been accepted. More specifically, JCIDS publishes articles under the <strong>Creative Commons Attribution (CC BY) License</strong>. JCIDS is committed to open access publishing as a means to foster the exchange of research among scientists, especially across disciplines.
            </p>

            <h3 style={{ marginTop: '25px' }}>Copyright Retention</h3>
            <p>
              The copyright and other proprietary rights related to papers published by JCIDS are <strong>retained by the authors</strong>. If the authors reproduce any text, figures, tables, or illustrations from papers published by JCIDS in their own future research, they must cite the originally published version.
            </p>
            <p>
              Authors are asked to inform JCIDS's editorial office of any exceptional circumstances in this regard at the time of submission, for which exceptions may be granted at the discretion of the publisher.
            </p>

            <h3 style={{ marginTop: '25px' }}>Republished Material</h3>
            <p>
              Articles published in JCIDS are likely to contain material republished with permission under a more restrictive license. When this situation arises, it should be indicated; it is the responsibility of the authors to seek permission for reuse from the copyright holder.
            </p>

            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #2196f3',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-creative-commons"></i> Open Access:</strong> All articles are published under CC BY License, promoting maximum visibility and impact for your research while ensuring proper attribution.
              </p>
            </div>
          </div>

          {/* Corrections & Retractions */}
          <div className="card">
            <h2><i className="fas fa-exclamation-circle"></i> Corrections & Retractions</h2>
            <p>
              Gnosis Press journals will issue corrections, and/or retraction statements, when deemed proper.
            </p>

            <h3>Corrections</h3>
            <p>
              JCIDS aims to publish every article online in its final form. Upon receiving the proofs of their accepted manuscripts, authors will have an opportunity to check for errors and oversights. Occasionally, a mistake is pointed out in a published article, necessitating the issuance of a correction statement.
            </p>
            <p>
              A correction is a statement rectifying an error or an omission. Authors or readers may submit such a statement either through the journal's online submission system, or by sending an email, along with the submission ID, to JCIDS's editorial office at <strong>submission.jcids@gnosispress.org</strong>. A correction notice, published and linked to the corresponding article, is freely accessible to all readers.
            </p>

            <h4 style={{ marginTop: '20px' }}>Correction Process</h4>
            <p>
              When making corrections to original articles, the original article both in PDF and XML versions are corrected and bi-directionally linked to and from the published amendment notice that details the original error. Any changes made to the original articles that affect data in figures, tables or text will have the amendment notice reproduce the original data.
            </p>
            <p>
              If it is not possible to correct the original article in both PDF and XML versions, the article will remain unchanged but will contain links that direct to and from the published correction notice.
            </p>

            <div style={{ marginTop: '20px' }}>
              <h4><i className="fas fa-user-edit"></i> Author's Correction</h4>
              <p style={{ fontSize: '14px' }}>
                An Author's Correction may be published to correct an important error(s) made by the author that affects the scientific integrity of the published article, the publication record, or the reputation of the authors or the journal. The Managing Editor of that manuscript will be responsible for handling the correction process.
              </p>

              <h4 style={{ marginTop: '15px' }}><i className="fas fa-building"></i> Publisher's Correction</h4>
              <p style={{ fontSize: '14px' }}>
                A Publisher's Correction may be published to correct an important error(s) made by the journal that affects the scientific integrity of the published article, the publication record, or the reputation of the authors or of the journal.
              </p>
            </div>

            <h3 style={{ marginTop: '30px' }}>Retractions</h3>
            <p>
              A retraction is a notice that a previously published paper should no longer be regarded as part of the published literature. The primary purpose of a retraction is to ensure the integrity and completeness of scholarly records by withdrawing any manuscript which is found to contain infringements of professional ethical codes, major errors, or where its main conclusion is seriously undermined as a result of new evidence coming to light.
            </p>

            <h4 style={{ marginTop: '20px' }}>Grounds for Retraction</h4>
            <p>Violations of professional ethical codes include:</p>
            <ul>
              <li>Multiple submissions without proper citations or permission</li>
              <li>Redundant publications</li>
              <li>Fake claims of authorship</li>
              <li>Plagiarism</li>
              <li>Fraudulent use of data</li>
            </ul>
            <p>Major errors cover any or all miscalculations or experimental errors, intentionally or due to honest mistakes.</p>

            <h4 style={{ marginTop: '20px' }}>Retraction Process</h4>
            <p>
              The retraction will be referred to the Editors-in-Chief, Associate Editors, and the Managing Editor who have handled the paper. Retracted articles will not be removed from the printed copies of the journal (e.g., from libraries) nor from the electronic archives. Their retracted status will be indicated as clearly as possible.
            </p>
            <p>
              Bibliographic information about the article will be retained to ensure the permanence and integrity of the published scientific record. When an article is retracted, in most cases, the original manuscript is corrected and is bi-directionally linked (to and from) the published retraction notice which details the original error.
            </p>
            <p>
              For the purpose of transparency, when corrections made to the original article affect any data, figures, tables or texts, the retraction notice will display the original data alongside the corrected version. When a correction is not possible, all existing versions of the article will remain unchanged but will contain the bi-directional links, to and from, the published retraction notice.
            </p>
            <p>
              The notice of retraction is permanently linked to its corresponding retracted article and is freely available and accessible by all readers.
            </p>

            <div style={{ 
              background: '#fff3cd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #ffc107',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-info-circle"></i> Note:</strong> Articles may be retracted by their Author(s), by the Journal Editors, or by the Publisher (Gnosis Press). In all instances, the retraction should indicate the reason for the action as well as the entity behind the decision. A retraction made without the unanimous agreement of the authors is feasible and indicated as such.
              </p>
            </div>

            <h3 style={{ marginTop: '30px' }}>Article Withdrawal</h3>
            <p>
              Article Withdrawal is only used for articles in press, which represent early versions of articles and sometimes contain errors, or may have been accidentally submitted twice. Occasionally, an article may contain infringements of professional ethical codes, such as multiple submissions, bogus claims of authorship, plagiarism, and fraudulent use of data or the like.
            </p>
            <p>
              Articles that include errors or are discovered to be accidental duplicates of other published article(s), or are determined to violate our publishing ethics guidelines in the view of the editors may be "Withdrawn" by the article author or the journal editor.
            </p>

            <h3 style={{ marginTop: '30px' }}>Removal of Published Content</h3>
            <p>
              Under special circumstances, Gnosis Press reserves the right to remove an article, book or other content from Gnosis Press's website and submission system. Such action may be taken when:
            </p>
            <ul>
              <li>There is evidence indicating that the published content is defamatory, infringes on intellectual property rights, privacy rights, other legal rights, or is plainly unlawful</li>
              <li>A court or government order requires removal of such content</li>
              <li>The content, if acted upon, would pose an immediate and serious risk to health</li>
            </ul>
            <p>
              Removal may be temporary or permanent. A statement will be published explaining the decision behind the removal.
            </p>

            <h3 style={{ marginTop: '30px' }}>Addressing Post-publication Issues</h3>
            <p>
              Gnosis Press is fully committed to maintaining the integrity and completeness of the scientific record and recognizes its importance to researchers and the academic community at large. As such, Gnosis Press will thoroughly investigate concerns that are directly raised with us by authors and/or readers.
            </p>
            <p>
              Authors are strongly encouraged to address any raised issues. In the course of our investigation, we may request original raw data, and consult with experts and other scholars in the field.
            </p>
            
            <h4 style={{ marginTop: '20px' }}>Possible Outcomes</h4>
            <p>Depending on the seriousness of the issues, the following outcomes may ensue:</p>
            <ul>
              <li>A manuscript still under consideration may be rejected and returned to the author</li>
              <li>A published online article, depending on the nature and severity of the issues, may result in a correction notice or a retraction notice</li>
              <li>Issues deemed to be serious may prompt Gnosis Press to inform the authors' institution and related affiliations</li>
            </ul>

            <p style={{ marginTop: '15px' }}>
              Our actions are driven by our dedicated aim for transparent notification to our readers and unabated commitment to the integrity of the published record, and not by any motivation to sanction individuals or attribute responsibility to specific named individuals. We may refer readers to the institutional investigations' reports if they are publicly available.
            </p>
            <p>
              While we are committed to addressing post-publication issues and correcting the record swiftly, investigations typically take some time to reach resolutions given the complexity of the discussions, the diligence in our process and the need to obtain original data and consult with experts. We will issue and regularly update relevant Editor's Notes and/or Editor's Expression of Concern as interim notifications to alert our readership of any concerns with published material.
            </p>
          </div>

          {/* Appeals and Complaints */}
          <div className="card">
            <h2><i className="fas fa-gavel"></i> Appeals and Complaints</h2>
            <p>
              Gnosis Press's appeal and complaint procedures pertain to grievances against editorial decisions, discontent with procedural inaccuracies (such as tardiness in manuscript handling), and complaints regarding publishing ethics.
            </p>

            <h3 style={{ marginTop: '20px' }}>Submission of Appeals</h3>
            <p>
              Queries of appeal and complaint must be accompanied by comprehensive justifications, and authors are requested to submit appeals and complaints in writing to JCIDS at <strong>submission.jcids@gnosispress.org</strong>.
            </p>
            <p>
              The editorial office will provide a prompt response upon receipt of a formal appeal or complaint, and endeavor to resolve the matter within a reasonable time frame.
            </p>

            <h3 style={{ marginTop: '25px' }}>Ethical Misconduct Concerns</h3>
            <p>
              Concerns regarding ethical misconduct may also be reported to Gnosis Press's Editorial Integrity Team. The Editorial Integrity team adheres to COPE Guidelines, and subsequently determines a suitable course of action, authorizing editorial offices to furnish the complainant with feedback.
            </p>

            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #2196f3',
              marginTop: '15px'
            }}>
              <p style={{ marginBottom: '10px' }}><strong><i className="fas fa-envelope"></i> Contact for Appeals:</strong></p>
              <p style={{ margin: 0 }}>
                Email: <a href="mailto:submission.jcids@gnosispress.org" style={{ color: '#2c5aa0', fontWeight: 'bold' }}>submission.jcids@gnosispress.org</a>
              </p>
            </div>
          </div>

          {/* Web of Science Search Methods */}
          <div className="card">
            <h2><i className="fas fa-search"></i> Web of Science Search Methods</h2>
            <p>
              To search for articles published in JCIDS using Web of Science, specify the source (journal title) as <strong>"JCIDS*"</strong>.
            </p>
            
            <h3 style={{ marginTop: '20px' }}>Example Search Queries</h3>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              marginTop: '15px'
            }}>
              <p style={{ marginBottom: '10px' }}><strong>To search for topic "deep learning" in JCIDS:</strong></p>
              <code style={{ 
                display: 'block',
                background: '#2d2d2d',
                color: '#f8f8f2',
                padding: '12px',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '14px'
              }}>
                ts=(deep learning) and so=(JCIDS*)
              </code>
            </div>

            <div style={{ 
              background: '#f8f9fa', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #dee2e6',
              marginTop: '15px'
            }}>
              <p style={{ marginBottom: '10px' }}><strong>To search for author publications in JCIDS:</strong></p>
              <code style={{ 
                display: 'block',
                background: '#2d2d2d',
                color: '#f8f8f2',
                padding: '12px',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '14px'
              }}>
                au=(author name) and so=(JCIDS*)
              </code>
            </div>

            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #2196f3',
              marginTop: '15px'
            }}>
              <p style={{ margin: 0 }}>
                <strong><i className="fas fa-lightbulb"></i> Tips:</strong> Use the asterisk (*) wildcard to ensure comprehensive search results. For more advanced search techniques, please consult the Web of Science help documentation.
              </p>
            </div>
          </div>

          {/* Research Categories */}
          <div className="card">
            <h2><i className="fas fa-tags"></i> Research Categories</h2>
            <p>Please specify which category best describes your research in your submission:</p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '10px',
              marginTop: '15px'
            }}>
              {[
                'Machine Learning',
                'Deep Learning',
                'Natural Language Processing',
                'Computer Vision',
                'Decision Science',
                'Optimization Algorithms',
                'Data Mining',
                'AI Ethics',
                'Reinforcement Learning',
                'Neural Networks',
                'Expert Systems',
                'Fuzzy Logic'
              ].map((category, index) => (
                <div key={index} style={{ 
                  background: '#f8f9fa', 
                  padding: '12px', 
                  borderRadius: '5px', 
                  border: '1px solid #dee2e6',
                  textAlign: 'center'
                }}>
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <h2 style={{ color: 'white' }}><i className="fas fa-envelope"></i> Contact Editorial Office</h2>
            <p style={{ fontSize: '18px' }}>
              For any questions regarding manuscript preparation or submission:
            </p>
            <div style={{ 
              background: 'rgba(255,255,255,0.2)', 
              padding: '20px', 
              borderRadius: '8px',
              textAlign: 'center',
              marginTop: '15px'
            }}>
              <p style={{ fontSize: '16px', marginBottom: '10px' }}>
                <strong>Email:</strong>
              </p>
              <a href="mailto:submission.jcids@gnosispress.org" style={{ 
                fontSize: '20px', 
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
                submission.jcids@gnosispress.org
              </a>
            </div>
          </div>

        </div>
      )
    },
    {
      id: 'archives',
      title: 'Archives',
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
              Archives
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0' }}>
              Past issues and published research
            </p>
          </div>

          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {/* Archive Years */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* 2025 */}
                <div 
                  style={{ 
                    background: '#ffffff',
                    padding: '30px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = '#9ca3af';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#1f2937', fontSize: '1.8rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                        2025
                      </h4>
                      <p style={{ color: '#6b7280', fontSize: '1.1rem', margin: '0', fontWeight: '500' }}>
                        Volume 2, Issue 2
                      </p>
                    </div>
                    <button 
                      style={{ 
                        padding: '12px 28px',
                        background: '#374151',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = '#1f2937'}
                      onMouseOut={(e) => e.currentTarget.style.background = '#374151'}
                    >
                      View Papers →
                    </button>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: '15px 0 0 0' }}>
                    Published articles from 2025
                  </p>
                </div>

                {/* 2024 */}
                <div 
                  style={{ 
                    background: '#ffffff',
                    padding: '30px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.borderColor = '#9ca3af';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                    <div>
                      <h4 style={{ color: '#1f2937', fontSize: '1.8rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                        2024
                      </h4>
                      <p style={{ color: '#6b7280', fontSize: '1.1rem', margin: '0', fontWeight: '500' }}>
                        Volume 1, Issue 1
                      </p>
                    </div>
                    <button 
                      style={{ 
                        padding: '12px 28px',
                        background: '#374151',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = '#1f2937'}
                      onMouseOut={(e) => e.currentTarget.style.background = '#374151'}
                    >
                      View Papers →
                    </button>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: '15px 0 0 0' }}>
                    Published articles from 2024 (Inaugural Issue)
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'current-issue',
      title: 'Current Issue',
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
              Current Issue
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0' }}>
              Latest published research articles
            </p>
          </div>

          {/* Current Issue 2026 */}
          <div style={{ 
            background: 'white', 
            padding: '40px', 
            borderRadius: '8px', 
            border: '1px solid #d1d5db',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ 
                display: 'inline-block',
                background: '#374151',
                color: 'white',
                padding: '10px 28px',
                borderRadius: '6px',
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '0.5px',
                marginBottom: '20px',
                textTransform: 'uppercase'
              }}>
                Latest Issue
              </div>
              
              <h3 style={{ 
                color: '#1f2937', 
                fontSize: '2.5rem', 
                margin: '0 0 10px 0',
                fontWeight: 'bold'
              }}>
                Volume 3, Issue 3 (2026)
              </h3>
              
              <p style={{ 
                color: '#6b7280', 
                fontSize: '1.1rem',
                margin: '0'
              }}>
                Journal of Computational Intelligence and Decision Science
              </p>
            </div>

            <div style={{ 
              background: '#f9fafb',
              padding: '30px',
              borderRadius: '8px',
              marginBottom: '30px',
              border: '1px solid #e5e7eb'
            }}>
              <h4 style={{ color: '#374151', fontSize: '1.3rem', marginBottom: '15px', fontWeight: '600' }}>
                Issue Details
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0 0 5px 0' }}>Volume</p>
                  <p style={{ color: '#1f2937', fontSize: '1.2rem', fontWeight: 'bold', margin: '0' }}>3</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0 0 5px 0' }}>Issue</p>
                  <p style={{ color: '#1f2937', fontSize: '1.2rem', fontWeight: 'bold', margin: '0' }}>3</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0 0 5px 0' }}>Year</p>
                  <p style={{ color: '#1f2937', fontSize: '1.2rem', fontWeight: 'bold', margin: '0' }}>2026</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0 0 5px 0' }}>Articles</p>
                  <p style={{ color: '#1f2937', fontSize: '1.2rem', fontWeight: 'bold', margin: '0' }}>Coming Soon</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#64748b', 
                marginBottom: '25px',
                lineHeight: '1.6'
              }}>
                Articles for this issue are currently being processed through peer review. New papers will be published as they complete the review process.
              </p>
              
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="#instructions-authors" 
                  style={{ 
                    display: 'inline-block',
                    padding: '14px 32px',
                    background: '#374151',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#1f2937'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#374151'}
                >
                  Submit Your Research
                </a>
                
                <button 
                  style={{ 
                    padding: '14px 32px',
                    background: 'white',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setActiveSection('archives')}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#f3f4f6';
                    e.currentTarget.style.borderColor = '#9ca3af';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                >
                  View Archives
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'articles-in-press',
      title: 'Articles in Press',
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
              Articles in Press
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0' }}>
              Accepted articles awaiting publication
            </p>
          </div>

          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <i className="fas fa-clock" style={{ fontSize: '4rem', color: '#2c4a80', marginBottom: '20px' }}></i>
            <h4 style={{ color: '#1a3d6b', fontSize: '1.5rem', marginBottom: '15px' }}>No Articles in Press Yet</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b' }}>
              Accepted articles will be listed here prior to their inclusion in a published issue. Check back soon for updates.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'contact-information',
      title: 'Contact Information',
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
              Contact Information
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0' }}>
              Get in touch with our editorial team
            </p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ 
                background: '#e8f4fd', 
                padding: '25px', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <i className="fas fa-paper-plane" style={{ fontSize: '2.5rem', color: '#2c4a80', marginBottom: '15px' }}></i>
                <h4 style={{ color: '#1a3d6b', fontSize: '1.2rem', marginBottom: '10px' }}>Paper Submissions</h4>
                <a href="mailto:submission.jcids@gnosispress.org" style={{ 
                  color: '#2c4a80', 
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  submission.jcids@gnosispress.org
                </a>
              </div>

              <div style={{ 
                background: '#e8f4fd', 
                padding: '25px', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <i className="fas fa-user-tie" style={{ fontSize: '2.5rem', color: '#2c4a80', marginBottom: '15px' }}></i>
                <h4 style={{ color: '#1a3d6b', fontSize: '1.2rem', marginBottom: '10px' }}>Editor-in-Chief</h4>
                <a href="mailto:eic.jcids@gnosispress.org" style={{ 
                  color: '#2c4a80', 
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  eic.jcids@gnosispress.org
                </a>
              </div>
            </div>

            <div style={{ 
              display: 'flex',
              justifyContent: 'center',
              marginTop: '25px'
            }}>
              <div style={{ 
                background: '#e8f4fd', 
                padding: '25px', 
                borderRadius: '8px',
                textAlign: 'center',
                maxWidth: '350px',
                width: '100%'
              }}>
                <i className="fas fa-envelope" style={{ fontSize: '2.5rem', color: '#2c4a80', marginBottom: '15px' }}></i>
                <h4 style={{ color: '#1a3d6b', fontSize: '1.2rem', marginBottom: '10px' }}>General Queries</h4>
                <a href="mailto:info@gnosispress.org" style={{ 
                  color: '#2c4a80', 
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  info@gnosispress.org
                </a>
              </div>
            </div>

            <div style={{ 
              marginTop: '30px', 
              padding: '30px', 
              background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #bee5eb'
            }}>
              <img 
                src="/logo.png" 
                alt="Gnosis Press Logo" 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  marginBottom: '15px',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }} 
              />
              <h4 style={{ color: '#1a3d6b', fontSize: '1.4rem', marginBottom: '10px', fontWeight: 'bold' }}>Publisher</h4>
              <p style={{ fontSize: '1.05rem', color: '#2c4a80', margin: '0', lineHeight: '1.6' }}>
                <strong style={{ fontSize: '1.2rem' }}>Gnosis Press</strong><br/>
                Global Publishing Network<br/>
                Open Access Academic Publisher
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
                onClick={() => {
                  if (section.id === 'about-press') {
                    window.location.href = '/';
                  } else {
                    setActiveSection(section.id);
                  }
                }}
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
            <a href="#instructions-authors" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }} onClick={(e) => {
              e.preventDefault();
              setActiveSection('instructions-authors');
              document.getElementById('instructions-authors')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i>
              Submit Paper
            </a>
            <a href="#contact-information" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }} onClick={(e) => {
              e.preventDefault();
              setActiveSection('contact-information');
              document.getElementById('contact-information')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
              Contact Editor-in-Chief
            </a>
            <a href="/editors" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }}>
              <i className="fas fa-users" style={{ marginRight: '10px' }}></i>
              Editorial Team
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