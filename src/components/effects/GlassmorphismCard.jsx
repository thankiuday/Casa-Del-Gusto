import React from 'react';
import { motion } from 'framer-motion';

const GlassmorphismCard = ({ 
  children, 
  className = '',
  blur = 'blur-xl',
  opacity = 0.1,
  borderGlow = true,
  animate = true
}) => {
  return (
    <motion.div
      className={`
        relative backdrop-blur-xl bg-white/10 dark:bg-black/20
        border border-white/20 dark:border-white/10
        rounded-2xl shadow-2xl
        ${className}
      `}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        maxWidth: '100%',
        overflowX: 'hidden',
      }}
      initial={animate ? { opacity: 0, scale: 0.95 } : {}}
      animate={animate ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {borderGlow && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.1))',
            opacity: 0,
            zIndex: -1,
          }}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassmorphismCard;
