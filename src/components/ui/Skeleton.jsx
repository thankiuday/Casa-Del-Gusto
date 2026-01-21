import React from 'react';

// Base Skeleton component
export const Skeleton = ({ className = '', variant = 'rectangular', width, height, animation = true }) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';
  const animationClasses = animation ? 'animate-pulse' : '';
  
  const variantClasses = {
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    text: 'rounded-md h-4',
  };

  const style = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%'),
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses} ${className}`}
      style={style}
    />
  );
};

// Card Skeleton
export const CardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
    <Skeleton height="200px" className="rounded-none" />
    <div className="p-6 space-y-3">
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <div className="flex justify-between items-center pt-4">
        <Skeleton variant="text" width="30%" />
        <Skeleton width="80px" height="36px" />
      </div>
    </div>
  </div>
);

// Hero Skeleton
export const HeroSkeleton = () => (
  <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="text-center space-y-6 px-4 max-w-4xl mx-auto">
      <Skeleton variant="text" width="200px" height="20px" className="mx-auto" />
      <Skeleton variant="text" width="80%" height="60px" className="mx-auto" />
      <Skeleton variant="text" width="60%" height="24px" className="mx-auto" />
      <div className="flex gap-4 justify-center pt-4">
        <Skeleton width="150px" height="48px" />
        <Skeleton width="150px" height="48px" />
      </div>
    </div>
  </div>
);

// Menu Item Skeleton
export const MenuItemSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
    <Skeleton height="224px" className="rounded-none" />
    <div className="p-6 space-y-3">
      <div className="flex justify-between items-start">
        <Skeleton variant="text" width="60%" height="24px" />
        <Skeleton variant="text" width="20%" height="24px" />
      </div>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="90%" />
      <div className="flex gap-2 pt-2">
        <Skeleton width="60px" height="24px" className="rounded-full" />
        <Skeleton width="80px" height="24px" className="rounded-full" />
      </div>
    </div>
  </div>
);

// Blog Card Skeleton
export const BlogCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
    <Skeleton height="200px" className="rounded-none" />
    <div className="p-6 space-y-3">
      <Skeleton width="80px" height="24px" className="rounded-full" />
      <Skeleton variant="text" width="80%" height="28px" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="90%" />
      <div className="flex items-center gap-3 pt-4">
        <Skeleton variant="circular" width="40px" height="40px" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="60%" />
        </div>
      </div>
    </div>
  </div>
);

// Gallery Item Skeleton
export const GalleryItemSkeleton = () => (
  <Skeleton height="250px" className="rounded-lg" />
);

// Team Member Skeleton
export const TeamMemberSkeleton = () => (
  <div className="text-center space-y-4">
    <Skeleton variant="circular" width="200px" height="200px" className="mx-auto" />
    <Skeleton variant="text" width="60%" height="24px" className="mx-auto" />
    <Skeleton variant="text" width="40%" className="mx-auto" />
    <Skeleton variant="text" width="80%" className="mx-auto" />
  </div>
);

// Testimonial Skeleton
export const TestimonialSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-4">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} width="20px" height="20px" />
      ))}
    </div>
    <Skeleton variant="text" width="100%" />
    <Skeleton variant="text" width="100%" />
    <Skeleton variant="text" width="80%" />
    <div className="flex items-center gap-3 pt-4">
      <Skeleton variant="circular" width="48px" height="48px" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="30%" />
      </div>
    </div>
  </div>
);

// Section Skeleton
export const SectionSkeleton = ({ children, className = '' }) => (
  <div className={`section-padding ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </div>
);

export default Skeleton;
