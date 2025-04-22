import { motion } from 'framer-motion'
import { Shield, CreditCard, Link, Eye, QrCode } from 'lucide-react'

const painPoints = [
  {
    icon: Shield,
    title: 'Data Theft',
    description: 'Scammers use QR codes to steal personal information and login credentials.'
  },
  {
    icon: CreditCard,
    title: 'Fake Payments',
    description: 'Fraudulent QR codes redirect to fake payment pages to steal money.'
  },
  {
    icon: Link,
    title: 'Phishing',
    description: 'QR codes can lead to phishing websites designed to harvest sensitive data.'
  },
  {
    icon: Eye,
    title: 'Lack of Awareness',
    description: 'Many users don\'t verify QR codes before scanning, making them vulnerable.'
  },
  {
    icon: QrCode,
    title: 'Overuse',
    description: 'Widespread QR code usage has made people less cautious about scanning them.'
  }
]

const PainPoints = () => {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Common Pain Points in QR Code Usage
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#112240] p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                    <point.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                </div>
                <p className="text-gray-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PainPoints 