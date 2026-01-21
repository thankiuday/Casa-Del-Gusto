import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Coffee, Star } from 'lucide-react';
import { Container } from '../ui';

const Stats = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: Award, value: '15+', label: 'Awards Won' },
    { icon: Coffee, value: '50+', label: 'Menu Items' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
  ];

  return (
    <section className="section-padding bg-primary-600 text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <p className="text-4xl md:text-5xl font-bold font-display mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-100 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
