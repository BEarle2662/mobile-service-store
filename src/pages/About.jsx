import { motion } from 'framer-motion';

function About() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in mobile device repair and accessories.
            With over a decade of experience, we provide professional repair
            services and quality products.
          </p>
        </motion.div>
      </div>

      {/* Our Story */}
      <div className="container-custom mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, MobileRepair started as a small repair shop with
              a simple mission: to provide honest, professional repair services
              at fair prices. Over the years, we've grown into a full-service
              mobile device care center, serving thousands of satisfied customers.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be one of the most trusted names in mobile
              device repair, known for our expertise, quick service, and
              commitment to customer satisfaction.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&q=80&w=800"
              alt="Repair shop"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container-custom py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: '🛠️',
    title: 'Expert Technicians',
    description: 'Our certified technicians have years of experience in mobile device repair.'
  },
  {
    icon: '⚡',
    title: 'Quick Service',
    description: 'Most repairs are completed within 24 hours, getting you back to your life.'
  },
  {
    icon: '💯',
    title: 'Quality Guaranteed',
    description: 'We use only genuine parts and provide warranty on all our repairs.'
  }
];

const team = [
  {
    name: 'John Smith',
    role: 'Founder & Lead Technician',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Repair Specialist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Mike Chen',
    role: 'Technical Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Emily Brown',
    role: 'Customer Service Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400'
  }
];

export default About;