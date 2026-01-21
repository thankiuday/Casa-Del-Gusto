import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../components/ui';

const NotFound = () => {
  const popularLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-7xl sm:text-9xl md:text-[200px] font-display font-bold text-primary-400 opacity-50">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button size="lg">
                <Home className="mr-2" size={20} />
                Back to Home
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" size="lg">
                <Search className="mr-2" size={20} />
                Browse Menu
              </Button>
            </Link>
          </div>

          {/* Popular Links */}
          <div className="max-w-md mx-auto">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Or visit these popular pages:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {popularLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="py-3 px-6 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-all duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Decorative Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 max-w-md mx-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop"
              alt="Restaurant"
              className="rounded-2xl shadow-elegant-lg"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default NotFound;
