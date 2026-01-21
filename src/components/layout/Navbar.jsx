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
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo 
            showTagline={false}
            size="default"
            variant={isScrolled ? 'auto' : 'auto'}
            className={isScrolled ? '' : 'drop-shadow-lg'}
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-300
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
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  : 'hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white drop-shadow-lg'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/reservations">
              <Button size="sm">
                <Phone size={16} className="mr-2" />
                Book a Table
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-900 dark:text-white drop-shadow-lg'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-900 dark:text-white drop-shadow-lg'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      block px-4 py-3 rounded-lg font-medium transition-colors
                      ${isActive(link.path)
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-500'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link to="/reservations">
                    <Button fullWidth>
                      <Phone size={16} className="mr-2" />
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
