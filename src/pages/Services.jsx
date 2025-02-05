import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="py-12">
      {/* Header Section */}
      <div className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Our Repair Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional repair services for all major smartphone brands. We use only genuine parts
            and provide warranty on all our repairs.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repairServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-lg font-semibold text-primary mb-4">
                    Starting from ${service.startingPrice}
                  </p>
                  <Link
                    to="/book-repair"
                    className="btn-primary inline-block w-full text-center"
                  >
                    Book Repair
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brands Section */}
      <div className="container-custom mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Brands We Service</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
            >
              <span className="text-xl font-semibold text-gray-700">{brand}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const repairServices = [
  {
    id: 1,
    icon: '📱',
    title: 'Screen Repair',
    description: 'Professional screen replacement service with genuine parts.',
    features: [
      'Original display replacement',
      'Touch functionality testing',
      'Free diagnostic',
      '90-day warranty'
    ],
    startingPrice: 79.99
  },
  {
    id: 2,
    icon: '🔋',
    title: 'Battery Replacement',
    description: 'Restore your device\'s battery life to like-new condition.',
    features: [
      'Genuine battery replacement',
      'Battery health testing',
      'Charging test',
      '90-day warranty'
    ],
    startingPrice: 49.99
  },
  {
    id: 3,
    icon: '🔌',
    title: 'Charging Port Repair',
    description: 'Fix charging issues and restore fast charging capability.',
    features: [
      'Port cleaning service',
      'Component replacement',
      'Charging speed test',
      '90-day warranty'
    ],
    startingPrice: 59.99
  },
  {
    id: 4,
    icon: '📸',
    title: 'Camera Repair',
    description: 'Restore your phone\'s camera to perfect condition.',
    features: [
      'Camera module replacement',
      'Focus calibration',
      'Quality testing',
      '90-day warranty'
    ],
    startingPrice: 89.99
  },
  {
    id: 5,
    icon: '💧',
    title: 'Water Damage Repair',
    description: 'Professional water damage treatment and repair.',
    features: [
      'Ultrasonic cleaning',
      'Component inspection',
      'Corrosion treatment',
      'Full testing'
    ],
    startingPrice: 99.99
  },
  {
    id: 6,
    icon: '🔊',
    title: 'Speaker Repair',
    description: 'Fix audio issues and restore clear sound.',
    features: [
      'Speaker replacement',
      'Audio testing',
      'Microphone check',
      '90-day warranty'
    ],
    startingPrice: 69.99
  }
];

const brands = [
  'Apple',
  'Samsung',
  'Google',
  'OnePlus',
  'Xiaomi',
  'Huawei'
];

export default Services;