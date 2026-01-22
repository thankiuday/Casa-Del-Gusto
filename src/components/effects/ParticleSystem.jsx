import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleSystem = ({ 
  count = 50, 
  color = '#d4af37', 
  size = 2,
  speed = 1,
  opacity = 0.3,
  mobileCount = 20 
}) => {
  const containerRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? mobileCount : count;

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: size + Math.random() * size,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 2,
  }));

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ maxWidth: '100vw', width: '100%' }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: opacity,
          }}
          animate={{
            y: [
              particle.y,
              particle.y - (30 * speed),
              particle.y - (60 * speed),
              particle.y,
            ],
            x: [
              particle.x,
              particle.x + Math.sin(particle.id) * (20 * speed),
              particle.x - Math.sin(particle.id) * (20 * speed),
              particle.x,
            ],
            opacity: [opacity, opacity * 1.5, opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
