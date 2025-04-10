import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Sun, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen relative flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 relative text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose T-shirts stained with dye, not people&apos;s blood
            </h1>
            <p className="text-xl mb-8">
              Join our mission for sustainable fashion that respects both people and planet.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-3 bg-green-600 rounded-lg text-lg font-semibold hover:bg-green-500 transition-colors"
            >
              Explore the Change
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              Every stitch tells a story of sustainability and respect for life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Leaf className="h-12 w-12 text-green-600" />,
                title: 'Sustainable Materials',
                description:
                  'We use only organic cotton and natural dyes, ensuring zero harm to the environment.',
              },
              {
                icon: <Heart className="h-12 w-12 text-green-600" />,
                title: 'Ethical Production',
                description:
                  'Fair wages and safe working conditions for all our artisans and workers.',
              },
              {
                icon: <Sun className="h-12 w-12 text-green-600" />,
                title: 'Solar Powered',
                description:
                  'Our workshop runs entirely on renewable solar energy, minimizing our carbon footprint.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-green-50"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Classic Organic Tee',
                price: '₹1,499',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Natural Dyed Henley',
                price: '₹1,799',
                image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
              {
                name: 'Earth Collection Tee',
                price: '₹1,699',
                image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full text-white">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="mb-4">{product.price}</p>
                    <button className="w-full py-2 bg-white text-gray-800 rounded hover:bg-green-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100%', label: 'Organic Materials' },
              { number: '50,000+', label: 'Trees Planted' },
              { number: '0', label: 'Toxic Chemicals' },
              { number: '100+', label: 'Artisan Families Supported' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="p-6"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the change. Subscribe to our newsletter for updates on our
            mission and exclusive sustainable fashion insights.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;