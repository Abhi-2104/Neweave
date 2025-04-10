import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">Neweave</span>
            </div>
            <p className="text-green-100">
              Sustainable fashion that honors life and protects our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="hover:text-green-300 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-green-300 transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2">
              <li>GOTS Certified Organic</li>
              <li>Fair Trade Certified</li>
              <li>Zero Waste Production</li>
              <li>Carbon Neutral</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Join our movement for sustainable fashion.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-green-800 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="w-full px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-800 text-center text-green-300">
          <p>&copy; 2024 Neweave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;