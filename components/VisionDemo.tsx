import React from 'react';
import { motion } from 'framer-motion';

const VisionDemo: React.FC = () => {
  // Generate some mock players
  const players = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    x: Math.random() * 80 + 10, // 10% to 90%
    y: Math.random() * 80 + 10,
    team: i % 2 === 0 ? 'home' : 'away',
    speed: (Math.random() * 30).toFixed(1)
  }));

  return (
    <section id="vision" className="py-32 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            See what the human eye <span className="text-yellow-500">misses.</span>
          </h2>
          <p className="text-xl text-gray-500">
            Our proprietary neural engine processes 120 frames per second across 22 players and the ball, calculating trajectories in real-time.
          </p>
        </div>

        <div className="relative aspect-video w-full max-w-5xl mx-auto bg-zinc-900/50 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl">

          {/* Field Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/50" />
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/50 rounded-full" />
            <div className="absolute inset-10 border border-white/30 rounded-sm" />
          </div>

          {/* Simulated Scanning Beam */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent z-0 pointer-events-none"
          />
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.8)] z-10"
          />

          {/* Players */}
          {players.map((player, i) => (
            <motion.div
              key={player.id}
              initial={{ left: `${player.x}%`, top: `${player.y}%` }}
              animate={{
                left: [`${player.x}%`, `${player.x + (Math.random() * 10 - 5)}%`, `${player.x}%`],
                top: [`${player.y}%`, `${player.y + (Math.random() * 10 - 5)}%`, `${player.y}%`]
              }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-4 h-4 -ml-2 -mt-2 z-20 group cursor-pointer"
            >
              {/* Ring Pulse */}
              <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${player.team === 'home' ? 'bg-blue-500' : 'bg-red-500'}`} />
              {/* Core Dot */}
              <div className={`relative w-full h-full rounded-full border-2 border-black shadow-lg ${player.team === 'home' ? 'bg-blue-400' : 'bg-red-400'}`} />

              {/* Data Tag */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 border border-white/10 px-2 py-1 rounded text-[10px] text-white whitespace-nowrap pointer-events-none">
                <span className="text-gray-400">SPD:</span> {player.speed} km/h
              </div>
            </motion.div>
          ))}

          {/* UI Overlay */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-400">SYSTEM ACTIVE</span>
            </div>
            <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-xs font-mono text-gray-400">LATENCY: 12ms</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Analysis</div>
              <div className="text-sm text-white font-mono">NO FOUL DETECTED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionDemo;