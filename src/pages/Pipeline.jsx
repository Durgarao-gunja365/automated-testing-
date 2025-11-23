import { motion } from 'framer-motion'
import PipelineVisualization from '../components/ThreeD/PipelineVisualization'

const Pipeline = () => {
  const pipelineStages = [
    {
      stage: 'Code',
      description: 'Developers push code to GitHub repository',
      icon: '💻',
      color: 'from-red-500 to-pink-500'
    },
    {
      stage: 'Build',
      description: 'Vite builds the React application',
      icon: '🔨',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      stage: 'Test',
      description: 'Automated tests run with Vitest',
      icon: '🧪',
      color: 'from-green-500 to-emerald-500'
    },
    {
      stage: 'Deploy',
      description: 'Application deployed to GitHub Pages',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      stage: 'Monitor',
      description: 'Monitor application performance',
      icon: '📊',
      color: 'from-purple-500 to-indigo-500'
    }
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
            3D CI/CD Pipeline
          </h1>
          <p className="text-gray-300 text-lg">
            Interactive 3D visualization of our automated DevOps pipeline
          </p>
        </motion.div>

        {/* 3D Pipeline Visualization */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <PipelineVisualization />
        </motion.div>

        {/* Pipeline Stages Details */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pipelineStages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${stage.color} p-0.5 rounded-2xl`}
            >
              <div className="bg-slate-900 rounded-2xl p-6 h-full backdrop-blur-lg">
                <div className="text-3xl mb-4">{stage.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{stage.stage}</h3>
                <p className="text-gray-300">{stage.description}</p>
                
                {/* Status indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Active</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Pipeline Stages</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Code - Commit and push changes to repository</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Build - Compile and build the application</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Test - Run automated test suites</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Deploy - Deploy to production environment</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Monitor - Monitor application performance</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
            <p className="text-gray-300 mb-4">
              Our CI/CD pipeline automatically runs on every code change. 
              The 3D visualization above shows the different stages of the process.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Automated testing with Vitest</li>
              <li>• Continuous deployment to GitHub Pages</li>
              <li>• Quality gates at each stage</li>
              <li>• Real-time monitoring and feedback</li>
              <li>• Rollback capabilities if tests fail</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Pipeline