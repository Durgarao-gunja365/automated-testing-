import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const RotatingCube = () => {
  const cubeRef = useRef()

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.5
      cubeRef.current.rotation.y += delta * 0.3
    }
  })

  const faces = [
    { text: 'React', color: '#61dafb', position: [0, 0, 1.1], rotation: [0, 0, 0] },
    { text: 'Vite', color: '#ffd028', position: [0, 0, -1.1], rotation: [0, Math.PI, 0] },
    { text: 'Tailwind', color: '#38bdf8', position: [1.1, 0, 0], rotation: [0, Math.PI / 2, 0] },
    { text: '3D', color: '#c084fc', position: [-1.1, 0, 0], rotation: [0, -Math.PI / 2, 0] },
    { text: 'CI/CD', color: '#10b981', position: [0, 1.1, 0], rotation: [Math.PI / 2, 0, 0] },
    { text: 'DevOps', color: '#f472b6', position: [0, -1.1, 0], rotation: [-Math.PI / 2, 0, 0] },
  ]

  return (
    <group ref={cubeRef}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#1e293b" transparent opacity={0.8} />
      </mesh>
      
      {faces.map((face, index) => (
        <group key={index} position={face.position} rotation={face.rotation}>
          <Text
            color={face.color}
            fontSize={0.4}
            anchorX="center"
            anchorY="middle"
          >
            {face.text}
          </Text>
        </group>
      ))}
    </group>
  )
}

export default RotatingCube