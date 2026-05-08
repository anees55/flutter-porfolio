import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Float, 
  OrbitControls, 
  PerspectiveCamera, 
  MeshDistortMaterial, 
  MeshWobbleMaterial, 
  Sphere,
  Points,
  PointMaterial,
  Environment
} from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!);

  const particles = useRef(new Float32Array(count * 3));
  for (let i = 0; i < count; i++) {
    particles.current[i * 3] = (Math.random() - 0.5) * 10;
    particles.current[i * 3 + 1] = (Math.random() - 0.5) * 10;
    particles.current[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <Points ref={points} positions={particles.current} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffd5"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function Smartphone() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = Math.sin(t) * 0.1;
    mesh.current.rotation.y = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} rotation={[0, 0, 0]}>
        {/* Phone Body */}
        <boxGeometry args={[1.5, 3, 0.1]} />
        <MeshDistortMaterial
          color="#1a1a1a"
          speed={2}
          distort={0.1}
          radius={1}
          metalness={0.9}
          roughness={0.1}
        />
        
        {/* Screen Glow */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[1.4, 2.9]} />
          <MeshWobbleMaterial
            color="#0066ff"
            speed={1}
            factor={0.1}
            emissive="#0066ff"
            emissiveIntensity={2}
          />
        </mesh>
      </mesh>
    </Float>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float position={[2, 1, -2]} speed={3}>
        <Sphere args={[0.3, 32, 32]}>
          <MeshDistortMaterial color="#ff00ff" speed={2} distort={0.4} />
        </Sphere>
      </Float>
      <Float position={[-2, -1, -1]} speed={4}>
        <mesh>
          <torusGeometry args={[0.5, 0.1, 16, 100]} />
          <MeshWobbleMaterial color="#00ffd5" speed={3} factor={0.6} />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#0066ff" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ff00ff" />
        
        <Particles />
        <Smartphone />
        <FloatingShapes />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
