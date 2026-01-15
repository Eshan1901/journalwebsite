const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const multer = require('multer');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'jcids-journal-secret-key-' + Math.random().toString(36);
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware
app.use(helmet({
  contentSecurityPolicy: NODE_ENV === 'production' ? undefined : false
}));
app.use(compression());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files with proper caching in production
if (NODE_ENV === 'production') {
  app.use(express.static('public', {
    maxAge: '1d',
    etag: false
  }));
} else {
  app.use(express.static('public'));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// File upload configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/papers/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: function (req, file, cb) {
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and Word documents are allowed!'), false);
    }
  }
});

// Database functions (JSON-based for simplicity)
class Database {
  constructor() {
    this.dataDir = 'data';
    this.initializeDatabase();
  }

  async initializeDatabase() {
    try {
      await fs.access(this.dataDir);
    } catch {
      await fs.mkdir(this.dataDir, { recursive: true });
    }

    try {
      await fs.access('uploads/papers');
    } catch {
      await fs.mkdir('uploads/papers', { recursive: true });
    }

    // Initialize data files
    const files = ['users.json', 'papers.json', 'reviews.json', 'issues.json', 'settings.json'];
    for (const file of files) {
      try {
        await fs.access(path.join(this.dataDir, file));
      } catch {
        await fs.writeFile(path.join(this.dataDir, file), JSON.stringify([]));
      }
    }

    // Initialize admin user if none exists
    const users = await this.getUsers();
    if (users.length === 0) {
      const adminPassword = await bcrypt.hash('admin123', 10);
      await this.addUser({
        id: uuidv4(),
        email: 'admin@jcids.org',
        password: adminPassword,
        name: 'JCIDS Admin',
        role: 'admin',
        createdAt: new Date().toISOString()
      });
    }
  }

  async readFile(filename) {
    try {
      const data = await fs.readFile(path.join(this.dataDir, filename), 'utf8');
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  async writeFile(filename, data) {
    await fs.writeFile(path.join(this.dataDir, filename), JSON.stringify(data, null, 2));
  }

  async getUsers() {
    return await this.readFile('users.json');
  }

  async addUser(user) {
    const users = await this.getUsers();
    users.push(user);
    await this.writeFile('users.json', users);
  }

  async findUserByEmail(email) {
    const users = await this.getUsers();
    return users.find(user => user.email === email);
  }

  async getPapers() {
    return await this.readFile('papers.json');
  }

  async addPaper(paper) {
    const papers = await this.getPapers();
    papers.push(paper);
    await this.writeFile('papers.json', papers);
  }

  async updatePaper(id, updates) {
    const papers = await this.getPapers();
    const index = papers.findIndex(paper => paper.id === id);
    if (index !== -1) {
      papers[index] = { ...papers[index], ...updates };
      await this.writeFile('papers.json', papers);
      return papers[index];
    }
    return null;
  }

  async getReviews() {
    return await this.readFile('reviews.json');
  }

  async addReview(review) {
    const reviews = await this.getReviews();
    reviews.push(review);
    await this.writeFile('reviews.json', reviews);
  }

  async getIssues() {
    return await this.readFile('issues.json');
  }ity

  async addIssue(issue) {
    const issues = await this.getIssues();
    issues.push(issue);
    await this.writeFile('issues.json', issues);
  }
}

const db = new Database();

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Admin middleware
const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    journal: 'Journal of Computational Intelligence and Decision Science',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message, type } = req.body;
    console.log('Contact submission:', { name, email, subject, type });
    
