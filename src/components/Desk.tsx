import React from 'react';
import * as THREE from 'three';

export function Desk({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Desk top */}
      <mesh position={[0, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.08, 1.5]} />
        <meshStandardMaterial color="#e06377" roughness={0.7} />
      </mesh>
      
      {/* Desk legs */}
      <mesh position={[-1.4, 0.4, -0.6]} castShadow>
        <boxGeometry args={[0.08, 0.8, 0.08]} />
        <meshStandardMaterial color="#c83349" roughness={0.8} />
      </mesh>
      
      <mesh position={[1.4, 0.4, -0.6]} castShadow>
        <boxGeometry args={[0.08, 0.8, 0.08]} />
        <meshStandardMaterial color="#c83349" roughness={0.8} />
      </mesh>
      
      <mesh position={[-1.4, 0.4, 0.6]} castShadow>
        <boxGeometry args={[0.08, 0.8, 0.08]} />
        <meshStandardMaterial color="#c83349" roughness={0.8} />
      </mesh>
      
      <mesh position={[1.4, 0.4, 0.6]} castShadow>
        <boxGeometry args={[0.08, 0.8, 0.08]} />
        <meshStandardMaterial color="#c83349" roughness={0.8} />
      </mesh>
      
      {/* Desk drawer */}
      <mesh position={[0.8, 0.6, 0]} castShadow>
        <boxGeometry args={[0.8, 0.3, 1.4]} />
        <meshStandardMaterial color="#e06377" roughness={0.7} />
      </mesh>
      
      {/* Drawer handle */}
      <mesh position={[0.8, 0.6, 0.4]} castShadow>
        <boxGeometry args={[0.1, 0.05, 0.3]} />
        <meshStandardMaterial color="#c83349" roughness={0.5} />
      </mesh>
    </group>
  );
}