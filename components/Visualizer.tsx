import React from 'react';

interface VisualizerProps {
  volume: number;
  isActive: boolean;
}

const Visualizer: React.FC<VisualizerProps> = ({ volume, isActive }) => {
  // Create 5 bars
  const bars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center gap-1.5 h-12">
      {bars.map((i) => {
        // Calculate dynamic height based on volume and index to create a wave effect
        // Base height is small, adds volume factor.
        // We vary the multiplier to make it look organic.
        const multiplier = i === 3 ? 1.5 : i === 2 || i === 4 ? 1.2 : 0.8;
        const height = isActive 
            ? Math.max(4, volume * 40 * multiplier + 4) // Min height 4px, scales with volume
            : 4; 
        
        return (
          <div
            key={i}
            className={`w-1.5 rounded-full transition-all duration-75 ${
              isActive ? 'bg-blue-400' : 'bg-slate-600'
            }`}
            style={{ height: `${Math.min(height, 48)}px` }} 
          />
        );
      })}
    </div>
  );
};

export default Visualizer;