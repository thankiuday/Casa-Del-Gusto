import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, SectionTitle, Card, Badge, Button, SEO } from '../components/ui';
import { menuData, categories } from '../data/menuData';
import { Hero } from '../components/sections';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Our Menu - CASA DEL GUSTO"
        description="Explore our exquisite menu featuring breakfast, lunch, dinner, desserts, and drinks. Fresh ingredients, authentic flavors."
        keywords="restaurant menu, food menu, dishes, breakfast, lunch, dinner, desserts"
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
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
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&h=1080&fit=crop"
              alt="Menu"
              className="w-full h-full object-cover"
              style={{ maxWidth: '100%', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              animate={{
                filter: ['brightness(0.4)', 'brightness(0.5)', 'brightness(0.4)'],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"
              style={{ width: '100%', height: '100%', maxWidth: '100vw', left: 0, right: 0, top: 0, bottom: 0 }}
            animate={{
              background: [
                'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
                'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.7), rgba(0,0,0,0.6))',
                'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          </motion.div>
        </div>
        <div className="relative z-10 text-center text-white w-full mx-auto" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%', paddingLeft: 'clamp(0.75rem, 4vw, 2rem)', paddingRight: 'clamp(0.75rem, 4vw, 2rem)', boxSizing: 'border-box', overflowX: 'hidden' }}>
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
            style={{ maxWidth: '100%', overflowX: 'hidden', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
          >
            <motion.p 
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4 break-words" 
              style={{ wordBreak: 'break-word' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Menu
            </motion.p>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold break-words" 
              style={{ wordBreak: 'break-word', maxWidth: '100%' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block"
              >
                Discover Our Dishes
              </motion.span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
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

          {/* Menu Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={`/menu/${item.id}`}>
                    <Card hover>
                      <Card.Image src={item.image} alt={item.name} className="h-56" />
                      <Card.Body>
                        <div className="flex items-start justify-between mb-2">
                          <Card.Title className="text-lg flex-1">{item.name}</Card.Title>
                          <span className="text-2xl font-bold text-primary-500 whitespace-nowrap ml-2">
                            ${item.price}
                          </span>
                        </div>
                        <Card.Text className="text-sm mb-4">{item.description}</Card.Text>
                        {item.dietary.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {item.dietary.map((tag, i) => (
                              <Badge key={i} variant="primary" size="sm">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No dishes found matching your search.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Menu;
