import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';
import { Container, SectionTitle, Input, TextArea, Button, SEO, Modal } from '../components/ui';

const Reservations = () => {
  const [submitted, setSubmitted] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setReservationData(data);
    setSubmitted(true);
    reset();
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    setReservationData(null);
  };

  return (
    <>
      <SEO
        title="Book a Table - CASA DEL GUSTO"
        description="Make a reservation at our restaurant. Easy online booking for your perfect dining experience. Reserve your table today."
        keywords="restaurant reservation, book table, dining reservation, table booking"
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <motion.div 
          className="absolute inset-0 z-0 w-full" 
          style={{ maxWidth: '100vw', overflowX: 'hidden' }}
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop"
            alt="Reservations"
            className="w-full h-full object-cover"
            style={{ maxWidth: '100%', width: '100%' }}
            animate={{
              filter: ['brightness(0.4)', 'brightness(0.5)', 'brightness(0.4)'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"
            animate={{
              background: [
                'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
                'linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.7), rgba(0,0,0,0.6))',
                'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <Container className="relative z-10 text-center text-white w-full" style={{ maxWidth: '100vw' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
            style={{ maxWidth: '100%', overflowX: 'hidden', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
          >
            <motion.p 
              className="text-primary-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4 break-words" 
              style={{ wordBreak: 'break-word' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Book a Table
            </motion.p>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold break-words" 
              style={{ wordBreak: 'break-word', maxWidth: '100%' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block"
              >
                Make a Reservation
              </motion.span>
            </motion.h1>
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

      {/* Confirmation Modal */}
      <Modal
        isOpen={submitted}
        onClose={handleCloseModal}
        size="md"
        showCloseButton={false}
      >
        <div className="text-center py-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </motion.div>
          
          <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-3">
            Reservation Confirmed!
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for your reservation. We&apos;ll contact you shortly to confirm your booking.
          </p>

          {reservationData && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6 text-left">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Reservation Details
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <User className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                    <p className="text-gray-900 dark:text-white font-medium">{reservationData.name}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium">{reservationData.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white font-medium">{reservationData.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Date & Time</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {new Date(reservationData.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })} at {new Date(`2000-01-01T${reservationData.time}`).toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Guests</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {reservationData.guests} {reservationData.guests === '1' ? 'guest' : 'guests'}
                    </p>
                  </div>
                </div>
                {reservationData.message && (
                  <div className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Special Requests</p>
                      <p className="text-gray-900 dark:text-white font-medium">{reservationData.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <Button
            onClick={handleCloseModal}
            size="lg"
            fullWidth
            className="mt-4"
          >
            OK
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Reservations;
