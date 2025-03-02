import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { BookData, Book3D } from '../types';

interface BookProps {
  book: BookData;
  position: [number, number, number];
  rotation?: [number, number, number];
  onClick?: (book: Book3D) => void;
}

export function Book({ book, position, rotation = [0, 0, 0], onClick }: BookProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (meshRef.current && hovered) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  const handleClick = () => {
    if (onClick) {
      onClick({
        ...book,
        position
      });
    }
  };
  
  return (
    <group
      position={position}
      rotation={rotation}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[0.5, 1.2, 0.2]} />
        <meshStandardMaterial 
          color={book.color} 
          roughness={0.7}
          emissive={hovered ? book.color : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>
      
      {/* Book spine text */}
      <Text
        position={[0, 0, 0.11]}
        rotation={[0, 0, Math.PI / 2]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1}
      >
        {book.title}
      </Text>
    </group>
  );
}