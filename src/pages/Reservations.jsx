import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';
import { Container, SectionTitle, Input, TextArea, Button, SEO } from '../components/ui';

const Reservations = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEO
        title="Book a Table - CASA DEL GUSTO"
        description="Make a reservation at our restaurant. Easy online booking for your perfect dining experience. Reserve your table today."
        keywords="restaurant reservation, book table, dining reservation, table booking"
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop"
            alt="Reservations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <Container className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
              Book a Table
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Make a Reservation
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Reservation Form Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                title="Reserve Your Table"
                subtitle="Book Now"
                align="left"
                className="mb-8"
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Reservation Received!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for your reservation. We&apos;ll contact you shortly to confirm your booking.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      required
                      error={errors.name?.message}
                      {...register('name', { required: 'Name is required' })}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      error={errors.email?.message}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                  </div>

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    required
                    error={errors.phone?.message}
                    {...register('phone', { required: 'Phone number is required' })}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Date"
                      type="date"
                      required
                      error={errors.date?.message}
                      {...register('date', { required: 'Date is required' })}
                    />
                    <Input
                      label="Time"
                      type="time"
                      required
                      error={errors.time?.message}
                      {...register('time', { required: 'Time is required' })}
                    />
                  </div>

                  <Input
                    label="Number of Guests"
                    type="number"
                    min="1"
                    max="20"
                    placeholder="2"
                    required
                    error={errors.guests?.message}
                    {...register('guests', {
                      required: 'Number of guests is required',
                      min: { value: 1, message: 'Minimum 1 guest' },
                      max: { value: 20, message: 'Maximum 20 guests' },
                    })}
                  />

                  <TextArea
                    label="Special Requests"
                    placeholder="Any dietary restrictions or special occasions?"
                    rows={4}
                    {...register('message')}
                  />

                  <Button type="submit" size="lg" fullWidth>
                    Confirm Reservation
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                title="Important Information"
                subtitle="Before You Book"
                align="left"
                className="mb-8"
              />

              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <Clock className="w-8 h-8 text-primary-500 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Opening Hours
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Monday - Friday: 11:00 AM - 10:00 PM
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Saturday - Sunday: 10:00 AM - 11:00 PM
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <Users className="w-8 h-8 text-primary-500 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Group Reservations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    For parties of more than 10 guests, please call us directly to ensure we can accommodate your group.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <Calendar className="w-8 h-8 text-primary-500 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Cancellation Policy
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Please notify us at least 24 hours in advance if you need to cancel or modify your reservation.
                  </p>
                </div>

                <div className="bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-500 rounded-lg p-6">
                  <Phone className="w-8 h-8 text-primary-500 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Need Help?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Call us at: <strong>+1 (555) 123-4567</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Email: <strong>reservations@restaurant.com</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Reservations;
