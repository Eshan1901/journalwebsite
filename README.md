# JCIDS Journal - React Application

Journal of Computational Intelligence and Decision Science - A modern React-based academic journal website.

## 🚀 Features

- **Modern React Frontend** with Vite build tool
- **Responsive Design** with professional academic styling
- **Dynamic Navigation** with comprehensive sidebar
- **Email-based Submissions** to submissions@jcids.org
- **Admin Dashboard** for journal management
- **RESTful API** with Express.js backend
- **Easy Deployment** to Vercel, Netlify, or Heroku

## 📋 Pages

- **Home**: Welcome page with journal information and research areas
- **Submit**: Paper submission form with guidelines
- **Admin**: Administrative dashboard with statistics

## 🛠 Technology Stack

- **Frontend**: React 18, React Router, Vite
- **Backend**: Node.js, Express.js
- **Styling**: CSS3 with modern responsive design
- **Icons**: Font Awesome 6
- **Deployment**: Ready for Vercel, Netlify, Heroku

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jcids-journal.git
   cd jcids-journal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development servers**

   For development with hot reload:
   ```bash
   # Terminal 1 - Frontend (Vite dev server)
   npm run dev

   # Terminal 2 - Backend API
   npm run server
   ```

   For production:
   ```bash
   npm run build
   npm start
   ```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically with zero configuration

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Heroku
1. Create a Heroku app
2. Push your code to Heroku Git
3. The app will build and start automatically

## 📧 Email Configuration

The system is configured to direct all submissions to:
**submissions@jcids.org**

Update the email address in:
- `src/pages/Submit.jsx`
- `server/index.js`
- Component files as needed

## 🎨 Customization

### Styling
- Main styles: `src/index.css`
- Layout styles: `src/App.css`
- Component-specific styles: Inline or separate CSS files

### Content
- Home page content: `src/pages/Home.jsx`
- Sidebar content: `src/components/Sidebar.jsx`
- Navigation: `src/components/Layout.jsx`

### API Endpoints
- Health check: `/api/health`
- Paper submission: `/api/submit-paper`
- Contact form: `/api/contact`
- Admin stats: `/api/admin/stats`
- Admin submissions: `/api/admin/submissions`

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Development Scripts

```bash
npm run dev      # Start Vite dev server (frontend)
npm run build    # Build for production
npm run preview  # Preview production build
npm start        # Start production server
npm run server   # Start development API server
```

## 📂 Project Structure

```
jcids-journal/
├── public/                 # Static assets
├── src/                   # React application
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── server/               # Express.js backend
│   └── index.js          # API server
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── vercel.json           # Vercel deployment config
```

## 🎯 Journal Information

- **Name**: Journal of Computational Intelligence and Decision Science
- **Abbreviation**: JCIDS
- **Contact**: submissions@jcids.org
- **Focus**: AI, Machine Learning, Decision Science
- **Review Process**: Double-blind peer review
- **Publication**: Quarterly with continuous online publication

## 📞 Support

For technical support or questions:
- **Email**: support@jcids.org
- **Issues**: GitHub Issues
- **Documentation**: This README

## 📄 License

MIT License - See LICENSE file for details

---

Built with ❤️ for the academic research community