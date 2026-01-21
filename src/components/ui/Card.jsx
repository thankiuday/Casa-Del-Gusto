import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  hover = false,
  className = '',
  ...props
}) => {
  const Component = hover ? motion.div : 'div';
  const motionProps = hover ? {
    whileHover: { y: -8, scale: 1.02 },
    transition: { duration: 0.3 }
  } : {};

  return (
    <Component
      className={`
        bg-white dark:bg-gray-800
        rounded-xl shadow-md
        overflow-hidden
        ${hover ? 'cursor-pointer hover:shadow-elegant-lg' : ''}
        transition-shadow duration-300
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
};

Card.Image = ({ src, alt, className = '' }) => (
  <div className={`w-full h-64 overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
    />
  </div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

Card.Title = ({ children, className = '' }) => (
  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${className}`}>
    {children}
  </h3>
);

Card.Text = ({ children, className = '' }) => (
  <p className={`text-gray-600 dark:text-gray-300 ${className}`}>
    {children}
  </p>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export default Card;
