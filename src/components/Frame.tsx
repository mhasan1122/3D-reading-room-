import React from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface FrameProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  image?: string;
}

export function Frame({ position, rotation = [0, 0, 0], image }: FrameProps) {
  const defaultTexture = useTexture({
    map: image || 'https://images.unsplash.com/photo-1579783483458-83d02161294e?auto=format&fit=crop&q=80&w=500',
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh castShadow>
        <boxGeometry args={[0.8, 1, 0.05]} />
        <meshStandardMaterial color="#e06377" />
      </mesh>
      
      {/* Picture */}
      <mesh position={[0, 0, 0.03]} castShadow>
        <planeGeometry args={[0.7, 0.9]} />
        <meshStandardMaterial {...defaultTexture} />
      </mesh>
    </group>
  );
}