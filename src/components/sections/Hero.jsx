import React from 'react';
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

  if (variant === 'fullscreen') {
    return (
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={props.image}
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <Container className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
              {props.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              {props.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              {props.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