    res.json({ 
      success: true, 
      message: 'Thank you for your submission. We will contact you soon.' 
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

app.post('/api/submit-paper', async (req, res) => {
  try {
    const submission = req.body;
    console.log('Paper submission received:', {
      title: submission.title,
      email: submission.email,
      timestamp: new Date().toISOString()
    });
    
    res.json({
      success: true, 
      message: 'Paper submission received. Please send your full paper to submissions@jcids.org'
    });
  } catch (error) {
    console.error('Paper submission error:', error);
    res.status(500).json({ error: 'Failed to submit paper' });
  }
});

// User Authentication
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    const existingUser = await db.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      id: uuidv4(),
      email,
      password: hashedPassword,
      name,
      role: 'author',
      createdAt: new Date().toISOString()
    };

    await db.addUser(user);
    
    const token = jwt.sign({ 
      id: user.id, 
      email: user.email, 
      role: user.role 
    }, JWT_SECRET);

    res.json({ 
      token, 
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      } 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await db.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ 
      id: user.id, 
      email: user.email, 
      role: user.role 
    }, JWT_SECRET);

    res.json({ 
      token, 
      user: { 
        id: user.id, 
        email: user.email, 
        name: user.name, 
        role: user.role 
      } 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Paper Submission
app.post('/api/papers/submit', authenticateToken, upload.single('paperFile'), async (req, res) => {
  try {
    const {
      title,
      abstract,
      keywords,
      authors,
      corresponding_author,
      category
    } = req.body;

    const paper = {
      id: uuidv4(),
      title,
      abstract,
      keywords,
      authors: JSON.parse(authors),
      corresponding_author,
      category,
      status: 'submitted',
      submitted_by: req.user.id,
      submitted_at: new Date().toISOString(),
      file_path: req.file ? req.file.path : null,
      file_name: req.file ? req.file.originalname : null
    };

    await db.addPaper(paper);
    res.json({ message: 'Paper submitted successfully', paper_id: paper.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all papers (admin only)
app.get('/api/papers', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const papers = await db.getPapers();
    res.json(papers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user's papers
app.get('/api/papers/my', authenticateToken, async (req, res) => {
  try {
    const papers = await db.getPapers();
    const userPapers = papers.filter(paper => paper.submitted_by === req.user.id);
    res.json(userPapers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update paper status (admin only)
app.put('/api/papers/:id/status', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const { status, review_comments } = req.body;
    const updatedPaper = await db.updatePaper(req.params.id, {
      status,
      review_comments,
      reviewed_at: new Date().toISOString(),
      reviewed_by: req.user.id
    });

    if (!updatedPaper) {
      return res.status(404).json({ error: 'Paper not found' });
    }

    res.json({ message: 'Paper status updated', paper: updatedPaper });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get published papers (public)
app.get('/api/papers/published', async (req, res) => {
  try {
    const papers = await db.getPapers();
    const publishedPapers = papers.filter(paper => paper.status === 'published');
    res.json(publishedPapers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search papers
app.get('/api/papers/search', async (req, res) => {
  try {
    const { q, category } = req.query;
    const papers = await db.getPapers();
    let filteredPapers = papers.filter(paper => paper.status === 'published');

    if (q) {
      const searchTerm = q.toLowerCase();
      filteredPapers = filteredPapers.filter(paper => 
        paper.title.toLowerCase().includes(searchTerm) ||
        paper.abstract.toLowerCase().includes(searchTerm) ||
        paper.keywords.toLowerCase().includes(searchTerm)
      );
    }

    if (category) {
      filteredPapers = filteredPapers.filter(paper => paper.category === category);
    }

    res.json(filteredPapers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Statistics endpoint
app.get('/api/stats', async (req, res) => {
  try {
    const papers = await db.getPapers();
    const users = await db.getUsers();
    
    const stats = {
      total_papers: papers.length,
      published_papers: papers.filter(p => p.status === 'published').length,
      under_review: papers.filter(p => p.status === 'under_review').length,
      submitted_papers: papers.filter(p => p.status === 'submitted').length,
      total_authors: users.filter(u => u.role === 'author').length,
      rejection_rate: Math.round((papers.filter(p => p.status === 'rejected').length / papers.length) * 100) || 0
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Serve submission page
app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'submit.html'));
});

// Error handling
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large. Maximum size is 10MB.' });
    }
  }
  res.status(500).json({ error: error.message });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Journal website running on http://localhost:${PORT}`);
  console.log('Default admin credentials: admin@jcids.org / admin123');
  console.log(`Environment: ${NODE_ENV}`);
});
