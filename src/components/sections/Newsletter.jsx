import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
import { Container, Input, Button } from '../ui';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="section-padding bg-secondary-800 dark:bg-gray-950 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="w-16 h-16 text-primary-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for exclusive offers, new menu items, and special events.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center text-green-400"
              >
                <CheckCircle className="mr-2" size={24} />
                <span className="text-lg font-medium">Thank you for subscribing!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                />
                <Button type="submit" size="lg">
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
