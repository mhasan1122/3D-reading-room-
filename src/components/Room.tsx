import React from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function Room() {
  const wallTexture = useTexture({
    map: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000',
  });

  // Create a diorama-like room with rounded corners
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#f8a5b8" />
      </mesh>
      
      {/* Back wall - curved */}
      <mesh position={[0, 1.5, -2]} receiveShadow>
        <boxGeometry args={[6, 3, 0.1]} />
        <meshStandardMaterial color="#f8a5b8" />
      </mesh>
      
      {/* Left wall - curved */}
      <mesh position={[-3, 1.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[4, 3, 0.1]} />
        <meshStandardMaterial color="#f8a5b8" />
      </mesh>
      
      {/* Right wall - curved */}
      <mesh position={[3, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[4, 3, 0.1]} />
        <meshStandardMaterial color="#f8a5b8" />
      </mesh>
      
      {/* Corner curves */}
      <mesh position={[-2.5, 1.5, -1.5]} receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 3, 16, 1, false, Math.PI, Math.PI/2]} />
        <meshStandardMaterial color="#f8a5b8" />
      </mesh>
      
      <mesh position={[2.5, 1.5, -1.5]} receiveShadow>
        <cylinderGeometry args={[0.5, 0.5, 3, 16, 1, false, Math.PI*1.5, Math.PI/2]} />
        <meshStandardMaterial color="#f8a5b8" />
      </mesh>
      
      {/* Floor edge highlight */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
        <ringGeometry args={[2.9, 3, 32]} />
        <meshStandardMaterial color="#f591a7" />
      </mesh>
    </group>
  );
}