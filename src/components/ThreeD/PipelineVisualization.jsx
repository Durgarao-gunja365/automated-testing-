import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text, Float } from '@react-three/drei'
import { motion } from 'framer-motion'

const PipelineVisualization = () => {
  const stages = [
    { name: 'Code', position: [-8, 0, 0], color: '#ef4444' },
    { name: 'Build', position: [-4, 0, 0], color: '#f59e0b' },
    { name: 'Test', position: [0, 0, 0], color: '#10b981' },
    { name: 'Deploy', position: [4, 0, 0], color: '#3b82f6' },
    { name: 'Monitor', position: [8, 0, 0], color: '#8b5cf6' },
  ]

  return (
    <div className="h-96 w-full bg-slate-900/50 rounded-2xl border border-purple-500/20">
      <Canvas camera={{ position: [0, 5, 12] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {stages.map((stage, index) => (
          <Float key={stage.name} speed={2} rotationIntensity={1} floatIntensity={2}>
            <group position={stage.position}>
              <mesh>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial color={stage.color} />
              </mesh>
              <Text
                position={[0, -2, 0]}
                color="white"
                fontSize={0.5}
                anchorX="center"
                anchorY="middle"
              >
                {stage.name}
              </Text>
            </group>
          </Float>
        ))}

        {/* Connecting lines */}
        {stages.slice(0, -1).map((stage, index) => (
          <group key={index}>
            <mesh position={[(stage.position[0] + stages[index + 1].position[0]) / 2, 0, 0]}>
              <boxGeometry args={[2.5, 0.1, 0.1]} />
              <meshStandardMaterial color="#64748b" />
            </mesh>
          </group>
        ))}

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}

export default PipelineVisualization