import React from 'react';
import { SEO } from '../components/ui';
import {
  Hero,
  FeaturedDishes,
  ChefStory,
  MenuPreview,
  Stats,
  Testimonials,
  GalleryPreview,
  Newsletter,
} from '../components/sections';

const Home1 = () => {
  return (
    <>
      <SEO
        title="CASA DEL GUSTO - Premium Fine Dining Experience"
        description="Experience culinary excellence with our carefully crafted dishes made from the finest ingredients. Book your table today."
        keywords="restaurant, fine dining, food, gourmet, reservations, best restaurant, Casa Del Gusto"
      />
      <Hero variant="cinematic" />
      <FeaturedDishes />
      <ChefStory />
      <MenuPreview />
      <Stats />
      <Testimonials />
      <GalleryPreview />
      <Newsletter />
    </>
  );
};

export default Home1;
