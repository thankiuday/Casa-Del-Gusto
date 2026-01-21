import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, SectionTitle, Button } from '../ui';
import { galleryData } from '../../data/galleryData';
import { Link } from 'react-router-dom';

const GalleryPreview = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });
  const previewImages = galleryData.slice(0, 6);

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, index: 0 });
  };

  const nextImage = () => {
    setLightbox(prev => ({
      isOpen: true,
      index: (prev.index + 1) % previewImages.length
    }));
  };

  const prevImage = () => {
    setLightbox(prev => ({
      isOpen: true,
      index: (prev.index - 1 + previewImages.length) % previewImages.length
    }));
  };

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <Container>
        <SectionTitle
          subtitle="Gallery"
          title="Moments Worth Capturing"
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-center px-4">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button size="lg">View Full Gallery</Button>
          </Link>
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-primary-400 transition-colors p-2 bg-black/50 rounded-full"
              aria-label="Close lightbox"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors p-2 bg-black/50 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors p-2 bg-black/50 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="sm:w-12 sm:h-12" />
            </button>

            <motion.img
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={previewImages[lightbox.index].image}
              alt={previewImages[lightbox.index].title}
              className="max-w-full max-h-[60vh] sm:max-h-[70vh] md:max-h-full object-contain"
            />

            <div className="absolute bottom-4 left-0 right-0 text-center text-white px-4">
              <p className="text-base sm:text-lg font-medium">{previewImages[lightbox.index].title}</p>
              <p className="text-xs sm:text-sm text-gray-400">
                {lightbox.index + 1} / {previewImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;
