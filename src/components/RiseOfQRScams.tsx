import { motion } from 'framer-motion'
import { TrendingUp, DollarSign } from 'lucide-react'

const RiseOfQRScams = () => {
  return (
    <section id="rise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-8">
            <TrendingUp className="h-6 w-6 text-red-500" />
            <h2 className="text-3xl font-bold text-gray-900">
              The Rise of QR Code Scams
            </h2>
          </div>
          
          <div className="bg-red-50 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-4">
              <DollarSign className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="text-xl font-semibold text-red-700">$17 Million in Losses</h3>
                <p className="text-gray-600">Reported to FBI in 2023</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              QR codes have become an integral part of our daily lives, from restaurant menus to payment systems. 
              However, this convenience has also opened new avenues for cybercriminals to exploit unsuspecting victims.
            </p>
            <p className="text-gray-600">
              The FBI's Internet Crime Complaint Center (IC3) has reported a significant increase in QR code-related scams, 
              with victims losing millions of dollars to sophisticated fraud schemes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RiseOfQRScams 