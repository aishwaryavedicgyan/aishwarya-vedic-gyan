import React from 'react';

export function KundliChart() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Kundli Chart</h2>
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        {/* Sample Kundli houses */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div 
            key={index} 
            className="aspect-square border-2 border-gray-300 rounded-lg p-4 flex items-center justify-center"
          >
            <span className="text-lg font-medium text-gray-600">House {index + 1}</span>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-gray-600">
        This is a sample representation of a Kundli chart. Your personal Kundli will contain detailed planetary positions and their interpretations.
      </p>
    </div>
  );
}