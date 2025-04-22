import { motion } from 'framer-motion'
import { TrendingUp, Users, AlertTriangle, DollarSign } from 'lucide-react'

const reasons = [
  {
    icon: TrendingUp,
    title: 'Rapid UPI Adoption',
    description: 'India\'s quick adoption of UPI and digital payments has created a fertile ground for QR code scams.'
  },
  {
    icon: Users,
    title: 'Trust in Officials',
    description: 'Scammers exploit the public\'s trust in authority figures by posing as government officials or police.'
  },
  {
    icon: AlertTriangle,
    title: 'UPI Confusion',
    description: 'Many users are still unfamiliar with UPI processes, making them vulnerable to fake payment requests.'
  },
  {
    icon: DollarSign,
    title: 'Greed Factor',
    description: 'Scammers often lure victims with promises of quick money or rewards through QR codes.'
  }
]

const WhyIndia = () => {
  return (
    <section className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why QR Scams Work in India
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0a192f] p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                    <reason.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                </div>
                <p className="text-gray-300">{reason.description}</p>
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
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">The Perfect Storm</h3>
            <p className="text-gray-300">
              The combination of rapid digital adoption, lack of awareness, and trust in authority figures has created 
              an environment where QR code scams can thrive. It's crucial to stay informed and verify before scanning.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyIndia 