import { render, screen } from '@testing-library/react'
import TaskList from './TaskList'

const mockTasks = [
  { id: 1, text: 'Test task 1', completed: false },
  { id: 2, text: 'Test task 2', completed: true },
]

const mockHandlers = {
  onToggleTask: vi.fn(),
  onDeleteTask: vi.fn(),
  onUpdateTask: vi.fn(),
}

describe('TaskList', () => {
  test('renders tasks', () => {
    render(<TaskList tasks={mockTasks} {...mockHandlers} />)
    
    expect(screen.getByText('Test task 1')).toBeInTheDocument()
    expect(screen.getByText('Test task 2')).toBeInTheDocument()
  })

  test('shows empty state when no tasks', () => {
    render(<TaskList tasks={[]} {...mockHandlers} />)
    
    expect(screen.getByText('No tasks yet!')).toBeInTheDocument()
  })
})