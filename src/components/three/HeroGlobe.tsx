"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  OrbitControls,
  Stars,
} from "@react-three/drei";

export default function HeroGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.3} color="#a877ff" />
      <pointLight position={[-4, -2, -3]} intensity={2.4} color="#34E0F0" />

      <Stars radius={50} depth={30} count={1400} factor={3} fade speed={1} />

      <Float speed={2} rotationIntensity={0.7} floatIntensity={0.9}>
        {/* Solid distorted AI sphere */}
        <Icosahedron args={[1.45, 8]}>
          <MeshDistortMaterial
            color="#6200EA"
            emissive="#43009e"
            emissiveIntensity={0.45}
            roughness={0.18}
            metalness={0.65}
            distort={0.38}
            speed={2.2}
          />
        </Icosahedron>
        {/* Wireframe shell */}
        <Icosahedron args={[1.62, 3]}>
          <meshBasicMaterial color="#8A45FF" wireframe transparent opacity={0.16} />
        </Icosahedron>
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.3}
      />
    </Canvas>
  );
}
