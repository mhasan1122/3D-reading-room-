import React from 'react';
import { Book } from './Book';
import { BookData, Book3D } from '../types';

interface BookShelfProps {
  position: [number, number, number];
  books: BookData[];
  setSelectedBook: (book: Book3D | null) => void;
}

export function BookShelf({ position, books, setSelectedBook }: BookShelfProps) {
  return (
    <group position={position}>
      {/* Shelf structure */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 3, 0.5]} />
        <meshStandardMaterial color="#5e3a1e" roughness={0.8} />
      </mesh>
      
      {/* Shelves */}
      {[0.5, 1.5, 2.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0.1]} castShadow receiveShadow>
          <boxGeometry args={[2.8, 0.1, 0.4]} />
          <meshStandardMaterial color="#8b4513" roughness={0.7} />
        </mesh>
      ))}
      
      {/* Books */}
      {books.map((book, i) => {
        const shelfY = 0.6 + Math.floor(i / 2) * 1;
        const offsetX = (i % 2) * 0.6 - 0.3;
        
        return (
          <Book 
            key={book.id}
            book={book}
            position={[offsetX, shelfY, 0.2]}
            rotation={[0, 0, 0]}
            onClick={(book) => setSelectedBook(book)}
          />
        );
      })}
    </group>
  );
}