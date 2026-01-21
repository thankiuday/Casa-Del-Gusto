import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import { Layout } from '../components/layout';
import {
  SEOProvider,
  ScrollRestoration,
  HomePageSkeleton,
  MenuPageSkeleton,
  BlogPageSkeleton,
  GalleryPageSkeleton,
  AboutPageSkeleton,
  ContactPageSkeleton,
  ReservationsPageSkeleton,
} from '../components/ui';

// Lazy load pages for code splitting
const Home1 = lazy(() => import('../pages/Home1'));
const Home2 = lazy(() => import('../pages/Home2'));
const About = lazy(() => import('../pages/About'));
const Menu = lazy(() => import('../pages/Menu'));
const MenuDetails = lazy(() => import('../pages/MenuDetails'));
const Reservations = lazy(() => import('../pages/Reservations'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Blog = lazy(() => import('../pages/Blog'));
const BlogDetails = lazy(() => import('../pages/BlogDetails'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <SEOProvider>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={
                <Suspense fallback={<HomePageSkeleton />}>
                  <Home1 />
                </Suspense>
              } />
              <Route path="/home2" element={
                <Suspense fallback={<HomePageSkeleton />}>
                  <Home2 />
                </Suspense>
              } />
              <Route path="/about" element={
                <Suspense fallback={<AboutPageSkeleton />}>
                  <About />
                </Suspense>
              } />
              <Route path="/menu" element={
                <Suspense fallback={<MenuPageSkeleton />}>
                  <Menu />
                </Suspense>
              } />
              <Route path="/menu/:id" element={
                <Suspense fallback={<MenuPageSkeleton />}>
                  <MenuDetails />
                </Suspense>
              } />
              <Route path="/reservations" element={
                <Suspense fallback={<ReservationsPageSkeleton />}>
                  <Reservations />
                </Suspense>
              } />
              <Route path="/gallery" element={
                <Suspense fallback={<GalleryPageSkeleton />}>
                  <Gallery />
                </Suspense>
              } />
              <Route path="/blog" element={
                <Suspense fallback={<BlogPageSkeleton />}>
                  <Blog />
                </Suspense>
              } />
              <Route path="/blog/:slug" element={
                <Suspense fallback={<BlogPageSkeleton />}>
                  <BlogDetails />
                </Suspense>
              } />
              <Route path="/contact" element={
                <Suspense fallback={<ContactPageSkeleton />}>
                  <Contact />
                </Suspense>
              } />
              <Route path="*" element={
                <Suspense fallback={<HomePageSkeleton />}>
                  <NotFound />
                </Suspense>
              } />
            </Routes>
          </Layout>
        </ThemeProvider>
      </SEOProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
