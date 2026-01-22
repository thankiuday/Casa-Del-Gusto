import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Logo = ({ 
  showTagline = true, 
  className = '',
  size = 'default', // 'default', 'small', 'large'
  variant = 'auto' // 'auto', 'dark', 'light' - auto adapts to theme
}) => {
  const { theme } = useTheme();
  
  const sizeClasses = {
    small: {
      main: 'text-sm',
      tagline: 'text-[8px]',
      container: 'space-y-0.5',
      padding: 'px-2 py-1'
    },
    default: {
      main: 'text-sm sm:text-base md:text-lg lg:text-xl',
      tagline: 'text-[8px] sm:text-[10px] md:text-xs',
      container: 'space-y-0.5 sm:space-y-1',
      padding: 'px-2 sm:px-3 py-1 sm:py-1.5'
    },
    large: {
      main: 'text-2xl md:text-3xl',
      tagline: 'text-xs md:text-sm',
      container: 'space-y-2',
      padding: 'px-4 py-2'
    }
  };

  const classes = sizeClasses[size] || sizeClasses.default;

  // Determine background style based on variant and theme
  const getBackgroundClass = () => {
    if (variant === 'dark') {
      return 'bg-secondary-800 dark:bg-gray-950';
    }
    if (variant === 'light') {
      return 'bg-white dark:bg-gray-950';
    }
    // auto mode - always use dark background for contrast
    return 'bg-secondary-800 dark:bg-gray-950';
  };

  const getTextColor = () => {
    return 'text-white';
  };

  const getTaglineColor = () => {
    return 'text-white';
  };

  const getBorderColor = () => {
    return 'border-primary-400';
  };

  return (
    <Link to="/" className={`inline-flex flex-col items-center transition-opacity hover:opacity-90 flex-shrink-0 ${className}`}>
      <div className={`flex flex-col items-center ${classes.container} ${getBackgroundClass()} px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all duration-300`}>
        {/* Main Logo Text */}
        <div className="flex items-center">
          {/* CASA DEL - Text with golden outline */}
          <div className="relative">
            <span className={`${classes.main} font-bold ${getTextColor()} uppercase tracking-tight px-1 sm:px-2 py-0.5 whitespace-nowrap`}>
              CASA DEL
            </span>
            <div 
              className={`absolute inset-0 border-2 ${getBorderColor()} pointer-events-none`}
              style={{ 
                borderRight: 'none',
                borderTopLeftRadius: '6px',
                borderBottomLeftRadius: '6px',
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0'
              }}
            />
          </div>
          
          {/* GUSTO - Text on solid golden background */}
          <div className="bg-primary-400 dark:bg-primary-500 px-1 sm:px-2 py-0.5" 
               style={{ 
                 borderTopLeftRadius: '0',
                 borderBottomLeftRadius: '0',
                 borderTopRightRadius: '6px',
                 borderBottomRightRadius: '6px'
               }}
          >
            <span className={`${classes.main} font-bold text-white uppercase tracking-tight whitespace-nowrap`}>
              GUSTO
            </span>
          </div>
        </div>
        
        {/* Tagline */}
        {showTagline && (
          <div className="w-full text-center mt-0.5">
            <span className={`${classes.tagline} font-medium ${getTaglineColor()} uppercase tracking-wider opacity-90`}>
              HOUSE OF TASTE
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Logo;
