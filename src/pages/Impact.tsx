import React from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
  TreePine,
  Users,
  Sun,
  Recycle,
  Heart,
  Factory,
  Leaf,
} from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="container mx-auto px-4 relative text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">Our Impact</h1>
            <p className="text-xl">
              Every t-shirt we make creates positive change for people and planet.
              Here&apos;s how we&apos;re making a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets className="h-12 w-12 text-blue-500" />,
                number: '1M+',
                label: 'Liters of Water Saved',
                color: 'blue',
              },
              {
                icon: <TreePine className="h-12 w-12 text-green-500" />,
                number: '50,000+',
                label: 'Trees Planted',
                color: 'green',
              },
              {
                icon: <Users className="h-12 w-12 text-purple-500" />,
                number: '100+',
                label: 'Artisan Families Supported',
                color: 'purple',
              },
              {
                icon: <Sun className="h-12 w-12 text-yellow-500" />,
                number: '100%',
                label: 'Solar Powered Production',
                color: 'yellow',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-white shadow-sm"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className={`text-${stat.color}-600`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Environmental Impact
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to sustainability goes beyond just using organic
              materials. We&apos;re actively working to restore and protect our
              planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Recycle className="h-12 w-12 text-green-600" />,
                title: 'Zero Waste Production',
                description:
                  'All fabric scraps are recycled into new products or composted.',
              },
              {
                icon: <Droplets className="h-12 w-12 text-blue-600" />,
                title: 'Water Conservation',
                description:
                  'Our natural dyeing process uses 70% less water than conventional methods.',
              },
              {
                icon: <Sun className="h-12 w-12 text-yellow-600" />,
                title: 'Renewable Energy',
                description:
                  '100% of our production is powered by solar energy.',
              },
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="mb-4">{impact.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-600">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Community Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800">
                Empowering Local Communities
              </h3>
              <p className="text-lg text-gray-600">
                We work directly with artisan communities, providing fair wages,
                safe working conditions, and opportunities for skill development.
                Our partnership model ensures that traditional craftsmanship is
                preserved while creating sustainable livelihoods.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Heart className="text-green-600" />
                  <span>Fair wages and benefits for all workers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Factory className="text-green-600" />
                  <span>Safe and healthy working conditions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Leaf className="text-green-600" />
                  <span>Training in sustainable practices</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Artisan Community"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Impact Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maya',
                role: 'Master Artisan',
                story:
                  'Working with Neweave has allowed me to support my family while preserving our traditional dyeing techniques.',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Ravi',
                role: 'Community Leader',
                story:
                  'The solar-powered workshop has transformed our village, creating jobs and protecting our environment.',
                image:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Lakshmi',
                role: 'Organic Farmer',
                story:
                  'Growing organic cotton for Neweave has helped us move away from harmful pesticides and create healthier soil.',
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {story.name}
                </h3>
                <p className="text-green-600 text-center mb-4">{story.role}</p>
                <p className="text-gray-600 text-center italic">
                  &quot;{story.story}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;