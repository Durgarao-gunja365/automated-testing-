import '@testing-library/jest-dom'

// Minimal mocks to get tests running
global.URL.createObjectURL = vi.fn()
global.URL.revokeObjectURL = vi.fn()

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
global.localStorage = localStorageMock

// Simple mock for Three.js components
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => children,
  useFrame: vi.fn(),
  useThree: vi.fn(),
}))

vi.mock('@react-three/drei', () => ({
  OrbitControls: () => null,
  Text: () => null,
  Float: () => null,
}))