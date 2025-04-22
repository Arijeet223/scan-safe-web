import { BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RiseOfQRScams from './components/RiseOfQRScams'
import PainPoints from './components/PainPoints'
import RealLifeCases from './components/RealLifeCases'
import HowQRScamsWork from './components/HowQRScamsWork'
import WhyIndia from './components/WhyIndia'
import RedFlags from './components/RedFlags'
import WhatToDo from './components/WhatToDo'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <RiseOfQRScams />
          <PainPoints />
          <RealLifeCases />
          <HowQRScamsWork />
          <WhyIndia />
          <RedFlags />
          <WhatToDo />
        </motion.main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
