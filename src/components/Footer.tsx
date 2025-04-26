import { motion } from 'framer-motion'
import { Link, AlertTriangle, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#rise" className="hover:text-white transition-colors">
                  The Rise of QR Scams
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Real-Life Cases
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-white transition-colors">
                  How Scams Work
                </a>
              </li>
              <li>
                <a href="#red-flags" className="hover:text-white transition-colors">
                  Red Flags
                </a>
              </li>
              <li>
                <a href="#what-to-do" className="hover:text-white transition-colors">
                  What to Do
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Cybercrime Portal
                </a>
              </li>
              <li>
                <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  RBI Complaint Portal
                </a>
              </li>
              <li>
                <a href="https://consumerhelpline.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Consumer Helpline
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Emergency</h3>
            <div className="flex items-center space-x-2 mb-4">
              <Phone className="h-5 w-5 text-red-500" />
              <a href="tel:1930" className="text-xl font-bold text-white hover:text-red-500 transition-colors">
                1930
              </a>
            </div>
            <p className="text-sm">
              National Cyber Crime Helpline
            </p>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <p className="text-sm text-center">
              This website is for informational purposes only. The information provided is not legal advice.
              Always verify information from official sources and report crimes to the appropriate authorities.
            </p>
          </div>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Scan Safe. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 