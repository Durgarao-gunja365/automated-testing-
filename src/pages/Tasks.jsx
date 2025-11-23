import { motion } from 'framer-motion'
import { useTasks } from '../hooks/useTasks'
import TaskList from '../components/Tasks/TaskList'
import TaskStats from '../components/Tasks/TaskStats'
import FloatingElements from '../components/UI/FloatingElements'
import { useState } from 'react'

const Tasks = () => {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted, updateTask } = useTasks()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTask(inputValue)
      setInputValue('')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-8 px-4 relative z-10"
    >
      <FloatingElements />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Smart Task Manager
          </h1>
          <p className="text-gray-300 text-lg">
            Manage your tasks with style and efficiency
          </p>
        </motion.div>

        {/* Stats Cards */}
        <TaskStats tasks={tasks} clearCompleted={clearCompleted} />

        {/* Task Input */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-purple-500/20 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What needs to be done?"
                className="w-full px-6 py-4 bg-slate-700/50 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-lg"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            >
              Add Task
            </motion.button>
          </form>
        </motion.div>

        {/* Task List */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <TaskList 
            tasks={tasks} 
            onToggleTask={toggleTask} 
            onDeleteTask={deleteTask}
            onUpdateTask={updateTask}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Tasks