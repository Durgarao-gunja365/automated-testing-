import { motion } from 'framer-motion'

const AnimatedCard = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard