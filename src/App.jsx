import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'



import './App.css'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Pipeline from './pages/Pipeline'
import About from './pages/About'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'



function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/about" element={<About />} />
      
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App