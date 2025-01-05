import App from '../App';
import React from 'react';
import ReactDOM from 'react-dom';

import { KundliChart } from '../components/kundli/KundliChart';
import { KundliBlog } from '../components/kundli/KundliBlog';
import { VideoSection } from '../components/kundli/VideoSection';
import { ArrowRight } from 'lucide-react';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
export function KundliPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Life's Path Through Vedic Astrology
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get detailed insights about your life, career, and relationships
          </p>
          <button className="inline-flex items-center px-8 py-4 text-xl font-semibold rounded-full bg-[#FFD700] hover:bg-[#FFC700] text-purple-900 transition-colors duration-200">
            Create Your Kundli Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </button>
        </div>

        {/* Sample Kundli Chart */}
        <KundliChart />

        {/* Blog Section */}
        <KundliBlog />

        {/* Video Section */}
        <VideoSection />
      </div>
    </div>
  );
}