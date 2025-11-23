import { motion } from 'framer-motion'
import { Code, GitBranch, Shield, Zap, Globe, Database } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Modern Stack',
      description: 'Built with React, Vite, Tailwind CSS, and Three.js for a cutting-edge experience.',
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline',
      description: 'Automated testing and deployment with GitHub Actions.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and code quality checks.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized builds and fast development experience with Vite.',
    },
    {
      icon: Globe,
      title: '3D Visualization',
      description: 'Interactive 3D elements to demonstrate DevOps concepts.',
    },
    {
      icon: Database,
      title: 'Persistence',
      description: 'Local storage integration for data persistence.',
    },
  ]

  const techStack = [
    { name: 'React', description: 'Frontend library for building user interfaces' },
    { name: 'Vite', description: 'Fast build tool and development server' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'Three.js', description: '3D library for web graphics' },
    { name: 'Framer Motion', description: 'Animation library for React' },
    { name: 'GitHub Actions', description: 'CI/CD automation platform' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            About This Project
          </h1>
          <p className="text-gray-300 text-lg">
            A modern DevOps demonstration with beautiful UI and 3D visualizations
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-4">
                This project showcases a complete DevOps workflow with a React-based frontend, 
                automated CI/CD pipeline, and modern development practices.
              </p>
              <p className="text-gray-300">
                It demonstrates how modern web technologies can create engaging, interactive 
                experiences while maintaining robust development practices.
              </p>
            </div>
            <div>
              <p className="text-gray-300 mb-4">
                The application includes a fully functional task manager, 3D pipeline visualization, 
                and demonstrates best practices for testing, deployment, and monitoring.
              </p>
              <p className="text-gray-300">
                Every code change triggers automated tests and deployment, ensuring quality 
                and reliability throughout the development process.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20"
              >
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About