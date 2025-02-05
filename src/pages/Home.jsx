import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Mobile Repair Services
            </h1>
            <p className="text-xl mb-8">
              Professional repairs and premium accessories for all your mobile
              devices
            </p>
            <div className="space-x-4">
              <Link
                to="/book-repair"
                className=" bg-secondary btn-secondary  rounded-lg text-white "
              >
                Book a Repair
              </Link>
              <Link
                to="/shop"
                className="btn-secondary border border-white rounded-lg text-white "
              >
                Shop Accessories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-primary text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: "🔧",
    title: "Screen Repair",
    description: "Expert screen replacement for all major smartphone brands.",
  },
  {
    icon: "🔋",
    title: "Battery Replacement",
    description:
      "Restore your device's battery life with genuine replacements.",
  },
  {
    icon: "🛠️",
    title: "General Repairs",
    description: "From water damage to software issues, we fix it all.",
  },
];

const features = [
  {
    icon: "⚡",
    title: "Fast Service",
    description: "Most repairs completed within 24 hours",
  },
  {
    icon: "💯",
    title: "Quality Parts",
    description: "Only genuine replacement parts used",
  },
  {
    icon: "🛡️",
    title: "Warranty",
    description: "90-day warranty on all repairs",
  },
  {
    icon: "💪",
    title: "Experience",
    description: "10+ years of repair expertise",
  },
];

export default Home;
