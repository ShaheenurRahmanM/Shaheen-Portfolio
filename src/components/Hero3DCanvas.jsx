import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const CyberCore = ({ isMobile }) => {
  const meshRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.4) * 0.3;
      meshRef.current.rotation.y = time * 0.5;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 2 + Math.sin(time * 0.5) * 0.2;
      ring1Ref.current.rotation.z = time * 0.6;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = Math.PI / 3 + Math.cos(time * 0.5) * 0.2;
      ring2Ref.current.rotation.x = time * 0.4;
    }
    if (groupRef.current) {
      // Smooth mouse tracking parallax
      const { x, y } = state.pointer;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.4, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.4, 0.05);
    }
  });

  // Scaled down to be more compact, elegant, and non-intrusive
  const scale = isMobile ? 0.7 : 0.95;

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.9}>
        {/* Central Smooth Morphing Orb */}
        <mesh ref={meshRef} scale={scale}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#00c4ff"
            emissive="#0044cc"
            emissiveIntensity={0.5}
            roughness={0.15}
            metalness={0.85}
            distort={0.38}
            speed={2}
          />
        </mesh>

        {/* Orbit Ring 1 */}
        <mesh ref={ring1Ref} scale={scale * 1.55}>
          <torusGeometry args={[1.2, 0.015, 16, 100]} />
          <meshBasicMaterial color="#00c4ff" transparent opacity={0.7} />
        </mesh>

        {/* Orbit Ring 2 */}
        <mesh ref={ring2Ref} scale={scale * 1.85}>
          <torusGeometry args={[1.3, 0.012, 16, 100]} />
          <meshBasicMaterial color="#7000ff" transparent opacity={0.55} />
        </mesh>
      </Float>

      {/* Primary Full-Page Surrounding Cyber Particles */}
      <Sparkles
        count={isMobile ? 70 : 160}
        scale={[16, 9, 9]}
        size={isMobile ? 2 : 3.5}
        speed={0.4}
        color="#00c4ff"
      />

      {/* Secondary Ambient Full-Page Particles */}
      <Sparkles
        count={isMobile ? 40 : 100}
        scale={[20, 11, 11]}
        size={isMobile ? 1.5 : 2.5}
        speed={0.2}
        color="#00ffd0"
      />
    </group>
  );
};

const Hero3DCanvas = ({ isMobile }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#00c4ff" />
      <pointLight position={[-5, -5, -5]} intensity={2} color="#7000ff" />
      <pointLight position={[0, 3, 2]} intensity={1} color="#00ffd0" />

      <CyberCore isMobile={isMobile} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
};

export default Hero3DCanvas;
