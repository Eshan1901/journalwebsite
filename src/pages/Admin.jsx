import { useState, useEffect } from 'react'

const Admin = () => {
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    underReview: 0,
    published: 0,
    rejected: 0
  })
  const [submissions, setSubmissions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchStats()
    fetchSubmissions()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data)
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="section">
        <h2 className="text-center">JCIDS Administration Panel</h2>
        <p className="text-center lead">
          Journal of Computational Intelligence and Decision Science (JCIDS)
        </p>

        <div className="grid grid-2">
          <div className="card">
            <h3><i className="fas fa-chart-bar"></i> Journal Statistics</h3>
            <div className="grid grid-2" style={{ gap: '20px', marginTop: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#2c5aa0', fontWeight: 'bold' }}>
                  {stats.totalSubmissions}
                </div>
                <p>Total Submissions</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#ff9500', fontWeight: 'bold' }}>
                  {stats.underReview}
                </div>
                <p>Under Review</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#28a745', fontWeight: 'bold' }}>
                  {stats.published}
                </div>
                <p>Published</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#dc3545', fontWeight: 'bold' }}>
                  {stats.rejected}
                </div>
                <p>Rejected</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3><i className="fas fa-info-circle"></i> Admin Information</h3>
            <div style={{ marginTop: '20px' }}>
              <p><strong>Journal Name:</strong> Journal of Computational Intelligence and Decision Science</p>
              <p><strong>ISSN:</strong> 2789-1234 (Print), 2789-5678 (Online)</p>
              <p><strong>Publisher:</strong> JCIDS Publishing</p>
              <p><strong>Email:</strong> admin@jcids.org</p>
              <p><strong>Website:</strong> www.jcids.org</p>
              <p><strong>Established:</strong> 2025</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h3><i className="fas fa-cog"></i> Quick Actions</h3>
          <div className="grid grid-3" style={{ marginTop: '20px' }}>
            <button className="btn">
              <i className="fas fa-plus"></i> Add New Issue
            </button>
            <button className="btn">
              <i className="fas fa-users"></i> Manage Reviewers
            </button>
            <button className="btn">
              <i className="fas fa-envelope"></i> Send Notifications
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-download"></i> Export Data
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-chart-line"></i> View Analytics
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-cogs"></i> System Settings
            </button>
          </div>
        </div>

        <div className="card">
          <h3><i className="fas fa-list"></i> Recent Submissions</h3>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', color: '#2c5aa0' }}></i>
              <p>Loading submissions...</p>
            </div>
          ) : submissions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
              <i className="fas fa-inbox" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
              <p>No submissions yet. The system is ready to receive papers via email at submissions@jcids.org</p>
            </div>
          ) : (
            <div style={{ marginTop: '20px' }}>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '15px', 
                borderRadius: '5px',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                gap: '10px',
                fontWeight: 'bold',
                marginBottom: '10px'
              }}>
                <div>Title</div>
                <div>Author</div>
                <div>Status</div>
                <div>Date</div>
              </div>
              {submissions.map((submission, index) => (
                <div key={index} style={{
                  padding: '15px',
                  borderBottom: '1px solid #eee',
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr',
                  gap: '10px',
                  alignItems: 'center'
                }}>
                  <div>{submission.title}</div>
                  <div>{submission.author}</div>
                  <div>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '3px',
                      fontSize: '0.8rem',
                      background: submission.status === 'published' ? '#d4edda' : 
                                 submission.status === 'under_review' ? '#fff3cd' : '#f8d7da',
                      color: submission.status === 'published' ? '#155724' : 
                             submission.status === 'under_review' ? '#856404' : '#721c24'
                    }}>
                      {submission.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div>{new Date(submission.date).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <h3><i className="fas fa-tools"></i> System Status</h3>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div>
              <h4>Email System</h4>
              <p style={{ color: '#28a745' }}>
                <i className="fas fa-check-circle"></i> Active - submissions@jcids.org
              </p>
            </div>
            <div>
              <h4>Website Status</h4>
              <p style={{ color: '#28a745' }}>
                <i className="fas fa-check-circle"></i> Online and Operational
              </p>
            </div>
            <div>
              <h4>Last Backup</h4>
              <p style={{ color: '#2c5aa0' }}>
                <i className="fas fa-clock"></i> {new Date().toLocaleDateString()}
              </p>
            </div>
            <div>
              <h4>Server Load</h4>
              <p style={{ color: '#28a745' }}>
                <i className="fas fa-server"></i> Normal (15% CPU)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin