import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, SectionTitle } from '../components/ui';
import { galleryData, galleryCategories } from '../data/galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const filteredImages = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, index: 0 });
  };

  const nextImage = () => {
    setLightbox(prev => ({
      isOpen: true,
      index: (prev.index + 1) % filteredImages.length
    }));
  };

  const prevImage = () => {
    setLightbox(prev => ({
      isOpen: true,
      index: (prev.index - 1 + filteredImages.length) % filteredImages.length
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <motion.div 
          className="absolute inset-0 z-0 w-full" 
          style={{ maxWidth: '100vw', overflowX: 'hidden' }}
          animate={{
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop"
            alt="Gallery"
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', width: '100%' }}
            animate={{
              filter: ['brightness(0.4)', 'brightness(0.5)', 'brightness(0.4)'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-black/70"
            animate={{
              background: [
                'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
                'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.7), rgba(0,0,0,0.6))',
                'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <Container className="relative z-10 text-center text-white w-full" style={{ maxWidth: '100vw' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
            style={{ maxWidth: '100%', overflowX: 'hidden', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
          >
            <motion.p 
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4 break-words" 
              style={{ wordBreak: 'break-word' }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gallery
            </motion.p>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold break-words" 
              style={{ wordBreak: 'break-word', maxWidth: '100%' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block"
              >
                Our Visual Story
              </motion.span>
            </motion.h1>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <SectionTitle
            subtitle="Explore"
            title="Moments Worth Capturing"
            align="center"
            className="mb-12"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => openLightbox(index)}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{image.title}</p>
                    <p className="text-sm text-gray-300">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-primary-400 transition-colors z-10 p-2 bg-black/50 rounded-full"
              aria-label="Close lightbox"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10 p-2 bg-black/50 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10 p-2 bg-black/50 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="sm:w-12 sm:h-12" />
            </button>

            <motion.div
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-full"
            >
              <img
                src={filteredImages[lightbox.index].image}
                alt={filteredImages[lightbox.index].title}
                className="max-w-full max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center text-white px-4">
                <p className="text-lg sm:text-xl font-semibold">{filteredImages[lightbox.index].title}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{filteredImages[lightbox.index].description}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  {lightbox.index + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
