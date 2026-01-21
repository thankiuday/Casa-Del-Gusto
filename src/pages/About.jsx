import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Leaf, Users } from 'lucide-react';
import { Container, SectionTitle, Card, SEO } from '../components/ui';
import { teamData } from '../data/teamData';
import { Stats } from '../components/sections';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every dish is prepared with love and dedication to culinary excellence.',
    },
    {
      icon: Leaf,
      title: 'Quality',
      description: 'We source the finest local and organic ingredients for authentic flavors.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Award-winning cuisine that sets the standard for fine dining.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with our guests and local partners.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us - CASA DEL GUSTO"
        description="Learn about our story, our passion for culinary excellence, and meet our talented team of chefs and staff."
        keywords="about us, restaurant story, chef, culinary team, fine dining experience"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop"
            alt="About Us"
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
              About Us
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              Our Story
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="Since 2004"
                title="Two Decades of Culinary Excellence"
                align="left"
                className="mb-6"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our journey began with a simple vision: to create a dining experience that combines
                authentic flavors with modern sophistication. What started as a small family restaurant
                has grown into one of the city&apos;s most beloved culinary destinations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Led by Chef Marco Rossi, our team is dedicated to sourcing the finest ingredients,
                mastering traditional techniques, and constantly innovating to surprise and delight
                our guests. Every plate that leaves our kitchen tells a story of passion, precision,
                and respect for the culinary arts.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we continue to honor our roots while embracing new culinary horizons, creating
                memorable experiences for every guest who walks through our doors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-elegant-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Stats />

      {/* Values Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <Container>
          <SectionTitle
            subtitle="Our Values"
            title="What We Stand For"
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center p-8 h-full">
                    <Icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <Container>
          <SectionTitle
            subtitle="Our Team"
            title="Meet the Masters"
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <Card.Image src={member.image} alt={member.name} className="h-80" />
                  <Card.Body className="text-center">
                    <Card.Title>{member.name}</Card.Title>
                    <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                    <Card.Text className="text-sm">{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
