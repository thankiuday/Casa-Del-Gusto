import React from 'react';
import { motion } from 'framer-motion';

const GeometricShapes = ({ count = 8, color = '#d4af37', opacity = 0.2 }) => {
  const shapes = Array.from({ length: count }, (_, i) => ({
    id: i,
    type: ['circle', 'triangle', 'square'][i % 3],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 40 + Math.random() * 60,
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
            }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360],
              scale: [1, 1.2, 1],
              x: [0, Math.sin(shape.id) * 30, 0],
              y: [0, Math.cos(shape.id) * 30, 0],
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
            }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360],
              scale: [1, 1.3, 1],
              x: [0, Math.cos(shape.id) * 25, 0],
              y: [0, Math.sin(shape.id) * 25, 0],
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
              transform: `rotate(${shape.rotation}deg)`,
            }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360],
              scale: [1, 1.15, 1],
              x: [0, Math.sin(shape.id * 2) * 20, 0],
              y: [0, Math.cos(shape.id * 2) * 20, 0],
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
      style={{ maxWidth: '100vw', width: '100%' }}
    >
      {shapes.map(renderShape)}
    </div>
  );
};

export default GeometricShapes;
