import React from 'react';
import { Sun, Moon, Calendar } from 'lucide-react';
import { PanchangCard } from './PanchangCard';

export function Panchang() {
  // In a real app, this would come from an API
  const panchangData = {
    tithi: 'Shukla Paksha Dwitiya',
    nakshatra: 'Rohini',
    yoga: 'Vishkambha',
    karana: 'Bava',
    sunrise: '6:32 AM',
    sunset: '6:47 PM',
    moonrise: '8:15 AM',
    moonset: '9:30 PM',
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2">
            <Sun className="h-8 w-8 text-yellow-500" />
            <Moon className="h-8 w-8 text-blue-500" />
            <Calendar className="h-8 w-8 text-indigo-500" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Today's Panchang
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Daily Hindu almanac with important astrological details
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <PanchangCard title="Tithi" value={panchangData.tithi} />
          <PanchangCard title="Nakshatra" value={panchangData.nakshatra} />
          <PanchangCard title="Yoga" value={panchangData.yoga} />
          <PanchangCard title="Karana" value={panchangData.karana} />
          <PanchangCard title="Sunrise" value={panchangData.sunrise} />
          <PanchangCard title="Sunset" value={panchangData.sunset} />
          <PanchangCard title="Moonrise" value={panchangData.moonrise} />
          <PanchangCard title="Moonset" value={panchangData.moonset} />
        </div>
      </div>
    </div>
  );
}