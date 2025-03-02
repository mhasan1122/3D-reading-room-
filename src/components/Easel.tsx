import React, { useMemo } from 'react';
import * as THREE from 'three';

export function Easel({ position = [0, 0, 0] }) {
  // Create a gradient texture programmatically
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    if (context) {
      const gradient = context.createLinearGradient(0, 0, 0, 256);
      gradient.addColorStop(0, '#06d6a0');
      gradient.addColorStop(1, '#118ab2');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, 256, 256);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group position={position}>
      {/* Easel frame */}
      <mesh position={[0, 1, 0]} rotation={[0, 0, -Math.PI * 0.05]} castShadow>
        <boxGeometry args={[0.05, 2, 0.05]} />
        <meshStandardMaterial color="#e06377" />
      </mesh>
      
      <mesh position={[-0.25, 0.5, 0]} rotation={[0, 0, Math.PI * 0.1]} castShadow>
        <boxGeometry args={[0.05, 1.5, 0.05]} />
        <meshStandardMaterial color="#e06377" />
      </mesh>
      
      <mesh position={[0.25, 0.5, 0]} rotation={[0, 0, -Math.PI * 0.1]} castShadow>
        <boxGeometry args={[0.05, 1.5, 0.05]} />
        <meshStandardMaterial color="#e06377" />
      </mesh>
      
      {/* Canvas support */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[0.6, 0.05, 0.05]} />
        <meshStandardMaterial color="#e06377" />
      </mesh>
      
      {/* Canvas */}
      <mesh position={[0, 1.2, 0.03]} castShadow>
        <boxGeometry args={[0.5, 0.7, 0.02]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Painting on canvas */}
      <mesh position={[0, 1.2, 0.04]} castShadow>
        <planeGeometry args={[0.48, 0.68]} />
        <meshStandardMaterial map={gradientTexture} />
      </mesh>
      
      {/* Mountain shape on canvas */}
      <mesh position={[0, 1.15, 0.05]} castShadow>
        <cylinderGeometry args={[0.15, 0.25, 0.3, 3, 1, false, Math.PI, Math.PI]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}