import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001
const NODE_ENV = process.env.NODE_ENV || 'development'

// Middleware
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Serve static files in production
if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
}

// In-memory storage for demo (in production, use a real database)
let submissions = []
let stats = {
  totalSubmissions: 0,
  underReview: 0,
  published: 0,
  rejected: 0
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    journal: 'Journal of Computational Intelligence and Decision Science',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV
  })
})

// Paper submission endpoint
app.post('/api/submit-paper', async (req, res) => {
  try {
    const submission = {
      id: Date.now().toString(),
      ...req.body,
      status: 'submitted',
      submittedAt: new Date().toISOString()
    }

    submissions.push(submission)
    stats.totalSubmissions++
    stats.underReview++

    console.log('Paper submission received:', {
      title: submission.title,
      email: submission.authorEmail,
      timestamp: submission.submittedAt
    })

    res.json({
      success: true,
      message: 'Paper submission received. Please send your full paper to submissions@jcids.org',
      submissionId: submission.id
    })
  } catch (error) {
    console.error('Paper submission error:', error)
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit paper' 
    })
  }
})

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, type } = req.body

    console.log('Contact submission:', { name, email, subject, type })

    res.json({
      success: true,
      message: 'Thank you for your message. We will contact you soon.'
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    res.status(500).json({ 
      success: false,
      error: 'Failed to submit contact form' 
    })
  }
})

// Admin endpoints
app.get('/api/admin/stats', (req, res) => {
  res.json(stats)
})

app.get('/api/admin/submissions', (req, res) => {
  const formattedSubmissions = submissions.map(sub => ({
    title: sub.title,
    author: sub.authorName,
    status: sub.status,
    date: sub.submittedAt
  }))
  res.json(formattedSubmissions)
})

// Catch all handler for SPA routing in production
if (NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(PORT, () => {
  console.log(`🚀 JCIDS Server running on port ${PORT}`)
  console.log(`🌍 Environment: ${NODE_ENV}`)
  console.log(`📧 Email submissions: submissions@jcids.org`)
  console.log(`🔗 API Health: http://localhost:${PORT}/api/health`)
})