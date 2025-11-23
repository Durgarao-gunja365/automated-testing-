import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Mock Three.js related components
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="canvas-mock">{children}</div>,
  useFrame: vi.fn(),
  useThree: vi.fn(() => ({})),
}))

vi.mock('@react-three/drei', () => ({
  OrbitControls: () => <div data-testid="orbit-controls-mock" />,
  Text: ({ children }) => <div data-testid="text-mock">{children}</div>,
  Float: ({ children }) => <div data-testid="float-mock">{children}</div>,
}))

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('App Navigation', () => {
  test('renders navigation links', () => {
    renderWithRouter(<App />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Task Manager')).toBeInTheDocument()
    expect(screen.getByText('3D Pipeline')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  test('navigates to task manager page', () => {
    renderWithRouter(<App />)
    
    const taskLink = screen.getByText('Task Manager')
    expect(taskLink).toBeInTheDocument()
  })

  test('renders without crashing', () => {
    renderWithRouter(<App />)
    expect(screen.getByText(/Modern DevOps/i)).toBeInTheDocument()
  })
})