import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import Contact from './pages/Contact'

const App = () => (
  <div className="min-h-screen bg-brand-background text-brand-primary">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </div>
)

export default App
