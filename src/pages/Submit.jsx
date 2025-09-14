import { useState } from 'react'

const Submit = () => {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: '',
    authorName: '',
    authorEmail: '',
    authorAffiliation: '',
    correspondingAuthor: '',
    category: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/submit-paper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage('Thank you! Your submission has been received. Please send your full manuscript to submissions@jcids.org')
        setFormData({
          title: '',
          abstract: '',
          keywords: '',
          authorName: '',
          authorEmail: '',
          authorAffiliation: '',
          correspondingAuthor: '',
          category: '',
          message: ''
        })
      } else {
        setSubmitMessage('Error submitting paper. Please try again or contact support.')
      }
    } catch (error) {
      setSubmitMessage('Error submitting paper. Please try again or contact support.')
    }

    setIsSubmitting(false)
  }

  return (
    <div className="container">
      <div className="section">
        <h2 className="text-center">Submit Your Research</h2>
        <p className="text-center lead">
          Journal of Computational Intelligence and Decision Science (JCIDS)
        </p>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card">
            <h3><i className="fas fa-info-circle"></i> Submission Guidelines</h3>
            <ul>
              <li>Manuscripts must be original and unpublished work</li>
              <li>Submit initial information below, then send full paper to <strong>submissions@jcids.org</strong></li>
              <li>Include all author information and conflict of interest statements</li>
              <li>Follow IEEE format for final submission</li>
              <li>Maximum length: 12 pages for full papers, 6 pages for short papers</li>
            </ul>
          </div>

          <div className="card">
            <h3><i className="fas fa-upload"></i> Paper Submission Form</h3>
            
            {submitMessage && (
              <div style={{
                background: submitMessage.includes('Error') ? '#ffe6e6' : '#e6ffe6',
                color: submitMessage.includes('Error') ? '#d00' : '#060',
                padding: '15px',
                borderRadius: '5px',
                marginBottom: '20px',
                border: `1px solid ${submitMessage.includes('Error') ? '#d00' : '#060'}`
              }}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Paper Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter the title of your research paper"
                />
              </div>

              <div className="form-group">
                <label htmlFor="abstract">Abstract *</label>
                <textarea
                  id="abstract"
                  name="abstract"
                  value={formData.abstract}
                  onChange={handleChange}
                  required
                  placeholder="Provide a concise abstract (150-300 words)"
                  rows="6"
                />
              </div>

              <div className="form-group">
                <label htmlFor="keywords">Keywords *</label>
                <input
                  type="text"
                  id="keywords"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleChange}
                  required
                  placeholder="Enter 4-6 keywords separated by commas"
                />
              </div>

              <div className="form-group">
                <label htmlFor="authorName">Author Name(s) *</label>
                <input
                  type="text"
                  id="authorName"
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleChange}
                  required
                  placeholder="Enter all author names"
                />
              </div>

              <div className="form-group">
                <label htmlFor="authorEmail">Contact Email *</label>
                <input
                  type="email"
                  id="authorEmail"
                  name="authorEmail"
                  value={formData.authorEmail}
                  onChange={handleChange}
                  required
                  placeholder="Enter corresponding author's email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="authorAffiliation">Author Affiliation(s) *</label>
                <input
                  type="text"
                  id="authorAffiliation"
                  name="authorAffiliation"
                  value={formData.authorAffiliation}
                  onChange={handleChange}
                  required
                  placeholder="Enter institutional affiliations"
                />
              </div>

              <div className="form-group">
                <label htmlFor="correspondingAuthor">Corresponding Author *</label>
                <input
                  type="text"
                  id="correspondingAuthor"
                  name="correspondingAuthor"
                  value={formData.correspondingAuthor}
                  onChange={handleChange}
                  required
                  placeholder="Name of corresponding author"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Research Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="machine-learning">Machine Learning</option>
                  <option value="deep-learning">Deep Learning</option>
                  <option value="nlp">Natural Language Processing</option>
                  <option value="computer-vision">Computer Vision</option>
                  <option value="decision-science">Decision Science</option>
                  <option value="optimization">Optimization Algorithms</option>
                  <option value="data-mining">Data Mining</option>
                  <option value="ai-ethics">AI Ethics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Comments</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any additional information or special requests"
                  rows="4"
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <button 
                  type="submit" 
                  className="btn"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Submitting...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Submit Paper Information
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="card">
            <h3><i className="fas fa-envelope"></i> Next Steps</h3>
            <p>
              After submitting this form, please send your complete manuscript as a PDF to:
            </p>
            <div style={{ 
              background: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '5px', 
              textAlign: 'center',
              margin: '20px 0'
            }}>
              <strong style={{ fontSize: '1.2rem', color: '#2c5aa0' }}>
                submissions@jcids.org
              </strong>
            </div>
            <p>
              Include your paper title in the email subject line and reference this submission form.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Submit