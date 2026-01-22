import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Container, SectionTitle, Input, TextArea, Button, SEO } from '../components/ui';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Restaurant Street', 'Foodie City, FC 12345'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@restaurant.com', 'reservations@restaurant.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 11:00 AM - 10:00 PM', 'Sat-Sun: 10:00 AM - 11:00 PM'],
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us - CASA DEL GUSTO"
        description="Get in touch with us. Find our location, hours, phone, and email. We'd love to hear from you."
        keywords="contact restaurant, restaurant location, restaurant hours, contact us"
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden w-full" style={{ maxWidth: '100vw', overflowX: 'hidden', width: '100vw', left: 0, right: 0, margin: 0, padding: 0 }}>
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ maxWidth: '100vw', width: '100%', left: 0, right: 0, top: 0, bottom: 0 }}>
          <motion.div 
            className="absolute inset-0" 
            style={{ 
              maxWidth: '100vw', 
              overflowX: 'hidden',
              width: '100%',
              height: '100%',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }}
            animate={{
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop"
              alt="Contact"
              className="w-full h-full object-cover"
              style={{ maxWidth: '100%', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
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
              className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/60 to-black/70"
              style={{ width: '100%', height: '100%', maxWidth: '100vw', left: 0, right: 0, top: 0, bottom: 0 }}
            animate={{
              background: [
                'linear-gradient(to top right, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
                'linear-gradient(to top right, rgba(0,0,0,0.6), rgba(0,0,0,0.7), rgba(0,0,0,0.6))',
                'linear-gradient(to top right, rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.7))',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          </motion.div>
        </div>
        <div className="relative z-10 text-center text-white w-full mx-auto" style={{ maxWidth: 'min(100vw, 1280px)', width: '100%', paddingLeft: 'clamp(0.75rem, 4vw, 2rem)', paddingRight: 'clamp(0.75rem, 4vw, 2rem)', boxSizing: 'border-box', overflowX: 'hidden' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
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
              Get in Touch
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
                Contact Us
              </motion.span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                title="We'd Love to Hear From You"
                subtitle="Contact Information"
                align="left"
                className="mb-8"
              />

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=600&fit=crop"
                  alt="Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg">
                    <p className="text-gray-900 dark:text-white font-medium">
                      📍 123 Restaurant Street, Foodie City
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                title="Send Us a Message"
                subtitle="Contact Form"
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
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for contacting us. We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      placeholder="John"
                      required
                      error={errors.firstName?.message}
                      {...register('firstName', { required: 'First name is required' })}
                    />
                    <Input
                      label="Last Name"
                      placeholder="Doe"
                      required
                      error={errors.lastName?.message}
                      {...register('lastName', { required: 'Last name is required' })}
                    />
                  </div>

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

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    {...register('phone')}
                  />

                  <Input
                    label="Subject"
                    placeholder="What is this regarding?"
                    required
                    error={errors.subject?.message}
                    {...register('subject', { required: 'Subject is required' })}
                  />

                  <TextArea
                    label="Message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    error={errors.message?.message}
                    {...register('message', { required: 'Message is required' })}
                  />

                  <Button type="submit" size="lg" fullWidth>
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
