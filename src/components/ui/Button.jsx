import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseStyles = 'btn-base';

  const variants = {
    primary: 'bg-primary-400 hover:bg-primary-500 text-white focus:ring-primary-400 dark:bg-primary-500 dark:hover:bg-primary-600',
    secondary: 'bg-secondary-700 hover:bg-secondary-800 text-white focus:ring-secondary-700 dark:bg-secondary-600 dark:hover:bg-secondary-700',
    outline: 'border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white focus:ring-primary-400 dark:border-primary-500 dark:text-primary-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-600',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
