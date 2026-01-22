import React from 'react';
import { motion } from 'framer-motion';

const GradientMesh = ({ 
  colors = ['#d4af37', '#334155', '#1e293b'],
  intensity = 0.3,
  animate = true
}) => {
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{ maxWidth: '100vw', width: '100%', zIndex: 0 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${colors[0]}${Math.floor(intensity * 255).toString(16)}, transparent 50%),
            radial-gradient(circle at 80% 70%, ${colors[1]}${Math.floor(intensity * 255).toString(16)}, transparent 50%),
            radial-gradient(circle at 50% 50%, ${colors[2]}${Math.floor(intensity * 255).toString(16)}, transparent 70%)
          `,
          mixBlendMode: 'overlay',
        }}
        animate={animate ? {
          background: [
            `radial-gradient(circle at 20% 30%, ${colors[0]}${Math.floor(intensity * 255).toString(16)}, transparent 50%),
             radial-gradient(circle at 80% 70%, ${colors[1]}${Math.floor(intensity * 255).toString(16)}, transparent 50%),
             radial-gradient(circle at 50% 50%, ${colors[2]}${Math.floor(intensity * 255).toString(16)}, transparent 70%)`,
            `radial-gradient(circle at 80% 30%, ${colors[0]}${Math.floor(intensity * 255).toString(16)}, transparent 50%),
             radial-gradient(circle at 20% 70%, ${colors[1]}${Math.floor(intensity * 255).toString(16)}, transparent 50%),
             radial-gradient(circle at 50% 50%, ${colors[2]}${Math.floor(intensity * 255).toString(16)}, transparent 70%)`,
            `radial-gradient(circle at 20% 30%, ${colors[0]}${Math.floor(intensity * 255).toString(16)}, transparent 50%),
             radial-gradient(circle at 80% 70%, ${colors[1]}${Math.floor(intensity * 255).toString(16)}, transparent 50%),
             radial-gradient(circle at 50% 50%, ${colors[2]}${Math.floor(intensity * 255).toString(16)}, transparent 70%)`,
          ],
        } : {}}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GradientMesh;
