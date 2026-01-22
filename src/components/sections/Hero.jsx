import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Container, Button } from '../ui';
import { Link } from 'react-router-dom';

const Hero = ({ variant = 'fullscreen', title, subtitle, description, image, cta1, cta2 }) => {
  const defaultProps = {
    title: 'Experience Culinary Excellence',
    subtitle: 'Welcome to CASA DEL GUSTO',
    description: 'Where every dish tells a story of passion, quality, and unforgettable flavors',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop',
    cta1: { text: 'View Menu', link: '/menu' },
    cta2: { text: 'Book a Table', link: '/reservations' },
  };

  const props = {
    title: title || defaultProps.title,
    subtitle: subtitle || defaultProps.subtitle,
    description: description || defaultProps.description,
    image: image || defaultProps.image,
    cta1: cta1 || defaultProps.cta1,
    cta2: cta2 || defaultProps.cta2,
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: Math.max(-10, Math.min(10, (e.clientX / window.innerWidth - 0.5) * 20)),
        y: Math.max(-10, Math.min(10, (e.clientY / window.innerHeight - 0.5) * 20)),
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (variant === 'fullscreen') {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', position: 'relative', width: '100%', left: 0, right: 0 }}>
        {/* Animated Background Image with Parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ maxWidth: '100vw', width: '100%', left: 0, right: 0, top: 0, bottom: 0 }}>
          <motion.div 
            className="absolute inset-0" 
            style={{ 
              maxWidth: '100vw', 
              overflowX: 'hidden',
              width: '100%',
              height: '100%',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }}
            animate={{
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img
              src={props.image}
              alt="Restaurant"
              className="w-full h-full object-cover"
              style={{ 
                maxWidth: '100%', 
                width: '100%',
                maxHeight: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              animate={{
                x: Math.max(-5, Math.min(5, mousePosition.x)),
                y: Math.max(-5, Math.min(5, mousePosition.y)),
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          {/* Animated Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"
            animate={{
              background: [
                'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
                'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7), rgba(0,0,0,0.6))',
                'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Floating Particles Effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30"
              style={{
                left: `${Math.min(85, 15 + i * 12)}%`,
                top: `${30 + i * 10}%`,
                maxWidth: '100vw',
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, Math.sin(i) * 8, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
          </motion.div>
        </div>

        {/* Content with Staggered Animations */}
        <Container className="relative z-10 text-center text-white w-full" style={{ maxWidth: '100vw', width: '100%', paddingLeft: 'clamp(0.75rem, 4vw, 2rem)', paddingRight: 'clamp(0.75rem, 4vw, 2rem)', boxSizing: 'border-box' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
            style={{ maxWidth: '100%', overflowX: 'hidden', width: '100%', boxSizing: 'border-box' }}
          >
            {/* Subtitle with Slide and Fade */}
            <motion.p 
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4 break-words" 
              style={{ wordBreak: 'break-word' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {props.subtitle}
            </motion.p>
            
            {/* Title with Character Animation */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 break-words" 
              style={{ wordBreak: 'break-word', maxWidth: '100%', width: '100%', overflowX: 'hidden', paddingLeft: '0.5rem', paddingRight: '0.5rem', boxSizing: 'border-box' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-block"
                style={{ maxWidth: '100%', overflowX: 'hidden', width: '100%' }}
              >
                {props.title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-2"
                    style={{ maxWidth: '100%' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.02, color: '#d4af37' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
            
            {/* Description with Fade */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 break-words" 
              style={{ wordBreak: 'break-word', maxWidth: '100%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {props.description}
            </motion.p>
            
            {/* Buttons with Stagger */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={props.cta1.link}>
                  <Button size="lg" className="relative overflow-hidden group">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 flex items-center">
                      {props.cta1.text}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2" size={20} />
                      </motion.span>
                    </span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={props.cta2.link}>
                  <Button variant="outline" size="lg" className="border-2 border-white/30 hover:border-primary-400">
                    <Phone className="mr-2" size={20} />
                    {props.cta2.text}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section className="relative min-h-screen flex items-center py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary-500 text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
                {props.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                {props.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {props.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={props.cta1.link}>
                  <Button size="lg">
                    {props.cta1.text}
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to={props.cta2.link}>
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2" size={20} />
                    {props.cta2.text}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-elegant-lg"
            >
              <img
                src={props.image}
                alt="Restaurant"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }

  return null;
};

export default Hero;
