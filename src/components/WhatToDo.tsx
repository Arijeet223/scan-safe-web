import { motion } from 'framer-motion'
import { Phone, Globe, Shield, AlertTriangle } from 'lucide-react'

const actions = [
  {
    icon: Phone,
    title: 'Emergency Contact',
    description: 'Call 1930 immediately to report cybercrime',
    link: 'tel:1930'
  },
  {
    icon: Globe,
    title: 'Cybercrime Portal',
    description: 'File a complaint at cybercrime.gov.in',
    link: 'https://cybercrime.gov.in'
  },
  {
    icon: Shield,
    title: 'RBI Complaint',
    description: 'Report to RBI at cms.rbi.org.in',
    link: 'https://cms.rbi.org.in'
  },
  {
    icon: AlertTriangle,
    title: 'Consumer Helpline',
    description: 'Contact consumerhelpline.gov.in for assistance',
    link: 'https://consumerhelpline.gov.in'
  }
]

const WhatToDo = () => {
  return (
    <section id="what-to-do" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What to Do If You're Scammed
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {actions.map((action, index) => (
              <motion.a
                key={index}
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a192f] p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                    <action.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{action.title}</h3>
                </div>
                <p className="text-gray-300">{action.description}</p>
              </motion.a>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/20"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Important Steps</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Immediately contact your bank to freeze the account</li>
              <li>Change all passwords and enable two-factor authentication</li>
              <li>File a police complaint with all relevant details</li>
              <li>Keep records of all transactions and communications</li>
              <li>Report the incident to the cybercrime portal</li>
            </ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatToDo 