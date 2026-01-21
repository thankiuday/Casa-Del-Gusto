import React from 'react';
import Container from './Container';
import {
  Skeleton,
  HeroSkeleton,
  CardSkeleton,
  MenuItemSkeleton,
  BlogCardSkeleton,
  GalleryItemSkeleton,
  SectionSkeleton,
} from './Skeleton';

// Home Page Skeleton
export const HomePageSkeleton = () => (
  <div>
    <HeroSkeleton />
    <SectionSkeleton>
      <div className="text-center mb-12">
        <Skeleton variant="text" width="200px" height="20px" className="mx-auto mb-4" />
        <Skeleton variant="text" width="400px" height="40px" className="mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </SectionSkeleton>
  </div>
);

// Menu Page Skeleton
export const MenuPageSkeleton = () => (
  <div>
    {/* Hero */}
    <div className="h-[50vh] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <Container className="text-center">
        <Skeleton variant="text" width="150px" height="20px" className="mx-auto mb-4" />
        <Skeleton variant="text" width="400px" height="48px" className="mx-auto" />
      </Container>
    </div>
    
    {/* Content */}
    <SectionSkeleton className="bg-white dark:bg-gray-900">
      {/* Search */}
      <div className="mb-8 max-w-md mx-auto">
        <Skeleton height="48px" />
      </div>
      
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} width="120px" height="40px" />
        ))}
      </div>
      
      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(9)].map((_, i) => (
          <MenuItemSkeleton key={i} />
        ))}
      </div>
    </SectionSkeleton>
  </div>
);

// Blog Page Skeleton
export const BlogPageSkeleton = () => (
  <div>
    {/* Hero */}
    <div className="h-[50vh] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <Container className="text-center">
        <Skeleton variant="text" width="150px" height="20px" className="mx-auto mb-4" />
        <Skeleton variant="text" width="400px" height="48px" className="mx-auto" />
      </Container>
    </div>
    
    {/* Content */}
    <SectionSkeleton className="bg-white dark:bg-gray-900">
      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Skeleton height="48px" className="flex-1" />
        <Skeleton width="200px" height="48px" />
      </div>
      
      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </SectionSkeleton>
  </div>
);

// Gallery Page Skeleton
export const GalleryPageSkeleton = () => (
  <div>
    {/* Hero */}
    <div className="h-[50vh] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <Container className="text-center">
        <Skeleton variant="text" width="150px" height="20px" className="mx-auto mb-4" />
        <Skeleton variant="text" width="400px" height="48px" className="mx-auto" />
      </Container>
    </div>
    
    {/* Content */}
    <SectionSkeleton className="bg-white dark:bg-gray-900">
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} width="100px" height="40px" />
        ))}
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => (
          <GalleryItemSkeleton key={i} />
        ))}
      </div>
    </SectionSkeleton>
  </div>
);

// About Page Skeleton
export const AboutPageSkeleton = () => (
  <div>
    {/* Hero */}
    <div className="h-[50vh] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <Container className="text-center">
        <Skeleton variant="text" width="150px" height="20px" className="mx-auto mb-4" />
        <Skeleton variant="text" width="400px" height="48px" className="mx-auto" />
      </Container>
    </div>
    
    {/* Content */}
    <SectionSkeleton className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <Skeleton height="400px" />
        <div className="space-y-4">
          <Skeleton variant="text" width="40%" height="20px" />
          <Skeleton variant="text" width="80%" height="40px" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="90%" />
        </div>
      </div>
    </SectionSkeleton>
  </div>
);

// Contact Page Skeleton
export const ContactPageSkeleton = () => (
  <div>
    {/* Hero */}
    <div className="h-[50vh] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <Container className="text-center">
        <Skeleton variant="text" width="150px" height="20px" className="mx-auto mb-4" />
        <Skeleton variant="text" width="400px" height="48px" className="mx-auto" />
      </Container>
    </div>
    
    {/* Content */}
    <SectionSkeleton className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="space-y-6">
          <Skeleton variant="text" width="50%" height="32px" />
          <Skeleton height="56px" />
          <Skeleton height="56px" />
          <Skeleton height="56px" />
          <Skeleton height="150px" />
          <Skeleton height="48px" />
        </div>
        
        {/* Info */}
        <div className="space-y-8">
          <Skeleton height="250px" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton width="48px" height="48px" />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" width="40%" />
                  <Skeleton variant="text" width="60%" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionSkeleton>
  </div>
);

// Reservations Page Skeleton
export const ReservationsPageSkeleton = () => (
  <div>
    {/* Hero */}
    <div className="h-[50vh] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <Container className="text-center">
        <Skeleton variant="text" width="150px" height="20px" className="mx-auto mb-4" />
        <Skeleton variant="text" width="400px" height="48px" className="mx-auto" />
      </Container>
    </div>
    
    {/* Form */}
    <SectionSkeleton className="bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto space-y-6">
        <Skeleton variant="text" width="40%" height="32px" className="mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton height="56px" />
          <Skeleton height="56px" />
          <Skeleton height="56px" />
          <Skeleton height="56px" />
          <Skeleton height="56px" />
          <Skeleton height="56px" />
        </div>
        <Skeleton height="150px" />
        <Skeleton height="48px" />
      </div>
    </SectionSkeleton>
  </div>
);

export default {
  HomePageSkeleton,
  MenuPageSkeleton,
  BlogPageSkeleton,
  GalleryPageSkeleton,
  AboutPageSkeleton,
  ContactPageSkeleton,
  ReservationsPageSkeleton,
};
