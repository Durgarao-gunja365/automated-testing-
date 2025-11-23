// Mock for @react-three/drei
import React from 'react'

export const OrbitControls = (props) => 
  React.createElement('div', { 'data-testid': 'orbit-controls-mock', ...props })

export const Text = (props) => 
  React.createElement('div', { 'data-testid': 'text-mock', ...props }, props.children)

export const Float = ({ children, ...props }) => 
  React.createElement('div', { 'data-testid': 'float-mock', ...props }, children)

export default {
  OrbitControls,
  Text,
  Float,
}