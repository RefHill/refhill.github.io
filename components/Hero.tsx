import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden pt-20">
      
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-yellow-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
            The Future of Officiating
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9]"
        >
          Absolute <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600">
            Fairness.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12"
        >
          RefHill uses advanced computer vision to track every pixel, every millisecond. No bias. No errors. Just the game.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#vision" className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all">
            See how it works
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="text-white hover:text-yellow-400 font-medium transition-colors">
            Join the waitlist &rarr;
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;