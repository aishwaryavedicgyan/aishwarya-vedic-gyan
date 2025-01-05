import { Star, Shield, Clock, Book, Users, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    name: 'Accurate Predictions',
    description: 'Get precise astrological predictions based on authentic Vedic calculations.',
    icon: Star,
  },
  {
    name: 'Expert Consultation',
    description: 'Connect with experienced Vedic astrologers for personalized guidance.',
    icon: Users,
  },
  {
    name: 'Instant Analysis',
    description: 'Receive detailed Kundli analysis within seconds using our advanced algorithms.',
    icon: Clock,
  },
  {
    name: 'Secure & Private',
    description: 'Your personal information is protected with enterprise-grade security.',
    icon: Shield,
  },
  {
    name: 'Vedic Library',
    description: 'Access a vast collection of Vedic wisdom and astrological resources.',
    icon: Book,
  },
  {
    name: 'Daily Updates',
    description: 'Stay informed with daily Panchang updates and astrological insights.',
    icon: Sparkles,
  },
];

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="features" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white">
        <div className="absolute inset-0 bg-[url('/sacred-geometry.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transform transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Comprehensive
            <span className="gradient-text"> Vedic Solutions</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to understand your cosmic journey
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className={`group relative transform transition-all duration-700 delay-${index * 100} ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-purple-100 to-indigo-100 group-hover:from-purple-200 group-hover:to-indigo-200 transition-colors">
                    <feature.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}