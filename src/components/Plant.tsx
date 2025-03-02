import React from 'react';
import * as THREE from 'three';

export function Plant({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Pot */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.2, 0.3, 16]} />
        <meshStandardMaterial color="#e06377" />
      </mesh>
      
      {/* Plant base */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <sphereGeometry args={[0.15, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#38b000" />
      </mesh>
      
      {/* Plant leaves */}
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const x = Math.sin(angle) * 0.1;
        const z = Math.cos(angle) * 0.1;
        const height = 0.3 + Math.random() * 0.2;
        
        return (
          <mesh key={i} position={[x, 0.15, z]} rotation={[0.2, angle, 0]} castShadow>
            <boxGeometry args={[0.05, height, 0.01]} />
            <meshStandardMaterial color="#38b000" />
          </mesh>
        );
      })}
      
      {/* Additional smaller leaves */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2 + 0.2;
        const x = Math.sin(angle) * 0.08;
        const z = Math.cos(angle) * 0.08;
        const height = 0.15 + Math.random() * 0.15;
        
        return (
          <mesh key={i + 5} position={[x, 0.15, z]} rotation={[0.3, angle, 0]} castShadow>
            <boxGeometry args={[0.03, height, 0.01]} />
            <meshStandardMaterial color="#70e000" />
          </mesh>
        );
      })}
    </group>
  );
}