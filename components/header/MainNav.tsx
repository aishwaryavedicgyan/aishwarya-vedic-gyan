import { Link } from 'react-router-dom';

export function MainNav() {
  return (
    <div className="h-16 border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-1" />
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link 
              to="/" 
              className="text-3xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Aishwarya
              </span>
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Vedic
              </span>
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Gyan
              </span>
            </Link>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600 font-medium">
                Sign in
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}