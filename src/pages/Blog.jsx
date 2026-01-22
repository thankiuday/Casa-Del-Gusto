import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, SectionTitle, Card, Badge, SEO } from '../components/ui';
import { blogData, blogCategories } from '../data/blogData';
import { Hero } from '../components/sections';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogData.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogData.find(post => post.featured);

  return (
    <>
      <Hero 
        variant="typography"
        subtitle="Our Blog"
        title="Stories & Recipes"
        description="Discover culinary insights, recipes, and stories from our kitchen"
        image="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1920&h=1080&fit=crop"
        cta1={{ text: 'Read More', link: '/blog' }}
        cta2={{ text: 'View Menu', link: '/menu' }}
      />

      {/* Blog Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          {/* Featured Post */}
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="block mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-elegant-lg hover:shadow-elegant-lg transition-shadow"
              >
                <div className="h-96 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <Badge variant="primary" className="mb-4">Featured Post</Badge>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          )}

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {blogCategories.map(category => (
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

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={`/blog/${post.slug}`}>
                    <Card hover>
                      <Card.Image src={post.image} alt={post.title} className="h-56" />
                      <Card.Body>
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="primary" size="sm">{post.category}</Badge>
                        </div>
                        <Card.Title className="text-xl mb-3">{post.title}</Card.Title>
                        <Card.Text className="mb-4 line-clamp-2">{post.excerpt}</Card.Text>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No articles found matching your search.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Blog;
