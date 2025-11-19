import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Eye, ShieldCheck, Cpu } from 'lucide-react';
import { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature; children: React.ReactNode; delay: number }> = ({ feature, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`relative overflow-hidden rounded-3xl bg-zinc-900/30 border border-white/5 p-8 hover:bg-zinc-900/50 transition-colors duration-500 ${
      feature.colSpan ? `md:col-span-${feature.colSpan}` : ''
    }`}
  >
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div className="mb-8">
         <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-yellow-400">
            {children}
         </div>
        <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
      </div>
    </div>
    {/* Gradient Glow */}
    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section id="technology" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Built for the <br />
            <span className="text-gray-600">Beautiful Game.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            delay={0.1}
            feature={{ 
              title: 'Instant Decision', 
              description: '0.05s processing time. Before the whistle blows, RefHill knows.',
              colSpan: 2
            }}
          >
            <Zap className="w-6 h-6" />
          </FeatureCard>

          <FeatureCard 
            delay={0.2}
            feature={{ 
              title: 'Total Coverage', 
              description: '360° occlusion handling using multi-camera sensor fusion.',
            }}
          >
            <Eye className="w-6 h-6" />
          </FeatureCard>

          <FeatureCard 
            delay={0.3}
            feature={{ 
              title: 'FIFA Compliant', 
              description: 'Programmed with the complete Laws of the Game, updated OTA instantly.',
            }}
          >
            <ShieldCheck className="w-6 h-6" />
          </FeatureCard>

          <FeatureCard 
             delay={0.4}
             feature={{ 
              title: 'Edge Computing', 
              description: 'No cloud latency. All processing happens locally on the stadium RefNode.',
              colSpan: 2
            }}
          >
            <Cpu className="w-6 h-6" />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;