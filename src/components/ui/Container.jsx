import React from 'react';

const Container = ({ children, className = '', noPadding = false }) => {
  const classes = `
    max-w-7xl mx-auto w-full
    ${noPadding ? '' : 'px-3 sm:px-4 md:px-6 lg:px-8'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div 
      className={classes} 
      style={{ 
        maxWidth: '100%', 
        overflowX: 'hidden',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};

export default Container;
