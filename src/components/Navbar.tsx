import { motion } from 'framer-motion'
import { AlertTriangle, QrCode } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#0a192f] shadow-lg border-b border-blue-900/50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-cyan-400">
                QR Code Scams
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/scanner" 
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <QrCode className="h-5 w-5" />
              <span>Scanner</span>
            </Link>
            <a href="#rise" className="text-gray-300 hover:text-cyan-400 transition-colors">
              The Rise
            </a>
            <a href="#cases" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Real Cases
            </a>
            <a href="#how" className="text-gray-300 hover:text-cyan-400 transition-colors">
              How It Works
            </a>
            <a href="#red-flags" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Red Flags
            </a>
            <a href="#what-to-do" className="text-gray-300 hover:text-cyan-400 transition-colors">
              What To Do
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 