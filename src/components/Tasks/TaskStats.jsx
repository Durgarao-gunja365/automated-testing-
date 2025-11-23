import { motion } from 'framer-motion'
import { CheckCircle, Circle, Trash2, TrendingUp } from 'lucide-react'

const TaskStats = ({ tasks, clearCompleted }) => {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const pendingTasks = totalTasks - completedTasks
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
    >
      {/* Total Tasks */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Total Tasks</p>
            <p className="text-3xl font-bold text-white">{totalTasks}</p>
          </div>
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
            <Circle className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </motion.div>

      {/* Completed Tasks */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Completed</p>
            <p className="text-3xl font-bold text-white">{completedTasks}</p>
          </div>
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400" />
          </div>
        </div>
      </motion.div>

      {/* Pending Tasks */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Pending</p>
            <p className="text-3xl font-bold text-white">{pendingTasks}</p>
          </div>
          <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-orange-400" />
          </div>
        </div>
      </motion.div>

      {/* Progress */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Progress</p>
            <p className="text-3xl font-bold text-white">{completionPercentage}%</p>
          </div>
          <button
            onClick={clearCompleted}
            disabled={completedTasks === 0}
            className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-500/30 transition-colors"
            title="Clear completed tasks"
          >
            <Trash2 className="w-6 h-6 text-purple-400" />
          </button>
        </div>
        <div className="mt-3 w-full bg-slate-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TaskStats