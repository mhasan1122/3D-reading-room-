import React from 'react';
import { Book3D } from '../types';
import { X, BookOpen } from 'lucide-react';

interface BookDetailProps {
  book: Book3D;
  onClose: () => void;
}

export function BookDetail({ book, onClose }: BookDetailProps) {
  return (
    <div className="absolute top-4 right-4 w-72 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 flex justify-between items-center" style={{ backgroundColor: book.color }}>
        <h2 className="text-white font-bold text-lg">Book Details</h2>
        <button 
          onClick={onClose}
          className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full mr-3" style={{ backgroundColor: book.color }}>
            <BookOpen className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </div>
        </div>
        
        <div className="text-sm text-gray-700">
          <p className="mb-2">
            <strong>Location:</strong> Shelf at position [{book.position[0].toFixed(1)}, {book.position[1].toFixed(1)}, {book.position[2].toFixed(1)}]
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        <button 
          className="mt-4 w-full py-2 rounded-md text-white font-medium"
          style={{ backgroundColor: book.color }}
        >
          Read Book
        </button>
      </div>
    </div>
  );
}