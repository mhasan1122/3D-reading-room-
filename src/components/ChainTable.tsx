import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function ChainTable({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const tableRef = useRef<THREE.Group>(null);
  
  // Create a simple table with chains
  return (
    <group ref={tableRef} position={position} rotation={rotation}>
      {/* Table top */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
        <meshStandardMaterial color="#8b4513" roughness={0.7} />
      </mesh>
      
      {/* Table center support */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
        <meshStandardMaterial color="#5e3a1e" roughness={0.8} />
      </mesh>
      
      {/* Table base */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 32]} />
        <meshStandardMaterial color="#8b4513" roughness={0.7} />
      </mesh>
      
      {/* Chains hanging from the table */}
      <Chain position={[1.2, 0.9, 0]} rotation={[0, 0, Math.PI / 6]} />
      <Chain position={[-0.8, 0.9, 0.8]} rotation={[0, Math.PI / 3, Math.PI / 8]} />
      <Chain position={[-0.4, 0.9, -1]} rotation={[0, -Math.PI / 4, Math.PI / 7]} />
      
      {/* Books on the table */}
      <Book position={[0.5, 1.1, 0.3]} rotation={[0, Math.PI / 6, 0]} color="#8338ec" />
      <Book position={[-0.3, 1.1, -0.4]} rotation={[0, -Math.PI / 8, 0]} color="#e76f51" />
    </group>
  );
}

function Chain({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const chainRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (chainRef.current) {
      // Add subtle swinging motion
      chainRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05 + rotation[2];
    }
  });
  
  return (
    <group ref={chainRef} position={position} rotation={rotation}>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[0, -i * 0.12, 0]} castShadow>
          <torusGeometry args={[0.04, 0.015, 16, 16]} />
          <meshStandardMaterial color="#555" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function Book({ position = [0, 0, 0], rotation = [0, 0, 0], color = "#264653" }) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <boxGeometry args={[0.5, 0.08, 0.35]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}