import { motion, AnimatePresence } from 'framer-motion'
import { Check, Trash2, Edit3, Save, X } from 'lucide-react'
import { useState } from 'react'

const TaskList = ({ tasks, onToggleTask, onDeleteTask, onUpdateTask }) => {
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const startEditing = (task) => {
    setEditingId(task.id)
    setEditText(task.text)
  }

  const saveEdit = (id) => {
    if (editText.trim()) {
      onUpdateTask(id, editText)
    }
    setEditingId(null)
    setEditText('')
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-between p-4 rounded-2xl border backdrop-blur-lg ${
              task.completed
                ? 'bg-green-500/10 border-green-500/20'
                : 'bg-slate-800/50 border-purple-500/20'
            }`}
          >
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => onToggleTask(task.id)}
                className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  task.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-400 hover:border-green-500'
                }`}
              >
                {task.completed && <Check className="w-4 h-4 text-white" />}
              </button>
              
              {editingId === task.id ? (
                <div className="flex items-center gap-2 flex-1">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit(task.id)}
                    className="flex-1 px-3 py-1 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(task.id)}
                    className="p-1 text-green-500 hover:text-green-400"
                  >
                    <Save className="w-4 h-4" />
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="p-1 text-red-500 hover:text-red-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <span
                  className={`text-lg flex-1 ${
                    task.completed ? 'line-through text-gray-400' : 'text-white'
                  }`}
                >
                  {task.text}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              {editingId !== task.id && (
                <button
                  onClick={() => startEditing(task)}
                  className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => onDeleteTask(task.id)}
                className="p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {tasks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-400"
        >
          <div className="text-6xl mb-4">📝</div>
          <p className="text-xl">No tasks yet!</p>
          <p className="text-sm mt-2">Add your first task above to get started.</p>
        </motion.div>
      )}
    </div>
  )
}

export default TaskList