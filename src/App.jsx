import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Submit from './pages/Submit'
import Journals from './pages/Journals'
import Editorial from './pages/Editorial'
import InstructionsToAuthors from './pages/InstructionsToAuthors'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/editors" element={<Editorial />} />
          <Route path="/instructions-to-authors" element={<InstructionsToAuthors />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
