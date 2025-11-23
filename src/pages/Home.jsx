import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, GitBranch, Shield, Zap } from 'lucide-react'
import CSSCube from '../components/ThreeD/CSSCube'
import AnimatedCard from '../components/UI/AnimatedCard'

const Home = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline',
      description: 'Automated testing and deployment on every code change',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive testing ensures code quality and reliability',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'Hot reload and modern tooling for rapid development',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Modern DevOps
              </span>
              <br />
              <span className="text-white">With React & 3D</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience the future of DevOps with beautiful 3D visualizations, 
              automated pipelines, and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tasks">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2"
                >
                  Explore Tasks
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link to="/pipeline">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800/50 border border-purple-500/30 text-white rounded-2xl font-semibold backdrop-blur-lg hover:bg-slate-700/50 transition-all duration-300"
                >
                  View 3D Pipeline
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right - CSS 3D Cube */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <CSSCube />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1}>
              <div className={`p-1 rounded-2xl bg-gradient-to-r ${feature.color}`}>
                <div className="bg-slate-900 rounded-2xl p-6 h-full backdrop-blur-lg">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Home