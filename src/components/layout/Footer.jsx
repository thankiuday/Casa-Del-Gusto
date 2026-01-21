import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Container, Logo } from '../ui';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Menu', path: '/menu' },
      { name: 'Reservations', path: '/reservations' },
    ],
    explore: [
      { name: 'Gallery', path: '/gallery' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-secondary-800 dark:bg-gray-950 text-white">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Section */}
            <div>
              <div className="mb-4">
                <Logo showTagline={true} size="default" variant="dark" />
              </div>
              <p className="text-gray-400 mb-6">
                Experience culinary excellence with our carefully crafted dishes made from the finest ingredients.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-primary-500 flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-lg font-bold mb-4">Explore</h3>
              <ul className="space-y-2">
                {footerLinks.explore.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-400">
                  <MapPin size={20} className="mt-0.5 flex-shrink-0 text-primary-400" />
                  <span>123 Restaurant Street, Foodie City, FC 12345</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Phone size={20} className="flex-shrink-0 text-primary-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <Mail size={20} className="flex-shrink-0 text-primary-400" />
                  <span>info@restaurant.com</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-secondary-700 dark:bg-gray-900 rounded-lg">
                <p className="text-sm font-semibold mb-1">Opening Hours</p>
                <p className="text-sm text-gray-400">Mon - Fri: 11:00 AM - 10:00 PM</p>
                <p className="text-sm text-gray-400">Sat - Sun: 10:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 dark:border-gray-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} CASA DEL GUSTO. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Designed with ❤️ for ThemeForest
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
