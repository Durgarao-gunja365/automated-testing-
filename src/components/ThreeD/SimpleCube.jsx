import { motion } from 'framer-motion'

const SimpleCube = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 2, type: "spring" }}
      className="w-64 h-64 mx-auto relative preserve-3d animate-spin-slow"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Front */}
      <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center border-2 border-white/20 transform-translate-z-32">
        <span className="text-white font-bold text-xl">React</span>
      </div>
      {/* Back */}
      <div className="absolute w-64 h-64 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center border-2 border-white/20 transform-rotate-y-180 translate-z-32">
        <span className="text-white font-bold text-xl">Vite</span>
      </div>
      {/* Right */}
      <div className="absolute w-64 h-64 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center border-2 border-white/20 transform-rotate-y-90 translate-z-32">
        <span className="text-white font-bold text-xl">3D</span>
      </div>
      {/* Left */}
      <div className="absolute w-64 h-64 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center border-2 border-white/20 transform-rotate-y--90 translate-z-32">
        <span className="text-white font-bold text-xl">CSS</span>
      </div>
      {/* Top */}
      <div className="absolute w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center border-2 border-white/20 transform-rotate-x-90 translate-z-32">
        <span className="text-white font-bold text-xl">DevOps</span>
      </div>
      {/* Bottom */}
      <div className="absolute w-64 h-64 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center border-2 border-white/20 transform-rotate-x--90 translate-z-32">
        <span className="text-white font-bold text-xl">CI/CD</span>
      </div>
    </motion.div>
  )
}

export default SimpleCube