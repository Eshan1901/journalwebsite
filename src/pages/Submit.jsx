import { useState } from 'react'

const Submit = () => {
  return (
    <div className="container">
      <div className="section">
        <h2 className="text-center">Submit Your Research</h2>
        <p className="text-center lead">
          Journal of Computational Intelligence and Decision Science (JCIDS)
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card">
            <h3><i className="fas fa-download"></i> Paper Template Download</h3>
            <p>
              Download our official PDF paper template to ensure your submission follows the correct format and includes all required sections.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              margin: '20px 0'
            }}>
              <a 
                href="/JCIDS_Paper_Template.pdf" 
                download="JCIDS_Paper_Template.pdf"
                className="btn"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  textDecoration: 'none',
                  background: '#dc3545',
                  color: 'white',
                  padding: '15px 25px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                <i className="fas fa-file-pdf"></i>
                Download PDF Template
              </a>
            </div>
            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px', 
              borderRadius: '5px',
              border: '1px solid #2196f3'
            }}>
              <p><strong><i className="fas fa-info-circle"></i> Template Instructions:</strong></p>
              <ul style={{ marginBottom: '0', paddingLeft: '20px' }}>
                <li>Download the PDF template and use it as a guide for structure</li>
                <li>Follow the exact section format and replace placeholder text with your content</li>
                <li>Ensure all sections are complete: Abstract, Introduction, Methodology, Results, Discussion, Conclusion</li>
                <li>Submit your final paper as PDF to submissions@jcids.org</li>
                <li>Maximum 12 pages for full papers, 6 pages for short papers</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-info-circle"></i> Submission Guidelines</h3>
            <ul>
              <li>Manuscripts must be original and unpublished work</li>
              <li>All submissions must be sent directly to <strong>submissions@jcids.org</strong></li>
              <li>Include all author information and conflict of interest statements</li>
              <li>Follow IEEE format for final submission</li>
              <li>Maximum length: 12 pages for full papers, 6 pages for short papers</li>
              <li>Include paper title in the email subject line</li>
              <li>Attach your manuscript as a PDF file</li>
            </ul>
          </div>

          <div className="card">
            <h3><i className="fas fa-envelope"></i> Email Submission Process</h3>
            <p>
              Submit your complete manuscript directly via email using the following process:
            </p>
            
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
                <a href="mailto:submissions@jcids.org" style={{ 
                  fontSize: '1.4rem', 
                  color: '#2c5aa0',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}>
                  submissions@jcids.org
                </a>
              </div>
            </div>

            <div style={{ 
              background: '#fff3cd', 
              padding: '20px', 
              borderRadius: '5px',
              border: '1px solid #ffc107',
              marginTop: '20px'
            }}>
              <h4 style={{ color: '#856404', marginTop: '0' }}>
                <i className="fas fa-checklist"></i> Email Submission Checklist:
              </h4>
              <ul style={{ marginBottom: '0', paddingLeft: '20px', color: '#856404' }}>
                <li><strong>Subject Line:</strong> "JCIDS Submission: [Your Paper Title]"</li>
                <li><strong>Attachment:</strong> PDF file of your complete manuscript</li>
                <li><strong>Email Body:</strong> Include author names, affiliations, and brief abstract</li>
                <li><strong>Corresponding Author:</strong> Clearly identify the corresponding author with contact details</li>
                <li><strong>Research Category:</strong> Specify which domain track your research falls under</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-tags"></i> Research Categories</h3>
            <p>Please specify which category best describes your research:</p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '10px',
              marginTop: '15px'
            }}>
              <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px', border: '1px solid #dee2e6' }}>
                • Machine Learning
              </div>
              <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px', border: '1px solid #dee2e6' }}>
                • Deep Learning
              </div>
              <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px', border: '1px solid #dee2e6' }}>
                • Natural Language Processing
              </div>
              <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px', border: '1px solid #dee2e6' }}>
                • Computer Vision
              </div>
              <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px', border: '1px solid #dee2e6' }}>
                • Decision Science
              </div>
              <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px', border: '1px solid #dee2e6' }}>
                • Optimization Algorithms
              </div>
              <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px', border: '1px solid #dee2e6' }}>
                • Data Mining
              </div>
              <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px', border: '1px solid #dee2e6' }}>
                • AI Ethics
              </div>
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-clock"></i> Review Process</h3>
            <p>
              After submission, your manuscript will undergo the following process:
            </p>
            <div style={{ marginTop: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ 
                  width: '30px', 
                  height: '30px', 
                  borderRadius: '50%', 
                  background: '#28a745', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '15px',
                  fontWeight: 'bold'
                }}>1</div>
                <div>
                  <strong>Initial Review (2-3 days):</strong> Editorial screening for scope and format compliance
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ 
                  width: '30px', 
                  height: '30px', 
                  borderRadius: '50%', 
                  background: '#17a2b8', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '15px',
                  fontWeight: 'bold'
                }}>2</div>
                <div>
                  <strong>Peer Review (4-6 weeks):</strong> Double-blind review by subject matter experts
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <div style={{ 
                  width: '30px', 
                  height: '30px', 
                  borderRadius: '50%', 
                  background: '#ffc107', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '15px',
                  fontWeight: 'bold'
                }}>3</div>
                <div>
                  <strong>Decision (1-2 weeks):</strong> Editorial decision and reviewer feedback
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ 
                  width: '30px', 
                  height: '30px', 
                  borderRadius: '50%', 
                  background: '#dc3545', 
                  color: 'white', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '15px',
                  fontWeight: 'bold'
                }}>4</div>
                <div>
                  <strong>Publication (2-3 weeks after acceptance):</strong> Final formatting and online publication
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Submit