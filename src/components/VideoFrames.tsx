import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';

const videoFrames = [
  {
    id: 1,
    title: "Vedic Astrology",
    description: "Discover the ancient wisdom of the stars through interactive horoscope analysis.",
    videoUrl: "/videos/astrology.mp4",
    thumbnail: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Kundli Matching",
    description: "Experience our revolutionary approach to compatibility matching using vedic principles.",
    videoUrl: "/videos/kundli.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Daily Panchang",
    description: "Interactive daily predictions and muhurat timings for auspicious beginnings.",
    videoUrl: "/videos/panchang.mp4",
    thumbnail: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80",
  },
];

export function VideoFrames() {
  return (
    <div className="relative bg-black text-white">
      {videoFrames.map((frame) => (
        <VideoFrame 
          key={frame.id}
          title={frame.title}
          description={frame.description} 
          thumbnail={frame.thumbnail}
        />
      ))}
    </div>
  );
}

function VideoFrame({ title, description, thumbnail }: {
  title: string;
  description: string;
  thumbnail: string;
}) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 0, 0, -100]
  );

  return (
    <motion.div 
      ref={(node: HTMLDivElement | null) => {
        elementRef.current = node;
        ref(node);
      }}
      className="scroll-section min-h-screen flex items-center justify-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="fixed inset-0 w-full h-full">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${thumbnail})`,
            opacity,
            scale
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        style={{ y, opacity }}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <motion.button 
          className="px-8 py-4 bg-white text-black rounded-full font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More
        </motion.button>
      </motion.div>
    </motion.div>
  );
} 