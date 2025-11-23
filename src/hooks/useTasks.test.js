import { renderHook, act } from '@testing-library/react'
import { useTasks } from './useTasks'

describe('useTasks', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('adds a task', () => {
    const { result } = renderHook(() => useTasks())
    
    act(() => {
      result.current.addTask('Test task')
    })
    
    expect(result.current.tasks).toHaveLength(1)
    expect(result.current.tasks[0].text).toBe('Test task')
  })

  test('toggles a task', () => {
    const { result } = renderHook(() => useTasks())
    
    act(() => {
      result.current.addTask('Test task')
    })
    
    const taskId = result.current.tasks[0].id
    
    act(() => {
      result.current.toggleTask(taskId)
    })
    
    expect(result.current.tasks[0].completed).toBe(true)
  })

  test('deletes a task', () => {
    const { result } = renderHook(() => useTasks())
    
    act(() => {
      result.current.addTask('Test task')
    })
    
    const taskId = result.current.tasks[0].id
    
    act(() => {
      result.current.deleteTask(taskId)
    })
    
    expect(result.current.tasks).toHaveLength(0)
  })
})