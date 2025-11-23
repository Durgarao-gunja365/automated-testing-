import { motion } from 'framer-motion'
import './CSSCube.css'

const CSSCube = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 2, type: "spring" }}
      className="scene w-64 h-64 mx-auto"
    >
      <div className="cube">
        <div className="cube__face cube__face--front bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">React</span>
        </div>
        <div className="cube__face cube__face--back bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">Vite</span>
        </div>
        <div className="cube__face cube__face--right bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">3D</span>
        </div>
        <div className="cube__face cube__face--left bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">CSS</span>
        </div>
        <div className="cube__face cube__face--top bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">DevOps</span>
        </div>
        <div className="cube__face cube__face--bottom bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">CI/CD</span>
        </div>
      </div>
    </motion.div>
  )
}

export default CSSCube