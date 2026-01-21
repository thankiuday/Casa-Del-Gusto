import React from 'react';

const Container = ({ children, className = '', noPadding = false }) => {
  const classes = `
    max-w-7xl mx-auto
    ${noPadding ? '' : 'px-4 sm:px-6 lg:px-8'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return <div className={classes}>{children}</div>;
};

export default Container;
