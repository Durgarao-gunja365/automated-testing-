// Mock for @react-three/fiber
import React from 'react'

export const Canvas = ({ children, ...props }) => {
  return React.createElement('div', { 
    'data-testid': 'canvas-mock',
    ...props 
  }, children)
}

export const useFrame = () => {}
export const useThree = () => ({
  camera: {},
  scene: {},
  gl: {},
  size: { width: 100, height: 100 },
  viewport: { width: 100, height: 100 },
  get: () => null,
})

export default {
  Canvas,
  useFrame,
  useThree,
}