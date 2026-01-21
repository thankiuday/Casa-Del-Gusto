import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Clock } from 'lucide-react';
import { Container, Button } from '../ui';
import { Link } from 'react-router-dom';

const ReservationCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Experience Fine Dining?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Reserve your table today and discover why we&apos;re the city&apos;s favorite dining destination
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/reservations">
                <Button variant="secondary" size="lg">
                  <Calendar className="mr-2" size={20} />
                  Book a Table
                </Button>
              </Link>
              <a href="tel:+15551234567">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  <Phone className="mr-2" size={20} />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Opening Hours */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold mb-1">Monday - Friday</p>
                <p className="text-sm text-primary-100">11:00 AM - 10:00 PM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold mb-1">Saturday - Sunday</p>
                <p className="text-sm text-primary-100">10:00 AM - 11:00 PM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold mb-1">Call Us</p>
                <p className="text-sm text-primary-100">+1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ReservationCTA;
