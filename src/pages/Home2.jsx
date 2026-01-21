import React from 'react';
import {
  Hero,
  MenuPreview,
  ReservationCTA,
  GalleryPreview,
  ChefStory,
  FeaturedDishes,
  Testimonials,
  FAQ,
} from '../components/sections';

const Home2 = () => {
  return (
    <>
      <Hero
        variant="split"
        title="Authentic Flavors, Unforgettable Moments"
        subtitle="Fine Dining Experience"
        description="Discover the perfect blend of traditional recipes and modern culinary artistry in an elegant atmosphere."
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=1080&fit=crop"
      />
      <MenuPreview />
      <ReservationCTA />
      <GalleryPreview />
      <ChefStory />
      <FeaturedDishes />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home2;
