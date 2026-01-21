import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Container, Button, Badge, Card } from '../components/ui';
import { blogData } from '../data/blogData';

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogData.find(item => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Article not found</h2>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogData
    .filter(item => item.category === post.category && item.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <section className="section-padding bg-white dark:bg-gray-900 pt-32">
        <Container className="max-w-4xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-primary-500 hover:text-primary-600 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="primary">{post.category}</Badge>
              {post.tags.map((tag, i) => (
                <Badge key={i} variant="default" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {/* Author & Date */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{post.author.name}</p>
                  <p className="text-sm">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <Calendar size={16} className="mr-2 flex-shrink-0" />
                <span className="line-clamp-1">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <Clock size={16} className="mr-2 flex-shrink-0" />
                {post.readTime}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-elegant-lg mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {post.excerpt}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.content}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Share Buttons */}
            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-12">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Share2 className="mr-2" size={20} />
                  <span className="font-medium">Share this article:</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors">
                    <Facebook size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center transition-colors">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 mb-12">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    About {post.author.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                    {post.author.role} - Passionate about creating exceptional culinary experiences and sharing knowledge with food enthusiasts.
                  </p>
                  <Link to="/about">
                    <Button variant="outline" size="sm">View Profile</Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50 dark:bg-gray-800">
          <Container>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                  <Card hover>
                    <Card.Image src={relatedPost.image} alt={relatedPost.title} />
                    <Card.Body>
                      <Badge variant="primary" size="sm" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <Card.Title className="text-lg mb-2">{relatedPost.title}</Card.Title>
                      <Card.Text className="text-sm line-clamp-2">{relatedPost.excerpt}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default BlogDetails;
