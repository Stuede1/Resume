'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Float, Stars, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { useScroll } from 'framer-motion'

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null)
  const { mouse, viewport } = useThree()
  
  // Create a memoized array of points
  const [positions, colors] = useMemo(() => {
    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    const colorA = new THREE.Color('#3b82f6') // Blue
    const colorB = new THREE.Color('#6366f1') // Indigo
    const colorC = new THREE.Color('#0ea5e9') // Sky blue

    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const r = 15 + Math.random() * 10
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Mix colors
      const mixedColor = colorA.clone().lerp(
        Math.random() > 0.5 ? colorB : colorC,
        Math.random()
      )
      
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }
    
    return [positions, colors]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow rotation
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
      
      // Slight mouse interactivity
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, (mouse.x * viewport.width) / 20, 0.05)
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, (mouse.y * viewport.height) / 20, 0.05)
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  )
}

function FloatingShapes() {
  const meshRef1 = useRef<THREE.Mesh>(null)
  const meshRef2 = useRef<THREE.Mesh>(null)
  const meshRef3 = useRef<THREE.Mesh>(null)
  const meshRef4 = useRef<THREE.Mesh>(null)
  const meshRef5 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef1.current) {
      meshRef1.current.rotation.x = t * 0.2
      meshRef1.current.rotation.y = t * 0.3
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x = t * 0.1
      meshRef2.current.rotation.y = t * 0.2
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.x = t * 0.15
      meshRef3.current.rotation.y = t * 0.25
    }
    if (meshRef4.current) {
      meshRef4.current.rotation.x = t * 0.25
      meshRef4.current.rotation.y = t * 0.15
    }
    if (meshRef5.current) {
      meshRef5.current.rotation.x = t * 0.2
      meshRef5.current.rotation.y = t * 0.1
    }
  })

  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef1} position={[9, -2, -5]} scale={1.5}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.12} transparent />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={meshRef2} position={[-10, -6, -8]} scale={2}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#6366f1" wireframe opacity={0.1} transparent />
        </mesh>
      </Float>
      
      <Float speed={1} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef3} position={[8, -11, -10]} scale={2.5}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial color="#0ea5e9" wireframe opacity={0.08} transparent />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={meshRef4} position={[-9, -16, -12]} scale={2.2}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.12} transparent />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef5} position={[7, -21, -15]} scale={3}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#6366f1" wireframe opacity={0.1} transparent />
        </mesh>
      </Float>
    </>
  )
}

function CameraRig() {
  const { camera } = useThree()
  const { scrollYProgress } = useScroll()
  
  useFrame(() => {
    // Move camera down as user scrolls to give a parallax feeling through the 3D space
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      -scrollYProgress.get() * 15,
      0.05
    )
    
    // Slight rotation based on scroll
    camera.rotation.x = THREE.MathUtils.lerp(
      camera.rotation.x,
      scrollYProgress.get() * 0.2,
      0.05
    )
  })
  
  return null
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-white pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} dpr={[1, 2]}>
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <ParticleSwarm />
        <FloatingShapes />
        <Sparkles count={150} scale={20} size={1.5} speed={0.4} opacity={0.4} color="#6366f1" />
        
        <CameraRig />
      </Canvas>
    </div>
  )
}
