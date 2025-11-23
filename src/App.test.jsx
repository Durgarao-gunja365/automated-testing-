import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Mock components that use Three.js
vi.mock('./components/ThreeD/AnimatedCube', () => ({
  default: () => <div>Mock Cube</div>
}))

vi.mock('./components/ThreeD/PipelineStages', () => ({
  default: () => <div>Mock Pipeline</div>
}))

test('renders without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  expect(screen.getByText(/Modern DevOps/i)).toBeInTheDocument()
})