import { Code, Heart, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-800/80 backdrop-blur-lg border-t border-purple-500/20 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              DevOps UI
            </span>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for DevOps</span>
            </div>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} DevOps UI Demo. Built with React, Vite, and Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer