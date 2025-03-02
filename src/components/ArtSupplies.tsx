import React from 'react';
import * as THREE from 'three';

export function ArtSupplies({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Pencil holder */}
      <mesh position={[0, 0.15, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.08, 0.3, 16]} />
        <meshStandardMaterial color="#e06377" />
      </mesh>
      
      {/* Pencils/Brushes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const r = 0.05;
        const x = Math.sin(angle) * r;
        const z = Math.cos(angle) * r;
        const height = 0.4 + Math.random() * 0.1;
        const colors = ['#ffbe0b', '#fb8500', '#8338ec', '#3a86ff', '#06d6a0', '#e06377'];
        
        return (
          <mesh key={i} position={[x, 0.3 + height/2, z]} castShadow>
            <cylinderGeometry args={[0.01, 0.01, height, 8]} />
            <meshStandardMaterial color={colors[i]} />
          </mesh>
        );
      })}
      
      {/* Color palette */}
      <mesh position={[0.2, 0.05, 0.1]} rotation={[0, Math.PI / 6, 0]} castShadow>
        <boxGeometry args={[0.3, 0.03, 0.2]} />
        <meshStandardMaterial color="#f8edeb" />
      </mesh>
      
      {/* Paint blobs on palette */}
      {[...Array(5)].map((_, i) => {
        const x = -0.1 + i * 0.05;
        const z = 0.05;
        const colors = ['#ffbe0b', '#fb8500', '#8338ec', '#3a86ff', '#06d6a0'];
        
        return (
          <mesh key={i} position={[0.2 + x, 0.07, 0.1 + z]} castShadow>
            <sphereGeometry args={[0.02, 8, 8, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
            <meshStandardMaterial color={colors[i]} />
          </mesh>
        );
      })}
    </group>
  );
}