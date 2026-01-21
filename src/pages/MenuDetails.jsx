import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Flame } from 'lucide-react';
import { Container, Button, Badge, Card } from '../components/ui';
import { menuData } from '../data/menuData';

const MenuDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = menuData.find(item => item.id === parseInt(id));

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Dish not found</h2>
          <Link to="/menu">
            <Button>Back to Menu</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedDishes = menuData
    .filter(item => item.category === dish.category && item.id !== dish.id)
    .slice(0, 3);

  return (
    <>
      <section className="section-padding bg-white dark:bg-gray-900 pt-32">
        <Container>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-primary-500 hover:text-primary-600 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Menu
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-elegant-lg"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="primary">{dish.category}</Badge>
                {dish.popular && <Badge variant="success">Popular</Badge>}
                {dish.dietary.map((tag, i) => (
                  <Badge key={i} variant="info">{tag}</Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {dish.name}
              </h1>

              <p className="text-3xl font-bold text-primary-500 mb-6">
                ${dish.price}
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {dish.description}
              </p>

              {/* Additional Info */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Dish Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="mr-3 text-primary-500" size={20} />
                    <span>Preparation time: 15-20 minutes</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users className="mr-3 text-primary-500" size={20} />
                    <span>Serves: 1-2 people</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Flame className="mr-3 text-primary-500" size={20} />
                    <span>Spice level: Medium</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/reservations" className="flex-1">
                  <Button fullWidth size="lg">Book a Table</Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button variant="outline" fullWidth size="lg">Contact Us</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Related Dishes */}
      {relatedDishes.length > 0 && (
        <section className="section-padding bg-gray-50 dark:bg-gray-800">
          <Container>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              You May Also Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedDishes.map((item) => (
                <Link key={item.id} to={`/menu/${item.id}`}>
                  <Card hover>
                    <Card.Image src={item.image} alt={item.name} />
                    <Card.Body>
                      <div className="flex items-start justify-between mb-2">
                        <Card.Title className="text-lg">{item.name}</Card.Title>
                        <span className="text-xl font-bold text-primary-500 whitespace-nowrap ml-2">
                          ${item.price}
                        </span>
                      </div>
                      <Card.Text className="text-sm">{item.description}</Card.Text>
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

export default MenuDetails;
