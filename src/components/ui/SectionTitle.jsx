import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${alignClasses[align]} ${className}`}
    >
      {subtitle && (
        <p className={`text-sm font-semibold tracking-wider uppercase mb-2 ${
          dark ? 'text-primary-400' : 'text-primary-500'
        }`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        dark ? 'text-white' : 'text-gray-900 dark:text-white'
      }`}>
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
