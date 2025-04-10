import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, TreePine, Factory } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1605902711622-b15c12f98cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
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
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl">
              From tragedy to transformation: How one man&apos;s loss became a
              mission for sustainable fashion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                Meet Our Founder
              </h2>
              <p className="text-lg text-gray-600">
                Naveen&apos;s journey began in the shadows of a toxic textile
                factory, where he witnessed firsthand the devastating impact of fast
                fashion on both people and the environment. The loss of his younger
                sister, Meera, to water pollution became the catalyst for change.
              </p>
              <p className="text-lg text-gray-600">
                Today, Neweave stands as a testament to his promise: to create
                clothing that celebrates life, honors our planet, and proves that
                fashion can be both beautiful and ethical.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt="Naveen"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Naveen Kumar</h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1621786030484-4c855eed6974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sustainable Workshop"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg">
                <p className="text-3xl font-bold">2018</p>
                <p>Year Founded</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600">
              We believe in a world where fashion uplifts communities, preserves
              traditions, and protects our environment. Every product we create is
              a step towards this vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-12 w-12 text-green-600" />,
                title: 'Ethical Production',
                description:
                  'Fair wages and safe working conditions for all our artisans.',
              },
              {
                icon: <Users className="h-12 w-12 text-green-600" />,
                title: 'Community First',
                description:
                  'Supporting local communities through sustainable employment.',
              },
              {
                icon: <TreePine className="h-12 w-12 text-green-600" />,
                title: 'Environmental Care',
                description:
                  'Zero toxic chemicals and minimal environmental impact.',
              },
              {
                icon: <Factory className="h-12 w-12 text-green-600" />,
                title: 'Sustainable Practices',
                description:
                  'Solar-powered facilities and water conservation methods.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Head of Design',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Rajesh Kumar',
                role: 'Production Manager',
                image:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              },
              {
                name: 'Anjali Patel',
                role: 'Sustainability Director',
                image:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;