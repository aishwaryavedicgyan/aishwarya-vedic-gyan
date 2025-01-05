import React from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">CompanyName</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}