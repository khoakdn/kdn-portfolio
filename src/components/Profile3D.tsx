import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Profile3D(){
  return (
    <div className="h-64 w-full rounded-2xl border bg-white">
      <Canvas camera={{ position: [2.5, 2, 2.5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <mesh>
          <torusKnotGeometry args={[1.1, 0.35, 220, 32]} />
          <meshStandardMaterial metalness={0.6} roughness={0.2} />
        </mesh>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  )
}
