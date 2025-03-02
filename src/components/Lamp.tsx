import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Lamp({ position = [0, 0, 0] }) {
  const lightRef = useRef<THREE.SpotLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      // Subtle light intensity variation
      lightRef.current.intensity = 1 + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });
  
  return (
    <group position={position}>
      {/* Lamp shade */}
      <mesh position={[0, 0, 0]} castShadow>
        <coneGeometry args={[0.5, 0.8, 32, 1, true]} />
        <meshStandardMaterial color="#f8edeb" side={THREE.DoubleSide} />
      </mesh>
      
      {/* Lamp base */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
        <meshStandardMaterial color="#555" metalness={0.8} />
      </mesh>
      
      {/* Lamp cord */}
      <mesh position={[0, 2, 0]} castShadow>
        <cylinderGeometry args={[0.01, 0.01, 4, 8]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Light source */}
      <spotLight
        ref={lightRef}
        position={[0, -0.2, 0]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </group>
  );
}