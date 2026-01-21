import React from 'react';
import { motion } from 'framer-motion';
import { Container, SectionTitle, Card, Button, Badge } from '../ui';
import { menuData } from '../../data/menuData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedDishes = () => {
  const featured = menuData.filter(item => item.popular).slice(0, 3);

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <Container>
        <SectionTitle
          subtitle="Our Specialties"
          title="Signature Dishes"
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover>
                <Card.Image src={dish.image} alt={dish.name} />
                <Card.Body>
                  <div className="flex items-start justify-between mb-2">
                    <Card.Title>{dish.name}</Card.Title>
                    <span className="text-2xl font-bold text-primary-500">
                      ${dish.price}
                    </span>
                  </div>
                  <Card.Text className="mb-4">{dish.description}</Card.Text>
                  <div className="flex flex-wrap gap-2">
                    {dish.dietary.map((tag, i) => (
                      <Badge key={i} variant="primary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Link to={`/menu/${dish.id}`} className="w-full">
                    <Button variant="ghost" fullWidth>
                      View Details
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button size="lg">
              View Full Menu
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedDishes;
