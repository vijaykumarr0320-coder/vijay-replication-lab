import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";

// Floating code particles
const CodeParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorPalette = [
      new THREE.Color(0x00f5ff), // cyan
      new THREE.Color(0xb537ff), // purple
      new THREE.Color(0xff00ff), // magenta
      new THREE.Color(0x00ffcc), // teal
    ];
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Holographic wireframe sphere
const HolographicSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color="#00f5ff"
          wireframe
          transparent
          opacity={0.4}
          emissive="#00f5ff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

// Glowing data cubes
const DataCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    meshRef.current.position.x = position[0] + Math.cos(state.clock.getElapsedTime() * 0.4) * 0.5;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color="#b537ff"
          wireframe
          transparent
          opacity={0.3}
          emissive="#b537ff"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
};

// Animated torus with gradient effect
const NeonTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.25;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.15;
    meshRef.current.position.z = position[2] + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.4;
  });

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.7, 0.2, 16, 100]} />
        <meshStandardMaterial
          color="#ff00ff"
          wireframe
          transparent
          opacity={0.35}
          emissive="#ff00ff"
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
};

// Glowing grid plane
const GridPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.MeshBasicMaterial;
    material.opacity = 0.1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial
        color="#00f5ff"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#00f5ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#b537ff" />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#ff00ff" />
      
      {/* Enhanced starfield */}
      <Stars 
        radius={50} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0.5} 
        fade 
        speed={1.5} 
      />
      
      {/* Code particles */}
      <CodeParticles />
      
      {/* 3D Elements */}
      <HolographicSphere position={[-3, 1, -5]} />
      <HolographicSphere position={[3, -1, -6]} />
      
      <DataCube position={[-2, -1, -4]} />
      <DataCube position={[2, 2, -5]} />
      
      <NeonTorus position={[0, 0, -4]} />
      <NeonTorus position={[-4, 2, -7]} />
      
      {/* Grid plane */}
      <GridPlane />
    </>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
      
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 15, 0.5) 100%)',
        }}
      />
    </div>
  );
};

export default Background3D;
