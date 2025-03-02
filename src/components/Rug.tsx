import React from 'react';
import * as THREE from 'three';

export function Rug({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[1.2, 32]} />
        <meshStandardMaterial color="#ffbe0b" />
      </mesh>
      
      {/* Rug pattern */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]} receiveShadow>
        <ringGeometry args={[0.8, 1.1, 32]} />
        <meshStandardMaterial color="#fb8500" />
      </mesh>
    </group>
  );
}