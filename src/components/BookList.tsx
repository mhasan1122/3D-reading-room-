import React from 'react';
import { BookData } from '../types';
import { BookIcon } from 'lucide-react';

interface BookListProps {
  books: BookData[];
}

export function BookList({ books }: BookListProps) {
  return (
    <div className="bg-white bg-opacity-80 p-4 border-t border-gray-200">
      <h2 className="text-xl font-bold mb-3">Available Books</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {books.map(book => (
          <div 
            key={book.id} 
            className="p-3 rounded-lg shadow-sm flex flex-col items-center text-center"
            style={{ backgroundColor: `${book.color}20` }}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-2 rounded-full" style={{ backgroundColor: book.color }}>
              <BookIcon className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-sm">{book.title}</h3>
            <p className="text-xs text-gray-600">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}