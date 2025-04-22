import { motion } from 'framer-motion'
import { QrCode, Link, Shield, AlertTriangle } from 'lucide-react'

const redFlags = [
  {
    icon: QrCode,
    title: 'Tampered QR Codes',
    description: 'Be wary of QR codes that appear to be pasted over or look different from the original.'
  },
  {
    icon: Link,
    title: 'Strange URLs',
    description: 'Check the URL before proceeding. Look for misspellings or unusual domain names.'
  },
  {
    icon: Shield,
    title: 'Unusual Permissions',
    description: 'Be cautious if a QR code asks for unnecessary permissions or access to sensitive data.'
  },
  {
    icon: AlertTriangle,
    title: 'Unsolicited Codes',
    description: 'Never scan QR codes from unknown sources or unsolicited messages.'
  }
]

const RedFlags = () => {
  return (
    <section id="red-flags" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Red Flags to Watch Out For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {redFlags.map((flag, index) => (
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
                    <flag.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{flag.title}</h3>
                </div>
                <p className="text-gray-300">{flag.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/20"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Safety Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Always verify the source of QR codes before scanning</li>
              <li>Use trusted QR code scanning apps with security features</li>
              <li>Check the URL preview before visiting any website</li>
              <li>Be cautious of QR codes in public places</li>
              <li>Never share personal or financial information through QR codes</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default RedFlags 