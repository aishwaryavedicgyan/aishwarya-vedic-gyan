import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="animate-fade-in text-6xl md:text-7xl font-bold tracking-tight">
            Discover Your
            <span className="gradient-text block mt-2">
              Spiritual Journey
            </span>
          </h1>
          
          <p className="animate-slide-up mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the secrets of your life path with our advanced Vedic astrology tools. 
            Get personalized insights backed by ancient wisdom and modern technology.
          </p>

          <div className="animate-slide-up mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative overflow-hidden rounded-lg bg-black px-8 py-4 text-white">
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative flex items-center justify-center text-lg font-semibold">
                Get Free Kundli Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </button>
            <button className="relative overflow-hidden rounded-lg border-2 border-black px-8 py-4 text-lg font-semibold">
              <span className="relative z-10 text-black transition-colors duration-300 group-hover:text-white">
                Explore Features
              </span>
            </button>
          </div>

          <div className="animate-fade-in mt-16 grid grid-cols-3 gap-8 text-sm text-gray-600">
            {['100% Free Analysis', 'Expert Astrologers', '24/7 Support'].map((feature) => (
              <div key={feature} className="flex flex-col items-center space-y-2">
                <span className="text-2xl">✨</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}