import { motion } from 'framer-motion'
import { Link, Smartphone, Shield } from 'lucide-react'

const steps = [
  {
    icon: Link,
    title: 'Phishing Pages',
    description: 'Scammers create fake websites that mimic legitimate services, tricking users into entering sensitive information.'
  },
  {
    icon: Smartphone,
    title: 'Malware Distribution',
    description: 'QR codes can lead to malicious apps or software that compromise device security and steal data.'
  },
  {
    icon: Shield,
    title: 'Fake Payment Redirection',
    description: 'Fraudulent QR codes redirect users to fake payment gateways, leading to unauthorized transactions.'
  }
]

const HowQRScamsWork = () => {
  return (
    <section id="how" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How QR Code Scams Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#112240] p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-400/10 rounded-full mb-4 border border-cyan-400/20">
                  <step.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
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
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">The Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Scammers create and distribute malicious QR codes</li>
              <li>Victims scan the QR codes without verification</li>
              <li>Users are redirected to fake websites or download malware</li>
              <li>Sensitive information is stolen or unauthorized payments are made</li>
            </ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowQRScamsWork 