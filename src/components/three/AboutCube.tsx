import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, OrbitControls, Environment, Text, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function RotatingCube() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      
      {/* Faces could have icons, but for now we use colored glass effect */}
      <mesh position={[0, 0, 1.01]}>
        <planeGeometry args={[1.8, 1.8]} />
        <meshBasicMaterial color="#00ffd5" transparent opacity={0.6} />
      </mesh>
      <mesh position={[0, 0, -1.01]}>
        <planeGeometry args={[1.8, 1.8]} />
        <meshBasicMaterial color="#0066ff" transparent opacity={0.6} />
      </mesh>
      <Text position={[0, 0, 1.05]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        FLUTTER
      </Text>
      <Text position={[0, 0, -1.05]} fontSize={0.2} color="white" anchorX="center" anchorY="middle" rotation={[0, Math.PI, 0]}>
        DART
      </Text>
    </mesh>
  );
}

export default function AboutCube() {
  return (
    <div className="w-full h-[300px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#00ffd5" />
        <RotatingCube />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
