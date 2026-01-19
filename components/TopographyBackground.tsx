
import React from 'react';

const TopographyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pulse-glow"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px] pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-500/5 blur-[80px] pulse-glow" style={{ animationDelay: '0.7s' }}></div>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="text-zinc-800 opacity-60"
      >
        <filter id="displacementFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <g filter="url(#displacementFilter)">
          {[...Array(15)].map((_, i) => (
            <ellipse
              key={i}
              cx="500"
              cy="500"
              rx={100 + i * 60}
              ry={80 + i * 50}
              className="topo-line"
              style={{ 
                animation: `pulse-glow ${4 + i}s ease-in-out infinite`,
                stroke: i % 3 === 0 ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.05)'
              }}
            />
          ))}
        </g>
        
        {/* Animated Data Nodes */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={`node-${i}`}
            cx={Math.random() * 1000}
            cy={Math.random() * 1000}
            r="1.5"
            fill={i % 2 === 0 ? '#06b6d4' : '#a855f7'}
            className="float"
            style={{ 
              animationDelay: `${i * 0.5}s`,
              boxShadow: '0 0 10px currentColor'
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default TopographyBackground;
