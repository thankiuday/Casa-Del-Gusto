import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, SectionTitle, Tabs, Card, Badge, Button } from '../ui';
import { menuData, categories } from '../../data/menuData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? menuData.slice(0, 6)
    : menuData.filter(item => item.category === activeCategory).slice(0, 6);

  const tabs = categories.map(category => ({
    label: category.name,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(category.id === 'all' ? menuData.slice(0, 6) : menuData.filter(item => item.category === category.id).slice(0, 6)).map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover>
              <Card.Image src={item.image} alt={item.name} className="h-48" />
              <Card.Body>
                <div className="flex items-start justify-between mb-2">
                  <Card.Title className="text-lg">{item.name}</Card.Title>
                  <span className="text-xl font-bold text-primary-500 whitespace-nowrap ml-2">
                    ${item.price}
                  </span>
                </div>
                <Card.Text className="text-sm line-clamp-2">
                  {item.description}
                </Card.Text>
                {item.dietary.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.dietary.map((tag, i) => (
                      <Badge key={i} variant="primary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    ),
  }));

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <Container>
        <SectionTitle
          subtitle="Our Menu"
          title="Explore Our Dishes"
          align="center"
          className="mb-12"
        />

        <Tabs tabs={tabs} />

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button size="lg">
              View Complete Menu
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default MenuPreview;
