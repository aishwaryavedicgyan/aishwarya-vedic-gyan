import React from 'react';

type Video = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
};

export function VideoSection() {
  // In a real app, this would come from an API/database
  const videos: Video[] = [
    {
      id: '1',
      title: 'Introduction to Kundli Reading',
      description: 'Learn the basics of Vedic astrology and Kundli interpretation',
      thumbnailUrl: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80',
    },
    {
      id: '2',
      title: 'Understanding Planetary Positions',
      description: 'Deep dive into how planets influence your life path',
      thumbnailUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      title: 'Yogas in Vedic Astrology',
      description: 'Explore powerful planetary combinations',
      thumbnailUrl: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={video.thumbnailUrl} 
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}