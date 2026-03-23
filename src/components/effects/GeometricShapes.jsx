import React from 'react';
import { motion } from 'framer-motion';

const GeometricShapes = ({ count = 8, color = '#d4af37', opacity = 0.2 }) => {
  const shapes = Array.from({ length: count }, (_, i) => ({
    id: i,
    type: ['circle', 'triangle', 'square'][i % 3],
    x: Math.min(85, Math.max(15, 15 + (i * 10) % 70)), // More conservative positioning
    y: Math.min(85, Math.max(15, 15 + (i * 12) % 70)),
    size: 25 + Math.random() * 35, // Smaller sizes
    rotation: Math.random() * 360,
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 2,
  }));

  const renderShape = (shape) => {
    const baseStyle = {
      position: 'absolute',
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: opacity,
      maxWidth: '100vw',
      transformOrigin: 'center center',
      willChange: 'transform',
    };

    switch (shape.type) {
      case 'circle':
        return (
          <motion.div
            key={shape.id}
            className="rounded-full"
            style={{
              ...baseStyle,
              backgroundColor: color,
              transform: 'translate(-50%, -50%)', // Center on position
            }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360],
              scale: [1, 1.08, 1], // Reduced scale
              x: [0, Math.min(8, Math.max(-8, Math.sin(shape.id) * 8)), 0], // Reduced movement
              y: [0, Math.min(8, Math.max(-8, Math.cos(shape.id) * 8)), 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        );
      case 'triangle':
        return (
          <motion.div
            key={shape.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${color}`,
              backgroundColor: 'transparent',
              transform: 'translate(-50%, -50%)', // Center on position
            }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360],
              scale: [1, 1.1, 1], // Reduced scale
              x: [0, Math.min(6, Math.max(-6, Math.cos(shape.id) * 6)), 0], // Reduced movement
              y: [0, Math.min(6, Math.max(-6, Math.sin(shape.id) * 6)), 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        );
      case 'square':
        return (
          <motion.div
            key={shape.id}
            className="rounded-lg"
            style={{
              ...baseStyle,
              backgroundColor: color,
              transform: 'translate(-50%, -50%)', // Center on position
            }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360],
              scale: [1, 1.08, 1], // Reduced scale
              x: [0, Math.min(6, Math.max(-6, Math.sin(shape.id * 2) * 6)), 0], // Reduced movement
              y: [0, Math.min(6, Math.max(-6, Math.cos(shape.id * 2) * 6)), 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ 
        maxWidth: '100vw', 
        width: '100%', 
        left: 0, 
        right: 0, 
        top: 0, 
        bottom: 0,
        clipPath: 'inset(0)', // Clip to container bounds
        contain: 'layout style paint', // CSS containment
      }}
    >
      {shapes.map(renderShape)}
    </div>
  );
};

export default GeometricShapes;
