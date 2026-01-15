import { useState } from 'react'

const Journals = () => {
  const [activeSection, setActiveSection] = useState('about-journal')

  const journalSections = [
    {
      id: 'about-press',
      title: 'About the Press',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '40px 30px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #bee5eb'
          }}>
            {/* Logo and Title Section */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              marginBottom: '30px' 
            }}>
              <img 
                src="/logo.png" 
                alt="Gnosis Press Logo" 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  marginBottom: '20px',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }} 
              />
              <h3 style={{ 
                color: '#1a3d6b', 
                fontSize: '2.5rem', 
                marginBottom: '10px', 
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Gnosis Press
              </h3>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#2c4a80', 
                fontStyle: 'italic',
                textAlign: 'center',
                margin: '0'
              }}>
                Independent Academic Publishing Platform
              </p>
            </div>

            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
              <p style={{ marginBottom: '20px' }}>
                <strong>Gnosis Press</strong> is an independent academic publishing platform dedicated to advancing high-quality research and knowledge dissemination across disciplines. It provides a space where scholars, practitioners, and policymakers can share original work that contributes to academic debates and addresses real-world challenges.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The press follows an <strong>open access model</strong>, ensuring that all published research is freely available to readers worldwide without any subscription or paywall restrictions. Its publishing framework is built on the principles of academic rigor, ethical integrity, and global accessibility.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Gnosis Press is committed to a <strong>transparent and efficient editorial process</strong>. All submissions undergo a double-blind peer review, and authors receive a first decision within six to eight weeks. Every published article is assigned a DOI, making it easily citable and permanently accessible.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The press adheres to internationally recognized <strong>ethical standards</strong>, including guidelines set by the Committee on Publication Ethics (COPE). It aims to create a global community of researchers and institutions by supporting open knowledge exchange, interdisciplinary scholarship, and innovative research practices.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Through its journals and initiatives, Gnosis Press seeks to make scholarly publishing more <strong>inclusive, timely, and impactful</strong>, bridging the gap between academic research and practical applications that benefit society.
              </p>
              
              {/* Key Features */}
              <div style={{ 
                background: 'white', 
                padding: '25px', 
                borderRadius: '8px', 
                marginTop: '30px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{ color: '#1a3d6b', marginBottom: '15px', fontSize: '1.3rem' }}>
                  Why Publish with Gnosis Press?
                </h4>
                <ul style={{ margin: '0', paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '10px' }}>✓ Open access to maximize research impact and visibility</li>
                  <li style={{ marginBottom: '10px' }}>✓ Rigorous double-blind peer review ensuring quality</li>
                  <li style={{ marginBottom: '10px' }}>✓ Fast turnaround: First decision within 6-8 weeks</li>
                  <li style={{ marginBottom: '10px' }}>✓ DOI assignment for permanent citation and archiving</li>
                  <li style={{ marginBottom: '10px' }}>✓ COPE-compliant ethical standards</li>
                  <li style={{ marginBottom: '10px' }}>✓ Global community of scholars and practitioners</li>
                  <li>✓ No submission fees, transparent publishing costs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
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
              <p style={{ marginBottom: '20px' }}>
                The Journal of Computational Intelligence and Decision Science is an open access, peer-reviewed academic journal published by Gnosis Press. It focuses on advancing research and applications in the areas of computational intelligence, data-driven decision-making, and intelligent systems across multiple domains. The journal welcomes contributions that integrate theory, methodology, and practice to address complex decision problems through innovative computational approaches.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The journal provides immediate and free access to all its published content, enabling researchers, practitioners, and institutions worldwide to engage with the latest findings without any subscription or access barriers. A rigorous double-blind peer review process ensures the quality, originality, and scientific integrity of every manuscript.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Authors can expect an initial decision within six to eight weeks of submission, reflecting the journal's commitment to a timely and transparent review process. All published articles are assigned DOI numbers to ensure global discoverability and persistent access.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The journal adheres to the highest standards of publication ethics and follows the guidelines of the Committee on Publication Ethics (COPE). It encourages interdisciplinary submissions and fosters research that bridges artificial intelligence, computational methods, and decision science to generate real-world impact.
              </p>
              <p style={{ margin: '0' }}>
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
      title: 'Journal Overview (Vision, Mission & Quality Statement)',
      content: (
        <div>
          {/* Vision Card */}
          <div style={{ 
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', 
            padding: '45px', 
            borderRadius: '16px', 
            marginBottom: '30px', 
            border: '2px solid #93c5fd', 
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              width: '6px',
              height: '100%',
              background: 'linear-gradient(180deg, #3b82f6, #2563eb)'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ 
                  color: '#1e3a8a', 
                  fontSize: '2.5rem', 
                  fontWeight: '800',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.5px'
                }}>Vision</h4>
                <div style={{ 
                  width: '100px', 
                  height: '5px', 
                  background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
                  borderRadius: '3px'
                }}></div>
              </div>
              <p style={{ 
                fontSize: '1.15rem', 
                lineHeight: '1.9', 
                color: '#1e40af', 
                margin: '0',
                textAlign: 'justify',
                fontWeight: '500'
              }}>
                To become a globally recognized publishing house that advances scholarly communication through ethical, high-quality publications. We aim to empower researchers and institutions worldwide by providing accessible platforms for knowledge dissemination that drive innovation and contribute to academic and societal progress.
              </p>
            </div>
          </div>
          
          {/* Mission Card */}
          <div style={{ 
            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', 
            padding: '45px', 
            borderRadius: '16px', 
            marginBottom: '30px', 
            border: '2px solid #86efac', 
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              width: '6px',
              height: '100%',
              background: 'linear-gradient(180deg, #10b981, #059669)'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ 
                  color: '#065f46', 
                  fontSize: '2.5rem', 
                  fontWeight: '800',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.5px'
                }}>Mission</h4>
              </div>
              <p style={{ 
                fontSize: '1.15rem', 
                lineHeight: '1.9', 
                color: '#047857', 
                margin: '0',
                textAlign: 'justify',
                fontWeight: '500'
              }}>
                GNOSIS Press publishes peer-reviewed journals, books, conference proceedings, and scholarly resources that meet international publishing standards. We provide researchers, academicians, and professionals with a transparent platform to disseminate original research to a global audience. Through rigorous peer review, editorial oversight, and digital innovation, we enhance the visibility and impact of published works while fostering interdisciplinary collaboration and supporting emerging scholars.
              </p>
            </div>
          </div>

          {/* Quality Statement Card */}
          <div style={{ 
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', 
            padding: '45px', 
            borderRadius: '16px', 
            border: '2px solid #fcd34d', 
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute',
              top: '0',
              left: '0',
              width: '6px',
              height: '100%',
              background: 'linear-gradient(180deg, #f59e0b, #d97706)'
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ 
                  color: '#92400e', 
                  fontSize: '2.5rem', 
                  fontWeight: '800',
                  margin: '0 0 12px 0',
                  letterSpacing: '-0.5px'
                }}>Quality Statement</h4>
                <div style={{ 
                  width: '100px', 
                  height: '5px', 
                  background: 'linear-gradient(90deg, #f59e0b, #d97706)',
                  borderRadius: '3px'
                }}></div>
              </div>
              <p style={{ 
                fontSize: '1.15rem', 
                lineHeight: '1.9', 
                color: '#92400e', 
                margin: '0',
                textAlign: 'justify',
                fontWeight: '500'
              }}>
                GNOSIS Press maintains rigorous quality standards by adhering to internationally recognized editorial policies, ethical guidelines, and publishing best practices. Every manuscript undergoes systematic peer review and plagiarism screening to ensure originality, accuracy, and academic integrity. We emphasize consistency, transparency, and continuous improvement across all editorial workflows, production processes, and author services. Through the integration of advanced publishing technologies and experienced editorial oversight, we ensure timely publication, global discoverability, and long-term scholarly value.
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
              Instructions to Authors
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: '0' }}>
              Guidelines for manuscript preparation and submission
            </p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Manuscript Preparation</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                <li>Manuscripts must be original, unpublished work not under consideration elsewhere.</li>
                <li>Download and use the official JCIDS paper template (PDF format).</li>
                <li>Maximum length: 12 pages for full papers, 6 pages for short papers.</li>
                <li>Follow IEEE format for citations and references.</li>
                <li>Include complete author information with affiliations and ORCID IDs.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Required Sections</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                <li><strong>Title:</strong> Clear, concise, and descriptive</li>
                <li><strong>Abstract:</strong> 150-250 words summarizing objectives, methods, results, and conclusions</li>
                <li><strong>Keywords:</strong> 4-6 relevant keywords</li>
                <li><strong>Introduction:</strong> Background, research gap, and objectives</li>
                <li><strong>Methodology:</strong> Detailed description of methods and materials</li>
                <li><strong>Results:</strong> Clear presentation of findings with figures and tables</li>
                <li><strong>Discussion:</strong> Interpretation of results and comparison with existing work</li>
                <li><strong>Conclusion:</strong> Summary of key findings and future directions</li>
                <li><strong>References:</strong> Complete bibliographic information in IEEE format</li>
              </ul>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Submission Process</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                <li>Submit manuscripts via email to: <strong>submission.jcids@gnosispress.org</strong></li>
                <li>Include paper title in the email subject line</li>
                <li>Attach manuscript as PDF file</li>
                <li>Include conflict of interest statement and ethical approval (if applicable)</li>
                <li>All authors must approve the submission</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#1a3d6b', fontSize: '1.3rem', marginBottom: '15px' }}>Review Timeline</h4>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
                Authors can expect an initial decision within <strong>6-8 weeks</strong> of submission. The journal is committed to a timely and transparent review process.
              </p>
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

          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <i className="fas fa-archive" style={{ fontSize: '4rem', color: '#2c4a80', marginBottom: '20px' }}></i>
            <h4 style={{ color: '#1a3d6b', fontSize: '1.5rem', marginBottom: '15px' }}>Archive Coming Soon</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b' }}>
              As a newly launched journal, our archive will grow with each published issue. All articles will be permanently accessible with DOI assignment.
            </p>
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

          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <i className="fas fa-newspaper" style={{ fontSize: '4rem', color: '#2c4a80', marginBottom: '20px' }}></i>
            <h4 style={{ color: '#1a3d6b', fontSize: '1.5rem', marginBottom: '15px' }}>First Issue In Progress</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#64748b', marginBottom: '30px' }}>
              Our inaugural issue is currently being prepared. High-quality submissions are undergoing peer review and will be published soon.
            </p>
            <a 
              href="/submit" 
              style={{ 
                display: 'inline-block',
                padding: '15px 40px',
                background: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i>
              Submit Your Research
            </a>
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

              <div style={{ 
                background: '#e8f4fd', 
                padding: '25px', 
                borderRadius: '8px',
                textAlign: 'center'
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
            <a href="/submit" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }}>
              <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i>
              Submit Paper
            </a>
            <a href="mailto:eic.jcids@gnosispress.org?subject=JCIDS Editorial Query" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'background 0.2s',
              fontSize: '1rem'
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