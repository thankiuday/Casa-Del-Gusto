import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Container, Button, Logo } from '../ui';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home2';
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
        }
      `}
      style={{ maxWidth: '100vw', overflowX: 'hidden' }}
    >
      <Container>
        <div className="flex items-center justify-between py-3 sm:py-4 gap-2 sm:gap-4 min-w-0">
          <div className="flex-shrink-0 min-w-0 max-w-[calc(100%-120px)] sm:max-w-none">
            <Logo 
              showTagline={false}
              size="default"
              variant={isScrolled ? 'auto' : 'auto'}
              className={`${isScrolled ? '' : 'drop-shadow-lg'} max-w-full`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm xl:text-base whitespace-nowrap
                  ${isActive(link.path)
                    ? 'text-primary-500'
                    : isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                      : 'text-gray-900 dark:text-white hover:text-primary-500 drop-shadow-lg'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  : 'hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white drop-shadow-lg'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/reservations" className="flex-shrink-0">
              <Button size="sm" className="text-xs xl:text-sm">
                <Phone size={14} className="xl:w-4 xl:h-4 mr-1.5 xl:mr-2" />
                <span className="hidden xl:inline">Book a Table</span>
                <span className="xl:hidden">Book</span>
              </Button>
            </Link>
            <a 
              href="https://themeforest.net/item/your-item-name/12345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <Button size="sm" className="text-xs xl:text-sm bg-green-600 hover:bg-green-700 text-white border-0">
                <span className="hidden xl:inline">Buy Now</span>
                <span className="xl:hidden">Buy</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:hidden flex-shrink-0">
            <button
              onClick={toggleTheme}
              className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-900 dark:text-white drop-shadow-lg'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-900 dark:text-white drop-shadow-lg'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <Container>
              <div className="py-3 sm:py-4 space-y-1 sm:space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base
                      ${isActive(link.path)
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 sm:pt-3 space-y-2">
                  <a 
                    href="https://themeforest.net/item/your-item-name/12345678" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button fullWidth className="text-sm sm:text-base bg-green-600 hover:bg-green-700 text-white border-0">
                      Buy Now
                    </Button>
                  </a>
                  <Link to="/reservations">
                    <Button fullWidth className="text-sm sm:text-base">
                      <Phone size={14} className="sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      Book a Table
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
