import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Container, Button } from '../ui';
import { Link } from 'react-router-dom';
import { ParticleSystem, GlassmorphismCard, GeometricShapes, TextReveal, GradientMesh } from '../effects';

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

  // Cinematic variant - Split screen with 3D depth
  if (variant === 'cinematic') {
    return (
      <section className="relative h-screen flex items-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ maxWidth: '100vw', width: '100%' }}>
          <motion.img
            src={props.image}
            alt="Restaurant"
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', width: '100%', height: '100%', objectFit: 'cover' }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <GeometricShapes count={8} color="#d4af37" opacity={0.15} />
        </div>

        <div className="relative z-10 w-full h-full flex items-center" style={{ maxWidth: '100vw' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%' }}>
            {/* Left: Image with 3D effect */}
            <motion.div
              className="hidden lg:block relative h-[400px] lg:h-[500px]"
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ rotateY: 5, scale: 1.02 }}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <motion.img
                src={props.image}
                alt="Restaurant"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                style={{ transform: 'translateZ(50px)' }}
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              className="flex flex-col justify-center text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.p
                className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {props.subtitle}
              </motion.p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                <TextReveal text={props.title} variant="word" delay={0.6} stagger={0.1} />
              </h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {props.description}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Link to={props.cta1.link}>
                  <Button size="lg" className="group relative overflow-hidden">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center">
                      {props.cta1.text}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                  </Button>
                </Link>
                <Link to={props.cta2.link}>
                  <Button variant="outline" size="lg" className="border-2 border-white/30 hover:border-primary-400">
                    <Phone className="mr-2" size={20} />
                    {props.cta2.text}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Glassmorphism variant
  if (variant === 'glassmorphism') {
    return (
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ maxWidth: '100vw', width: '100%' }}>
          <motion.img
            src={props.image}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', width: '100%', height: '100%' }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <ParticleSystem count={30} mobileCount={15} />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%' }}>
          <GlassmorphismCard className="p-8 md:p-12 text-center text-white">
            <motion.p
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {props.subtitle}
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <TextReveal text={props.title} variant="word" delay={0.3} stagger={0.08} />
            </h1>
            <motion.p
              className="text-base sm:text-lg text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {props.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link to={props.cta1.link}>
                <Button size="lg">{props.cta1.text} <ArrowRight className="ml-2 inline" size={20} /></Button>
              </Link>
              <Link to={props.cta2.link}>
                <Button variant="outline" size="lg"><Phone className="mr-2 inline" size={20} /> {props.cta2.text}</Button>
              </Link>
            </motion.div>
          </GlassmorphismCard>
        </div>
      </section>
    );
  }

  // Grid Morph variant
  if (variant === 'grid-morph') {
    return (
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ maxWidth: '100vw', width: '100%' }}>
          <motion.img
            src={props.image}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', width: '100%', height: '100%' }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <GradientMesh colors={['#d4af37', '#334155', '#1e293b']} intensity={0.4} />
          <GeometricShapes count={12} color="#d4af37" opacity={0.2} />
        </div>

        <div className="relative z-10 text-center text-white w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {props.subtitle}
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <TextReveal text={props.title} variant="character" delay={0.4} stagger={0.05} />
            </h1>
            <motion.p
              className="text-base sm:text-lg text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {props.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link to={props.cta1.link}>
                <Button size="lg">{props.cta1.text} <ArrowRight className="ml-2 inline" size={20} /></Button>
              </Link>
              <Link to={props.cta2.link}>
                <Button variant="outline" size="lg"><Phone className="mr-2 inline" size={20} /> {props.cta2.text}</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Minimal variant
  if (variant === 'minimal') {
    return (
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ maxWidth: '100vw', width: '100%' }}>
          <motion.img
            src={props.image}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', width: '100%', height: '100%' }}
            animate={{
              filter: ['brightness(0.5)', 'brightness(0.6)', 'brightness(0.5)'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 text-center text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.p
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {props.subtitle}
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              <TextReveal text={props.title} variant="word" delay={0.5} stagger={0.12} />
            </h1>
            <motion.p
              className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {props.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link to={props.cta1.link}>
                <Button size="lg" className="min-w-[160px]">{props.cta1.text} <ArrowRight className="ml-2 inline" size={20} /></Button>
              </Link>
              <Link to={props.cta2.link}>
                <Button variant="outline" size="lg" className="min-w-[160px]"><Phone className="mr-2 inline" size={20} /> {props.cta2.text}</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Immersive variant
  if (variant === 'immersive') {
    return (
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ maxWidth: '100vw', width: '100%' }}>
          <motion.img
            src={props.image}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', width: '100%', height: '100%' }}
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/70" />
          {/* Light rays effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(212, 175, 55, 0.1) 50%, transparent 100%)',
              transform: 'rotate(45deg)',
              transformOrigin: 'center',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 text-center text-white w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.p
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {props.subtitle}
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <TextReveal text={props.title} variant="word" delay={0.5} stagger={0.1} />
            </h1>
            <motion.p
              className="text-base sm:text-lg text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {props.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link to={props.cta1.link}>
                <Button size="lg">{props.cta1.text} <ArrowRight className="ml-2 inline" size={20} /></Button>
              </Link>
              <Link to={props.cta2.link}>
                <Button variant="outline" size="lg"><Phone className="mr-2 inline" size={20} /> {props.cta2.text}</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Typography variant
  if (variant === 'typography') {
    return (
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ maxWidth: '100vw', width: '100%' }}>
          <motion.img
            src={props.image}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', width: '100%', height: '100%' }}
            animate={{
              filter: ['brightness(0.4)', 'brightness(0.5)', 'brightness(0.4)'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center text-white w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {props.subtitle}
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-8 leading-tight">
              <TextReveal text={props.title} variant="character" delay={0.4} stagger={0.03} />
            </h1>
            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mb-8"
              style={{ maxWidth: '400px' }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {props.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Link to={props.cta1.link}>
                <Button size="lg">{props.cta1.text} <ArrowRight className="ml-2 inline" size={20} /></Button>
              </Link>
              <Link to={props.cta2.link}>
                <Button variant="outline" size="lg"><Phone className="mr-2 inline" size={20} /> {props.cta2.text}</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Interactive variant
  if (variant === 'interactive') {
    const [hoveredMarker, setHoveredMarker] = useState(null);
    const markers = [
      { id: 1, x: 20, y: 30, label: 'Location' },
      { id: 2, x: 80, y: 50, label: 'Contact' },
      { id: 3, x: 50, y: 70, label: 'Hours' },
    ];

    return (
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ maxWidth: '100vw', width: '100%' }}>
          <motion.img
            src={props.image}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', width: '100%', height: '100%' }}
          />
          <div className="absolute inset-0 bg-black/60" />
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ maxWidth: '100vw' }}>
            {markers.map((marker, i) => (
              <motion.line
                key={`line-${marker.id}`}
                x1={`${marker.x}%`}
                y1={`${marker.y}%`}
                x2="50%"
                y2="50%"
                stroke="#d4af37"
                strokeWidth="2"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.2 }}
              />
            ))}
          </svg>
          {/* Animated markers */}
          {markers.map((marker) => (
            <motion.div
              key={marker.id}
              className="absolute cursor-pointer"
              style={{
                left: `${marker.x}%`,
                top: `${marker.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onHoverStart={() => setHoveredMarker(marker.id)}
              onHoverEnd={() => setHoveredMarker(null)}
              animate={{
                scale: hoveredMarker === marker.id ? 1.5 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-4 h-4 bg-primary-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {hoveredMarker === marker.id && (
                <motion.div
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded text-sm whitespace-nowrap"
                  initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
                >
                  {marker.label}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {props.subtitle}
            </motion.p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <TextReveal text={props.title} variant="word" delay={0.4} stagger={0.1} />
            </h1>
            <motion.p
              className="text-base sm:text-lg text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {props.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link to={props.cta1.link}>
                <Button size="lg">{props.cta1.text} <ArrowRight className="ml-2 inline" size={20} /></Button>
              </Link>
              <Link to={props.cta2.link}>
                <Button variant="outline" size="lg"><Phone className="mr-2 inline" size={20} /> {props.cta2.text}</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Original fullscreen variant (enhanced)
  if (variant === 'fullscreen') {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', position: 'relative', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
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
            style={{ width: '100%', height: '100%', maxWidth: '100vw', left: 0, right: 0, top: 0, bottom: 0 }}
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
          {/* Enhanced Floating Particles */}
          <ParticleSystem count={20} mobileCount={10} color="#d4af37" opacity={0.3} />
          </motion.div>
        </div>

        {/* Content with Staggered Animations */}
        <div className="relative z-10 text-center text-white w-full mx-auto" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%', paddingLeft: 'clamp(0.75rem, 4vw, 2rem)', paddingRight: 'clamp(0.75rem, 4vw, 2rem)', boxSizing: 'border-box', overflowX: 'hidden' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
            style={{ maxWidth: '100%', overflowX: 'hidden', width: '100%', boxSizing: 'border-box', margin: '0 auto' }}
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 break-words" style={{ wordBreak: 'break-word', maxWidth: '100%', width: '100%', overflowX: 'hidden', paddingLeft: '0.5rem', paddingRight: '0.5rem', boxSizing: 'border-box' }}>
              <TextReveal text={props.title} variant="word" delay={0.4} stagger={0.1} />
            </h1>
            
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              style={{ maxWidth: '100%', overflowX: 'hidden', width: '100%' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                style={{ maxWidth: '100%', overflowX: 'hidden' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={props.cta1.link} style={{ display: 'inline-block', maxWidth: '100%' }}>
                  <Button size="lg" className="relative overflow-hidden group" style={{ maxWidth: '100%' }}>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                      style={{ maxWidth: '100%' }}
                    />
                    <span className="relative z-10 flex items-center">
                      {props.cta1.text}
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2" size={20} />
                      </motion.span>
                    </span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                style={{ maxWidth: '100%', overflowX: 'hidden' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to={props.cta2.link} style={{ display: 'inline-block', maxWidth: '100%' }}>
                  <Button variant="outline" size="lg" className="border-2 border-white/30 hover:border-primary-400" style={{ maxWidth: '100%' }}>
                  <Phone className="mr-2" size={20} />
                  {props.cta2.text}
                </Button>
              </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Original split variant (enhanced)
  if (variant === 'split') {
    return (
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
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
                <TextReveal text={props.title} variant="word" delay={0.2} stagger={0.08} />
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
              whileHover={{ scale: 1.02, rotateY: 5 }}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
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
