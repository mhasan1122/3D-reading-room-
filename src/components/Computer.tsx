import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export function Computer({ position = [0, 0, 0] }) {
  const screenRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (screenRef.current) {
      // Subtle screen glow effect
      const emission = 0.2 + Math.sin(state.clock.elapsedTime) * 0.05;
      (screenRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = emission;
    }
  });
  
  return (
    <group position={position}>
      {/* Monitor */}
      <group position={[0, 0.5, -0.3]}>
        {/* Screen */}
        <mesh ref={screenRef} position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[1.2, 0.8, 0.05]} />
          <meshStandardMaterial 
            color="#3a86ff" 
            emissive="#3a86ff"
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Screen content */}
        <group position={[0, 0.5, 0.03]}>
          {/* UI elements on screen */}
          <mesh position={[-0.4, 0.2, 0]} castShadow>
            <planeGeometry args={[0.3, 0.3]} />
            <meshBasicMaterial color="#1d3557" />
          </mesh>
          
          <mesh position={[0.2, 0.2, 0]} castShadow>
            <planeGeometry args={[0.6, 0.3]} />
            <meshBasicMaterial color="#457b9d" />
          </mesh>
          
          <mesh position={[-0.3, -0.15, 0]} castShadow>
            <planeGeometry args={[0.5, 0.2]} />
            <meshBasicMaterial color="#a8dadc" />
          </mesh>
          
          <mesh position={[0.3, -0.15, 0]} castShadow>
            <planeGeometry args={[0.4, 0.2]} />
            <meshBasicMaterial color="#457b9d" />
          </mesh>
          
          <Text
            position={[0.3, 0.2, 0.01]}
            fontSize={0.08}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Aa
          </Text>
        </group>
        
        {/* Monitor frame */}
        <mesh position={[0, 0.5, -0.01]} castShadow>
          <boxGeometry args={[1.3, 0.9, 0.05]} />
          <meshStandardMaterial color="#1d3557" />
        </mesh>
        
        {/* Monitor stand */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.2, 0.4, 0.1]} />
          <meshStandardMaterial color="#1d3557" />
        </mesh>
      </group>
      
      {/* Keyboard */}
      <mesh position={[0, 0.05, 0.2]} castShadow>
        <boxGeometry args={[0.8, 0.05, 0.3]} />
        <meshStandardMaterial color="#1d3557" />
      </mesh>
      
      {/* Mouse */}
      <mesh position={[0.5, 0.03, 0.2]} castShadow>
        <capsuleGeometry args={[0.03, 0.08, 4, 8]} />
        <meshStandardMaterial color="#1d3557" />
      </mesh>
    </group>
  );
}