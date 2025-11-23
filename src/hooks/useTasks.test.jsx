import { renderHook, act } from '@testing-library/react'
import { useTasks } from './useTasks'

describe('useTasks', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  test('adds a task', () => {
    const { result } = renderHook(() => useTasks())
    
    act(() => {
      result.current.addTask('Test task')
    })
    
    expect(result.current.tasks).toHaveLength(1)
    expect(result.current.tasks[0].text).toBe('Test task')
  })

  test('initializes with empty tasks', () => {
    const { result } = renderHook(() => useTasks())
    expect(result.current.tasks).toHaveLength(0)
  })
})