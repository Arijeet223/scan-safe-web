import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import QRScanner from './components/QRScanner'

function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/scanner" element={<QRScanner />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
