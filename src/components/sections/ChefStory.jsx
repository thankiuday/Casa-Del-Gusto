import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';
import { Container, Button } from '../ui';
import { Link } from 'react-router-dom';

const ChefStory = () => {
  const stats = [
    { icon: Clock, label: 'Years Experience', value: '20+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Users, label: 'Happy Customers', value: '10K+' },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-elegant-lg">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=800&fit=crop"
                alt="Chef Marco Rossi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-primary-500 text-white p-4 sm:p-8 rounded-xl shadow-lg">
              <p className="text-2xl sm:text-4xl font-bold">20+</p>
              <p className="text-xs sm:text-sm">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary-500 text-sm font-semibold tracking-wider uppercase mb-4">
              Meet Our Chef
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
              Crafting Culinary Masterpieces
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Chef Marco Rossi brings over two decades of culinary expertise, blending traditional
              Italian techniques with modern innovation. His passion for fresh, local ingredients
              and commitment to excellence is reflected in every dish.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Trained in the finest restaurants across Europe, Chef Marco has earned numerous
              accolades and the hearts of food enthusiasts worldwide. His philosophy is simple:
              respect the ingredients, honor the craft, and create memorable experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center sm:text-left lg:text-center">
                    <Icon className="w-8 h-8 text-primary-500 mx-auto sm:mx-0 lg:mx-auto mb-2" />
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center sm:justify-start lg:justify-center">
              <Link to="/about">
                <Button size="lg">Learn More About Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ChefStory;
