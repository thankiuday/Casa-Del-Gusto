import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ 
  text, 
  variant = 'word', // 'word', 'character', 'line'
  className = '',
  delay = 0,
  stagger = 0.1
}) => {
  const words = text.split(' ');
  const characters = text.split('');
  const lines = text.split('\n');

  if (variant === 'character') {
    return (
      <motion.span className={className} style={{ display: 'inline-block', maxWidth: '100%' }}>
        {characters.map((char, i) => (
          <motion.span
            key={i}
            style={{ display: 'inline-block', maxWidth: '100%' }}
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * stagger,
              ease: "easeOut",
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (variant === 'line') {
    return (
      <div className={className}>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * stagger,
              ease: "easeOut",
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    );
  }

  // Default: word-by-word
  return (
    <motion.span className={className} style={{ display: 'inline-block', maxWidth: '100%' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          style={{ maxWidth: '100%' }}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: delay + i * stagger,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
