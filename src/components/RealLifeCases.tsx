import { motion } from 'framer-motion'
import { MapPin, AlertCircle, BarChart2 } from 'lucide-react'

const cases = [
  {
    icon: MapPin,
    location: 'Khajuraho',
    title: 'Tourist QR Code Scam',
    description: 'Scammers replaced legitimate QR codes at tourist sites with malicious ones, leading to financial losses for unsuspecting visitors.',
    link: 'https://indianexpress.com/article/trending/trending-in-india/qr-code-scam-fraudster-swap-payment-code-to-steal-money-in-khajuraho-viral-9779540/'
  },
  {
    icon: AlertCircle,
    location: 'Pune',
    title: 'Police QR Code Fraud',
    description: 'Criminals posed as police officers and distributed QR codes for \'verification\', resulting in multiple victims losing money.',
    link: 'https://www.indiatoday.in/technology/news/story/police-officer-from-pune-loses-rs-23-lakh-after-scanning-qr-code-to-pay-at-local-bakery-2650360-2024-12-16'
  },
  {
    icon: BarChart2,
    location: 'Bengaluru',
    title: 'Cybercrime Statistics',
    description: 'Over 500 QR code-related cybercrime cases reported in 2023, with losses exceeding ₹2 crores.',
    link: 'https://www.indiatoday.in/technology/news/story/bengaluru-man-loses-rs-2-lakh-in-olx-qr-code-scam-2592795-2024-09-03'
  }
]

const RealLifeCases = () => {
  return (
    <section id="cases" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Real-Life Cases of QR Code Scams
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <motion.a
                key={index}
                href={case_.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a192f] p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors cursor-pointer block"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                    <case_.icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  <span className="text-sm font-semibold text-cyan-400">{case_.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{case_.title}</h3>
                <p className="text-gray-300">{case_.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RealLifeCases 